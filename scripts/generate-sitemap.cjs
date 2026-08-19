// Generates static sitemap.xml from the same data as app/sitemap.ts
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://eyeviewsunglasses.com';
const now = new Date().toISOString();

const enBlogSlugs = [
  'b2b-vs-b2c-sunglasses', 'custom-sunglasses-packaging-ideas', 'custom-sunglasses-packaging',
  'fda-ce-certification-sunglasses', 'find-sunglasses-manufacturer', 'frame-material-comparison',
  'how-sunglasses-are-made', 'how-to-choose-sunglasses-manufacturer', 'import-sunglasses-from-china',
  'import-sunglasses-guide', 'negotiate-chinese-manufacturers', 'oem-vs-odm',
  'private-label-sunglasses-guide', 'sell-sunglasses-shopify-amazon', 'start-sunglasses-brand',
  'sunglasses-coating-guide', 'sunglasses-design-trends-2026', 'sunglasses-face-shape-guide',
  'sunglasses-import-duties', 'sunglasses-lens-guide', 'sunglasses-lens-technology-guide',
  'sunglasses-moq-guide', 'sunglasses-pricing-strategy', 'sunglasses-quality-control',
  'sunglasses-startup-cost', 'sunglasses-trade-shows-guide', 'sustainable-sunglasses-manufacturing',
  'tr90-vs-acetate-vs-metal', 'uv400-vs-polarized', 'wholesale-sunglasses-pricing-guide',
  'sunglasses-factory-audit-checklist', 'sunglasses-incoterms-shipping-guide',
];

const esBlogSlugs = [
  'certificacion-fda-ce-gafas', 'comparacion-materiales-monturas', 'control-calidad-gafas',
  'costo-iniciar-marca-gafas', 'crear-marca-gafas', 'empaque-personalizado-gafas',
  'encontrar-fabricante-gafas', 'estrategia-precios-gafas', 'fabricacion-sostenible-gafas',
  'gafas-segun-forma-rostro', 'guia-importar-gafas', 'guia-lentes-gafas', 'guia-moq-gafas',
  'guia-recubrimientos-gafas', 'oem-vs-odm', 'tendencias-diseno-gafas-2026', 'uv400-vs-polarizado',
  'lista-auditoria-fabrica-gafas', 'guia-incoterms-envio-gafas-sol',
];

const frBlogSlugs = [
  'certification-fda-ce-lunettes', 'comparaison-materiaux-montures', 'controle-qualite-lunettes',
  'cout-lancement-marque-lunettes', 'creer-marque-lunettes', 'fabrication-lunettes-durables',
  'guide-forme-visage-lunettes', 'guide-importation-lunettes', 'guide-moq-lunettes',
  'guide-revetements-lunettes', 'guide-verres-lunettes', 'oem-vs-odm',
  'packaging-lunettes-personnalise', 'strategie-prix-lunettes', 'tendances-lunettes-2026',
  'trouver-fabricant-lunettes', 'uv400-vs-polarisees',
  'checklist-audit-usine-lunettes', 'guide-incoterms-expedition-lunettes',
];

const deBlogSlugs = [
  'fda-ce-zertifizierung-sonnenbrillen', 'individuelle-sonnenbrillen-verpackung',
  'nachhaltige-sonnenbrillen-herstellung', 'oem-vs-odm', 'sonnenbrillen-beschichtungen-ratgeber',
  'sonnenbrillen-design-trends-2026', 'sonnenbrillen-gesichtsform-ratgeber',
  'sonnenbrillen-glaeser-ratgeber', 'sonnenbrillen-gruendungskosten', 'sonnenbrillen-hersteller-finden',
  'sonnenbrillen-import-ratgeber', 'sonnenbrillen-marke-gruenden', 'sonnenbrillen-mindestbestellmenge-ratgeber',
  'sonnenbrillen-preisstrategie', 'sonnenbrillen-qualitaetskontrolle', 'uv400-vs-polarisiert',
  'vergleich-rahmenmaterialien',
  'sonnenbrillen-fabrik-audit-checkliste', 'sonnenbrillen-incoterms-versand-ratgeber',
];

const ptBlogSlugs = [
  'certificacao-fda-ce-oculos-sol', 'comparacao-materiais-armacoes', 'controle-qualidade-oculos-sol',
  'criar-marca-oculos-sol', 'custo-criar-marca-oculos-sol', 'embalagem-personalizada-oculos-sol',
  'encontrar-fabricante-oculos-sol', 'estrategia-precos-oculos-sol', 'fabricacao-sustentavel-oculos-sol',
  'guia-formato-rosto-oculos', 'guia-importacao-oculos-sol', 'guia-lentes-oculos-sol',
  'guia-moq-oculos-sol', 'guia-revestimentos-oculos-sol', 'oem-vs-odm',
  'tendencias-design-oculos-2026', 'uv400-vs-polarizado',
  'checklist-auditoria-fabrica-oculos', 'guia-incoterms-envio-oculos',
];

const itBlogSlugs = [
  'certificazione-fda-ce-occhiali', 'confronto-materiali-montature', 'controllo-qualita-occhiali',
  'costi-avvio-brand-occhiali', 'creare-brand-occhiali', 'guida-importazione-occhiali',
  'guida-lenti-occhiali', 'guida-moq-occhiali', 'guida-occhiali-forma-viso',
  'guida-rivestimenti-occhiali', 'oem-vs-odm', 'packaging-personalizzato-occhiali',
  'produzione-sostenibile-occhiali', 'strategia-prezzi-occhiali', 'tendenze-design-occhiali-2026',
  'trovare-produttore-occhiali', 'uv400-vs-polarizzate',
  'checklist-audit-fabbrica-occhiali', 'guida-incoterms-spedizione-occhiali',
];

function urlEntry(u, freq, pri) {
  return `  <url>
    <loc>${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${Number(pri).toFixed(1)}</priority>
  </url>`;
}

const urls = [];

// English pages
urls.push(urlEntry(`${baseUrl}/`, 'daily', 1));
urls.push(urlEntry(`${baseUrl}/about/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/certifications/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/contact/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/products/`, 'weekly', 0.9));
['acetate','aviator','blue-light','cat-eye','eco-friendly','kids','polarized','round','sport','tr90','wayfarer','prescription','promotional','sunglasses-case'].forEach(p => {
  urls.push(urlEntry(`${baseUrl}/products/${p}/`, 'weekly', 0.8));
});
urls.push(urlEntry(`${baseUrl}/blog/`, 'weekly', 0.7));
enBlogSlugs.forEach(s => urls.push(urlEntry(`${baseUrl}/blog/${s}/`, 'monthly', 0.6)));

// Spanish
urls.push(urlEntry(`${baseUrl}/es/`, 'daily', 1));
urls.push(urlEntry(`${baseUrl}/es/sobre-nosotros/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/es/certificaciones/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/es/contacto/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/es/productos/`, 'weekly', 0.9));
['acetato','aviador','deportivo','ecologico','luz-azul','ninos','ojo-de-gato','polarizado','redondo','tr90','wayfarer','funda-gafas'].forEach(p => {
  urls.push(urlEntry(`${baseUrl}/es/productos/${p}/`, 'weekly', 0.8));
});
urls.push(urlEntry(`${baseUrl}/es/blog/`, 'weekly', 0.7));
esBlogSlugs.forEach(s => urls.push(urlEntry(`${baseUrl}/es/blog/${s}/`, 'monthly', 0.6)));

// French
urls.push(urlEntry(`${baseUrl}/fr/`, 'daily', 1));
urls.push(urlEntry(`${baseUrl}/fr/a-propos/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/fr/certifications/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/fr/contact/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/fr/produits/`, 'weekly', 0.9));
['acetate','aviateur','ecologique','enfants','lumiere-bleue','oeil-de-chat','polarise','rond','sport','tr90','wayfarer','etui-lunettes'].forEach(p => {
  urls.push(urlEntry(`${baseUrl}/fr/produits/${p}/`, 'weekly', 0.8));
});
urls.push(urlEntry(`${baseUrl}/fr/blog/`, 'weekly', 0.7));
frBlogSlugs.forEach(s => urls.push(urlEntry(`${baseUrl}/fr/blog/${s}/`, 'monthly', 0.6)));

// German
urls.push(urlEntry(`${baseUrl}/de/`, 'daily', 1));
urls.push(urlEntry(`${baseUrl}/de/ueber-uns/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/de/zertifizierungen/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/de/kontakt/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/de/produkte/`, 'weekly', 0.9));
['acetat','blaulicht','flieger','katzenaugen','kinder','polarisiert','rund','sport','tr90','umweltfreundlich','wayfarer','sonnenbrillen-etui'].forEach(p => {
  urls.push(urlEntry(`${baseUrl}/de/produkte/${p}/`, 'weekly', 0.8));
});
urls.push(urlEntry(`${baseUrl}/de/blog/`, 'weekly', 0.7));
deBlogSlugs.forEach(s => urls.push(urlEntry(`${baseUrl}/de/blog/${s}/`, 'monthly', 0.6)));

// Portuguese
urls.push(urlEntry(`${baseUrl}/pt/`, 'daily', 1));
urls.push(urlEntry(`${baseUrl}/pt/sobre-nos/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/pt/certificacoes/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/pt/contato/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/pt/produtos/`, 'weekly', 0.9));
['acetato','aviador','ecologico','esportivo','infantil','luz-azul','olho-de-gato','polarizado','redondo','tr90','wayfarer','capa-oculos'].forEach(p => {
  urls.push(urlEntry(`${baseUrl}/pt/produtos/${p}/`, 'weekly', 0.8));
});
urls.push(urlEntry(`${baseUrl}/pt/blog/`, 'weekly', 0.7));
ptBlogSlugs.forEach(s => urls.push(urlEntry(`${baseUrl}/pt/blog/${s}/`, 'monthly', 0.6)));

// Italian
urls.push(urlEntry(`${baseUrl}/it/`, 'daily', 1));
urls.push(urlEntry(`${baseUrl}/it/chi-siamo/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/it/certificazioni/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/it/contatti/`, 'monthly', 0.8));
urls.push(urlEntry(`${baseUrl}/it/prodotti/`, 'weekly', 0.9));
['acetato','aviatore','bambini','ecologico','luce-blu','occhio-di-gatto','polarizzato','rotondo','sportivo','tr90','wayfarer','fedora-occhiali'].forEach(p => {
  urls.push(urlEntry(`${baseUrl}/it/prodotti/${p}/`, 'weekly', 0.8));
});
urls.push(urlEntry(`${baseUrl}/it/blog/`, 'weekly', 0.7));
itBlogSlugs.forEach(s => urls.push(urlEntry(`${baseUrl}/it/blog/${s}/`, 'monthly', 0.6)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml + '\n');
console.log(`Generated sitemap.xml with ${urls.length} URLs in ${outDir}/sitemap.xml`);
