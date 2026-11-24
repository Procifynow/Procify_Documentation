import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './documentation.module.css';

// Landing page of the "Documentation" menu.
// Lists every menu of the Documentation dropdown with the guides it contains.
// The data comes from docusaurus.config.js (customFields.docCatalog), so new
// guide folders show up here automatically after a restart.

const ICONS = {
  'User Guide': (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),
  'Installation Guide': (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  'Training Guide': (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </>
  ),
  'Procify Certificates': (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  'Release Notes': (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  'API Document Link': (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS['User Guide']}
    </svg>
  );
}

// Internal pages use <Link>. "plain" = a static file of this site (the API
// reference in static/api/bol), opened with a normal link.
function SmartLink({ to, external, plain, children, ...props }) {
  const staticUrl = useBaseUrl(to || '/');
  if (plain) {
    return (
      <a href={staticUrl} {...props}>
        {children}
      </a>
    );
  }
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

const matches = (label, q) => label.toLowerCase().includes(q);

function GuideCard({ guide }) {
  const n = guide.items.length;
  return (
    <SmartLink className={styles.card} to={guide.path} external={guide.external} plain={guide.plain}>
      <span className={styles.cardHead}>
        <span className={styles.cardIcon}>
          <Icon name={guide.label} />
        </span>
        <span className={styles.cardTitle}>{guide.label}</span>
      </span>
      <span className={styles.cardDesc}>{guide.description}</span>
      <span className={styles.cardCount}>
        {n} {guide.unit || (n === 1 ? 'guide' : 'guides')}
      </span>
    </SmartLink>
  );
}

function FeatureTile({ guide, title, text, variant }) {
  return (
    <SmartLink
      className={`${styles.tile} ${styles[variant]}`}
      to={guide.path}
      external={guide.external}
      plain={guide.plain}
    >
      <span className={styles.tileIcon}>
        <Icon name={guide.label} />
      </span>
      <span className={styles.tileTitle}>{title}</span>
      <span className={styles.tileText}>{text}</span>
    </SmartLink>
  );
}

export default function Documentation() {
  const { siteConfig } = useDocusaurusContext();
  const catalog = siteConfig.customFields?.docCatalog || [];
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  // search across every guide of every menu
  const results = useMemo(() => {
    if (!q) return [];
    const out = [];
    for (const g of catalog) {
      for (const item of g.items) {
        if (matches(item.label, q)) out.push({ ...item, group: g.label });
      }
    }
    return out;
  }, [catalog, q]);

  const releaseNotes = catalog.find((g) => g.label === 'Release Notes');
  const api = catalog.find((g) => g.label === 'API Document Link');

  return (
    <Layout
      title="Documentation"
      description="Procify technical documentation: user guide, installation guide, training guide, release notes and API links."
    >
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>Procify Documentation</h1>
            <p className={styles.lead}>How can we help you today?</p>

            <label className={styles.search}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for guides…"
                aria-label="Search for guides"
              />
            </label>
          </div>
        </header>

        <main className={styles.container}>
          {q ? (
            <section aria-live="polite">
              <p className={styles.resultsHead}>
                {results.length} result{results.length === 1 ? '' : 's'} for “{query.trim()}”
              </p>
              {results.length > 0 ? (
                <ul className={styles.results}>
                  {results.map((r) => (
                    <li key={`${r.group}-${r.path}`}>
                      <SmartLink to={r.path} external={r.external} plain={r.plain}>
                        <span className={styles.resultTitle}>{r.label}</span>
                        <span className={styles.resultGroup}>{r.group}</span>
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.empty}>No guides match. Try a different word.</p>
              )}
            </section>
          ) : (
            <>
              <div className={styles.grid}>
                {catalog.map((guide) => (
                  <GuideCard key={guide.label} guide={guide} />
                ))}
              </div>

              {(releaseNotes || api) && (
                <div className={styles.tiles}>
                  {releaseNotes && (
                    <FeatureTile
                      guide={releaseNotes}
                      variant="tileGreen"
                      title="What's new"
                      text="Read the latest Procify release notes."
                    />
                  )}
                  {api && (
                    <FeatureTile
                      guide={api}
                      variant="tileRose"
                      title="API reference"
                      text="Browse the BOL API modules, classes and enums."
                    />
                  )}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </Layout>
  );
}
