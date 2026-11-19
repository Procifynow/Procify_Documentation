import React from 'react';
import Footer from '@theme-original/DocItem/Footer';

// The "Was this page helpful?" box now lives in ../Paginator so that it
// appears below the Previous / Next links.
export default function FooterWrapper(props) {
  return <Footer {...props} />;
}
