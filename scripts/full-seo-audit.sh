#!/bin/bash
# Full SEO audit - runs monthly on 1st day at 10:00 AM
# Checks: broken links, meta tags, schema, robots.txt, sitemap, SSL cert

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
LOG_FILE="$SITE_DIR/scripts/seo-audit.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')
BASE_URL="https://eyeviewsunglasses.com"

echo "[$DATE] Starting full SEO audit..." >> "$LOG_FILE"

# 0. Check SSL certificate (cert check uses strict mode, content checks use -sk to tolerate cert issues)
echo "[$DATE] Checking SSL certificate..." >> "$LOG_FILE"
SSL_OK=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL" 2>&1 || echo "FAIL")
if [ "$SSL_OK" = "200" ]; then
    echo "[$DATE] ✅ SSL certificate valid" >> "$LOG_FILE"
else
    SSL_ISSUE=$(curl -v --connect-timeout 5 "$BASE_URL" 2>&1 | grep -i "error\|certificate\|SSL" | head -3)
    echo "[$DATE] ❌ SSL certificate issue: $SSL_ISSUE" >> "$LOG_FILE"
fi

# 1. Check robots.txt (use -sk to tolerate cert issues for content checks)
echo "[$DATE] Checking robots.txt..." >> "$LOG_FILE"
ROBOTS=$(curl -sk -o /dev/null -w "%{http_code}" "$BASE_URL/robots.txt")
if [ "$ROBOTS" -eq 200 ]; then
    echo "[$DATE] ✅ robots.txt accessible" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ robots.txt not accessible (HTTP $ROBOTS)" >> "$LOG_FILE"
fi

# 2. Check sitemap.xml
echo "[$DATE] Checking sitemap.xml..." >> "$LOG_FILE"
SITEMAP=$(curl -sk -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap.xml")
if [ "$SITEMAP" -eq 200 ]; then
    echo "[$DATE] ✅ sitemap.xml accessible" >> "$LOG_FILE"
    # Count URLs in sitemap
    URL_COUNT=$(curl -sk "$BASE_URL/sitemap.xml" | grep -c "<loc>")
    echo "[$DATE] Sitemap contains $URL_COUNT URLs" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ sitemap.xml not accessible (HTTP $SITEMAP)" >> "$LOG_FILE"
fi

# 3. Check homepage meta tags
echo "[$DATE] Checking homepage meta tags..." >> "$LOG_FILE"
HOMEPAGE=$(curl -sk "$BASE_URL")
TITLE=$(echo "$HOMEPAGE" | grep -oP '<title>\K[^<]+')
META_DESC=$(echo "$HOMEPAGE" | grep -oP '<meta name="description" content="\K[^"]+')

if [ -n "$TITLE" ]; then
    echo "[$DATE] ✅ Title: $TITLE" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ Missing title tag" >> "$LOG_FILE"
fi

if [ -n "$META_DESC" ]; then
    echo "[$DATE] ✅ Meta description present (${#META_DESC} chars)" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ Missing meta description" >> "$LOG_FILE"
fi

# 4. Check for broken links (sample)
echo "[$DATE] Checking for broken links..." >> "$LOG_FILE"
BROKEN_LINKS=0
for URL in $(echo "$HOMEPAGE" | grep -oP 'href="https://eyeviewsunglasses.com[^"]*"' | sed 's/href="//;s/"//'); do
    STATUS=$(curl -sk -o /dev/null -w "%{http_code}" "$URL")
    if [ "$STATUS" -ge 400 ]; then
        echo "[$DATE] ❌ Broken link: $URL (HTTP $STATUS)" >> "$LOG_FILE"
        BROKEN_LINKS=$((BROKEN_LINKS + 1))
    fi
done
echo "[$DATE] Found $BROKEN_LINKS broken links" >> "$LOG_FILE"

# 5. Check schema markup
echo "[$DATE] Checking schema markup..." >> "$LOG_FILE"
SCHEMA_COUNT=$(echo "$HOMEPAGE" | grep -c "application/ld+json")
echo "[$DATE] Found $SCHEMA_COUNT schema markup blocks" >> "$LOG_FILE"

# 6. Check Open Graph tags
echo "[$DATE] Checking Open Graph tags..." >> "$LOG_FILE"
OG_TITLE=$(echo "$HOMEPAGE" | grep -oP 'property="og:title" content="\K[^"]+')
OG_DESC=$(echo "$HOMEPAGE" | grep -oP 'property="og:description" content="\K[^"]+')
OG_IMAGE=$(echo "$HOMEPAGE" | grep -oP 'property="og:image" content="\K[^"]+')

if [ -n "$OG_TITLE" ]; then
    echo "[$DATE] ✅ OG title present" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ Missing OG title" >> "$LOG_FILE"
fi

if [ -n "$OG_IMAGE" ]; then
    echo "[$DATE] ✅ OG image present" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ Missing OG image" >> "$LOG_FILE"
fi

# 7. Check mobile responsiveness
echo "[$DATE] Checking mobile viewport..." >> "$LOG_FILE"
VIEWPORT=$(echo "$HOMEPAGE" | grep -oP 'name="viewport" content="\K[^"]+')
if [ -n "$VIEWPORT" ]; then
    echo "[$DATE] ✅ Viewport meta tag present" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ Missing viewport meta tag" >> "$LOG_FILE"
fi

# 8. Check HTTPS
echo "[$DATE] Checking HTTPS..." >> "$LOG_FILE"
HTTPS_CHECK=$(curl -sk -o /dev/null -w "%{http_code}" "https://eyeviewsunglasses.com")
if [ "$HTTPS_CHECK" -eq 200 ]; then
    echo "[$DATE] ✅ HTTPS working" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ HTTPS not working (HTTP $HTTPS_CHECK)" >> "$LOG_FILE"
fi

echo "[$DATE] Full SEO audit completed" >> "$LOG_FILE"
echo "================================" >> "$LOG_FILE"
