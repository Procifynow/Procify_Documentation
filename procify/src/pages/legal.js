import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './legal.module.css';

// Landing page of the "Legal" menu. The full texts stay in docs/Legal
// (Copyright.md and Disclaimer.md); this page introduces and links to them.

const ITEMS = [
  {
    title: 'Copyright',
    to: '/docs/Legal/Copyright',
    text: 'Ownership of the Procify documentation and the terms for reproducing or sharing it.',
    cta: 'Read the Copyright notice',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9.4a3.6 3.6 0 1 0 0 5.2" />
      </>
    ),
  },
  {
    title: 'Disclaimer',
    to: '/docs/Legal/Disclaimer',
    text: 'How the materials are provided and the limits of Procify Innovations Pvt. Ltd.’s liability.',
    cta: 'Read the Disclaimer',
    icon: (
      <>
        <path d="M12 3 2.5 20h19L12 3Z" />
        <path d="M12 10v4M12 17.2v.1" />
      </>
    ),
  },
];

function Icon({ children }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Legal() {
  return (
    <Layout
      title="Legal"
      description="Copyright and disclaimer for the Procify technical documentation."
    >
      <div className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.pill}>
              <span className={styles.pillDot} />
              Legal
            </p>
            <h1 className={styles.title}>
              Legal <span className={styles.accent}>information</span>
            </h1>
            <p className={styles.lead}>
              Copyright and disclaimer notices that apply to every Procify guide,
              training document and release note on this site.
            </p>
          </div>
        </header>

        <main className={styles.container}>
          <div className={styles.grid}>
            {ITEMS.map((item) => (
              <Link key={item.title} className={styles.card} to={item.to}>
                <span className={styles.cardIcon}>
                  <Icon>{item.icon}</Icon>
                </span>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.cardText}>{item.text}</span>
                <span className={styles.cardCta}>{item.cta} →</span>
              </Link>
            ))}
          </div>

          <aside className={styles.note}>
            <strong>© 2023 Procify Innovations Pvt. Ltd.</strong> All rights reserved.
            The same notices appear at the top of each guide’s sidebar.
          </aside>
        </main>
      </div>
    </Layout>
  );
}
