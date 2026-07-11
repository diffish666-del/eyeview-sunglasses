const fs = require('fs');
const path = require('path');

const products = {
  aviator: { color: '#c0a050', name: 'Aviator', icon: '✈️', desc: 'Metal Aviator Sunglasses with Teardrop Lenses' },
  wayfarer: { color: '#2c2c2c', name: 'Wayfarer', icon: '🎸', desc: 'Classic Acetate Wayfarer Sunglasses' },
  'cat-eye': { color: '#e85d75', name: 'Cat Eye', icon: '😺', desc: 'Trendy Cat Eye Sunglasses for Women' },
  sport: { color: '#2563eb', name: 'Sport', icon: '🚴', desc: 'Performance Sport Sunglasses Wraparound' },
  round: { color: '#d4a853', name: 'Round', icon: '🔵', desc: 'Vintage Round Frame Sunglasses' },
  kids: { color: '#f59e0b', name: 'Kids', icon: '👶', desc: 'Durable Children Sunglasses Age 3-12' },
  polarized: { color: '#0ea5e9', name: 'Polarized', icon: '🌊', desc: 'Premium Polarized Sunglasses Glare-Free' },
  'blue-light': { color: '#6366f1', name: 'Blue Light', icon: '💻', desc: 'Blue Light Blocking Glasses Digital Protection' },
  'eco-friendly': { color: '#22c55e', name: 'Eco Friendly', icon: '🌱', desc: 'Sustainable Eco-Friendly Sunglasses' },
  acetate: { color: '#8b5cf6', name: 'Acetate', icon: '🎨', desc: 'Premium Handcrafted Acetate Sunglasses' },
  tr90: { color: '#f97316', name: 'TR90', icon: '🏋️', desc: 'Ultra-Lightweight TR90 Nylon Sunglasses' },
  prescription: { color: '#06b6d4', name: 'Prescription', icon: '👓', desc: 'Custom Prescription Sunglasses Rx Lenses' },
  promotional: { color: '#ef4444', name: 'Promotional', icon: '🎯', desc: 'Custom Branded Promotional Sunglasses Bulk' },
  'sunglasses-case': { color: '#a855f7', name: 'Cases', icon: '👜', desc: 'Custom Sunglasses Cases and Packaging' },
};

function createSVG(name, color, icon, desc) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#bg)" rx="16"/>
  <rect width="800" height="400" fill="none" stroke="${color}" stroke-width="1" stroke-opacity="0.15" rx="16"/>
  
  <!-- Icon -->
  <text x="400" y="160" text-anchor="middle" font-size="80" fill="${color}" opacity="0.3">${icon}</text>
  
  <!-- Product Name -->
  <text x="400" y="240" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="700" fill="#1a1a2e">${name} Sunglasses</text>
  
  <!-- Description -->
  <text x="400" y="285" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#6b7280">${desc}</text>
  
  <!-- Subtle accent line -->
  <line x1="340" y1="310" x2="460" y2="310" stroke="${color}" stroke-width="2" stroke-opacity="0.3"/>
  
  <!-- Brand -->
  <text x="400" y="350" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#9ca3af" letter-spacing="2">EYEVIEW SUNGLASSES — MANUFACTURER</text>
</svg>`;
}

const outDir = path.join(__dirname, '..', 'public', 'products');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const [slug, data] of Object.entries(products)) {
  const svg = createSVG(data.name, data.color, data.icon, data.desc);
  const outPath = path.join(outDir, `${slug}.svg`);
  fs.writeFileSync(outPath, svg);
  console.log(`✅ ${slug}.svg`);
}

console.log(`\nGenerated ${Object.keys(products).length} product images in public/products/`);
