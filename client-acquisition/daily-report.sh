#!/bin/bash
# 客户开发日报生成

REPORT_DIR="$(dirname "$0")/../reports"
LOG_DIR="$(dirname "$0")/../../logs/client-acquisition"
DATE=$(date +%Y-%m-%d)

mkdir -p "$REPORT_DIR"

REPORT_FILE="$REPORT_DIR/daily-report-$DATE.md"

# 统计数据
CUSTOMS_LEADS=$(find "$(dirname "$0")/../data/customs/" -name "leads-*.csv" -mtime -1 | wc -l)
EMAILS_SENT=$(cat "$(dirname "$0")/email-sent-"*.txt 2>/dev/null | wc -l || echo "0")
LINKEDIN_SENT=$(cat "$(dirname "$0")/linkedin-sent-"*.txt 2>/dev/null | wc -l || echo "0")

cat > "$REPORT_FILE" << EOF
# 客户开发日报 - $DATE

## 今日数据

| 指标 | 数量 |
|------|------|
| 海关数据抓取 | $CUSTOMS_LEADS 批 |
| 邮件发送 | $EMAILS_SENT 封 |
| LinkedIn 连接 | $LINKEDIN_SENT 个 |
| 询盘 | - |
| 成交客户 | - |

## 本周累计

| 指标 | 数量 | 目标 |
|------|------|------|
| 邮件发送 | - | 200/周 |
| LinkedIn | - | 100/周 |
| 询盘 | - | 10/周 |
| 客户 | - | 2/周 |

## 明日计划

- [ ] 继续海关数据抓取
- [ ] 自动邮件发送
- [ ] LinkedIn 自动外联
- [ ] 跟进未回复客户

---
*报告生成时间：$DATE*
EOF

echo "日报已生成：$REPORT_FILE"
