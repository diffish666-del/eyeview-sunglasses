#!/bin/bash
# Track keyword rankings
# Runs weekly on Friday at 4:00 PM Beijing time

# Proxy settings for accessing Google from China
export ALL_PROXY="socks5h://127.0.0.1:7890"
export all_proxy="socks5h://127.0.0.1:7890"

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-sunglasses"
LOG_FILE="$SITE_DIR/scripts/rankings.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

# Keywords to track
KEYWORDS=(
    "sunglasses manufacturer"
    "wholesale sunglasses"
    "custom sunglasses manufacturer"
    "OEM sunglasses"
    "ODM sunglasses"
    "prescription sunglasses manufacturer"
    "promotional sunglasses"
    "eco-friendly sunglasses"
    "acetate sunglasses manufacturer"
    "TR90 sunglasses manufacturer"
)

echo "[$DATE] Starting keyword ranking check..." >> "$LOG_FILE"

# Create a simple tracking file
TRACKING_FILE="$SITE_DIR/scripts/rankings-history.csv"
if [ ! -f "$TRACKING_FILE" ]; then
    echo "Date,Keyword,Position,URL" > "$TRACKING_FILE"
fi

for KEYWORD in "${KEYWORDS[@]}"; do
    # Encode keyword for URL
    ENCODED_KEYWORD=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$KEYWORD'))")
    
    # Use Google search (may be blocked by GFW)
    SEARCH_URL="https://www.google.com/search?q=$ENCODED_KEYWORD&num=100&hl=en"
    
    # Try to get results
    RESULT=$(curl -s -x socks5h://127.0.0.1:7890 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" --connect-timeout 15 --max-time 30 "$SEARCH_URL" 2>/dev/null)
    
    if [ -n "$RESULT" ]; then
        # Check if eyeviewsunglasses.com is in results
        if echo "$RESULT" | grep -q "eyeviewsunglasses.com"; then
            POSITION=$(echo "$RESULT" | python3 -c "
import sys
html = sys.stdin.read()
import re
# Find all links
links = re.findall(r'<a[^>]*href=\"(https?://[^\"]+)\"', html)
for i, link in enumerate(links):
    if 'eyeviewsunglasses.com' in link:
        print(i + 1)
        break
else:
    print('Not found')
" 2>/dev/null)
            echo "[$DATE] '$KEYWORD': Position $POSITION" >> "$LOG_FILE"
            echo "$DATE,$KEYWORD,$POSITION,https://eyeviewsunglasses.com" >> "$TRACKING_FILE"
        else
            echo "[$DATE] '$KEYWORD': Not in top 100 results" >> "$LOG_FILE"
            echo "$DATE,$KEYWORD,>100,https://eyeviewsunglasses.com" >> "$TRACKING_FILE"
        fi
    else
        echo "[$DATE] ⚠️ Could not fetch results for '$KEYWORD' (may be blocked by GFW)" >> "$LOG_FILE"
    fi
done

echo "[$DATE] Keyword ranking check completed" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"
