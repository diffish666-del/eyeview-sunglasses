#!/bin/bash
# Full sync script - uploads ALL tracked files to GitHub via API
set -e

TOKEN=$(cat /home/admin/.openclaw/workspace/eyeview-site/.github-token)
REPO="diffish666-del/eyeview-sunglasses"
API="https://api.github.com/repos/$REPO"
SITE_DIR="/home/admin/.openclaw/workspace/eyeview-site"

cd "$SITE_DIR"

# Get current HEAD
PARENT=$(curl -sf -H "Authorization: token $TOKEN" "$API/git/refs/heads/main" | python3 -c "import json,sys;print(json.load(sys.stdin)['object']['sha'])")
echo "Remote HEAD: $PARENT"

# Get all tracked files (exclude node_modules, .next, out, drafts, scripts, .git)
FILES=$(git ls-files | grep -v -E '^(node_modules|\.next|out|drafts|scripts|\.git|\.github-token|memory|seo|client-acquisition)')

echo "Uploading $(echo "$FILES" | wc -l) files..."

# Build tree entries
TREE_JSON="["
FIRST=true

for f in $FILES; do
    if [ ! -f "$f" ]; then continue; fi
    
    CONTENT=$(base64 -w0 "$f")
    SHA=$(curl -sf -X POST "$API/git/blobs" \
      -H "Authorization: token $TOKEN" \
      -H "Content-Type: application/json" \
      -d "{\"content\":\"$CONTENT\",\"encoding\":\"base64\"}" | python3 -c "import json,sys;print(json.load(sys.stdin)['sha'])")
    
    if [ "$FIRST" = true ]; then
        FIRST=false
    else
        TREE_JSON+=","
    fi
    TREE_JSON+="{\"path\":\"$f\",\"mode\":\"100644\",\"type\":\"blob\",\"sha\":\"$SHA\"}"
    echo "  ✓ $f ($SHA)"
done

TREE_JSON+="]"

echo ""
echo "Creating tree..."
NEW_TREE=$(curl -sf -X POST "$API/git/trees" \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"tree\":$TREE_JSON}" | python3 -c "import json,sys;print(json.load(sys.stdin)['sha'])")
echo "Tree: $NEW_TREE"

echo "Creating commit..."
NEW_COMMIT=$(curl -sf -X POST "$API/git/commits" \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"Full site sync - all changes\",\"tree\":\"$NEW_TREE\",\"parents\":[\"$PARENT\"]}" | python3 -c "import json,sys;print(json.load(sys.stdin)['sha'])")
echo "Commit: $NEW_COMMIT"

echo "Updating ref..."
FINAL=$(curl -sf -X PATCH "$API/git/refs/heads/main" \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"sha\":\"$NEW_COMMIT\",\"force\":true}" | python3 -c "import json,sys;print(json.load(sys.stdin)['object']['sha'])")
echo "✅ Main updated to: $FINAL"
