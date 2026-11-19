import React, { useState } from 'react';
import Paginator from '@theme-original/DocItem/Paginator';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

import styles from '../Footer/styles.module.css';

const REPO = 'https://github.com/Procifynow/Procify_Documentation';

function Feedback() {
  const { metadata } = useDoc();
  const [answered, setAnswered] = useState(false);

  const issueUrl =
    `${REPO}/issues/new?title=` +
    encodeURIComponent(`Docs feedback: ${metadata.title}`);

  return (
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
  );
}

// Previous / Next first, feedback box below it.
export default function PaginatorWrapper(props) {
  return (
    <>
      <Paginator {...props} />
      <Feedback />
    </>
  );
}
