#!/bin/bash
# GEO Weekly Plan Executor
# Runs every Monday 9:00 AM Shanghai time
# Executes GEO optimization tasks for both EyeView and Aurora sites
# Week detection based on plan start date: July 13, 2026

set -e

PLAN_START=$(date -d "2026-07-13" +%s)
TODAY=$(date +%s)
WEEK_NUM=$(( (TODAY - PLAN_START) / 604800 + 1 ))

DATE=$(date '+%Y-%m-%d %H:%M:%S')
EV_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
AR_DIR="/home/admin/.openclaw/workspace/aurora-sunglasses-website"
REPORT="/home/admin/.openclaw/workspace/geo-weekly-report.md"

echo "==============================================" | tee -a "$REPORT"
echo "[$DATE] GEO Week $WEEK_NUM Execution" | tee -a "$REPORT"
echo "==============================================" | tee -a "$REPORT"

# ─── Phase 1: Run GEO Audits ───
echo "" | tee -a "$REPORT"
echo "--- Running GEO Audits ---" | tee -a "$REPORT"

if [ -f "$EV_DIR/scripts/geo-audit.sh" ]; then
  echo "Running EyeView GEO audit..." | tee -a "$REPORT"
  bash "$EV_DIR/scripts/geo-audit.sh" 2>&1 | tee -a "$REPORT"
else
  echo "⚠️ EyeView geo-audit.sh not found" | tee -a "$REPORT"
fi

if [ -f "$AR_DIR/scripts/geo-audit.sh" ]; then
  echo "Running Aurora GEO audit..." | tee -a "$REPORT"
  bash "$AR_DIR/scripts/geo-audit.sh" 2>&1 | tee -a "$REPORT"
else
  echo "⚠️ Aurora geo-audit.sh not found" | tee -a "$REPORT"
fi

# ─── Phase 2: Week-Specific Tasks ───
echo "" | tee -a "$REPORT"
echo "--- Week $WEEK_NUM Tasks ---" | tee -a "$REPORT"

case $WEEK_NUM in
  1)
    echo "=== Week 1: Foundation ===" | tee -a "$REPORT"
    
    # EyeView: Product pages
    echo "[EyeView] Counting product pages needing schema..." | tee -a "$REPORT"
    PRODUCT_DIR="$EV_DIR/app/products"
    NEED_SCHEMA=0
    for pd in "$PRODUCT_DIR"/*/; do
      [ -d "$pd" ] || continue
      page_file="$pd/page.tsx"
      [ -f "$page_file" ] || continue
      if ! grep -q '"@type".*"Product"' "$page_file" 2>/dev/null; then
        NEED_SCHEMA=$((NEED_SCHEMA + 1))
      fi
    done
    echo "[EyeView] Product pages needing schema: $NEED_SCHEMA" | tee -a "$REPORT"
    
    # Aurora: Remaining blogs
    echo "[Aurora] Checking remaining blog posts..." | tee -a "$REPORT"
    for blog in "$AR_DIR/src/pages/blog"/*.astro; do
      [ -f "$blog" ] || continue
      blog_name=$(basename "$blog" .astro)
      if [ "$blog_name" = "index" ]; then continue; fi
      if ! grep -q "GEOKeyTakeaways" "$blog" 2>/dev/null; then
        echo "  [Aurora] Need GEO: $blog_name" | tee -a "$REPORT"
      fi
    done
    ;;
    
  2)
    echo "=== Week 2: Blog GEO Deep Optimization ===" | tee -a "$REPORT"
    
    # EyeView: Core blog posts
    echo "[EyeView] Core blogs needing KeyTakeaways:" | tee -a "$REPORT"
    PRIORITY_BLOGS=(
      "start-sunglasses-brand" "how-to-choose-sunglasses-manufacturer" "oem-vs-odm"
      "import-sunglasses-guide" "sunglasses-pricing-strategy" "wholesale-sunglasses-pricing-guide"
      "sunglasses-quality-control" "sustainable-sunglasses-manufacturing"
    )
    for blog in "${PRIORITY_BLOGS[@]}"; do
      page="$EV_DIR/app/blog/$blog/page.tsx"
      if [ -f "$page" ] && ! grep -q "KeyTakeaways" "$page" 2>/dev/null; then
        echo "  ✅ Ready: $blog" | tee -a "$REPORT"
      fi
    done
    
    # Aurora: Product pages
    echo "[Aurora] Product pages needing schema:" | tee -a "$REPORT"
    for page in "$AR_DIR/src/pages"/{sunglasses,reading-glasses,floating-glasses,recycled-glasses,novelty-glasses,cases}.astro; do
      [ -f "$page" ] || continue
      page_name=$(basename "$page" .astro)
      if ! grep -q "product={" "$page" 2>/dev/null; then
        echo "  ✅ Ready: $page_name" | tee -a "$REPORT"
      fi
    done
    ;;
    
  3)
    echo "=== Week 3: Multilingual GEO + Advanced ===" | tee -a "$REPORT"
    
    # EyeView: Language layouts
    echo "[EyeView] Language layouts needing WebSite+SearchAction:" | tee -a "$REPORT"
    for lang in es fr de pt it; do
      layout="$EV_DIR/app/$lang/layout.tsx"
      if [ -f "$layout" ] && ! grep -q "WebSite\|SearchAction" "$layout" 2>/dev/null; then
        echo "  ✅ Ready: $lang" | tee -a "$REPORT"
      fi
    done
    
    # EyeView: Round 2 blogs
    echo "[EyeView] Round 2 blogs needing KeyTakeaways:" | tee -a "$REPORT"
    R2_BLOGS=(
      "how-sunglasses-are-made" "sunblock-lens-guide" "uv400-vs-polarized"
      "sunglasses-moq-guide" "private-label-sunglasses-guide" "custom-sunglasses-packaging"
      "sunglasses-startup-cost" "frame-material-comparison"
    )
    for blog in "${R2_BLOGS[@]}"; do
      page="$EV_DIR/app/blog/$blog/page.tsx"
      if [ -f "$page" ] && ! grep -q "KeyTakeaways" "$page" 2>/dev/null; then
        echo "  ✅ Ready: $blog" | tee -a "$REPORT"
      fi
    done
    
    # Aurora: Content freshness
    echo "[Aurora] Blog freshness check:" | tee -a "$REPORT"
    for page in "$AR_DIR/src/pages/blog"/*.astro; do
      [ -f "$page" ] || continue
      page_name=$(basename "$page" .astro)
      if [ "$page_name" = "index" ]; then continue; fi
      if grep -q "dateModified" "$page" 2>/dev/null; then
        echo "  ✅ Has dateModified: $page_name" | tee -a "$REPORT"
      else
        echo "  ⚠️ Missing dateModified: $page_name" | tee -a "$REPORT"
      fi
    done
    ;;
    
  4)
    echo "=== Week 4: Final Push + Audit ===" | tee -a "$REPORT"
    
    # EyeView: Remaining blogs
    echo "[EyeView] Remaining blogs needing KeyTakeaways:" | tee -a "$REPORT"
    count=0
    for blog_dir in "$EV_DIR/app/blog"/*/; do
      page="$blog_dir/page.tsx"
      [ -f "$page" ] || continue
      if ! grep -q "KeyTakeaways" "$page" 2>/dev/null; then
        echo "  📝 $(basename "$blog_dir")" | tee -a "$REPORT"
        count=$((count + 1))
      fi
    done
    echo "[EyeView] Total remaining: $count" | tee -a "$REPORT"
    
    # Performance check
    echo "" | tee -a "$REPORT"
    echo "--- Performance Quick Check ---" | tee -a "$REPORT"
    for url in "https://eyeviewsunglasses.com/" "https://aurora-sunglasses.com/"; do
      status=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "$url" 2>/dev/null)
      size=$(curl -s -o /dev/null -w "%{size_download}" --connect-timeout 10 "$url" 2>/dev/null)
      echo "  $url → HTTP $status (${size} bytes)" | tee -a "$REPORT"
    done
    ;;
    
  *)
    echo "=== Week $WEEK_NUM: Ongoing Maintenance ===" | tee -a "$REPORT"
    echo "Running GEO audits for both sites..." | tee -a "$REPORT"
    echo "Check for any new blog posts needing GEO components." | tee -a "$REPORT"
    echo "Check for any schema regressions." | tee -a "$REPORT"
    ;;
esac

# ─── Phase 3: Git Status Check ───
echo "" | tee -a "$REPORT"
echo "--- Git Status ---" | tee -a "$REPORT"
for dir in "$EV_DIR" "$AR_DIR"; do
  cd "$dir"
  changes=$(git status --porcelain 2>/dev/null | wc -l)
  echo "  $(basename "$dir"): $changes uncommitted changes" | tee -a "$REPORT"
done

echo "" | tee -a "$REPORT"
echo "[$DATE] Week $WEEK_NUM execution completed" | tee -a "$REPORT"
echo "==============================" | tee -a "$REPORT"
