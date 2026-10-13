import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 
import styles from './index.module.css';
 
/* Latest release */
const LATEST_RELEASE = '7.7.564';
 
const LINKS = {
  userGuide: '/docs/Docs/User%20Guide/Developer%20AI%20-%20User%20guide',
  trainingGuide: '/docs/Docs/Training%20Guide/Advance%20Training%20Guide',
  releaseNotes: `/docs/Docs/Release%20Notes/${LATEST_RELEASE}`,
};
 
const CARDS = [
  {
    icon: '📘',
    title: 'User Guide',
    text: 'Learn how to configure and use Procify features and functionality.',
    cta: 'Open User Guide',
    to: LINKS.userGuide,
  },
  {
    icon: '🎓',
    title: 'Training Guide',
    text: 'Follow structured training material to learn Procify development and configuration.',
    cta: 'Open Training Guide',
    to: LINKS.trainingGuide,
  },
  {
    icon: '📋',
    title: 'Release Notes',
    text: 'Review new features, enhancements, fixes and changes introduced in Procify releases.',
    cta: 'View Release Notes',
    to: LINKS.releaseNotes,
  },
];
 
/* Feature icons */
const ICONS = {
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
 
const QUICK_LINKS = [
  { label: 'Getting Started', to: LINKS.userGuide },
  { label: 'Training Guide', to: LINKS.trainingGuide },
  { label: "What's New", to: LINKS.releaseNotes },
];
 
function Icon({ name }) {
  return (
    <svg
      className={styles.featureIcon}
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
 
function Hero() {
  const heroBackground = useBaseUrl(
    '/img/procify-docs-hero-light_2x.png',
  );
 
  return (
    <header
      className={styles.heroBanner}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.94) 0%,
          rgba(255, 255, 255, 0.78) 48%,
          rgba(255, 255, 255, 0.18) 100%
        ), url("${heroBackground}")`,
      }}
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>Documentation</p>
 
        <h1 className={styles.heroTitle}>
          Procify Technical Documentation
        </h1>
 
        <p className={styles.heroLead}>
          An enterprise-class low-code platform for transforming business
          ideas into outcomes.
        </p>
 
        <div className={styles.actions}>
          <Link className={styles.btnPrimary} to={LINKS.userGuide}>
            Get started →
          </Link>
 
          <Link className={styles.btnGhost} to={LINKS.releaseNotes}>
            What&apos;s new in {LATEST_RELEASE}
          </Link>
        </div>
 
        <span className={styles.version}>
          Latest release {LATEST_RELEASE}
        </span>
      </div>
    </header>
  );
}
 
function DocCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Find what you need</h2>
 
        <div className={styles.cards}>
          {CARDS.map((card) => (
            <Link
              key={card.title}
              className={styles.card}
              to={card.to}
            >
              <span className={styles.cardIcon} aria-hidden="true">
                {card.icon}
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
    <section className={`${styles.section} ${styles.alt}`}>
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
 
function QuickAccess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Quick access</h2>
 
        <div className={styles.quick}>
          {QUICK_LINKS.map((link) => (
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
 
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
 
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <Hero />
 
      <main>
        <DocCards />
        <Features />
        <QuickAccess />
      </main>
    </Layout>
  );
}