#!/bin/bash
# GEO Audit Script for EyeView Sunglasses
# Checks structured data, SEO elements, GEO components

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
BLOG_DIR="$SITE_DIR/app/blog"
LANG_DIRS="es fr pt it de"

echo "========================================"
echo "  EyeView GEO Audit"
echo "  $(date '+%Y-%m-%d %H:%M')"
echo "========================================"
echo ""

# Blog counts
EN_BLOGS=$(find "$BLOG_DIR" -maxdepth 2 -name "page.tsx" | wc -l)
echo "📝 English Blogs: $EN_BLOGS"

# KeyTakeaways check
KT_COUNT=0
NO_KT=""
for f in $(find "$BLOG_DIR" -maxdepth 2 -name "page.tsx"); do
  if grep -q "KeyTakeaways\|takeaways" "$f" 2>/dev/null; then
    KT_COUNT=$((KT_COUNT + 1))
  else
    NO_KT="$NO_KT $(basename $(dirname $f))"
  fi
done
echo "  ✅ KeyTakeaways: $KT_COUNT/$EN_BLOGS"
[ -n "$NO_KT" ] && echo "  ❌ Missing: $NO_KT"

# FAQPage schema check
FAQ_COUNT=0
NO_FAQ=""
for f in $(find "$BLOG_DIR" -maxdepth 2 -name "page.tsx"); do
  if grep -q "FAQPage" "$f" 2>/dev/null; then
    FAQ_COUNT=$((FAQ_COUNT + 1))
  else
    NO_FAQ="$NO_FAQ $(basename $(dirname $f))"
  fi
done
echo "  ✅ FAQPage Schema: $FAQ_COUNT/$EN_BLOGS"
[ -n "$NO_FAQ" ] && echo "  ❌ Missing: $NO_FAQ"

# QuickStats check
QS_COUNT=0
for f in $(find "$BLOG_DIR" -maxdepth 2 -name "page.tsx"); do
  if grep -q "QuickStats\|quickStats" "$f" 2>/dev/null; then
    QS_COUNT=$((QS_COUNT + 1))
  fi
done
echo "  📊 QuickStats: $QS_COUNT/$EN_BLOGS"

# Author (Person schema) check
AUTHOR_COUNT=0
for f in $(find "$BLOG_DIR" -maxdepth 2 -name "page.tsx"); do
  if grep -q '"@type": "Person"' "$f" 2>/dev/null; then
    AUTHOR_COUNT=$((AUTHOR_COUNT + 1))
  fi
done
echo "  👤 Author (Person schema): $AUTHOR_COUNT/$EN_BLOGS"

# Product Schema check
PRODUCT_DIR="$SITE_DIR/app/products"
if [ -d "$PRODUCT_DIR" ]; then
  PROD_COUNT=$(grep -rl "Product" "$PRODUCT_DIR" --include="*.tsx" 2>/dev/null | wc -l)
  echo "  📦 Product Schema: $PROD_COUNT"
fi

echo ""
echo "--- Multilingual ---"
TOTAL_ML=0
for lang in $LANG_DIRS; do
  LANG_BLOG_DIR="$SITE_DIR/app/$lang/blog"
  if [ -d "$LANG_BLOG_DIR" ]; then
    LANG_COUNT=$(find "$LANG_BLOG_DIR" -maxdepth 2 -name "page.tsx" 2>/dev/null | wc -l)
    TOTAL_ML=$((TOTAL_ML + LANG_COUNT))
    echo "  $lang: $LANG_COUNT blogs"
  fi
done
echo "  Total multilingual: $TOTAL_ML"

echo ""
echo "--- Hreflang Check ---"
HREF_COUNT=$(grep -r "hreflang" "$SITE_DIR/app" --include="*.tsx" -l 2>/dev/null | wc -l)
echo "  Pages with hreflang: $HREF_COUNT"

echo ""
echo "--- Files Check ---"
ROBOTS="$SITE_DIR/public/robots.txt"
SITEMAP="$SITE_DIR/public/sitemap.xml"
HEADERS="$SITE_DIR/public/_headers"
[ -f "$ROBOTS" ] && echo "  ✅ robots.txt" || echo "  ❌ robots.txt missing"
[ -f "$SITEMAP" ] && echo "  ✅ sitemap.xml" || echo "  ❌ sitemap.xml missing"
[ -f "$HEADERS" ] && echo "  ✅ _headers" || echo "  ❌ _headers missing"

echo ""
echo "--- Blog dateModified Check ---"
NO_MOD=""
MOD_COUNT=0
for f in $(find "$BLOG_DIR" -maxdepth 2 -name "page.tsx"); do
  if grep -q "dateModified" "$f" 2>/dev/null; then
    MOD_COUNT=$((MOD_COUNT + 1))
  else
    NO_MOD="$NO_MOD $(basename $(dirname $f))"
  fi
done
echo "  ✅ dateModified: $MOD_COUNT/$EN_BLOGS"
[ -n "$NO_MOD" ] && echo "  ❌ Missing: $NO_MOD"

echo ""
echo "========================================"
echo "  Audit Complete"
echo "========================================"
