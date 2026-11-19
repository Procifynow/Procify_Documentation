import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
      width="26"
      height="26"
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

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function GuideSection({ guide, query }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? guide.items.filter((i) => i.label.toLowerCase().includes(q))
      : guide.items;
  }, [guide.items, query]);

  if (query.trim() && filtered.length === 0) return null;

  return (
    <section className={styles.guide} id={slug(guide.label)}>
      {/* coloured header: icon + menu name */}
      <Link className={styles.guideHead} to={guide.path}>
        <span className={styles.iconCircle}>
          <Icon name={guide.label} />
        </span>
        <span className={styles.guideTitle}>{guide.label}</span>
        <span className={styles.count}>
          {guide.items.length} {guide.items.length === 1 ? 'guide' : 'guides'}
        </span>
      </Link>

      {/* body: every guide available in this menu */}
      <div className={styles.guideBody}>
        <p className={styles.desc}>{guide.description}</p>

        <ul className={styles.topics}>
          {filtered.map((item) => (
            <li key={item.path} className={styles.topic}>
              <Link to={item.path} title={item.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link className={styles.cta} to={guide.path}>
          Open {guide.label} →
        </Link>
      </div>
    </section>
  );
}

export default function Documentation() {
  const { siteConfig } = useDocusaurusContext();
  const catalog = siteConfig.customFields?.docCatalog || [];
  const [query, setQuery] = useState('');

  const total = catalog.reduce((n, g) => n + g.items.length, 0);

  const anyMatch =
    !query.trim() ||
    catalog.some((g) =>
      g.items.some((i) => i.label.toLowerCase().includes(query.trim().toLowerCase())),
    );

  return (
    <Layout
      title="Documentation"
      description="Procify technical documentation: user guide, installation guide, training guide, release notes and API links."
    >
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Documentation</p>
            <h1 className={styles.title}>Procify Technical Documentation</h1>
            <p className={styles.lead}>
              Everything available in one place: {catalog.length} menus and{' '}
              {total} guides. Every guide is listed under its menu below, or search for one.
            </p>

            <label className={styles.search}>
              <svg
                width="20"
                height="20"
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
                placeholder="Search guides…"
                aria-label="Search guides"
              />
            </label>

            {!query.trim() && (
              <nav className={styles.jump} aria-label="Sections">
                {catalog.map((g) => (
                  <a key={g.label} href={`#${slug(g.label)}`}>
                    {g.label}
                    <span>{g.items.length}</span>
                  </a>
                ))}
              </nav>
            )}
          </div>
        </header>

        <main className={styles.container}>
          <div className={styles.grid}>
            {catalog.map((guide) => (
              <GuideSection key={guide.label} guide={guide} query={query} />
            ))}

            {!anyMatch && (
              <p className={styles.empty}>
                No guides match “{query}”. Try a different word.
              </p>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}
