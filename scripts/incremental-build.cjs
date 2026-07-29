/**
 * Incremental static export for low-memory environments.
 * Renders pages one at a time via Next.js programmatic API.
 */
const { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } = require('fs');
const { join, dirname } = require('path');
const { createServer } = require('http');

const SITE_DIR = join(__dirname, '..');
const OUT_DIR = join(SITE_DIR, 'out');

// Collect all page routes from app directory
function collectRoutes() {
  const fs = require('fs');
  const path = require('path');
  const appDir = join(SITE_DIR, 'app');
  const routes = [];

  function walk(dir, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name.startsWith('_') || entry.name === 'node_modules') continue;
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        // Skip dynamic route directories like [slug]
        const clean = entry.name.replace(/^\[/, '').replace(/\]$/, '').replace(/^\.\.\./, '');
        // Check if this directory has a page.tsx
        if (fs.existsSync(join(fullPath, 'page.tsx')) || fs.existsSync(join(fullPath, 'page.tsx'))) {
          routes.push(prefix + clean);
        }
        walk(fullPath, prefix + clean + '/');
      }
    }
    return routes;
  }

  walk(appDir);
  return routes;
}

async function main() {
  console.log('=== Incremental Static Export ===');
  
  const routes = collectRoutes();
  console.log(`Found ${routes.length} routes to export`);

  // Clean and create output directory
  if (existsSync(OUT_DIR)) {
    rmSync(OUT_DIR, { recursive: true });
  }
  mkdirSync(OUT_DIR, { recursive: true });

  // Start Next.js server
  const next = require('next');
  const app = next({ dev: false, dir: SITE_DIR });
  const handle = app.getRequestHandler();

  await app.prepare();
  console.log('Next.js server prepared');

  const server = createServer((req, res) => {
    handle(req, res);
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  console.log(`Server listening on http://127.0.0.1:${port}`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const url = `http://127.0.0.1:${port}/${route}`;

    try {
      const resp = await fetch(url);
      const html = await resp.text();

      if (resp.status === 200) {
        const outPath = join(OUT_DIR, route, 'index.html');
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html);
        console.log(`[${i + 1}/${routes.length}] ✅ ${route}`);
        success++;
      } else if (resp.status === 404) {
        // 404 pages should render as 404.html
        const fs = require('fs');
        const path = require('path');
        const outPath404 = join(OUT_DIR, route, 'index.html');
        mkdirSync(dirname(outPath404), { recursive: true });
        writeFileSync(outPath404, html);
        console.log(`[${i + 1}/${routes.length}] ⚠️  ${route} (404, saved)`);
        success++;
      } else {
        console.log(`[${i + 1}/${routes.length}] ❌ ${route} (HTTP ${resp.status})`);
        failed++;
      }
    } catch (err) {
      console.log(`[${i + 1}/${routes.length}] ❌ ${route} (${err.message})`);
      failed++;
    }

    // Force GC hint
    if (i % 10 === 0 && global.gc) {
      global.gc();
    }
  }

  // Copy static assets from public/
  const fs = require('fs');
  const path = require('path');
  const publicDir = join(SITE_DIR, 'public');
  if (existsSync(publicDir)) {
    function copyDir(src, dest) {
      mkdirSync(dest, { recursive: true });
      const entries = fs.readdirSync(src, { withFileTypes: true });
      for (const entry of entries) {
        const srcPath = join(src, entry.name);
        const destPath = join(dest, entry.name);
        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }
    copyDir(publicDir, OUT_DIR);
    console.log('Copied public/ assets to out/');
  }

  // Copy .next/static to out/_next/static
  const nextStaticSrc = join(SITE_DIR, '.next', 'static');
  const nextStaticDest = join(OUT_DIR, '_next', 'static');
  if (existsSync(nextStaticSrc)) {
    function copyDir(src, dest) {
      mkdirSync(dest, { recursive: true });
      const entries = fs.readdirSync(src, { withFileTypes: true });
      for (const entry of entries) {
        const srcPath = join(src, entry.name);
        const destPath = join(dest, entry.name);
        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
          console.log(`  Copy: ${path.relative(SITE_DIR, destPath)}`);
        }
      }
    }
    copyDir(nextStaticSrc, nextStaticDest);
    console.log('Copied .next/static to out/_next/static');
  }

  // Generate sitemap.xml and robots.txt at root
  // sitemap.xml is already in public/ and will be copied
  // Also generate 404.html
  try {
    const resp404 = await fetch(`http://127.0.0.1:${port}/nonexistent-page-404`);
    if (resp404.status === 404) {
      const html404 = await resp404.text();
      writeFileSync(join(OUT_DIR, '404.html'), html404);
      console.log('Generated 404.html');
    }
  } catch (e) {
    console.log('No custom 404 page, skipping');
  }

  server.close();
  await app.close();

  console.log(`\n=== Done: ${success} pages exported, ${failed} failed ===`);
  console.log(`Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
