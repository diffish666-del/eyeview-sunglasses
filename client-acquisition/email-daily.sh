#!/bin/bash
# 每日邮件外联提醒脚本

DATE=$(date +%Y-%m-%d)
LOG_FILE="$(dirname "$0")/../../logs/client-acquisition/email-$(date +%Y-%m).log"

echo "[$DATE] Email 每日外联检查" >> "$LOG_FILE"

# 检查今日是否已完成
if [ -f "$(dirname "$0")/email-completed-$DATE.txt" ]; then
    echo "[$DATE] ✅ 今日邮件发送已完成" >> "$LOG_FILE"
else
    echo "[$DATE] ⏰ 提醒：发送 20-30 封开发邮件" >> "$LOG_FILE"
fi
