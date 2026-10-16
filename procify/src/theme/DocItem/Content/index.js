import React from 'react';
import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Adds the class "is-latest-release" around the newest release note,
// so custom.css can show a LATEST badge beside its title.
export default function ContentWrapper(props) {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const latest = siteConfig.customFields?.latestRelease;

  const isLatest =
    latest && decodeURIComponent(latest.path).endsWith(`/${metadata.id}`);

  return (
    <div className={isLatest ? 'is-latest-release' : undefined}>
      <Content {...props} />
    </div>
  );
}
