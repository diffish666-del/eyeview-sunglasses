#!/bin/bash
# Check website performance
# Runs weekly on Wednesday at 3:00 AM Beijing time

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
LOG_FILE="$SITE_DIR/scripts/performance.log"
URL="https://eyeviewsunglasses.com"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting performance check..." >> "$LOG_FILE"

# 1. Check page load time
LOAD_TIME=$(curl -s -o /dev/null -w "%{time_total}" --connect-timeout 10 --max-time 30 "$URL" 2>/dev/null)
echo "[$DATE] Page load time: ${LOAD_TIME}s" >> "$LOG_FILE"

# 2. Check page size
PAGE_SIZE=$(curl -s --head "$URL" 2>/dev/null | grep -i "content-length" | awk '{print $2}')
if [ -n "$PAGE_SIZE" ]; then
    SIZE_MB=$(echo "$PAGE_SIZE" | python3 -c "import sys; print(f'{int(sys.stdin.read())/1024/1024:.2f} MB')" 2>/dev/null)
    echo "[$DATE] Page size: $SIZE_MB" >> "$LOG_FILE"
fi

# 3. Check HTTP status
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 30 "$URL" 2>/dev/null)
echo "[$DATE] HTTP status: $HTTP_STATUS" >> "$LOG_FILE"

# 4. Check SSL certificate
SSL_EXPIRY=$(echo | openssl s_client -servername eyeviewsunglasses.com -connect eyeviewsunglasses.com:443 2>/dev/null | openssl x509 -noout -dates 2>/dev/null | grep notAfter | cut -d= -f2)
if [ -n "$SSL_EXPIRY" ]; then
    echo "[$DATE] SSL certificate expires: $SSL_EXPIRY" >> "$LOG_FILE"
fi

# 5. Check for common performance issues
echo "[$DATE] Checking for performance issues..." >> "$LOG_FILE"

# Check if GZIP is enabled
GZIP_CHECK=$(curl -s --head -H "Accept-Encoding: gzip" "$URL" 2>/dev/null | grep -i "content-encoding")
if [ -n "$GZIP_CHECK" ]; then
    echo "[$DATE] ✅ GZIP compression enabled" >> "$LOG_FILE"
else
    echo "[$DATE] ⚠️ GZIP compression not detected" >> "$LOG_FILE"
fi

# Check cache headers
CACHE_CONTROL=$(curl -s --head "$URL" 2>/dev/null | grep -i "cache-control")
if [ -n "$CACHE_CONTROL" ]; then
    echo "[$DATE] Cache headers: $CACHE_CONTROL" >> "$LOG_FILE"
fi

# 6. Check Core Web Vitals (simplified)
echo "[$DATE] Core Web Vitals check (simplified)..." >> "$LOG_FILE"
# LCP (Largest Contentful Paint) - should be < 2.5s
LCP_TIME=$LOAD_TIME
if (( $(echo "$LCP_TIME < 2.5" | bc -l 2>/dev/null || echo 0) )); then
    echo "[$DATE] ✅ LCP: ${LCP_TIME}s (< 2.5s)" >> "$LOG_FILE"
else
    echo "[$DATE] ⚠️ LCP: ${LCP_TIME}s (should be < 2.5s)" >> "$LOG_FILE"
fi

echo "[$DATE] Performance check completed" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"
