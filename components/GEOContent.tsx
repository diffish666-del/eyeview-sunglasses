/**
 * GEO (Generative Engine Optimization) Content Components
 * 
 * These components produce structured, LLM-friendly content blocks that
 * AI search engines (ChatGPT, Google SGE, Perplexity, Bing Copilot) can
 * easily extract, cite, and surface in generative answers.
 * 
 * GEO Strategy:
 * - Clear heading hierarchies with question-based H2/H3
 * - Key takeaways for "at a glance" extraction
 * - Definition blocks for entity optimization
 * - Structured comparison tables (JSON-LD compatible)
 * - Statistics with source citations
 * - Pros/Cons lists for balanced answers
 */

import React from 'react';

/* ─── Key Takeaways ───
 * AI models love bullet-point summaries. This component renders a
 * visually distinct box that's structurally ideal for extraction.
 */
export function KeyTakeaways({ items, title = 'Key Takeaways' }: {
  items: string[];
  title?: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Thing', name: item },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-8">
        <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="text-blue-500 mt-1 flex-shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* ─── Definition Block ───
 * Clear term definitions help AI models understand and cite your content.
 * Uses Definition + DefinedTerm schema for entity optimization.
 */
export function DefinitionBlock({ term, definition, category }: {
  term: string;
  definition: string;
  category?: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term,
    description: definition,
    ...(category ? { inDefinedTermSet: { '@type': 'DefinedTermSet', name: category } } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-green-50 border-l-4 border-green-500 px-5 py-4 my-6 rounded-r-lg">
        <dt className="font-bold text-green-900 mb-1">{term}</dt>
        <dd className="text-gray-700 ml-0">{definition}</dd>
      </div>
    </>
  );
}

/* ─── Quick Stats ───
 * Data points with citations are highly valued by AI search engines.
 * Uses Statistic schema for direct extraction.
 */
export function QuickStats({ stats, title = 'Quick Stats' }: {
  stats: { label: string; value: string; source?: string }[];
  title?: string;
}) {
  const jsonLd = stats.map((stat, i) => ({
    '@context': 'https://schema.org',
    '@type': 'Statistic',
    name: stat.label,
    value: stat.value,
    ...(stat.source ? { citation: { '@type': 'CreativeWork', name: stat.source } } : {}),
  }));

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
        <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-amber-700">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              {stat.source && (
                <div className="text-xs text-gray-400 mt-2">Source: {stat.source}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Comparison Table ───
 * Structured tables are ideal for AI extraction and comparison queries.
 * Uses structured data attributes for LLM readability.
 */
export function ComparisonTable({ title, headers, rows, footnote }: {
  title: string;
  headers: string[];
  rows: { label: string; values: (string | React.ReactNode)[] }[];
  footnote?: string;
}) {
  // Generate JSON-LD Table schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Table',
    name: title,
    about: title,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" role="table" aria-label={title}>
            <thead>
              <tr className="bg-gray-100">
                {headers.map((h, i) => (
                  <th key={i} className="border border-gray-200 p-3 text-left font-bold text-sm" scope="col">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-200 p-3 font-medium text-sm">{row.label}</td>
                  {row.values.map((v, vi) => (
                    <td key={vi} className="border border-gray-200 p-3 text-sm">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footnote && <p className="text-xs text-gray-400 mt-2">{footnote}</p>}
      </div>
    </>
  );
}

/* ─── Pros Cons ───
 * Balanced evaluations are perfect for AI-generated "should I..." answers.
 */
export function ProsCons({ good, bad, title }: {
  good: string[];
  bad: string[];
  title?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8" role="region" aria-label={title || 'Pros and Cons'}>
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
          <span>✅</span> {title ? `Pros of ${title}` : 'Pros'}
        </h4>
        <ul className="space-y-2">
          {good.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700 text-sm">
              <span className="text-green-500 mt-0.5 flex-shrink-0">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
          <span>⚠️</span> {title ? `Cons of ${title}` : 'Cons'}
        </h4>
        <ul className="space-y-2">
          {bad.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-700 text-sm">
              <span className="text-red-500 mt-0.5 flex-shrink-0">−</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Author Bio (Expert/Entity signal) ───
 * E-E-A-T signals are critical for AI trust scoring.
 */
export function AuthorBio({ name, role, experience, expertise }: {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: role,
    description: experience,
    knowsAbout: expertise,
    affiliation: {
      '@type': 'Organization',
      name: 'EyeView Sunglasses',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 my-8">
        <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{role}, EyeView Sunglasses</div>
          <p className="text-sm text-gray-600 mt-1">{experience}</p>
        </div>
      </div>
    </>
  );
}

/* ─── Content Cluster ───
 * Groups related content for AI topic understanding.
 */
export function ContentCluster({ topics }: {
  topics: { label: string; items: string[] }[];
}) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
      <h3 className="font-bold text-gray-800 mb-4">📚 Explore Related Topics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, i) => (
          <div key={i}>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">{topic.label}</h4>
            <ul className="space-y-1">
              {topic.items.map((item, j) => (
                <li key={j} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
