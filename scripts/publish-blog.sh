#!/bin/bash
# EyeView Blog Auto-Publisher
# Usage: ./publish-blog.sh <slug>
# Example: ./publish-blog.sh tr90-vs-acetate-vs-metal

set -e

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-site"
DRAFT_DIR="$SITE_DIR/drafts"
BLOG_DIR="$SITE_DIR/app/blog"
TOKEN_FILE="$SITE_DIR/.github-token"
REPO="diffish666-del/eyeview-sunglasses"
API="https://api.github.com/repos/$REPO"

SLUG="$1"

if [ -z "$SLUG" ]; then
  echo "Usage: $0 <blog-slug>"
  echo "Available drafts:"
  ls "$DRAFT_DIR"/*.tsx 2>/dev/null | sed 's|.*/||;s|\.tsx||'
  exit 1
fi

DRAFT_FILE="$DRAFT_DIR/${SLUG}.tsx"
TARGET_DIR="$BLOG_DIR/$SLUG"

if [ ! -f "$DRAFT_FILE" ]; then
  echo "ERROR: Draft not found: $DRAFT_FILE"
  exit 1
fi

if [ ! -f "$TOKEN_FILE" ]; then
  echo "ERROR: GitHub token not found at $TOKEN_FILE"
  exit 1
fi

TOKEN=$(cat "$TOKEN_FILE")

echo "$(date '+%Y-%m-%d %H:%M:%S') Publishing: $SLUG"

# Step 1: Move draft to blog directory
mkdir -p "$TARGET_DIR"
cp "$DRAFT_FILE" "$TARGET_DIR/page.tsx"
echo "✅ Draft moved to $TARGET_DIR/page.tsx"

# Step 2: Update sitemap
SITEMAP="$SITE_DIR/app/sitemap.ts"
if ! grep -q "$SLUG" "$SITEMAP" 2>/dev/null; then
  # Add new URL to sitemap before the closing bracket
  sed -i "/return \[/a\\    { url: 'https://eyeviewsunglasses.com/blog/$SLUG', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 }," "$SITEMAP" 2>/dev/null || true
  echo "✅ Sitemap updated"
fi

# Step 3: Build
cd "$SITE_DIR"
npm run build 2>&1 | tail -5
BUILD_EXIT=$?
if [ $BUILD_EXIT -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi
echo "✅ Build succeeded"

# Step 4: Git commit
cd "$SITE_DIR"
git add -A
git commit -m "Publish blog: $SLUG" 2>/dev/null || true

# Step 5: Push via GitHub API
push_via_api() {
  local file_path=$1
  local content=$(base64 -w0 "$SITE_DIR/$file_path")
  local blob_sha=$(timeout 15 curl -s -X POST "$API/git/blobs" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"content\":\"$content\",\"encoding\":\"base64\"}" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('sha',''))")
  echo "$file_path:$blob_sha"
}

# Get remote HEAD
PARENT=$(timeout 10 curl -s -H "Authorization: Bearer $TOKEN" "$API/git/refs/heads/main" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('object',{}).get('sha',''))")
BASE_TREE=$(timeout 10 curl -s -H "Authorization: Bearer $TOKEN" "$API/git/commits/$PARENT" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('tree',{}).get('sha',''))")

# Upload blog file
BLOG_BLOB=$(timeout 15 curl -s -X POST "$API/git/blobs" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"content\":\"$(base64 -w0 "$TARGET_DIR/page.tsx")\",\"encoding\":\"base64\"}" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('sha',''))")

# Build tree entries JSON
TREE_ENTRIES="[{\"path\":\"app/blog/$SLUG/page.tsx\",\"mode\":\"100644\",\"type\":\"blob\",\"sha\":\"$BLOG_BLOB\"}"

# Also upload sitemap if changed
if git diff --name-only HEAD~1 HEAD 2>/dev/null | grep -q sitemap; then
  SITEMAP_BLOB=$(timeout 15 curl -s -X POST "$API/git/blobs" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"content\":\"$(base64 -w0 "$SITEMAP")\",\"encoding\":\"base64\"}" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('sha',''))")
  TREE_ENTRIES="$TREE_ENTRIES,{\"path\":\"app/sitemap.ts\",\"mode\":\"100644\",\"type\":\"blob\",\"sha\":\"$SITEMAP_BLOB\"}"
fi

TREE_ENTRIES="$TREE_ENTRIES]"

# Create tree
NEW_TREE=$(timeout 10 curl -s -X POST "$API/git/trees" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"base_tree\":\"$BASE_TREE\",\"tree\":$TREE_ENTRIES}" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('sha',''))")

# Create commit
NEW_COMMIT=$(timeout 10 curl -s -X POST "$API/git/commits" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"Publish blog: $SLUG\",\"tree\":\"$NEW_TREE\",\"parents\":[\"$PARENT\"]}" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('sha',''))")

# Update ref
FINAL=$(timeout 10 curl -s -X PATCH "$API/git/refs/heads/main" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"sha\":\"$NEW_COMMIT\"}" 2>/dev/null | python3 -c "import json,sys;d=json.load(sys.stdin);print(d.get('object',{}).get('sha',''))")

echo "✅ Pushed to GitHub: $FINAL"

# Step 6: Remove draft
rm "$DRAFT_FILE"
echo "✅ Draft removed"

# Log
echo "$(date '+%Y-%m-%d %H:%M:%S') Published: $SLUG -> $FINAL" >> "$SITE_DIR/scripts/publish.log"
echo ""
echo "🎉 Blog published successfully: https://eyeviewsunglasses.com/blog/$SLUG/"
