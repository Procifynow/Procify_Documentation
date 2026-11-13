import React from 'react';
import clsx from 'clsx';
import Link from '@theme-original/DocSidebarItem/Link';
 
const LABELS = { latest: 'LATEST', major: 'MAJOR', minor: 'MINOR', patch: 'PATCH' };
const SUFFIX = /\s*Klobase Release Note\s*$/i;
 
export default function LinkWrapper(props) {
  const { item } = props;
 
  // Only release-note links are changed; every other sidebar link stays as it is
  if (typeof item.label !== 'string' || !SUFFIX.test(item.label)) {
    return <Link {...props} />;
  }
 
  const title = item.label.replace(SUFFIX, '').trim();
  const badges = Array.isArray(item.customProps?.badges) ? item.customProps.badges : [];
  const hotfix = badges.includes('hotfix');
  const pills = badges.filter((b) => b !== 'hotfix');
 
  const newItem = {
    ...item,
    className: clsx(item.className, 'sb-release-item', hotfix && 'sb-release-item--hotfix'),
    label: (
      <span className="sb-label">
        {hotfix && <span className="sb-banner">HOTFIX</span>}
        <span className="sb-title">{title}</span>
        {pills.length > 0 && (
          <span className="sb-badges">
            {pills.map((b) => (
              <span key={b} className={`sb-badge sb-badge--${b}`}>
                {LABELS[b] ?? String(b).toUpperCase()}
              </span>
            ))}
          </span>
        )}
      </span>
    ),
  };
 
  return <Link {...props} item={newItem} />;
}