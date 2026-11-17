import React from 'react';
import clsx from 'clsx';
import Link from '@theme-original/DocSidebarItem/Link';

const LABELS = { latest: 'LATEST', major: 'MAJOR', minor: 'MINOR', patch: 'PATCH', hotfix: 'HOTFIX' };
const SUFFIX = /\s*KloBase Release Note\s*$/i;
const VERSION = /^\d+([.-]\d+)+$/; // e.g. 7.2.375 or 7-2-375

export default function LinkWrapper(props) {
  const { item } = props;
  const label = typeof item.label === 'string' ? item.label : '';
  const title = label.replace(SUFFIX, '').trim() || label;

  const badges = Array.isArray(item.customProps?.badges)
    ? [...new Set(item.customProps.badges.map((b) => String(b).toLowerCase()))]
    : [];
  const isRelease = badges.length > 0 || VERSION.test(title);

  // Only release-note links are changed; every other sidebar link stays as it is
  if (!isRelease) {
    return <Link {...props} />;
  }

  const hotfix = badges.includes('hotfix');
  const pills = badges.filter((b) => b !== 'hotfix');

  const newItem = {
    ...item,
    className: clsx(item.className, 'sb-release-item', hotfix && 'sb-release-item--hotfix'),
    label: (
      <span className="sb-label">
        <span className="sb-title">{title}</span>
        {(pills.length > 0 || hotfix) && (
          <span className="sb-badges">
            {pills.map((b) => (
              <span key={b} className={`sb-badge sb-badge--${b}`}>
                {LABELS[b] ?? b.toUpperCase()}
              </span>
            ))}
            {hotfix && <span className="sb-banner">HOTFIX</span>}
          </span>
        )}
      </span>
    ),
  };

  return <Link {...props} item={newItem} />;
}