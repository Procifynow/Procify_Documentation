import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 
import styles from './styles.module.css';
 
const DOCS = {
  userGuide: '/docs/Docs/User%20Guide/Developer%20AI%20-%20User%20guide',
  beginner: '/docs/Docs/Training%20Guide/Training%20Guide%20Beginner',
  advanced: '/docs/Docs/Training%20Guide/Advance%20Training%20Guide',
};
 
const REPO = 'https://github.com/Procifynow/Procify_Documentation';
 
export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const latest = siteConfig.customFields?.latestRelease;
  // Any extra folder in docs/Docs (for example "Installation Guide")
  const extraGuides = siteConfig.customFields?.extraGuides || [];
  // Always the highest-numbered release note (detected in docusaurus.config.js)
  const releaseNotes = latest ? latest.path : '/docs/Docs/Release%20Notes';
 
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <svg width="30" height="30" viewBox="0 0 28 28" aria-hidden="true">
                <circle cx="14" cy="14" r="11" fill="none" stroke="#E61E25" strokeWidth="4" />
                <circle cx="14" cy="14" r="3.5" fill="#E61E25" />
              </svg>
              <span>Procify</span>
            </div>
 
            <p className={styles.address}>
              Procify Innovations Pvt Ltd.
              <br />
              Starmark Camelot, 3rd Floor, Whitefield, Bengaluru, Karnataka –
              560066
            </p>
 
            <p className={styles.contact}>
              <a href="mailto:experts@procifynow.com">experts@procifynow.com</a>
              {' · '}
              <a href="https://www.procifynow.com">www.procifynow.com</a>
              <br />
              +91 829 6969 824
            </p>
          </div>
 
          <div className={styles.col}>
            <div className={styles.heading}>Documentation</div>
            <div className={styles.links}>
              <Link to={DOCS.userGuide}>User Guide</Link>
              <Link to={DOCS.beginner}>Beginner Training</Link>
              <Link to={DOCS.advanced}>Advanced Training</Link>
              {extraGuides.map((g) => (
                <Link key={g.label} to={g.path}>
                  {g.label}
                </Link>
              ))}
              <Link to={releaseNotes}>Release Notes</Link>
            </div>
          </div>
 
          <div className={styles.col}>
            <div className={styles.heading}>Developer resources</div>
            <div className={styles.links}>
              <a href={REPO}>GitHub repository</a>
              <a href={`${REPO}/issues`}>Report an issue</a>
            </div>
          </div>
 
          <div className={styles.col}>
            <div className={styles.heading}>Procify</div>
            <div className={styles.links}>
              <a href="https://www.procifynow.com">Website</a>
              <a href="mailto:experts@procifynow.com">Contact the experts</a>
            </div>
          </div>
        </div>
 
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Procify Innovations Pvt Ltd.
        </div>
      </div>
    </footer>
  );
}