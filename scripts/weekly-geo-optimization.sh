#!/bin/bash
# Weekly GEO Optimization Check
# Runs every Sunday at 10:00 AM Beijing time

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
LOG_FILE="$SITE_DIR/scripts/geo-optimization.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting weekly GEO optimization check..." >> "$LOG_FILE"

# 1. Check Product Pages Schema
echo "[$DATE] === Checking Product Pages Schema ===" >> "$LOG_FILE"
PRODUCTS_WITH_SCHEMA=0
PRODUCTS_WITHOUT_SCHEMA=0

for dir in $SITE_DIR/app/products/*/; do
  if [ -f "${dir}page.tsx" ]; then
    name=$(basename $dir)
    if grep -q "application/ld+json" "${dir}page.tsx" 2>/dev/null; then
      echo "[$DATE] ✅ $name - has Schema" >> "$LOG_FILE"
      PRODUCTS_WITH_SCHEMA=$((PRODUCTS_WITH_SCHEMA + 1))
    else
      echo "[$DATE] ❌ $name - NO Schema" >> "$LOG_FILE"
      PRODUCTS_WITHOUT_SCHEMA=$((PRODUCTS_WITHOUT_SCHEMA + 1))
    fi
  fi
done

echo "[$DATE] Products with Schema: $PRODUCTS_WITH_SCHEMA" >> "$LOG_FILE"
echo "[$DATE] Products without Schema: $PRODUCTS_WITHOUT_SCHEMA" >> "$LOG_FILE"

# 2. Check Blog Posts Schema
echo "[$DATE] === Checking Blog Posts Schema ===" >> "$LOG_FILE"
BLOG_WITH_SCHEMA=0
BLOG_WITHOUT_SCHEMA=0

for dir in $SITE_DIR/app/blog/*/; do
  if [ -f "${dir}page.tsx" ]; then
    name=$(basename $dir)
    if grep -q "application/ld+json" "${dir}page.tsx" 2>/dev/null; then
      BLOG_WITH_SCHEMA=$((BLOG_WITH_SCHEMA + 1))
    else
      echo "[$DATE] ❌ $name - NO Schema" >> "$LOG_FILE"
      BLOG_WITHOUT_SCHEMA=$((BLOG_WITHOUT_SCHEMA + 1))
    fi
  fi
done

echo "[$DATE] Blog posts with Schema: $BLOG_WITH_SCHEMA" >> "$LOG_FILE"
echo "[$DATE] Blog posts without Schema: $BLOG_WITHOUT_SCHEMA" >> "$LOG_FILE"

# 3. Check Local Business Schema
echo "[$DATE] === Checking Local Business Schema ===" >> "$LOG_FILE"
if grep -q "LocalBusiness" $SITE_DIR/app/layout.tsx 2>/dev/null; then
  echo "[$DATE] ✅ LocalBusiness Schema found" >> "$LOG_FILE"
else
  echo "[$DATE] ❌ LocalBusiness Schema NOT found" >> "$LOG_FILE"
fi

# 4. Check Sitemap
echo "[$DATE] === Checking Sitemap ===" >> "$LOG_FILE"
SITEMAP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "https://eyeviewsunglasses.com/sitemap.xml" 2>/dev/null)
if [ "$SITEMAP_STATUS" = "200" ]; then
  echo "[$DATE] ✅ Sitemap accessible" >> "$LOG_FILE"
  URL_COUNT=$(curl -s "https://eyeviewsunglasses.com/sitemap.xml" | grep -c "<loc>")
  echo "[$DATE] Sitemap contains $URL_COUNT URLs" >> "$LOG_FILE"
else
  echo "[$DATE] ❌ Sitemap not accessible (HTTP $SITEMAP_STATUS)" >> "$LOG_FILE"
fi

# 5. Check robots.txt
echo "[$DATE] === Checking robots.txt ===" >> "$LOG_FILE"
ROBOTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "https://eyeviewsunglasses.com/robots.txt" 2>/dev/null)
if [ "$ROBOTS_STATUS" = "200" ]; then
  echo "[$DATE] ✅ robots.txt accessible" >> "$LOG_FILE"
else
  echo "[$DATE] ❌ robots.txt not accessible (HTTP $ROBOTS_STATUS)" >> "$LOG_FILE"
fi

# 6. Check SSL Certificate
echo "[$DATE] === Checking SSL Certificate ===" >> "$LOG_FILE"
SSL_EXPIRY=$(echo | openssl s_client -connect eyeviewsunglasses.com:443 -servername eyeviewsunglasses.com 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2)
if [ -n "$SSL_EXPIRY" ]; then
  echo "[$DATE] ✅ SSL certificate expires: $SSL_EXPIRY" >> "$LOG_FILE"
else
  echo "[$DATE] ❌ Could not check SSL certificate" >> "$LOG_FILE"
fi

# 7. Check Page Speed (Core Web Vitals)
echo "[$DATE] === Checking Core Web Vitals ===" >> "$LOG_FILE"
PAGESPEED_URL="https://eyeviewsunglasses.com"
PAGESPEED_RESULT=$(curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$PAGESPEED_URL&category=PERFORMANCE&category=SEO" 2>/dev/null)
if [ -n "$PAGESPEED_RESULT" ]; then
  PERFORMANCE_SCORE=$(echo "$PAGESPEED_RESULT" | python3 -c "import json,sys;print(json.load(sys.stdin)['lighthouseResult']['categories']['PERFORMANCE']['score'] * 100)" 2>/dev/null)
  SEO_SCORE=$(echo "$PAGESPEED_RESULT" | python3 -c "import json,sys;print(json.load(sys.stdin)['lighthouseResult']['categories']['SEO']['score'] * 100)" 2>/dev/null)
  echo "[$DATE] Performance Score: $PERFORMANCE_SCORE" >> "$LOG_FILE"
  echo "[$DATE] SEO Score: $SEO_SCORE" >> "$LOG_FILE"
else
  echo "[$DATE] ⚠️ Could not fetch PageSpeed data" >> "$LOG_FILE"
fi

# 8. Check for broken links (sample)
echo "[$DATE] === Checking for Broken Links ===" >> "$LOG_FILE"
BROKEN_LINKS=0
for url in "https://eyeviewsunglasses.com/" "https://eyeviewsunglasses.com/products/" "https://eyeviewsunglasses.com/contact/" "https://eyeviewsunglasses.com/trust/" "https://eyeviewsunglasses.com/about/"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "$url" 2>/dev/null)
  if [ "$status" != "200" ]; then
    echo "[$DATE] ❌ Broken link: $url (HTTP $status)" >> "$LOG_FILE"
    BROKEN_LINKS=$((BROKEN_LINKS + 1))
  fi
done
echo "[$DATE] Broken links found: $BROKEN_LINKS" >> "$LOG_FILE"

# Summary
echo "[$DATE] === Weekly GEO Optimization Summary ===" >> "$LOG_FILE"
echo "[$DATE] Products with Schema: $PRODUCTS_WITH_SCHEMA / $((PRODUCTS_WITH_SCHEMA + PRODUCTS_WITHOUT_SCHEMA))" >> "$LOG_FILE"
echo "[$DATE] Blog posts with Schema: $BLOG_WITH_SCHEMA / $((BLOG_WITH_SCHEMA + BLOG_WITHOUT_SCHEMA))" >> "$LOG_FILE"
echo "[$DATE] Broken links: $BROKEN_LINKS" >> "$LOG_FILE"
echo "[$DATE] Weekly GEO optimization check completed" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"
