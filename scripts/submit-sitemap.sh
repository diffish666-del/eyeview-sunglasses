#!/bin/bash
# Submit sitemap to search engines
# Runs weekly on Monday at 2:00 AM Beijing time

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-site"
LOG_FILE="$SITE_DIR/scripts/sitemap-submit.log"
SITEMAP_URL="https://eyeviewsunglasses.com/sitemap.xml"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting sitemap submission..." >> "$LOG_FILE"

# Check if sitemap is accessible
SITEMAP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 30 "$SITEMAP_URL" 2>/dev/null)
if [ "$SITEMAP_STATUS" -eq 200 ]; then
    echo "[$DATE] ✅ Sitemap accessible at $SITEMAP_URL" >> "$LOG_FILE"
    URL_COUNT=$(curl -s "$SITEMAP_URL" | grep -c "<loc>")
    echo "[$DATE] Sitemap contains $URL_COUNT URLs" >> "$LOG_FILE"
else
    echo "[$DATE] ❌ Sitemap not accessible (HTTP $SITEMAP_STATUS)" >> "$LOG_FILE"
fi

# Try Google ping (may fail due to GFW)
GOOGLE_PING="https://www.google.com/ping?sitemap=$SITEMAP_URL"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 30 "$GOOGLE_PING" 2>/dev/null)

if [ "$RESPONSE" -eq 200 ]; then
    echo "[$DATE] ✅ Google sitemap ping successful" >> "$LOG_FILE"
else
    echo "[$DATE] ⚠️ Google ping failed (HTTP $RESPONSE) - this is normal if GFW blocks access" >> "$LOG_FILE"
    echo "[$DATE] 💡 Manual submission: https://search.google.com/search-console/sitemaps" >> "$LOG_FILE"
fi

# Try Bing ping
BING_PING="https://www.bing.com/webmaster/ping.aspx?sitemap=$SITEMAP_URL"
BING_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 30 "$BING_PING" 2>/dev/null)

if [ "$BING_RESPONSE" -eq 200 ]; then
    echo "[$DATE] ✅ Bing sitemap ping successful" >> "$LOG_FILE"
else
    echo "[$DATE] ⚠️ Bing ping failed (HTTP $BING_RESPONSE)" >> "$LOG_FILE"
fi

echo "[$DATE] Sitemap submission completed" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"
