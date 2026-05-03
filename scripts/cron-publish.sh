#!/bin/bash
# Cron Blog Publisher - reads schedule.txt and publishes if today matches

SCRIPT_DIR="/home/admin/.openclaw/workspace/eyeview-site/scripts"
SCHEDULE_FILE="$SCRIPT_DIR/schedule.txt"
LOG_FILE="$SCRIPT_DIR/publish.log"
TODAY=$(date '+%Y-%m-%d')

if [ ! -f "$SCHEDULE_FILE" ]; then
  echo "$(date) No schedule file found" >> "$LOG_FILE"
  exit 0
fi

# Find today's entry in schedule
SLUG=$(grep "^$TODAY" "$SCHEDULE_FILE" | awk '{print $2}')

if [ -z "$SLUG" ]; then
  echo "$(date) No blog scheduled for today ($TODAY)" >> "$LOG_FILE"
  exit 0
fi

echo "$(date) Found scheduled blog: $SLUG for $TODAY" >> "$LOG_FILE"

# Publish
"$SCRIPT_DIR/../scripts/publish-blog.sh" "$SLUG" >> "$LOG_FILE" 2>&1

# Comment out the published line in schedule
sed -i "s/^$TODAY/#DONE $TODAY/" "$SCHEDULE_FILE"

echo "$(date) Completed publishing $SLUG" >> "$LOG_FILE"
