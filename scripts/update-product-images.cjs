// Update product pages: replace Unsplash images + emojis with local SVGs + add ImageObject schema
const fs = require('fs');
const path = require('path');

const productDir = path.join(__dirname, '..', 'app', 'products');
const slugs = fs.readdirSync(productDir).filter(d => fs.statSync(path.join(productDir, d)).isDirectory());

const productNames = {
  aviator: 'Aviator Sunglasses',
  wayfarer: 'Wayfarer Sunglasses',
  'cat-eye': 'Cat Eye Sunglasses',
  sport: 'Sport Sunglasses',
  round: 'Round Sunglasses',
  kids: 'Kids Sunglasses',
  polarized: 'Polarized Sunglasses',
  'blue-light': 'Blue Light Glasses',
  'eco-friendly': 'Eco-Friendly Sunglasses',
  acetate: 'Acetate Sunglasses',
  tr90: 'TR90 Sunglasses',
  prescription: 'Prescription Sunglasses',
  promotional: 'Promotional Sunglasses',
  'sunglasses-case': 'Sunglasses Cases',
};

const productDescs = {
  aviator: 'Custom OEM metal frame aviator sunglasses with UV400/polarized lenses',
  wayfarer: 'Classic acetate wayfarer sunglasses, best-selling wholesale style',
  'cat-eye': 'Trendy cat eye sunglasses designed for the women fashion market',
  sport: 'High-performance sport sunglasses with wraparound impact-resistant lenses',
  round: 'Vintage-inspired round frame sunglasses with retro charm',
  kids: 'Safe and durable children sunglasses designed for ages 3-12',
  polarized: 'Premium polarized sunglasses that eliminate glare, ideal for outdoor use',
  'blue-light': 'Digital eye protection glasses filtering harmful blue light from screens',
  'eco-friendly': 'Sustainable eyewear from recycled ocean plastic and bamboo materials',
  acetate: 'Handcrafted acetate frames in premium patterns, Italian Mazzucchelli available',
  tr90: 'Ultra-lightweight TR90 nylon frames with memory flexibility',
  prescription: 'Custom Rx sunglasses with progressive and polarized options',
  promotional: 'Custom branded promotional sunglasses, bulk pricing from $0.80/pair',
  'sunglasses-case': 'Custom sunglass cases: EVA hard, leather, microfiber pouches',
};

let updated = 0;
for (const slug of slugs) {
  const pageFile = path.join(productDir, slug, 'page.tsx');
  if (!fs.existsSync(pageFile)) continue;

  let content = fs.readFileSync(pageFile, 'utf-8');
  let modified = false;

  const name = productNames[slug] || slug;
  const desc = productDescs[slug] || 'Custom wholesale sunglasses, OEM & ODM available';

  // 1. Replace Unsplash hero image with local SVG
  const unsplashPattern = /src="https:\/\/images\.unsplash\.com\/[^"]+"/;
  if (unsplashPattern.test(content)) {
    content = content.replace(
      unsplashPattern,
      `src="/products/${slug}.svg"`
    );
    // Also add ImageObject schema before the image
    content = content.replace(
      `{/* Hero Image */}`,
      `{/* Hero Image with Schema */}`
    );
    modified = true;
  }

  // 2. Add ImageObject JSON-LD schema before the main content return
  // Look for the first ProductSchema usage and add ImageObject nearby
  const imageSchema = `
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "contentUrl": "https://eyeviewsunglasses.com/products/${slug}.svg",
              "name": "${name}",
              "description": "${desc}",
              "caption": "Wholesale ${name} - OEM Custom Manufacturer",
              "thumbnailUrl": "https://eyeviewsunglasses.com/products/${slug}.svg"
            })}} />`;

  // Add ImageObject schema after the first <script type="application/ld+json"> block
  const firstScriptEnd = content.indexOf('</script>');
  if (firstScriptEnd > 0) {
    const afterScript = content.substring(firstScriptEnd + 9);
    if (!content.includes('"@type": "ImageObject"')) {
      content = content.substring(0, firstScriptEnd + 9) + imageSchema + content.substring(firstScriptEnd + 9);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(pageFile, content);
    console.log(`✅ Updated: ${slug}`);
    updated++;
  } else {
    console.log(`⏭️  Skipped: ${slug} (already updated or no match)`);
  }
}

console.log(`\nUpdated ${updated}/${slugs.length} product pages`);
