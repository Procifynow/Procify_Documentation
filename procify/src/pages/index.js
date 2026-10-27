import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import SearchBar from '@theme/SearchBar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
 
import styles from './index.module.css';
 
/* Static links */
const BASE_LINKS = {
  userGuide: '/docs/Docs/User%20Guide/Developer%20AI%20-%20User%20guide',
  trainingGuide: '/docs/Docs/Training%20Guide/Advance%20Training%20Guide',
};
 
/* Links and version, built from the latest release detected in docusaurus.config.js */
function useReleaseInfo() {
  const { siteConfig } = useDocusaurusContext();
  const latest = siteConfig.customFields?.latestRelease || null;
 
  return {
    version: latest ? latest.version : null,
    latest,
    links: {
      ...BASE_LINKS,
      releaseNotes: latest ? latest.path : '/docs/Docs/Release%20Notes',
    },
  };
}
 
function buildCards(links, extraGuides = []) {
  const main = [
    {
      icon: 'book',
      title: 'User Guide',
      text: 'Learn how to configure and use Procify features and functionality.',
      cta: 'Open User Guide',
      to: links.userGuide,
    },
    {
      icon: 'cap',
      title: 'Training Guide',
      text: 'Follow structured training material to learn Procify development and configuration.',
      cta: 'Open Training Guide',
      to: links.trainingGuide,
    },
    {
      icon: 'clipboard',
      title: 'Release Notes',
      text: 'Review new features, enhancements, fixes and changes introduced in Procify releases.',
      cta: 'View Release Notes',
      to: links.releaseNotes,
    },
  ];
 
  // Folders added later in docs/Docs get their own card automatically
  const extra = extraGuides.map((g) => ({
    icon: 'book',
    title: g.label,
    text: `Browse the ${g.label}.`,
    cta: `Open ${g.label}`,
    to: g.path,
  }));
 
  return [...main, ...extra];
}
 
/* Feature icons */
const ICONS = {
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),
  cap: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  clipboard: (
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </>
  ),
  layout: (
    <>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </>
  ),
  layers: (
    <>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  sync: (
    <>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </>
  ),
  plug: (
    <>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </>
  ),
  calendar: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </>
  ),
};
 
const FEATURES = [
  {
    icon: 'layout',
    title: 'Low-code visual tools',
    text: 'Design data models, screens and workflows in visual editors. Most tasks need no complex coding.',
  },
  {
    icon: 'layers',
    title: 'Build once, deploy anywhere',
    text: 'A single design works as both a web portal and a mobile app, on Android and iOS.',
  },
  {
    icon: 'sync',
    title: 'Online and offline support',
    text: 'Apps work without internet. Data syncs automatically when connectivity returns.',
  },
  {
    icon: 'plug',
    title: 'Enterprise integrations',
    text: 'Built-in connectors for SAP, OData and custom APIs, so you can plug into existing systems.',
  },
  {
    icon: 'calendar',
    title: 'Monthly platform updates',
    text: 'Procify releases improvements every month, without rebuilding your apps from scratch.',
  },
];
 
function Icon({ name }) {
  return (
    <svg
      className={styles.featureIcon}
      width="32"
      height="32"
      style={{ flex: 'none' }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
 
function Hero({ links, latest }) {
  const heroImage = useBaseUrl('/img/procify-docs-hero-light_2x.png');

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Documentation</p>
 
          <h1 className={styles.heroTitle}>Procify Technical Documentation</h1>
 
          <p className={styles.heroLead}>
            An enterprise-class low-code platform for transforming business
            ideas into outcomes. Guides, training and release notes in one
            place.
          </p>
 
          {/* The real site search, shown here so results open under this box */}
          <div className={styles.heroSearch}>
            <SearchBar />
          </div>
 
          <p className={styles.popular}>
            <span>Popular</span>
            <Link to={links.trainingGuide}>Advanced Training Guide</Link>
            {latest && (
              <Link to={links.releaseNotes}>Release {latest.version}</Link>
            )}
            <Link to={links.userGuide}>User Guide</Link>
          </p>
        </div>
 
        <div className={styles.heroImage}>
          <img
            src={heroImage}
            alt="Procify platform"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </header>
  );
}
 
function DocCards({ links }) {
  const { siteConfig } = useDocusaurusContext();
  const extraGuides = siteConfig.customFields?.extraGuides || [];
 
  return (
    <section className={`${styles.section} ${styles.alt}`}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Find what you need</h2>
 
        <div className={styles.cards}>
          {buildCards(links, extraGuides).map((card) => (
            <Link
              key={card.title}
              className={styles.card}
              to={card.to}
            >
              <span className={styles.cardIcon} aria-hidden="true">
                <Icon name={card.icon} />
              </span>
 
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
 
              <span className={styles.cardCta}>
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Key features</p>
 
        <h2 className={styles.h2}>
          Configure enterprise apps visually, then run them on web and mobile
        </h2>
 
        <ul className={styles.features}>
          {FEATURES.map((feature) => (
            <li key={feature.title} className={styles.feature}>
              <Icon name={feature.icon} />
 
              <div>
                <h3 className={styles.featureTitle}>
                  {feature.title}
                </h3>
                <p className={styles.featureText}>{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
 
function QuickAccess({ links }) {
  const quickLinks = [
    { label: 'Getting Started', to: links.userGuide },
    { label: 'Training Guide', to: links.trainingGuide },
    { label: "What's New", to: links.releaseNotes },
  ];
 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Quick access</h2>
 
        <div className={styles.quick}>
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              className={styles.pill}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
/* Advanced track sessions. Not shown right now: to bring the band back,
   add <Sessions links={links} /> at the end of <main> in Home. */
const SESSIONS = [
  { n: 1, title: 'Advanced BOL & Data Modelling', date: 'Mon, 07 Sep 2026' },
  { n: 2, title: 'Advanced Page Builder & Client-Side Debugging', date: 'Tue, 08 Sep 2026' },
  { n: 3, title: 'Security, Permissions & Data Access', date: 'Wed, 09 Sep 2026' },
  { n: 4, title: 'Offline, Middleware & Bulk Data', date: 'Thu, 10 Sep 2026' },
  { n: 5, title: 'Workflows, Scheduling & Notifications', date: 'Fri, 11 Sep 2026' },
  { n: 6, title: 'Reporting — Charts & Pivot Modeller', date: 'Mon, 14 Sep 2026' },
  { n: 7, title: 'Monitoring & Troubleshooting', date: 'Tue, 15 Sep 2026' },
  { n: 8, title: 'App Management, Branding & Deployment', date: 'Wed, 16 Sep 2026' },
];
 
function Sessions({ links }) {
  return (
    <section className={`${styles.section} ${styles.dark}`}>
      <div className={styles.container}>
        <p className={styles.eyebrowLight}>Advanced track · 8 sessions</p>
 
        <h2 className={styles.h2Light}>
          One application, eight advanced capabilities
        </h2>
 
        <p className={styles.lead}>
          Every session goes back into the same Customer Complaints app built
          in Developer Level 1 and layers one new capability onto it.
        </p>
 
        <div className={styles.sessions}>
          {SESSIONS.map((s) => (
            <Link
              key={s.n}
              className={styles.session}
              to={`${links.trainingGuide}#session-${s.n}`}
            >
              <span className={styles.sessionLabel}>Session {s.n}</span>
              <span className={styles.sessionTitle}>{s.title}</span>
              <span className={styles.sessionDate}>{s.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { latest, links } = useReleaseInfo();
 
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <Head>
        <body className="is-home" />
      </Head>
 
      <Hero links={links} latest={latest} />
 
      <main>
        <Features />
        <DocCards links={links} />
        <QuickAccess links={links} />
      </main>
    </Layout>
  );
}