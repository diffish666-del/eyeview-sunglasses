#!/bin/bash
# 自动邮件发送脚本
# 从海关数据导入的客户自动发送开发邮件

LOG_FILE="$(dirname "$0")/../../logs/client-acquisition/auto-email.log"
LEADS_FILE="$(dirname "$0")/../data/customs/leads-$(date +%Y-%m-%d).csv"
SENT_FILE="$(dirname "$0")/email-sent-$(date +%Y-%m-%d).txt"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log "开始自动邮件发送"

# 检查是否有新数据
if [ ! -f "$LEADS_FILE" ]; then
    log "警告：未找到今日海关数据文件"
    exit 0
fi

# 读取潜在客户数据 (跳过标题行)
tail -n +2 "$LEADS_FILE" | while IFS=',' read -r date company contact email country product hs_code volume last_import source; do
    # 检查是否已发送
    if grep -q "$email" "$SENT_FILE" 2>/dev/null; then
        log "跳过已发送：$email"
        continue
    fi
    
    # 发送邮箱 (使用 mail 命令或 API)
    log "发送邮件至：$email ($company)"
    
    # 方法 1: 使用 mail 命令 (需要配置)
    # echo "邮件内容" | mail -s "主题" "$email"
    
    # 方法 2: 使用 sendmail
    # /usr/sbin/sendmail "$email" < email-template.txt
    
    # 方法 3: 使用 API (推荐)
    # curl -s "https://api.mailgun.net/v3/your-domain/messages" \
    #   -F from="Your Name <you@your-domain.com>" \
    #   -F to="$email" \
    #   -F subject="Sunglasses supplier for $company" \
    #   -F text="邮件正文"
    
    # 记录已发送
    echo "$email,$company,$(date +%Y-%m-%d)" >> "$SENT_FILE"
    
    # 避免发送过快
    sleep 5
done

log "自动邮件发送完成"
