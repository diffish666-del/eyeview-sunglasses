import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sunglasses Trade Shows 2026: A Factory Owner\'s Guide to Finding the Right Suppliers',
  description: 'A Chinese factory owner\'s guide to sunglasses trade shows in 2026 — MIDO, SILMO, Vision Expo, IOFT, HK Optical Fair. Booth costs, vendor vetting strategies, and follow-up that actually works.',
  keywords: ['sunglasses trade shows 2026', 'eyewear exhibition 2026', 'MIDO sunglasses', 'SILMO eyewear', 'optical fair sourcing', 'finding sunglasses suppliers at trade shows'],
  alternates: {
    canonical: '/blog/sunglasses-trade-shows-guide',
  },
};

const takeaways = [
  'MIDO Milan (Feb 7–9, 2026): 55,000+ attendees, 1,300 exhibitors — the single most important sunglasses trade show for connecting with manufacturers who actually produce in volume',
  'Vision Expo East + West: the two biggest US buying shows, but only 180–200 eyewear manufacturers exhibit — the rest are brands, distributors, and tech vendors; know who you\'re talking to',
  'SILMO Paris (Sep 25–28, 2026): 1,000 exhibitors, trend-driven, premium positioning — better for spotting design direction than negotiating factory pricing',
  'Hong Kong Optical Fair (Nov 4–6, 2026): your best bet if you want Chinese manufacturing quality without flying to mainland China — 700+ exhibitors, most with factory backing',
  'IOFT Tokyo (Oct 2026): 260+ exhibitors, Japanese craftsmanship focus — smaller show but ideal if you need titanium frames or precision acetate work',
  'Walk into a booth prepared: bring 3–5 physical samples from competitors as reference, know your target retail price before discussing MOQ, and never reveal your maximum budget on first contact',
];

const quickStats = [
  { label: 'MIDO 2026 Dates', value: 'Feb 7–9, Milan' },
  { label: 'MIDO Exhibitors', value: '1,300+ (€38B industry)' },
  { label: 'Standard 9m² Booth Cost', value: '$4,000–$6,000' },
  { label: 'Avg. Meetings Per Day', value: '12–18 (serious buyer)' },
];

const faqs = [
  {
    question: 'Which sunglasses trade show is best for finding manufacturers?',
    answer: 'MIDO in Milan (February) and the Hong Kong Optical Fair (November) are the top two for manufacturer access. MIDO gives you European and global factories — Italy, France, Japan, China — all in one place. Hong Kong is more concentrated: roughly 70% of exhibitors have factory operations in mainland China, so you can meet supply chain decision-makers directly without the Italy markup.',
  },
  {
    question: 'How much does it cost to exhibit at a sunglasses trade show?',
    answer: 'A standard 9m² booth at MIDO or SILMO runs $4,000–$6,000. Larger island booths (36m²+) can hit $25,000–$80,000 when you include custom build-out, lighting, and furniture rental. Vision Expo in the US is similar — $4,500+ for a small booth, $15,000–$50,000 for a branded space. Most Chinese factories at these shows have 18–36m² booths, which tells you they\'re serious about export business.',
  },
  {
    question: 'Do I need to register in advance for eyewear trade shows?',
    answer: 'Yes, always. MIDO, SILMO, Vision Expo, and IOFT require online pre-registration. Walk-up registration exists but you\'ll waste 45–60 minutes in line. Most shows open registration 3–4 months in advance and offer early-bird pricing — MIDO was €35 early vs. €55 at the door last year. Bring your business registration documents; some shows verify that you\'re an industry buyer before granting access.',
  },
  {
    question: 'What should I bring to a trade show when meeting suppliers?',
    answer: 'Pack light but specific: 3–5 competitor samples as quality benchmarks, 100+ business cards (you\'ll go through them faster than you think), a spec sheet with your target retail price, material preferences, and UV400/certification requirements, a portable charger, comfortable shoes, and a small notebook. Most important: printed photos of exactly what you want — the language barrier disappears when you can point at a picture.',
  },
  {
    question: 'How do I follow up with suppliers after a trade show?',
    answer: 'Send a personalized email within 48 hours — not a template blast. Reference something specific from your booth conversation ("I remember you mentioned your acetate supplier in Mazzucchelli"). Include photos of your reference samples. Request a quotation with your quantities, not "what\'s your best price." Factories get 200+ "send me your catalog" emails after every show; the ones that stand out are the ones that feel like a real order, not a fishing expedition.',
  },
];

const PUBLISH_DATE = '2026-07-20';
const SLUG = 'sunglasses-trade-shows-guide';

export default function SunglassesTradeShowsGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Sunglasses Trade Shows 2026: A Factory Owner\'s Guide to Finding the Right Suppliers' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Trade Shows 2026: A Factory Owner's Guide to Finding the Right Suppliers",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A Chinese factory owner's guide to sunglasses trade shows in 2026 — MIDO, SILMO, Vision Expo, IOFT, HK Optical Fair. Booth costs, vendor vetting strategies, and follow-up that actually works.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sourcing</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Trade Shows 2026: A Factory Owner&apos;s Guide to Finding the Right Suppliers
          </h1>
          <p className="text-xl text-gray-600">
            I&apos;ve worked booths at 30+ trade shows. Most buyers walk the floor wrong. Here&apos;s how to do it right.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#why-trade-shows" className="text-primary-600 hover:underline">Why Trade Shows Still Matter in the Age of Alibaba</a></li>
            <li><a href="#calendar" className="text-primary-600 hover:underline">The Major Trade Shows Calendar 2026</a></li>
            <li><a href="#prepare" className="text-primary-600 hover:underline">What to Prepare Before You Go</a></li>
            <li><a href="#evaluate" className="text-primary-600 hover:underline">How to Evaluate Suppliers at a Trade Show</a></li>
            <li><a href="#booth-strategy" className="text-primary-600 hover:underline">The Booth Visit Strategy Most Buyers Get Wrong</a></li>
            <li><a href="#follow-up" className="text-primary-600 hover:underline">Post-Show Follow-Up That Actually Works</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="Trade Shows at a Glance" />

          {/* ─── Intro ─── */}
          <p className="text-xl text-gray-600 mb-8">
            In 2019, a buyer walked into our booth at MIDO Milan, picked up one of our acetate frames, 
            bent the temple nearly flat against the front, held it there for three seconds, and set it down. 
            He said nothing. Just nodded, grabbed a business card, and walked away. Two months later, he placed 
            a $45,000 order.
          </p>
          <p>
            That&apos;s the thing about trade shows. You can&apos;t replicate that moment on Alibaba. You can&apos;t 
            feel spring hinge tension through a DM. You can&apos;t smell fresh acetate or hold a polarized lens 
            up to the hall lights through a product listing. For the 15 years I&apos;ve been running a sunglasses 
            factory in China, trade shows have been where our best client relationships started — not in an inbox, 
            not on a B2B platform, but across a 3-meter booth table with samples between us.
          </p>
          <p>
            But here&apos;s what nobody tells you: <strong>most buyers are terrible at trade shows.</strong> They 
            walk the floor like tourists, collect catalogs like souvenirs, and go home with a tote bag full of 
            business cards they&apos;ll never look at again. I&apos;ve watched it from behind the booth for over a 
            decade. This guide is the opposite of that — it&apos;s how to walk into any eyewear trade show in 2026 
            and walk out with real supplier relationships, not just a stack of brochures.
          </p>

          {/* ─── Section 1: Why Trade Shows Still Matter ─── */}
          <h2 id="why-trade-shows" className="text-3xl font-bold mt-16 mb-6">Why Trade Shows Still Matter in the Age of Alibaba</h2>
          <p>
            I get this question constantly: &quot;Why should I spend $3,000 on flights and hotels when I can browse 
            suppliers on Alibaba for free?&quot;
          </p>
          <p>
            Here&apos;s the honest answer: <strong>about 40–50% of the &quot;manufacturers&quot; on Alibaba are trading 
            companies.</strong> They don&apos;t own a single injection molding machine. They take your order, mark it up 
            15–30%, and send it to a factory you&apos;ll never know the name of. I&apos;ve had trading companies walk 
            into our booth, photograph our samples, and list them on Alibaba as their own products that same night. 
            I know because buyers later sent me screenshots asking why &quot;our&quot; frames were listed under a 
            different company name.
          </p>
          <p>
            At a trade show, you eliminate the middleman by default. The booth costs $4,000 minimum — trading 
            companies don&apos;t invest that kind of money for a single show. You&apos;re standing in front of someone 
            who either owns the factory or runs operations. You can ask &quot;where&apos;s your production floor?&quot; 
            and watch their reaction in real time. You can open drawers behind the display, check the inside of 
            temple tips for mold marks, and see how the samples are actually finished — not how they were photographed 
            under studio lighting.
          </p>
          <p>
            One more thing that matters: <strong>the factory that exhibits at MIDO or SILMO has passed a filter.</strong> 
            They have export documentation. They have English-speaking staff. They understand international quality 
            standards. They&apos;ve invested serious money in being there — an 18m² booth with proper lighting and 
            display cases at MIDO costs about $12,000–$15,000 all-in. Nobody spends that to scam you.
          </p>

          {/* ─── Section 2: The Calendar ─── */}
          <h2 id="calendar" className="text-3xl font-bold mt-16 mb-6">The Major Trade Shows Calendar 2026</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">MIDO Milan — February 7–9, 2026</h3>
          <p>
            This is the big one. 1,300+ exhibitors from 50+ countries, 55,000+ visitors, and a €38 billion industry 
            packed into the Fiera Milano Rho convention center. If you can only attend one show this year, make it MIDO.
          </p>
          <p>
            The floor is organized by pavilion — Design, Tech, Fashion, Lens, and Asia. For sourcing, you want the 
            <strong> Asia Pavilion </strong> and parts of the Fashion Pavilion. That&apos;s where you&apos;ll find 
            Chinese, Korean, and Hong Kong manufacturers who produce at competitive volumes. The Design Pavilion 
            is mostly Italian and French brands doing premium acetate — beautiful to look at, but expect FOB prices 
            around $12–$25 per unit for OEM versus $5–$12 in the Asia Pavilion for equivalent quality.
          </p>
          <p>
            I remember a client from Canada who spent two full days in the Design Pavilion, fell in love with 
            Italian acetate frames, got quoted €22/unit FOB, and panicked when he realized his retail price would 
            have to be $120+ just to break even. He found us in the Asia Pavilion on day three, saw frames with 
            Mazzucchelli acetate at $9.50/unit, and nearly hugged me. Same material. Different supply chain. That&apos;s 
            why you walk the whole floor before making decisions.
          </p>
          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            <strong>Pro tip:</strong> MIDO runs Saturday to Monday. Saturday is chaos — every buyer rushes in. Monday 
            afternoon, the floor is quiet, exhibitors are tired but relaxed, and you can have real conversations. 
            I&apos;ve given better pricing on Monday at 3 PM than I ever would on Saturday at 11 AM when there&apos;s 
            a line of people waiting behind you.
          </blockquote>

          <h3 className="text-2xl font-bold mt-8 mb-4">Vision Expo East (NYC) — March 12–15, 2026</h3>
          <h3 className="text-2xl font-bold mt-8 mb-4">Vision Expo West (Las Vegas) — September 16–19, 2026</h3>
          <p>
            The two Vision Expo shows are the biggest US buying events, but there&apos;s a distinction you need to 
            understand: out of ~450 exhibitors at each show, only about <strong>180–200 are actual eyewear 
            manufacturers.</strong> The rest are lens labs, equipment vendors, frame brands, software companies, and 
            optometric services. If you walk in looking for a factory and don&apos;t pre-filter the floor map, you&apos;ll 
            waste half your day talking to people who want to sell you a practice management system.
          </p>
          <p>
            Vision Expo West in Las Vegas tends to have a stronger international manufacturer presence — more Chinese, 
            Korean, and Japanese factories than the New York show. The Vegas show also has the advantage of being right 
            before SILMO Paris, so many Asian manufacturers do the double-header: Vision Expo West in September, then 
            fly to Paris for SILMO the following week.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">SILMO Paris — September 25–28, 2026</h3>
          <p>
            SILMO is the design and trends show. 1,000 exhibitors, half of them French or Italian, and the energy 
            is distinctly premium. If MIDO is where you negotiate unit pricing, SILMO is where you spot what colors, 
            shapes, and materials will dominate the market in 2027.
          </p>
          <p>
            I visit SILMO every year as a buyer, not an exhibitor. I walk the floor with a notebook and photograph 
            every trend I see — last year it was translucent caramel acetates and oversized 70s silhouettes. This 
            year I&apos;m betting on slim titanium with gradient lenses. If you&apos;re building a brand, SILMO will 
            save you six months of trend research in two days.
          </p>
          <p>
            One caveat: SILMO is expensive for manufacturers to exhibit at, which means the Chinese factory presence 
            is thinner than at MIDO or Hong Kong. You&apos;ll find more design studios and high-end OEM specialists 
            than volume manufacturers. Great for inspiration. Less great for negotiating your first 500-piece order.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">IOFT Tokyo — October 2026 (Dates TBC)</h3>
          <p>
            The International Optical Fair Tokyo is smaller — 260+ exhibitors — but punches above its weight in 
            quality. If you need Japanese titanium frames, precision acetate, or hinges machined to tolerances that 
            make most factories sweat, IOFT is your show.
          </p>
          <p>
            Japanese manufacturers are famously selective. They don&apos;t chase volume the way Chinese factories do. 
            MOQs at IOFT tend to run 300–500 pieces, and pricing starts higher — think $15–$30 FOB for acetate frames 
            versus $5–$12 from China. But the craftsmanship is undeniable. I&apos;ve sent buyers to IOFT when they 
            needed something we couldn&apos;t match on precision, and I say that as a factory owner.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Hong Kong Optical Fair — November 4–6, 2026</h3>
          <p>
            If you want to meet Chinese manufacturers without the complexity of traveling to mainland China, Hong Kong 
            is your answer. 700+ exhibitors, the vast majority with factory backing in Shenzhen, Dongguan, Wenzhou, 
            and Xiamen — the four major eyewear manufacturing hubs.
          </p>
          <p>
            Hong Kong has two big advantages over other shows. First: <strong>no visa required</strong> for most 
            nationalities, which removes a huge friction point. Second: the exhibitors are export-hardened. Any Chinese 
            factory with a booth in Hong Kong has been doing international business for years — they understand your 
            certification requirements, your packaging standards, your shipping expectations. You&apos;re not training 
            them; they&apos;re ready.
          </p>
          <p>
            The Hong Kong show also runs concurrently with a dedicated brand zone, so you can see what finished brands 
            are selling to retailers while also meeting the factories behind them. That dual perspective is worth the 
            trip alone.
          </p>

          {/* ─── Section 3: Preparation ─── */}
          <h2 id="prepare" className="text-3xl font-bold mt-16 mb-6">What to Prepare Before You Go</h2>
          <p>
            I&apos;ve seen too many buyers show up with nothing but a phone and good intentions. That&apos;s a waste 
            of a $3,000 trip. Here&apos;s what the serious buyers bring:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>3–5 physical reference samples.</strong> Bring sunglasses from competitors or brands you admire. 
            When you hand me a sample and say &quot;I want this quality, at this price point, with this hinge feel,&quot; 
            I can tell you in 30 seconds whether we can do it. Without a reference, we&apos;re both guessing.</li>
            <li><strong>100+ business cards.</strong> Not 20. Not 50. You will hand out more cards than you expect, 
            and running out makes you look unprepared. Pro cards, not the free VistaPrint ones with perforated edges.</li>
            <li><strong>A one-page spec sheet.</strong> Target retail price range, preferred materials (acetate, TR90, 
            metal, titanium), lens requirements (polarized, UV400, gradient, photochromic), certification needs (FDA, 
            CE, AS/NZS), and estimated first-order quantity. Print 20 copies. Hand them to every serious supplier 
            you meet.</li>
            <li><strong>Floor map with targets pre-marked.</strong> Download the exhibitor list and floor plan at least 
            two weeks before the show. Highlight every manufacturer in your category. Plan your route so you&apos;re 
            not zigzagging across halls. Day one: visit all your targets quickly (5–10 minutes each). Day two: return 
            to your top 3–5 for deeper conversations.</li>
            <li><strong>A portable charger and a physical notebook.</strong> Your phone will die by 2 PM. Taking notes 
            on paper is also faster than typing — jot down booth number, contact name, two specific things you discussed, 
            and a 1–10 rating. You will forget which booth was which by dinner. Everyone does.</li>
          </ul>

          {/* ─── Section 4: Evaluating Suppliers ─── */}
          <h2 id="evaluate" className="text-3xl font-bold mt-16 mb-6">How to Evaluate Suppliers at a Trade Show</h2>
          <p>
            You&apos;re standing in a booth. The samples look good. The salesperson is friendly. Now what? Here&apos;s 
            what I&apos;d check if I were on your side of the table:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">The Five Questions That Separate Factories from Fakes</h3>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>&quot;Where is your factory located? How many production lines do you run?&quot;</strong> — 
            A real factory answers this instantly. A trading company hesitates, gives a vague answer, or says 
            &quot;we work with several partner factories.&quot; That&apos;s your cue to move on.</li>
            <li><strong>&quot;Can you show me the inside of the temple tip?&quot;</strong> — Pick up a sample, look 
            closely at the finishing. Are mold lines visible? Is the hinge screw flush? Does the acetate feel solid 
            or hollow? You don&apos;t need to be an engineer. You just need to care enough to look. The exhibitor 
            who watches you do this without flinching is confident in their product.</li>
            <li><strong>&quot;What&apos;s your typical lead time for a 500-piece OEM order?&quot;</strong> — The right 
            answer is 30–45 days. If they say 15 days, either they&apos;re doing ODM from stock or they&apos;re 
            lying about being a factory. If they say 90 days, their production is overloaded and you&apos;ll be 
            deprioritized as a small buyer.</li>
            <li><strong>&quot;What certifications do your frames carry? Can I see the documentation?&quot;</strong> — 
            CE, FDA, UV400, and ISO 9001 are table stakes. A serious factory has the paperwork in the booth or can 
            email it within the hour. If they fumble for an answer, they&apos;re either not certified or they&apos;re 
            borrowing someone else&apos;s certificates — both are dealbreakers.</li>
            <li><strong>&quot;How do you handle quality control on export orders?&quot;</strong> — Listen for specifics: 
            &quot;We do AQL 2.5 on every order, send pre-shipment photos, and offer third-party inspection.&quot; A 
            vague &quot;we guarantee quality&quot; is meaningless. A factory that can describe their QC process in 
            detail has one. A factory that can&apos;t, doesn&apos;t.</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Red Flags I&apos;ve Learned to Spot</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>No sample drawer.</strong> A booth with only display cases and no backup samples tells you 
            they&apos;re showing prototypes, not production pieces. Ask to see &quot;what the 500th unit looks like, 
            not the first one.&quot;</li>
            <li><strong>Pricing too fast.</strong> If you ask about a frame and they quote a price within 10 seconds 
            without asking about quantity, materials, or customization — they&apos;re selling from stock. Not 
            necessarily bad, but you&apos;re not talking to a manufacturer.</li>
            <li><strong>No factory address on the business card.</strong> If the address is an office tower in a 
            business district and not an industrial zone, that&apos;s a red flag. Dongguan factories are in Dongguan, 
            not a serviced office in Hong Kong Central.</li>
          </ul>

          {/* ─── Section 5: Booth Visit Strategy ─── */}
          <h2 id="booth-strategy" className="text-3xl font-bold mt-16 mb-6">The Booth Visit Strategy Most Buyers Get Wrong</h2>
          <p>
            Most buyers do this: walk up to a booth, pick up a frame, ask &quot;how much?&quot;, take a catalog, 
            leave. That&apos;s not sourcing. That&apos;s window shopping with extra steps.
          </p>
          <p>
            Here&apos;s the strategy that actually works, learned from watching the most successful buyers who visit 
            our booth:
          </p>
          <p>
            <strong>Day one: reconnaissance.</strong> Walk the entire floor. Spend 5–7 minutes per target booth — 
            long enough to evaluate sample quality, ask the five questions above, and get a rough price range. Do not 
            negotiate. Do not commit. Take photos of the samples you like (ask permission first — some exhibitors 
            are sensitive about design copying), write down your 1–10 rating, and move on. By end of day one, you 
            should have visited 15–25 booths and narrowed to 5 serious candidates.
          </p>
          <p>
            <strong>Day two: deep dives.</strong> Return to your top 5. This time, sit down. Ask for water. Open 
            their catalog beyond the display pieces — ask to see&nbsp;
            <Link href="/products/" className="text-primary-600 hover:underline">their full range</Link>, not just 
            what&apos;s on the wall. Discuss your spec sheet in detail. Ask about&nbsp;
            <Link href="/blog/sunglasses-moq-guide" className="text-primary-600 hover:underline">MOQ flexibility</Link> for 
            a first order. The goal on day two is to have the conversation go deep enough that you can make a 
            real comparison between suppliers — price, capability, communication quality, and gut feeling.
          </p>
          <p>
            <strong>Day three: the quiet close.</strong> Most buyers have flown home by day three, especially at MIDO 
            where Monday is the slowest day. That&apos;s your advantage. Come back to your top 2–3 suppliers. The 
            booth staff is less stressed, more willing to talk, and more open to negotiating. I&apos;ve given 
            better pricing and shared more candid information on Monday afternoons than during the Saturday crush — 
            because the buyers who stay until the end are the serious ones.
          </p>
          <p>
            <strong>The critical mistake:</strong> spreading yourself across too many booths. If you visit 80 booths 
            in three days, you haven&apos;t had a real conversation with any of them. You&apos;ve collected 80 
            catalogs and zero relationships. Target 15–25 booths total, with meaningful follow-up conversations at 
            5–7 of them.
          </p>

          {/* ─── Section 6: Follow-Up ─── */}
          <h2 id="follow-up" className="text-3xl font-bold mt-16 mb-6">Post-Show Follow-Up That Actually Works</h2>
          <p>
            After every major show, I receive about 250 emails within the first week. Maybe 10 of them lead to real 
            business. The other 240 are some variation of &quot;Nice meeting you, please send catalog and best price.&quot;
          </p>
          <p>
            Here&apos;s what the 10 that work look like:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>Send within 48 hours.</strong> Not two weeks later. I can&apos;t remember which of the 200 
            faces I saw that day was yours unless you remind me while the memory is fresh. Day two after the show 
            is the ideal window.</li>
            <li><strong>Reference something specific.</strong> &quot;We talked about your acetate models with the 
            spring hinges — you mentioned your Mazzucchelli supplier relationship&quot; — this tells me you were paying 
            attention and this isn&apos;t a template blast to 50 factories.</li>
            <li><strong>Include your spec sheet and reference photos.</strong> The same ones you handed me at the booth. 
            I probably have it somewhere in my stack, but attaching it to your email saves me the search and makes me 
            more likely to reply same-day.</li>
            <li><strong>State your quantities and timeline.</strong> &quot;Looking to place a 300-piece trial order in 
            October for three SKUs&quot; is 10x more likely to get a serious response than &quot;what&apos;s your best 
            price?&quot; The first email sounds like a customer. The second sounds like tire-kicking.</li>
            <li><strong>Ask for one specific next step.</strong> &quot;Can you send me a formal quotation with FOB 
            pricing for SKUs A, B, and C by Friday?&quot; This gives me a clear action item with a deadline. I can 
            say yes or no. Either way, the conversation moves forward.</li>
          </ol>
          <p>
            One more thing: if a supplier doesn&apos;t respond within 3–4 business days, follow up once. If they 
            still don&apos;t respond, cross them off your list. A factory that can&apos;t reply to a post-show 
            inquiry from a qualified buyer within a week is telling you everything about how they&apos;ll handle your 
            production communication later.
          </p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Skip the Trade Show Floor — Start Direct</h2>
            <p className="text-xl mb-6 opacity-90">
              If you can&apos;t make it to MIDO or Hong Kong this year, let&apos;s talk. We&apos;ve been manufacturing 
              sunglasses since 2006 — samples in 3–7 days, OEM from 300 pieces, and every pair UV400 certified.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">View Our Full Catalog</h3>
                <p className="text-gray-600 text-sm">Browse 500+ ODM and OEM sunglasses designs — acetate, metal, TR90, and more.</p>
              </Link>
              <Link href="/blog/find-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Find a Reliable Manufacturer</h3>
                <p className="text-gray-600 text-sm">10 vetting criteria, Alibaba scams to avoid, and real negotiation tips from the factory side.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get a personalized quote for your custom sunglasses order. Samples in 3–7 days.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
