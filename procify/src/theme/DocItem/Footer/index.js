import React, { useState } from 'react';
import Footer from '@theme-original/DocItem/Footer';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

const REPO = 'https://github.com/Procifynow/Procify_Documentation';

export default function FooterWrapper(props) {
  const { metadata } = useDoc();
  const [answered, setAnswered] = useState(false);

  const issueUrl =
    `${REPO}/issues/new?title=` +
    encodeURIComponent(`Docs feedback: ${metadata.title}`);

  return (
    <>
      <Footer {...props} />

      <div className={styles.feedback}>
        {answered ? (
          <strong>Thanks for your feedback.</strong>
        ) : (
          <>
            <strong>Was this page helpful?</strong>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.btn}
                onClick={() => setAnswered(true)}
              >
                Yes
              </button>
              <a className={styles.btn} href={issueUrl}>
                No
              </a>
              <a className={styles.report} href={issueUrl}>
                Report an issue
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}
