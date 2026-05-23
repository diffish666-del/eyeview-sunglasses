#!/bin/bash
# Multilingual GEO Schema Optimizer
# Runs every Wednesday at 10:00 AM Beijing time
# Adds Schema markup to all multilingual pages

SITE_DIR="/home/admin/.openclaw/workspace/eyeview-site"
LOG_FILE="$SITE_DIR/scripts/multilingual-geo.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$DATE] Starting multilingual GEO Schema optimization..." >> "$LOG_FILE"

# Languages to process
LANGUAGES=("es" "fr" "de" "pt" "it")

# Function to add LocalBusiness Schema to language layout
add_local_business_schema() {
  local lang=$1
  local layout_file="$SITE_DIR/app/$lang/layout.tsx"
  
  if [ ! -f "$layout_file" ]; then
    echo "[$DATE] ⚠️ Layout file not found for $lang" >> "$LOG_FILE"
    return
  fi
  
  # Check if LocalBusiness Schema already exists
  if grep -q "LocalBusiness" "$layout_file" 2>/dev/null; then
    echo "[$DATE] ✅ LocalBusiness Schema already exists for $lang" >> "$LOG_FILE"
    return
  fi
  
  echo "[$DATE] Adding LocalBusiness Schema to $lang layout..." >> "$LOG_FILE"
  
  # Use Python to properly insert JSON Schema
  python3 << PYEOF
import re

layout_file = "$layout_file"
lang = "$lang"

# Read the file
with open(layout_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Create LocalBusiness Schema JSON
business_schema = f'''{{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EyeView Sunglasses Factory",
    "description": "Leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses with 15+ years of experience.",
    "url": "https://eyeviewsunglasses.com/{lang}",
    "telephone": "+86-18850281211",
    "email": "jacky@eyeviewsunglasses.com",
    "address": {{
        "@type": "PostalAddress",
        "addressCountry": "CN"
    }},
    "geo": {{
        "@type": "GeoCoordinates",
        "latitude": "26.5988",
        "longitude": "110.3036"
    }},
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "\$\$",
    "image": "https://eyeviewsunglasses.com/logo.png"
}}'''

# Create the script tag
script_tag = f'''  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({business_schema}) }}
      />
      {{children}}
    </>
  )'''

# Replace the return statement
if 'return children' in content:
    content = content.replace('return children', script_tag)
    
    # Write back
    with open(layout_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"[$DATE] ✅ LocalBusiness Schema added to $lang layout")
else:
    print(f"[$DATE] ⚠️ Could not find 'return children' in $lang layout")
PYEOF

  echo "[$DATE] LocalBusiness Schema processing completed for $lang" >> "$LOG_FILE"
}

# Function to add Product Schema to multilingual product pages
add_product_schema() {
  local lang=$1
  local product_dir="$SITE_DIR/app/$lang/productos"
  
  if [ ! -d "$product_dir" ]; then
    echo "[$DATE] ⚠️ Product directory not found for $lang" >> "$LOG_FILE"
    return
  fi
  
  for product_path in "$product_dir"/*/; do
    local page_file="$product_path/page.tsx"
    local product_name=$(basename "$product_path")
    
    if [ ! -f "$page_file" ]; then
      continue
    fi
    
    # Check if Product Schema already exists
    if grep -q "Product" "$page_file" 2>/dev/null; then
      echo "[$DATE] ✅ Product Schema already exists for $lang/$product_name" >> "$LOG_FILE"
      continue
    fi
    
    echo "[$DATE] Adding Product Schema to $lang/$product_name..." >> "$LOG_FILE"
    
    # Use Python to properly insert JSON Schema
    python3 << PYEOF
import re

page_file = "$page_file"
lang = "$lang"
product_name = "$product_name"

# Read the file
with open(page_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Create Product Schema JSON
product_schema = f'''{{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "{product_name} Sunglasses",
    "description": "Custom {product_name} sunglasses manufacturer. OEM & ODM services available.",
    "brand": {{ "@type": "Brand", "name": "EyeView Sunglasses" }},
    "offers": {{
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "6.00",
        "highPrice": "15.00",
        "availability": "https://schema.org/InStock"
    }}
}}'''

# Create the script tag
script_tag = f'''  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({product_schema}) }}
      />
      <main className="py-12">'''

# Find the return statement and insert Schema before it
if 'return (' in content and '<main className="py-12">' in content:
    content = content.replace('return (\n    <main className="py-12">', script_tag)
    
    # Also need to close the fragment at the end
    if '</main>\n  )\n}' in content:
        content = content.replace('</main>\n  )\n}', '</main>\n    </>\n  )\n}')
    
    # Write back
    with open(page_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"[$DATE] ✅ Product Schema added to $lang/$product_name")
else:
    print(f"[$DATE] ⚠️ Could not find proper structure in $lang/$product_name")
PYEOF

  done
}

# Process each language
for lang in "${LANGUAGES[@]}"; do
  echo "[$DATE] === Processing $lang ===" >> "$LOG_FILE"
  
  # Add LocalBusiness Schema
  add_local_business_schema "$lang"
  
  # Add Product Schema
  add_product_schema "$lang"
  
  echo "[$DATE] === $lang processing completed ===" >> "$LOG_FILE"
done

# Summary
echo "[$DATE] === Multilingual GEO Schema Optimization Summary ===" >> "$LOG_FILE"
for lang in "${LANGUAGES[@]}"; do
  PRODUCT_COUNT=$(grep -r "Product" "$SITE_DIR/app/$lang/productos"/*/page.tsx 2>/dev/null | wc -l)
  BLOG_COUNT=$(grep -r "FAQPage" "$SITE_DIR/app/$lang/blog"/*/page.tsx 2>/dev/null | wc -l)
  LOCAL_BUSINESS=$(grep -c "LocalBusiness" "$SITE_DIR/app/$lang/layout.tsx" 2>/dev/null)
  
  echo "[$DATE] $lang: Products=$PRODUCT_COUNT, Blogs=$BLOG_COUNT, LocalBusiness=$LOCAL_BUSINESS" >> "$LOG_FILE"
done

echo "[$DATE] Multilingual GEO Schema optimization completed" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"
