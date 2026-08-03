import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import { KeyTakeaways, QuickStats, ProsCons, ComparisonTable } from '@/components/GEOContent'

export const metadata: Metadata = {
  title: 'TR90 vs Acetate vs Metal Sunglasses Frames: The Complete 2026 Buyer\'s Guide',
  description: 'A sunglasses factory owner explains the real differences between TR90, acetate, and metal frames -- durability, weight, cost, and which material is right for your brand.',
  keywords: 'TR90 vs acetate vs metal sunglasses, sunglass frame materials, TR90 frames, acetate frames, metal frames, lightweight sunglasses, flexible sunglasses, wholesale sunglasses frames',
}

export default function Tr90VsAcetateVsMetalPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog/' }, { name: "TR90 vs Acetate vs Metal Sunglasses Frames: The Complete 2026 Buyer's Guide" }]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "TR90 vs Acetate vs Metal Sunglasses Frames: The Complete 2026 Buyer's Guide",
          "datePublished": "2026-05-04",
          "dateModified": "2026-07-11",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A sunglasses factory owner explains TR90 vs acetate vs metal frames -- durability, weight, cost, and which material is right for your brand.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/tr90-vs-acetate-vs-metal" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Which frame material is the most durable?",
              "acceptedAnswer": { "@type": "Answer", "text": "TR90 is the most durable for impact resistance and flexibility -- it can bend and return to shape without breaking. Acetate is durable for everyday wear but can crack under extreme stress. Metal frames are strong but can bend out of shape and are harder to repair. For active sports or kids, TR90 is the clear winner. For fashion-focused lines, acetate offers the best balance of durability and premium feel." }
            },
            {
              "@type": "Question",
              "name": "Which frame material is the lightest?",
              "acceptedAnswer": { "@type": "Answer", "text": "TR90 is the lightest -- a typical TR90 frame weighs 15-20 grams. Metal frames are next at 20-30 grams depending on the alloy. Acetate is the heaviest at 25-40 grams because it's carved from solid blocks of material. If weight is your priority (for all-day comfort or children's sunglasses), TR90 is the best choice." }
            },
            {
              "@type": "Question",
              "name": "Which frame material is best for fashion sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "Acetate is the gold standard for fashion sunglasses. It can be cut into bold, thick shapes, polished to a high gloss, and comes in hundreds of colors and patterns (tortoise, marble, gradient, transparent). Luxury brands like Tom Ford, Gucci, and Prada almost exclusively use acetate. If your brand positions in the premium or fashion segment, acetate is what your customers expect." }
            },
            {
              "@type": "Question",
              "name": "How much do different frame materials cost at wholesale?",
              "acceptedAnswer": { "@type": "Answer", "text": "At factory wholesale: TR90 frames cost $3-8 per pair depending on complexity. Acetate frames cost $5-15 per pair (hand-polished premium acetate can reach $20+). Metal frames cost $4-12 per pair depending on the alloy and plating. So TR90 is the most budget-friendly, acetate has the widest range, and metal sits in the middle." }
            },
            {
              "@type": "Question",
              "name": "Are metal frames better for people with allergies?",
              "acceptedAnswer": { "@type": "Answer", "text": "It depends on the metal. Stainless steel and titanium are hypoallergenic and safe for sensitive skin. However, some cheaper metal alloys contain nickel, which can cause allergic reactions. If you're sourcing metal frames for a brand, always specify nickel-free alloys and ask for SGS or RoHS certification. TR90 and acetate are naturally hypoallergenic." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materials</span>
            <span>May 4, 2026</span>
            <span>•</span>
            <span>16 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TR90 vs Acetate vs Metal Sunglasses Frames: The Complete 2026 Buyer&apos;s Guide
          </h1>
          <p className="text-xl text-gray-600">
            I&apos;ve been making sunglass frames for over 10 years. And the #1 question brand owners ask me? 
            Which material should I use? The answer depends on your price point, your customer, and what you&apos;re trying to achieve. Let me break it down.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#the-three-materials" className="text-primary-600 hover:underline">The Three Main Frame Materials</a></li>
            <li><a href="#tr90" className="text-primary-600 hover:underline">TR90: The Flexible Wonder</a></li>
            <li><a href="#acetate" className="text-primary-600 hover:underline">Acetate: The Fashion Standard</a></li>
            <li><a href="#metal" className="text-primary-600 hover:underline">Metal: The Classic Choice</a></li>
            <li><a href="#comparison" className="text-primary-600 hover:underline">Side-by-Side Comparison</a></li>
            <li><a href="#cost" className="text-primary-600 hover:underline">Cost Breakdown for Your Brand</a></li>
            <li><a href="#choosing" className="text-primary-600 hover:underline">How to Choose the Right Material</a></li>
            <li><a href="#trends" className="text-primary-600 hover:underline">2026 Material Trends</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions I Get Asked Every Week</a></li>
          </ul>
        </nav>

        {/* Section 1 */}
        <section id="the-three-materials" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Three Main Frame Materials</h2>
          <p className="text-gray-700 mb-4">
            When you&apos;re sourcing sunglasses for your brand, you&apos;re basically choosing between three frame materials:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>TR90</strong> -- A flexible, ultra-lightweight thermoplastic from Switzerland (Gril TR90 is the premium version)</li>
            <li><strong>Acetate</strong> -- A plant-based plastic carved and polished into bold, premium shapes</li>
            <li><strong>Metal</strong> -- Stainless steel, aluminum, or titanium frames for a sleek, classic look</li>
          </ul>

          {/* GEO: Key Takeaways */}
          <KeyTakeaways items={[
            'TR90: lightest (15-20g), most flexible, cheapest ($3-8), best for sports/kids/activewear',
            'Acetate: heaviest (25-40g), premium hand-polished look, widest color range ($5-20), best for fashion/luxury',
            'Metal: medium weight (20-30g), classic aesthetic, mid-price ($4-12), best for professional/classic styles',
            'For $20-50 retail: TR90 | For $50-100: Metal | For $100-300+: Premium Acetate',
            'Always specify "nickel-free" for metal frames to avoid customer allergies and returns',
            'Italian acetate (Mazza/Albini) is the gold standard — worth the premium for positioning',
          ]} />
          <p className="text-gray-700 mb-4">
            Each has strengths and weaknesses. None is &quot;best&quot; across the board. The right choice depends on your brand positioning, your target customer, and your price point.
          </p>
          <p className="text-gray-700 mb-4">
            I&apos;ll walk through each one, then give you a side-by-side comparison so you can make the right call for your line.
          </p>
        </section>

        {/* Section 2: TR90 */}
        <section id="tr90" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TR90: The Flexible Wonder</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is TR90?</h3>
          <p className="text-gray-700 mb-4">
            TR90 is a thermoplastic material developed by the Swiss company EMS-Chimie. It&apos;s technically called &quot;Gril TR90&quot; (that&apos;s the brand name), but everyone in the industry just calls it TR90. It&apos;s known for being incredibly lightweight and flexible.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Weight:</strong> 15-20 grams per frame -- the lightest option available</li>
            <li><strong>Flexibility:</strong> Can bend significantly and return to shape without breaking</li>
            <li><strong>Impact resistance:</strong> Extremely high -- survives drops, sits, and being stepped on</li>
            <li><strong>Surface finish:</strong> Matte or semi-gloss, cannot be polished to high shine like acetate</li>
            <li><strong>Color options:</strong> Limited to injection-molded colors -- no tortoise, marble, or layered patterns</li>
            <li><strong>Hypoallergenic:</strong> Yes -- safe for all skin types</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Best For</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Sports and active lifestyle sunglasses</li>
            <li>Children&apos;s sunglasses (flexible, lightweight, unbreakable)</li>
            <li>Budget-friendly fashion lines</li>
            <li>Wrap-around and performance designs</li>
            <li>Customers who want all-day comfort</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h3>
          <p className="text-gray-700 mb-4">
            TR90 can&apos;t achieve the premium, hand-polished look of acetate. It&apos;s injection molded, so the shapes are simpler and the finish is more plastic-looking. For a $20-50 retail price point, it&apos;s perfect. For a $150+ fashion brand, customers will expect something more substantial.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-800 font-medium">💡 Factory Tip: If you&apos;re sourcing TR90, ask for &quot;Gril TR90&quot; (the Swiss original) rather than generic TR90. The quality difference is noticeable -- better flexibility, better color consistency, and less risk of frame deformation over time.</p>
          </div>
        </section>

        {/* Section 3: Acetate */}
        <section id="acetate" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Acetate: The Fashion Standard</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is Acetate?</h3>
          <p className="text-gray-700 mb-4">
            Acetate (cellulose acetate) is a plant-based plastic made from cotton fibers or wood pulp. It&apos;s the premium material of choice for fashion sunglasses. Luxury brands like Tom Ford, Gucci, Prada, and Ray-Ban almost exclusively use acetate for their fashion frames.
          </p>
          <p className="text-gray-700 mb-4">
            Unlike TR90 (which is injection molded), acetate starts as large blocks or sheets of material. Each frame is cut, carved, sanded, and hand-polished from these blocks. This is why acetate frames have that rich, deep, handcrafted look.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Weight:</strong> 25-40 grams per frame -- the heaviest option</li>
            <li><strong>Flexibility:</strong> Low -- rigid and substantial, can crack under extreme stress</li>
            <li><strong>Surface finish:</strong> High-gloss polish, rich and premium feel</li>
            <li><strong>Color options:</strong> Virtually unlimited -- solid colors, tortoise, marble, gradient, transparent, layered, mixed patterns</li>
            <li><strong>Shape options:</strong> Bold, thick, sculptural -- acetate can be carved into any shape</li>
            <li><strong>Hypoallergenic:</strong> Yes -- plant-based, safe for sensitive skin</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Best For</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Fashion-forward and luxury brands</li>
            <li>Statement pieces and bold designs</li>
            <li>Premium retail pricing ($80-$300+)</li>
            <li>Brands that want unique color/pattern combinations</li>
            <li>Customers who value craftsmanship and premium feel</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h3>
          <p className="text-gray-700 mb-4">
            Acetate is heavier and less flexible than TR90. It&apos;s also more expensive to produce because each frame requires hand labor (cutting, carving, polishing). And the production time is longer -- a typical acetate frame takes 2-3 weeks to produce versus 3-5 days for TR90.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
            <p className="text-amber-800 font-medium">🔥 Factory Tip: Acetate quality varies dramatically by source. Italian acetate (from Mazza or Albini) is the gold standard -- richer colors, better polish, more consistent material. Chinese acetate is cheaper but can look flat and dull. For a premium brand, insist on Italian acetate.</p>
          </div>
        </section>

        {/* Section 4: Metal */}
        <section id="metal" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Metal: The Classic Choice</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What Metal Frames Are Made Of</h3>
          <p className="text-gray-700 mb-4">
            Metal sunglass frames are typically made from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Stainless steel:</strong> Most common, good balance of strength and cost</li>
            <li><strong>Titanium:</strong> Premium, lightweight, hypoallergenic, more expensive</li>
            <li><strong>Aluminum:</strong> Very lightweight, modern look, less common</li>
            <li><strong>Nickel silver (Monel):</strong> Cheap, easy to work with, but can cause allergies -- avoid for premium brands</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Characteristics</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Weight:</strong> 20-30 grams per frame -- medium weight</li>
            <li><strong>Flexibility:</strong> Low to medium -- can bend but may not return to shape</li>
            <li><strong>Surface finish:</strong> Can be plated in gold, silver, rose gold, gunmetal, matte black, etc.</li>
            <li><strong>Shape options:</strong> Thin, sleek, wire-frame designs -- can&apos;t do bold/thick looks</li>
            <li><strong>Durability:</strong> Strong but hinges are the weak point -- metal fatigues over time</li>
            <li><strong>Hypoallergenic:</strong> Depends on the alloy -- stainless steel and titanium are safe, nickel alloys are not</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Best For</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Classic and vintage-inspired designs (aviators, wayfarers, round frames)</li>
            <li>Professional and business-casual styles</li>
            <li>Thin, minimalist aesthetics</li>
            <li>Brands targeting the $50-150 price range</li>
            <li>Customers who prefer a lighter, more refined look</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h3>
          <p className="text-gray-700 mb-4">
            Metal frames can bend out of shape and are harder to repair than plastic frames. The plating can wear off over time (especially on cheaper frames). And if you use the wrong alloy, customers can develop skin allergies -- which means returns and bad reviews.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-800 font-medium">⚠️ Factory Warning: Always specify &quot;nickel-free&quot; when sourcing metal frames. Nickel allergy is one of the most common contact allergies worldwide. Ask your supplier for SGS or RoHS certification to verify the alloy composition.</p>
          </div>
        </section>

        {/* Section 5: Comparison */}
        <section id="comparison" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Side-by-Side Comparison</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left font-bold">Feature</th>
                  <th className="border p-3 text-left font-bold">TR90</th>
                  <th className="border p-3 text-left font-bold">Acetate</th>
                  <th className="border p-3 text-left font-bold">Metal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Weight</td>
                  <td className="border p-3">15-20g ⭐ Lightest</td>
                  <td className="border p-3">25-40g</td>
                  <td className="border p-3">20-30g</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Flexibility</td>
                  <td className="border p-3">Very High ⭐</td>
                  <td className="border p-3">Low</td>
                  <td className="border p-3">Low-Medium</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Durability</td>
                  <td className="border p-3">Excellent ⭐</td>
                  <td className="border p-3">Good</td>
                  <td className="border p-3">Good (hinges weaken)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Premium Feel</td>
                  <td className="border p-3">Basic</td>
                  <td className="border p-3">Excellent ⭐</td>
                  <td className="border p-3">Good</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Color Options</td>
                  <td className="border p-3">Limited</td>
                  <td className="border p-3">Unlimited ⭐</td>
                  <td className="border p-3">Medium (plating)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Wholesale Cost</td>
                  <td className="border p-3">$3-8 ⭐ Cheapest</td>
                  <td className="border p-3">$5-20</td>
                  <td className="border p-3">$4-12</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Production Time</td>
                  <td className="border p-3">3-5 days ⭐ Fastest</td>
                  <td className="border p-3">2-3 weeks</td>
                  <td className="border p-3">1-2 weeks</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Best Retail Price</td>
                  <td className="border p-3">$20-80</td>
                  <td className="border p-3">$80-300+</td>
                  <td className="border p-3">$50-150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* GEO: Quick Stats for each material */}
        <QuickStats stats={[
          { label: 'TR90 Weight', value: '15-20g' },
          { label: 'Acetate Weight', value: '25-40g' },
          { label: 'Metal Weight', value: '20-30g' },
          { label: 'TR90 Cost', value: '$3-8/pair' },
          { label: 'Acetate Cost', value: '$5-20/pair' },
          { label: 'Metal Cost', value: '$4-12/pair' },
          { label: 'TR90 Production', value: '3-5 days' },
          { label: 'Acetate Production', value: '2-3 weeks' },
        ]} title="Frame Material Quick Stats" />

        {/* Section 6: Cost */}
        <section id="cost" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Breakdown for Your Brand</h2>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">TR90 Frames</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Wholesale cost:</strong> $3-8 per frame (depending on complexity and quantity)</li>
            <li><strong>MOQ:</strong> 300-500 pieces per color</li>
            <li><strong>Production time:</strong> 3-5 days for molding, 7-10 days total with lenses</li>
            <li><strong>Best for:</strong> High-volume, low-price brands; promotional sunglasses; kids&apos; lines</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Acetate Frames</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Wholesale cost:</strong> $5-20 per frame (Chinese acetate $5-10, Italian acetate $10-20+)</li>
            <li><strong>MOQ:</strong> 200-300 pieces per color/pattern</li>
            <li><strong>Production time:</strong> 2-3 weeks (hand-polishing takes time)</li>
            <li><strong>Best for:</strong> Fashion brands, premium positioning, unique designs</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Metal Frames</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Wholesale cost:</strong> $4-12 per frame (stainless steel $4-8, titanium $8-15)</li>
            <li><strong>MOQ:</strong> 300-500 pieces per finish</li>
            <li><strong>Production time:</strong> 1-2 weeks (including plating)</li>
            <li><strong>Best for:</strong> Classic designs, mid-range pricing, professional styles</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-green-800 font-medium">💰 Factory Tip: If you&apos;re ordering 1000+ pieces, you can typically negotiate 15-25% off the per-unit price regardless of material. The biggest savings come from TR90 at volume -- you can get frames for $2-3 each at 2000+ quantity.</p>
          </div>
        </section>

        {/* Section 7: How to Choose */}
        <section id="choosing" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Material</h2>
          
          <p className="text-gray-700 mb-6">
            Here&apos;s my decision framework. Ask yourself these questions:
          </p>

          <div className="space-y-6 mb-6">
            {/* GEO: Pros/Cons for Each Material */}
            <ProsCons
              title="TR90"
              good={[
                'Lightest weight (15-20g) — all-day comfort',
                'Extremely flexible — bends without breaking',
                'Lowest cost ($3-8/pair) — best margins for volume brands',
                'Fastest production (3-5 days)',
              ]}
              bad={[
                'Basic plastic look — cannot achieve premium gloss finish',
                'Limited color options — no tortoise, marble, or layered patterns',
                'Simple shapes only — cannot do bold or thick designs',
              ]}
            />
            <ProsCons
              title="Acetate"
              good={[
                'Premium hand-polished finish — looks and feels luxurious',
                'Unlimited colors and patterns — tortoise, marble, gradient, transparent',
                'Can be carved into any shape — bold, thick, sculptural designs',
                'Plant-based and hypoallergenic',
              ]}
              bad={[
                'Heaviest weight (25-40g) — less comfortable for all-day wear',
                'Highest cost ($5-20/pair) — tighter margins',
                'Longest production time (2-3 weeks) — slower to market',
                'Can crack under extreme stress — less durable than TR90',
              ]}
            />
            <ProsCons
              title="Metal"
              good={[
                'Sleek, classic look — ideal for professional and vintage styles',
                'Medium weight (20-30g) — good balance of comfort and durability',
                'Wide plating options — gold, silver, rose gold, gunmetal, matte',
                'Titanium option is ultra-premium and hypoallergenic',
              ]}
              bad={[
                'Can bend out of shape — harder to repair than plastic',
                'Plating can wear off on cheaper frames',
                'Nickel alloys cause allergic reactions — must specify nickel-free',
                'Hinges fatigue over time — weakest structural point',
              ]}
            />
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. What&apos;s your retail price point?</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>$20-50:</strong> TR90 -- best value, customers won&apos;t expect premium materials at this price</li>
                <li><strong>$50-100:</strong> Metal or entry-level acetate -- good balance of quality and cost</li>
                <li><strong>$100-300:</strong> Premium acetate -- customers expect hand-polished, substantial frames</li>
                <li><strong>$300+:</strong> Italian acetate or titanium -- nothing less will do</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Who&apos;s your target customer?</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Athletes/active users:</strong> TR90 -- lightweight, flexible, impact-resistant</li>
                <li><strong>Fashion-conscious women:</strong> Acetate -- bold colors, premium feel, trend-driven</li>
                <li><strong>Professional men:</strong> Metal -- sleek, classic, understated</li>
                <li><strong>Children:</strong> TR90 -- unbreakable, lightweight, safe</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. What&apos;s your brand positioning?</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Budget/value:</strong> TR90</li>
                <li><strong>Fashion/luxury:</strong> Acetate</li>
                <li><strong>Classic/professional:</strong> Metal</li>
                <li><strong>Sports/performance:</strong> TR90</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: 2026 Trends */}
        <section id="trends" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2026 Material Trends</h2>
          
          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🔥 TR90 is growing fast</h3>
              <p className="text-gray-700">
                With the rise of athleisure and performance eyewear, TR90 demand has grown 30% year-over-year in our factory. Brands like Gucci and Prada are now offering TR90 sport lines alongside their acetate collections.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎨 Acetate patterns are getting bolder</h3>
              <p className="text-gray-700">
                2026 is seeing a surge in mixed-pattern acetate -- tortoise combined with transparent, marble effects, and gradient colors. The &quot;quiet luxury&quot; trend is pushing acetate towards richer, more complex patterns that are harder to counterfeit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">⚡ Titanium is becoming mainstream</h3>
              <p className="text-gray-700">
                Once reserved for ultra-premium frames ($500+), titanium frames are now appearing in the $100-200 range as production costs come down. This is a huge opportunity for brands that want to offer lightweight, hypoallergenic frames at accessible prices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🌱 Sustainable materials are emerging</h3>
              <p className="text-gray-700">
                Bio-based acetate (from castor oil instead of petroleum) and recycled metal frames are entering the market. While still niche, expect this to grow significantly in 2026-2027 as brands face pressure to reduce their environmental footprint.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions I Get Asked Every Week</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Which frame material is the most durable?</h3>
              <p className="text-gray-700">
                TR90 is the most durable for impact resistance and flexibility -- it can bend and return to shape without breaking. Acetate is durable for everyday wear but can crack under extreme stress. Metal frames are strong but can bend out of shape and are harder to repair. For active sports or kids, TR90 is the clear winner. For fashion-focused lines, acetate offers the best balance of durability and premium feel.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Which frame material is the lightest?</h3>
              <p className="text-gray-700">
                TR90 is the lightest -- a typical TR90 frame weighs 15-20 grams. Metal frames are next at 20-30 grams depending on the alloy. Acetate is the heaviest at 25-40 grams because it&apos;s carved from solid blocks of material. If weight is your priority (for all-day comfort or children&apos;s sunglasses), TR90 is the best choice.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Which frame material is best for fashion sunglasses?</h3>
              <p className="text-gray-700">
                Acetate is the gold standard for fashion sunglasses. It can be cut into bold, thick shapes, polished to a high gloss, and comes in hundreds of colors and patterns (tortoise, marble, gradient, transparent). Luxury brands like Tom Ford, Gucci, and Prada almost exclusively use acetate. If your brand positions in the premium or fashion segment, acetate is what your customers expect.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do different frame materials cost at wholesale?</h3>
              <p className="text-gray-700">
                At factory wholesale: TR90 frames cost $3-8 per pair depending on complexity. Acetate frames cost $5-15 per pair (hand-polished premium acetate can reach $20+). Metal frames cost $4-12 per pair depending on the alloy and plating. So TR90 is the most budget-friendly, acetate has the widest range, and metal sits in the middle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are metal frames better for people with allergies?</h3>
              <p className="text-gray-700">
                It depends on the metal. Stainless steel and titanium are hypoallergenic and safe for sensitive skin. However, some cheaper metal alloys contain nickel, which can cause allergic reactions. If you&apos;re sourcing metal frames for a brand, always specify nickel-free alloys and ask for SGS or RoHS certification. TR90 and acetate are naturally hypoallergenic.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Source the Right Frames?</h2>
          <p className="text-xl mb-6 opacity-90">
            Whether you need TR90 for performance, acetate for fashion, or metal for classic style -- we&apos;ll help you find the perfect frame for your brand.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Related Products */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/products/tr90" className="block group">
              <div className="bg-gray-100 rounded-lg p-6 text-center group-hover:bg-gray-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">TR90 Sunglasses</h3>
                <p className="text-sm text-gray-600">Lightweight & flexible</p>
              </div>
            </Link>
            <Link href="/products/acetate" className="block group">
              <div className="bg-gray-100 rounded-lg p-6 text-center group-hover:bg-gray-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Acetate Sunglasses</h3>
                <p className="text-sm text-gray-600">Premium fashion frames</p>
              </div>
            </Link>
            <Link href="/products/metal" className="block group">
              <div className="bg-gray-100 rounded-lg p-6 text-center group-hover:bg-gray-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Metal Sunglasses</h3>
                <p className="text-sm text-gray-600">Classic & sleek</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Related Blog Posts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="space-y-4">
            <Link href="/blog/uv400-vs-polarized" className="block group">
              <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600">UV400 vs Polarized Sunglasses: What&apos;s the Difference?</h3>
                <p className="text-sm text-gray-600 mt-1">Understanding lens protection technologies</p>
              </div>
            </Link>
            <Link href="/blog/sunglasses-coating-guide" className="block group">
              <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600">The Complete Sunglasses Coating Guide</h3>
                <p className="text-sm text-gray-600 mt-1">Anti-reflective, mirror, hydrophobic, and more</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </article>
  )
}
