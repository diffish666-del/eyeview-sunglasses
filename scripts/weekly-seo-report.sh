#!/bin/bash
# Generate weekly SEO report
# Runs every Sunday at 6:00 PM Beijing time

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-site"
LOG_DIR="$SITE_DIR/scripts"
REPORT_FILE="$LOG_DIR/weekly-report-$(date '+%Y-%m-%d').md"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "# Weekly SEO Report - $(date '+%Y-%m-%d')" > "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Generated: $DATE" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 1. Website Status
echo "## 🌐 Website Status" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 30 "https://eyeviewsunglasses.com" 2>/dev/null)
LOAD_TIME=$(curl -s -o /dev/null -w "%{time_total}" --connect-timeout 10 --max-time 30 "https://eyeviewsunglasses.com" 2>/dev/null)

echo "- **HTTP Status**: $HTTP_STATUS" >> "$REPORT_FILE"
echo "- **Load Time**: ${LOAD_TIME}s" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 2. Recent Changes
echo "## 📝 Recent Changes" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Last 5 commits:" >> "$REPORT_FILE"
cd "$SITE_DIR" && git log --oneline -5 >> "$REPORT_FILE" 2>/dev/null
echo "" >> "$REPORT_FILE"

# 3. Performance Logs
echo "## ⚡ Performance Summary" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
if [ -f "$LOG_DIR/performance.log" ]; then
    echo "Last 5 performance checks:" >> "$REPORT_FILE"
    grep "Page load time" "$LOG_DIR/performance.log" | tail -5 >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
fi

# 4. Sitemap Status
echo "## 🗺️ Sitemap Status" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
if [ -f "$LOG_DIR/sitemap-submit.log" ]; then
    echo "Last sitemap submission:" >> "$REPORT_FILE"
    tail -3 "$LOG_DIR/sitemap-submit.log" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
fi

# 5. Blog Schedule
echo "## 📅 Blog Schedule" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Next 3 scheduled posts:" >> "$REPORT_FILE"
grep "^2026" "$SITE_DIR/scripts/schedule.txt" | head -3 >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 6. Recommendations
echo "## 💡 Recommendations" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "- Check Google Search Console for indexing issues" >> "$REPORT_FILE"
echo "- Review keyword rankings and optimize underperforming pages" >> "$REPORT_FILE"
echo "- Monitor competitor websites for new content strategies" >> "$REPORT_FILE"
echo "- Update old blog posts with fresh content and links" >> "$REPORT_FILE"

echo "[$DATE] Weekly SEO report generated: $REPORT_FILE"
echo "Report saved to: $REPORT_FILE"
