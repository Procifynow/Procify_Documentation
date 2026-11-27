import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

// Floating shortcut to the App Teams blog, shown on every page (like the chat widget).
export default function BlogsFab() {
  const {pathname} = useLocation();
  const blogsUrl = useBaseUrl('/blogs');
  if (pathname.replace(/\/$/, '').endsWith('/blogs')) return null;
  return (
    <Link className={styles.fab} to={blogsUrl} aria-label="App Teams blogs">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
      <span>App Teams Blogs</span>
    </Link>
  );
}
