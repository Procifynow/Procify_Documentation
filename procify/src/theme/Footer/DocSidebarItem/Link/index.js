import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';

const LABELS = {
  latest: 'LATEST',
  major: 'MAJOR',
  minor: 'MINOR',
  patch: 'PATCH',
  hotfix: 'HOTFIX',
};

// "7.2.375 Klobase Release Note" -> "7.2.375"
function shortLabel(label) {
  if (typeof label !== 'string') return label;
  return label.replace(/\s*Klobase Release Note\s*$/i, '').trim();
}

export default function LinkWrapper(props) {
  const title = shortLabel(props.item.label);
  const badges = props.item.customProps?.badges;

  // No badges in front matter: just show the shortened label
  if (!Array.isArray(badges) || badges.length === 0) {
    return <Link {...props} item={{ ...props.item, label: title }} />;
  }

  const item = {
    ...props.item,
    label: (
      <span className="sb-label">
        <span className="sb-title">{title}</span>
        <span className="sb-badges">
          {badges.map((b) => (
            <span key={b} className={`sb-badge sb-badge--${b}`}>
              {LABELS[b] ?? String(b).toUpperCase()}
            </span>
          ))}
        </span>
      </span>
    ),
  };

  return <Link {...props} item={item} />;
}