// EyeView Blog Post Template with GEO Components
// Usage: Copy this template for new blog posts
//
// GEO Checklist (auto-included):
// ✅ KeyTakeaways - AI-extractable summary
// ✅ FAQPage Schema - Voice search + AI Q&A
// ✅ Article Schema - With datePublished, dateModified, author
// ✅ BreadcrumbList - Navigation schema
// ✅ Table of Contents - AI parseable heading hierarchy

import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats, ProsCons, DefinitionBlock } from '@/components/GEOContent';

/* ═══════ METADATA ═══════
 * Replace placeholders below with actual content.
 * Keep title under 60 chars, description under 160.
 */
export const metadata: Metadata = {
  title: '【标题 - 50~60字符】',
  description: '【描述 - 140~160字符，含关键词】',
  keywords: ['【关键词1】', '【关键词2】', '【关键词3】', '【关键词4】', '【关键词5】'],
  alternates: {
    canonical: '/blog/【slug】',
  },
};

/* ═══════ GEO DATA ═══════
 * Define KeyTakeaways, QuickStats, and FAQs here.
 * These auto-render with JSON-LD schema for AI search engines.
 */
const takeaways = [
  '【要点 1：一句话结论，含具体数据更好】',
  '【要点 2】',
  '【要点 3】',
  '【要点 4】',
  '【要点 5】',
  '【要点 6】',
];

const quickStats = [
  { label: '【数据标签】', value: '【数值】' },
  { label: '【数据标签】', value: '【数值】' },
  { label: '【数据标签】', value: '【数值】' },
  { label: '【数据标签】', value: '【数值】' },
];

const faqs = [
  {
    question: '【问题 1 — 用自然语言，像用户会搜索的那样】',
    answer: '【回答 — 简洁、信息密度高、2~4 句即可】',
  },
  {
    question: '【问题 2】',
    answer: '【回答】',
  },
  {
    question: '【问题 3】',
    answer: '【回答】',
  },
  {
    question: '【问题 4】',
    answer: '【回答】',
  },
  {
    question: '【问题 5】',
    answer: '【回答】',
  },
];

/* ═══════ CONSTANTS ═══════ */
const PUBLISH_DATE = '2026-【MM】-【DD】';
const SLUG = '【slug】';

export default function BlogPostPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: '【标题】' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "【标题】",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "【描述】",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">【分类】</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>【X】 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            【标题】
          </h1>
          <p className="text-xl text-gray-600">
            【导语 — 1~2 句吸引读者继续往下读】
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
            <li><a href="#section-1" className="text-primary-600 hover:underline">【章节 1】</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">【章节 2】</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">【章节 3】</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">【章节 4】</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats (optional — use for data-heavy articles) */}
          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Quick Facts" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">【章节 1 标题】</h2>
          <p>【内容】</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">【章节 2 标题】</h2>
          <p>【内容】</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">【章节 3 标题】</h2>
          <p>【内容】</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">【章节 4 标题】</h2>
          <p>【内容】</p>

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
            <h2 className="text-3xl font-bold mb-4">【CTA 标题】</h2>
            <p className="text-xl mb-6 opacity-90">【CTA 描述】</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Replace with actual related articles */}
              <Link href="/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">【相关文章/产品】</h3>
                <p className="text-gray-600 text-sm">【简短描述】</p>
              </Link>
              <Link href="/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">【相关文章/产品】</h3>
                <p className="text-gray-600 text-sm">【简短描述】</p>
              </Link>
              <Link href="/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get a quote for your custom wholesale sunglasses order.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
