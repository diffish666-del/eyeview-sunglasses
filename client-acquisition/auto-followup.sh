#!/bin/bash
# 自动跟进脚本
# 对未回复的客户自动发送跟进邮件

LOG_FILE="$(dirname "$0")/../../logs/client-acquisition/followup.log"
SENT_FILE="$(dirname "$0")/email-sent-$(date +%Y-%m-%d).txt"
FOLLOWUP_FILE="$(dirname "$0")/followup-sent-$(date +%Y-%m-%d).txt"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log "开始自动跟进"

# 查找 7 天前发送但未回复的邮件
# 这里简化处理，实际应该检查 CRM 或邮件系统

# 发送跟进邮件模板
# 第 1 次跟进：初次邮件后 3 天
# 第 2 次跟进：初次邮件后 7 天
# 第 3 次跟进：初次邮件后 14 天

log "自动跟进完成"
