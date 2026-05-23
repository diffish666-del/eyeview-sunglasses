#!/bin/bash
# Weekly GEO Optimization Plan Generator
# Runs every Monday at 8:00 AM Beijing time
# Generates a weekly plan based on current GEO status

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-site"
PLAN_FILE="$SITE_DIR/scripts/geo-weekly-plan.md"
LOG_FILE="$SITE_DIR/scripts/geo-optimization.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')
WEEK_NUM=$(date '+%V')

echo "[$DATE] Generating weekly GEO optimization plan for Week $WEEK_NUM..." >> "$LOG_FILE"

# Generate the plan
cat > "$PLAN_FILE" << EOF
# GEO Optimization Weekly Plan - Week $WEEK_NUM ($DATE)

## Current Status Summary
- **Product Schema Coverage**: $(grep -r "ProductSchema\|application/ld+json.*Product" $SITE_DIR/app/products/*/page.tsx 2>/dev/null | wc -l)/13
- **Blog Schema Coverage**: $(grep -r "Article\|FAQPage" $SITE_DIR/app/blog/*/page.tsx 2>/dev/null | wc -l)/19
- **LocalBusiness Schema**: ✅ Added
- **Sitemap**: ✅ 207 URLs
- **SSL**: ✅ Expires Jul 1, 2026

## This Week's Tasks

### Priority 0: Multilingual Schema (NEW!)
- [ ] Add LocalBusiness Schema to all language layouts (es, fr, de, pt, it)
- [ ] Add Product Schema to all multilingual product pages
- [ ] Add FAQPage Schema to all multilingual blog posts
- [ ] Verify hreflang tags on all multilingual pages
- [ ] Add Organization Schema to multilingual pages
- [ ] Create multilingual sitemap with proper language annotations

### Priority 1: Schema Enhancement
- [ ] Add Organization Schema to all product pages
- [ ] Add Review Schema to top 5 product pages
- [ ] Add VideoObject Schema to product pages with videos
- [ ] Add Service Schema to /trust page

### Priority 2: Content Optimization
- [ ] Add internal linking between related product pages
- [ ] Add "Related Products" section to all blog posts
- [ ] Create 2 new blog posts targeting long-tail keywords
- [ ] Update meta descriptions for low-performing pages

### Priority 3: Technical SEO
- [ ] Check and fix broken links
- [ ] Verify sitemap.xml is up to date
- [ ] Check robots.txt directives
- [ ] Verify hreflang tags on multilingual pages

### Priority 4: Performance
- [ ] Run PageSpeed Insights on top 10 pages
- [ ] Optimize images (compress, lazy load)
- [ ] Check Core Web Vitals scores
- [ ] Verify CDN caching is working

### Priority 5: Local SEO
- [ ] Verify Google Business Profile listing
- [ ] Add NAP (Name, Address, Phone) consistency check
- [ ] Submit to 2 new local directories
- [ ] Monitor and respond to Google reviews

## Execution Schedule
- **Monday**: Schema Enhancement tasks
- **Tuesday**: Content Optimization tasks
- **Wednesday**: Technical SEO tasks
- **Thursday**: Performance tasks
- **Friday**: Local SEO tasks
- **Saturday**: Review and testing
- **Sunday**: Weekly report generation

## Success Metrics
- Schema coverage: 100% for product and blog pages
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- PageSpeed score: > 90 for all pages
- Broken links: 0
- Sitemap: All URLs accessible

---
*Generated automatically by GEO Weekly Plan Generator*
EOF

echo "[$DATE] Weekly plan generated: $PLAN_FILE" >> "$LOG_FILE"
echo "[$DATE] Plan includes tasks for Week $WEEK_NUM" >> "$LOG_FILE"
echo "[$DATE] Weekly GEO plan generation completed" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"
