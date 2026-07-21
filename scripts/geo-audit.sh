#!/bin/bash
# GEO (Generative Engine Optimization) Automation Script
# Runs weekly to audit and report on GEO optimization status
# Designed to work alongside existing SEO checks
#
# GEO focuses on optimizing content for AI-powered search:
# - ChatGPT, Google AI Overviews, Perplexity, Bing Copilot
# - Key signals: structured data, entity clarity, citation-readiness, Q&A format

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
LOG_FILE="$SITE_DIR/scripts/geo-audit.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "==============================================" >> "$LOG_FILE"
echo "[$DATE] GEO Optimization Audit" >> "$LOG_FILE"
echo "==============================================" >> "$LOG_FILE"

SCORE=0
MAX_SCORE=0

# ─── 1. Schema Coverage ───
echo "" >> "$LOG_FILE"
echo "--- Schema Markup Coverage ---" >> "$LOG_FILE"

# Check WebSite schema
WEBSITE_SCHEMA=$(grep -c '"@type".*"WebSite"' "$SITE_DIR/app/layout.tsx" 2>/dev/null)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$WEBSITE_SCHEMA" -gt 0 ]; then
  echo "  ✅ WebSite schema: Present" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ WebSite schema: Missing" >> "$LOG_FILE"
fi

# Check Organization schema
ORG_SCHEMA=$(grep -c "Organization" "$SITE_DIR/app/layout.tsx" 2>/dev/null)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$ORG_SCHEMA" -gt 0 ]; then
  echo "  ✅ Organization schema: Present ($ORG_SCHEMA instances)" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ Organization schema: Missing" >> "$LOG_FILE"
fi

# Check LocalBusiness schema
LB_SCHEMA=$(grep -c "LocalBusiness" "$SITE_DIR/app/layout.tsx" 2>/dev/null)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$LB_SCHEMA" -gt 0 ]; then
  echo "  ✅ LocalBusiness schema: Present" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ LocalBusiness schema: Missing" >> "$LOG_FILE"
fi

# Check SearchAction (critical for AI search)
SEARCH_ACTION=$(grep -c "SearchAction" "$SITE_DIR/app/layout.tsx" 2>/dev/null)
MAX_SCORE=$((MAX_SCORE + 10))
if [ "$SEARCH_ACTION" -gt 0 ]; then
  echo "  ✅ SearchAction schema: Present (key for AI search integration)" >> "$LOG_FILE"
  SCORE=$((SCORE + 10))
else
  echo "  ❌ SearchAction schema: Missing" >> "$LOG_FILE"
fi

# ─── 2. Blog GEO Elements ───
echo "" >> "$LOG_FILE"
echo "--- Blog GEO Optimization ---" >> "$LOG_FILE"

BLOG_COUNT=0
BLOG_WITH_FAQ=0
BLOG_WITH_TAKEAWAYS=0
BLOG_WITH_ARTICLE=0
BLOG_WITH_TOC=0

for blog_dir in "$SITE_DIR/app/blog"/*/; do
  [ -d "$blog_dir" ] || continue
  BLOG_COUNT=$((BLOG_COUNT + 1))
  
  page_file="$blog_dir/page.tsx"
  [ -f "$page_file" ] || continue
  
  # Check Article schema
  if grep -q '"@type".*"Article"' "$page_file" 2>/dev/null; then
    BLOG_WITH_ARTICLE=$((BLOG_WITH_ARTICLE + 1))
  fi
  
  # Check FAQ schema
  if grep -q '"@type".*"FAQPage"' "$page_file" 2>/dev/null; then
    BLOG_WITH_FAQ=$((BLOG_WITH_FAQ + 1))
  fi
  
  # Check GEO: KeyTakeaways component
  if grep -q 'KeyTakeaways' "$page_file" 2>/dev/null; then
    BLOG_WITH_TAKEAWAYS=$((BLOG_WITH_TAKEAWAYS + 1))
  fi
  
  # Check Table of Contents (important for AI extractability)
  if grep -q 'Table of Contents' "$page_file" 2>/dev/null; then
    BLOG_WITH_TOC=$((BLOG_WITH_TOC + 1))
  fi
done

echo "  Total blog posts: $BLOG_COUNT" >> "$LOG_FILE"
MAX_SCORE=$((MAX_SCORE + 10))
if [ "$BLOG_WITH_ARTICLE" -ge "$BLOG_COUNT" ]; then
  echo "  ✅ Article schema: $BLOG_WITH_ARTICLE/$BLOG_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + 10))
else
  echo "  ⚠️ Article schema: $BLOG_WITH_ARTICLE/$BLOG_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + (BLOG_WITH_ARTICLE * 10 / BLOG_COUNT)))
fi

MAX_SCORE=$((MAX_SCORE + 10))
if [ "$BLOG_WITH_FAQ" -ge "$BLOG_COUNT" ]; then
  echo "  ✅ FAQPage schema: $BLOG_WITH_FAQ/$BLOG_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + 10))
else
  echo "  ⚠️ FAQPage schema: $BLOG_WITH_FAQ/$BLOG_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + (BLOG_WITH_FAQ * 10 / BLOG_COUNT)))
fi

MAX_SCORE=$((MAX_SCORE + 15))
echo "  GEO KeyTakeaways: $BLOG_WITH_TAKEAWAYS/$BLOG_COUNT" >> "$LOG_FILE"
SCORE=$((SCORE + (BLOG_WITH_TAKEAWAYS * 15 / BLOG_COUNT)))

MAX_SCORE=$((MAX_SCORE + 10))
echo "  Table of Contents: $BLOG_WITH_TOC/$BLOG_COUNT" >> "$LOG_FILE"
SCORE=$((SCORE + (BLOG_WITH_TOC * 10 / BLOG_COUNT)))

# ─── 3. Product Page Schema ───
echo "" >> "$LOG_FILE"
echo "--- Product Page Schema ---" >> "$LOG_FILE"

PRODUCT_COUNT=0
PRODUCT_WITH_COMPONENT=0
PRODUCT_WITH_CATEGORY=0
PRODUCT_WITH_MATERIAL=0

SCHEMA_FILE="$SITE_DIR/components/SchemaMarkup.tsx"

# Check SchemaMarkup component for rich features (count once for all pages)
SCHEMA_HAS_MANUFACTURER=0
SCHEMA_HAS_SHIPPING=0
SCHEMA_HAS_ELIGIBLE_QTY=0
if grep -q '"manufacturer"' "$SCHEMA_FILE" 2>/dev/null; then
  SCHEMA_HAS_MANUFACTURER=1
fi
if grep -q 'shippingDetails' "$SCHEMA_FILE" 2>/dev/null; then
  SCHEMA_HAS_SHIPPING=1
fi
if grep -q 'eligibleQuantity' "$SCHEMA_FILE" 2>/dev/null; then
  SCHEMA_HAS_ELIGIBLE_QTY=1
fi

for product_dir in "$SITE_DIR/app/products"/*/; do
  [ -d "$product_dir" ] || continue
  PRODUCT_COUNT=$((PRODUCT_COUNT + 1))
  
  page_file="$product_dir/page.tsx"
  [ -f "$page_file" ] || continue
  
  # Detect ProductSchema component usage (component-based schema)
  if grep -q 'ProductSchema' "$page_file" 2>/dev/null; then
    PRODUCT_WITH_COMPONENT=$((PRODUCT_WITH_COMPONENT + 1))
  fi
  
  # Check for category prop
  if grep -q "category:" "$page_file" 2>/dev/null; then
    PRODUCT_WITH_CATEGORY=$((PRODUCT_WITH_CATEGORY + 1))
  fi
  
  # Check for material prop
  if grep -q "material:" "$page_file" 2>/dev/null; then
    PRODUCT_WITH_MATERIAL=$((PRODUCT_WITH_MATERIAL + 1))
  fi
done

echo "  Total product pages: $PRODUCT_COUNT" >> "$LOG_FILE"

# Score: ProductSchema component on all pages (10 pts)
MAX_SCORE=$((MAX_SCORE + 10))
if [ "$PRODUCT_WITH_COMPONENT" -ge "$PRODUCT_COUNT" ]; then
  echo "  ✅ Product schema (component): $PRODUCT_WITH_COMPONENT/$PRODUCT_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + 10))
else
  echo "  ⚠️ Product schema (component): $PRODUCT_WITH_COMPONENT/$PRODUCT_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + (PRODUCT_WITH_COMPONENT * 10 / PRODUCT_COUNT)))
fi

# Score: category on product pages (5 pts)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$PRODUCT_WITH_CATEGORY" -ge "$PRODUCT_COUNT" ]; then
  echo "  ✅ Category attribute: $PRODUCT_WITH_CATEGORY/$PRODUCT_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ⚠️ Category attribute: $PRODUCT_WITH_CATEGORY/$PRODUCT_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + (PRODUCT_WITH_CATEGORY * 5 / PRODUCT_COUNT)))
fi

# Score: material on product pages (5 pts)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$PRODUCT_WITH_MATERIAL" -ge "$PRODUCT_COUNT" ]; then
  echo "  ✅ Material attribute: $PRODUCT_WITH_MATERIAL/$PRODUCT_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ⚠️ Material attribute: $PRODUCT_WITH_MATERIAL/$PRODUCT_COUNT" >> "$LOG_FILE"
  SCORE=$((SCORE + (PRODUCT_WITH_MATERIAL * 5 / PRODUCT_COUNT)))
fi

# Score: Manufacturer in schema component (5 pts)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$SCHEMA_HAS_MANUFACTURER" -eq 1 ]; then
  echo "  ✅ Manufacturer: Present in SchemaMarkup component" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ Manufacturer: Missing in SchemaMarkup component" >> "$LOG_FILE"
fi

# Score: shippingDetails in schema component (5 pts)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$SCHEMA_HAS_SHIPPING" -eq 1 ]; then
  echo "  ✅ shippingDetails: Present in SchemaMarkup component" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ shippingDetails: Missing in SchemaMarkup component" >> "$LOG_FILE"
fi

# Score: eligibleQuantity in schema component (5 pts)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$SCHEMA_HAS_ELIGIBLE_QTY" -eq 1 ]; then
  echo "  ✅ eligibleQuantity: Present in SchemaMarkup component" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ eligibleQuantity: Missing in SchemaMarkup component" >> "$LOG_FILE"
fi

# ─── 4. Multilingual GEO ───
echo "" >> "$LOG_FILE"
echo "--- Multilingual GEO Coverage ---" >> "$LOG_FILE"

LANG_COUNT=0
LANG_WITH_BUSINESS=0
LANG_WITH_WEBSITE=0

for lang in es fr de pt it; do
  layout="$SITE_DIR/app/$lang/layout.tsx"
  [ -f "$layout" ] || continue
  LANG_COUNT=$((LANG_COUNT + 1))
  
  if grep -q "LocalBusiness" "$layout" 2>/dev/null; then
    LANG_WITH_BUSINESS=$((LANG_WITH_BUSINESS + 1))
  fi
  
  if grep -q "WebSite" "$layout" 2>/dev/null; then
    LANG_WITH_WEBSITE=$((LANG_WITH_WEBSITE + 1))
  fi
done

MAX_SCORE=$((MAX_SCORE + 10))
echo "  LocalBusiness schema: $LANG_WITH_BUSINESS/$LANG_COUNT languages" >> "$LOG_FILE"
SCORE=$((SCORE + (LANG_WITH_BUSINESS * 10 / LANG_COUNT)))

MAX_SCORE=$((MAX_SCORE + 5))
echo "  WebSite schema: $LANG_WITH_WEBSITE/$LANG_COUNT languages" >> "$LOG_FILE"
SCORE=$((SCORE + (LANG_WITH_WEBSITE * 5 / LANG_COUNT)))

# ─── 5. Geo: hreflang tags ───
echo "" >> "$LOG_FILE"
echo "--- Hreflang & International SEO ---" >> "$LOG_FILE"

HREFLANG_COUNT=$(grep -c "hreflang" "$SITE_DIR/app/layout.tsx" 2>/dev/null)
MAX_SCORE=$((MAX_SCORE + 5))
if [ "$HREFLANG_COUNT" -gt 0 ]; then
  echo "  ✅ Hreflang tags: $HREFLANG_COUNT entries" >> "$LOG_FILE"
  SCORE=$((SCORE + 5))
else
  echo "  ❌ Hreflang tags: Missing" >> "$LOG_FILE"
fi

# ─── 6. Content freshness (dateModified) ───
echo "" >> "$LOG_FILE"
echo "--- Content Freshness ---" >> "$LOG_FILE"

FRESH_BLOGS=0
for blog_dir in "$SITE_DIR/app/blog"/*/; do
  page_file="$blog_dir/page.tsx"
  [ -f "$page_file" ] || continue
  if grep -q "dateModified" "$page_file" 2>/dev/null; then
    FRESH_BLOGS=$((FRESH_BLOGS + 1))
  fi
done

MAX_SCORE=$((MAX_SCORE + 5))
echo "  dateModified present: $FRESH_BLOGS/$BLOG_COUNT blog posts" >> "$LOG_FILE"
SCORE=$((SCORE + (FRESH_BLOGS * 5 / BLOG_COUNT)))

# ─── Summary ───
echo "" >> "$LOG_FILE"
echo "==============================================" >> "$LOG_FILE"
GEO_SCORE=$((SCORE * 100 / MAX_SCORE))
echo "GEO Optimization Score: $GEO_SCORE/100" >> "$LOG_FILE"
echo "Raw: $SCORE/$MAX_SCORE" >> "$LOG_FILE"
echo "==============================================" >> "$LOG_FILE"

# ─── Recommendations ───
echo "" >> "$LOG_FILE"
echo "--- Recommendations ---" >> "$LOG_FILE"

if [ "$BLOG_WITH_TAKEAWAYS" -lt "$BLOG_COUNT" ]; then
  MISSING=$((BLOG_COUNT - BLOG_WITH_TAKEAWAYS))
  echo "  🔧 Add KeyTakeaways component to $MISSING blog posts for better AI extraction" >> "$LOG_FILE"
fi

if [ "$LANG_WITH_BUSINESS" -lt "$LANG_COUNT" ]; then
  MISSING=$((LANG_COUNT - LANG_WITH_BUSINESS))
  echo "  🔧 Add LocalBusiness Schema to $MISSING language layouts" >> "$LOG_FILE"
fi

if [ "$LANG_WITH_WEBSITE" -lt "$LANG_COUNT" ]; then
  MISSING=$((LANG_COUNT - LANG_WITH_WEBSITE))
  echo "  🔧 Add WebSite+SearchAction Schema to $MISSING language layouts" >> "$LOG_FILE"
fi

if [ "$BLOG_WITH_FAQ" -lt "$BLOG_COUNT" ]; then
  MISSING=$((BLOG_COUNT - BLOG_WITH_FAQ))
  echo "  🔧 Add FAQPage schema to $MISSING blog posts" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"
echo "[$DATE] GEO audit completed" >> "$LOG_FILE"

# Output to console as well
echo "GEO Optimization Score: $GEO_SCORE/100"
echo "Blog GEO (KeyTakeaways): $BLOG_WITH_TAKEAWAYS/$BLOG_COUNT"
echo "Blog FAQ Schema: $BLOG_WITH_FAQ/$BLOG_COUNT"
echo "Product Schema: $PRODUCT_WITH_COMPONENT/$PRODUCT_COUNT"
echo "Product Category: $PRODUCT_WITH_CATEGORY/$PRODUCT_COUNT"
echo "Product Material: $PRODUCT_WITH_MATERIAL/$PRODUCT_COUNT"
echo "Multilingual LocalBusiness: $LANG_WITH_BUSINESS/$LANG_COUNT"
