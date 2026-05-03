#!/bin/bash
# 潜在客户评分脚本
# 根据进口量、国家等自动评分

LOG_FILE="$(dirname "$0")/../../logs/client-acquisition/lead-scoring.log"
INPUT_FILE="$(dirname "$0")/../data/customs/leads-$(date +%Y-%m-%d).csv"
OUTPUT_FILE="$(dirname "$0")/../data/leads/scored-$(date +%Y-%m-%d).csv"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log "开始客户评分"

# 添加评分列
echo "Date,Company,Contact,Email,Country,Product,HS_Code,Import_Volume,Last_Import,Source,Score,Priority" > "$OUTPUT_FILE"

tail -n +2 "$INPUT_FILE" | while IFS=',' read -r date company contact email country product hs_code volume last_import source; do
    score=0
    priority="Low"
    
    # 国家评分
    case "$country" in
        "USA"|"United States") score=$((score + 30)); priority="High" ;;
        "UK"|"United Kingdom") score=$((score + 25)); priority="High" ;;
        "Canada") score=$((score + 20)); priority="Medium" ;;
        "Germany") score=$((score + 20)); priority="Medium" ;;
        "France") score=$((score + 15)); priority="Medium" ;;
        *) score=$((score + 10)) ;;
    esac
    
    # 进口量评分 (假设 volume 是数字)
    if [ -n "$volume" ] && [ "$volume" -gt 10000 ] 2>/dev/null; then
        score=$((score + 40))
        priority="High"
    elif [ "$volume" -gt 5000 ] 2>/dev/null; then
        score=$((score + 30))
        [ "$priority" != "High" ] && priority="Medium"
    elif [ "$volume" -gt 1000 ] 2>/dev/null; then
        score=$((score + 20))
    fi
    
    # 最近进口评分
    # 可以根据 last_import 日期计算
    
    # 产品匹配评分
    if echo "$product" | grep -qi "sunglasses\|eyewear\|optical"; then
        score=$((score + 30))
    fi
    
    echo "$date,$company,$contact,$email,$country,$product,$hs_code,$volume,$last_import,$source,$score,$priority" >> "$OUTPUT_FILE"
done

log "客户评分完成，输出：$OUTPUT_FILE"
