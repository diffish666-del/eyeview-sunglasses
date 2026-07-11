// Generate OG image PNG at build time
// Uses pngjs (pure JS, no native deps) for the PNG bitmap
// and renders text using a simple bitmap font approach

const { PNG } = require('pngjs');
const fs = require('fs');
const path = require('path');

const W = 1200;
const H = 630;

// Simple 5x7 bitmap font for key characters (uppercase, digits, common symbols)
// This is a minimal pixel font for rendering OG image text
const FONT = {
  'A': ['01110','10001','10001','11111','10001','10001','10001'],
  'B': ['11110','10001','11110','10001','10001','10001','11110'],
  'C': ['01110','10001','10000','10000','10000','10001','01110'],
  'D': ['11110','10001','10001','10001','10001','10001','11110'],
  'E': ['11111','10000','11110','10000','10000','10000','11111'],
  'F': ['11111','10000','11110','10000','10000','10000','10000'],
  'G': ['01111','10000','10000','10111','10001','10001','01110'],
  'H': ['10001','10001','11111','10001','10001','10001','10001'],
  'I': ['01110','00100','00100','00100','00100','00100','01110'],
  'K': ['10001','10010','11100','10000','11100','10010','10001'],
  'L': ['10000','10000','10000','10000','10000','10000','11111'],
  'M': ['10001','11011','10101','10101','10001','10001','10001'],
  'N': ['10001','11001','10101','10011','10001','10001','10001'],
  'O': ['01110','10001','10001','10001','10001','10001','01110'],
  'P': ['11110','10001','10001','11110','10000','10000','10000'],
  'Q': ['01110','10001','10001','10001','10101','10010','01101'],
  'R': ['11110','10001','10001','11110','10100','10010','10001'],
  'S': ['01110','10001','10000','01110','00001','10001','01110'],
  'T': ['11111','00100','00100','00100','00100','00100','00100'],
  'U': ['10001','10001','10001','10001','10001','10001','01110'],
  'V': ['10001','10001','10001','10001','01010','01010','00100'],
  'W': ['10001','10001','10001','10101','10101','11011','10001'],
  'X': ['10001','01010','00100','00100','00100','01010','10001'],
  'Y': ['10001','10001','01010','00100','00100','00100','00100'],
  'Z': ['11111','00001','00010','00100','01000','10000','11111'],
  ' ': ['00000','00000','00000','00000','00000','00000','00000'],
  '1': ['00100','01100','00100','00100','00100','00100','01110'],
  '2': ['01110','10001','00001','00110','01000','10000','11111'],
  '3': ['01110','10001','00001','00110','00001','10001','01110'],
  '4': ['00010','00110','01010','10010','11111','00010','00010'],
  '5': ['11111','10000','11110','00001','00001','10001','01110'],
  '6': ['01110','10000','10000','11110','10001','10001','01110'],
  '7': ['11111','00001','00010','00100','01000','01000','01000'],
  '8': ['01110','10001','10001','01110','10001','10001','01110'],
  '9': ['01110','10001','10001','01111','00001','00001','01110'],
  '0': ['01110','10001','10001','10001','10001','10001','01110'],
  '+': ['00000','00100','00100','11111','00100','00100','00000'],
  '.': ['00000','00000','00000','00000','00000','00000','00100'],
  ',': ['00000','00000','00000','00000','00000','00100','01000'],
  ':': ['00000','00000','00100','00000','00100','00000','00000'],
  '•': ['00000','00000','00100','00000','00000','00000','00000'],
  '>': ['00000','01000','00100','00010','00100','01000','00000'],
  '-': ['00000','00000','00000','11111','00000','00000','00000'],
};

const CHAR_W = 5;
const CHAR_H = 7;
const CHAR_GAP = 1;

function drawChar(png, char, x, y, scale, r, g, b) {
  const glyph = FONT[char.toUpperCase()] || FONT[' '];
  for (let row = 0; row < CHAR_H; row++) {
    for (let col = 0; col < CHAR_W; col++) {
      if (glyph[row][col] === '1') {
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const px = x + col * scale + sx;
            const py = y + row * scale + sy;
            if (px >= 0 && px < W && py >= 0 && py < H) {
              const idx = (py * W + px) * 4;
              png.data[idx] = r;
              png.data[idx + 1] = g;
              png.data[idx + 2] = b;
              png.data[idx + 3] = 255;
            }
          }
        }
      }
    }
  }
}

function textWidth(text, scale) {
  let w = 0;
  for (const ch of text) {
    const glyph = FONT[ch.toUpperCase()] || FONT[' '];
    w += CHAR_W * scale + CHAR_GAP * scale;
  }
  return w - (CHAR_GAP * scale); // remove trailing gap
}

function drawText(png, text, x, y, scale, r, g, b) {
  let cx = x;
  for (const ch of text) {
    drawChar(png, ch, cx, y, scale, r, g, b);
    cx += (CHAR_W + CHAR_GAP) * scale;
  }
}

function drawCenteredText(png, text, y, scale, r, g, b) {
  const tw = textWidth(text, scale);
  const x = Math.floor((W - tw) / 2);
  drawText(png, text, x, y, scale, r, g, b);
}

// Create PNG
const png = new PNG({ width: W, height: H });

// Fill with dark gradient background
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    const t = x / W;
    const baseR = Math.floor(26 + t * 15);
    const baseG = Math.floor(26 + t * 20);
    const baseB = Math.floor(26 + t * 30);
    png.data[idx] = baseR;
    png.data[idx + 1] = baseG;
    png.data[idx + 2] = baseB;
    png.data[idx + 3] = 255;
  }
}

// Draw decorative top accent line
for (let y = 0; y < 4; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    png.data[idx] = 255;
    png.data[idx + 1] = 215;
    png.data[idx + 2] = 0;
    png.data[idx + 3] = 255;
  }
}

// Draw 🕶️ emoji (simplified as pixel art)
// Two lenses connected by a bridge
const emojiX = Math.floor(W / 2);
const emojiY = 120;
function drawCircle(cx, cy, r, color) {
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      if (dx * dx + dy * dy <= r * r) {
        const px = cx + dx;
        const py = cy + dy;
        if (px >= 0 && px < W && py >= 0 && py < H) {
          const idx = (py * W + px) * 4;
          png.data[idx] = color[0];
          png.data[idx + 1] = color[1];
          png.data[idx + 2] = color[2];
          png.data[idx + 3] = 255;
        }
      }
    }
  }
}

// Left lens
drawCircle(emojiX - 45, emojiY, 22, [100, 150, 220]);
// Right lens
drawCircle(emojiX + 45, emojiY, 22, [100, 150, 220]);
// Bridge
drawCircle(emojiX - 15, emojiY - 5, 5, [255, 180, 80]);
drawCircle(emojiX + 15, emojiY - 5, 5, [255, 180, 80]);

// Main title
drawCenteredText(png, 'EYEVIEW SUNGLASSES', 220, 5, 255, 255, 255);

// Subtitle
drawCenteredText(png, 'WHOLESALE OEM CUSTOM SUNGLASSES MANUFACTURER', 300, 2, 220, 220, 220);

// Stats line
drawCenteredText(png, '15+ YEARS   500+ CLIENTS   1M+ PAIRS', 350, 2.5, 180, 180, 180);

// Bottom tagline
drawCenteredText(png, 'EYEVIEWSUNGLASSES .COM', 420, 3, 255, 200, 50);

// Bottom accent bar
for (let y = H - 4; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    png.data[idx] = 255;
    png.data[idx + 1] = 215;
    png.data[idx + 2] = 0;
    png.data[idx + 3] = 255;
  }
}

// Write PNG
const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
fs.writeFileSync(outPath, PNG.sync.write(png));
console.log(`OG image generated: ${outPath} (${W}x${H})`);
