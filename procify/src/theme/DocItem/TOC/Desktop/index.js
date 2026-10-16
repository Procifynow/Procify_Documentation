import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOC from '@theme/TOC';
 
import {sessionToc} from '../../../../utils/sessionToc.js';
 
// Same as the built-in component, except that session pages list only sessions
export default function DocItemTOCDesktop() {
  const {toc, frontMatter} = useDoc();
  const view = sessionToc(toc);
 
  return (
    <TOC
      toc={view.toc}
      minHeadingLevel={
        frontMatter.toc_min_heading_level ?? view.minHeadingLevel
      }
      maxHeadingLevel={
        frontMatter.toc_max_heading_level ?? view.maxHeadingLevel
      }
      className={clsx(
        ThemeClassNames.docs.docTocDesktop,
        view.isSessionPage && 'toc-sessions',
      )}
    />
  );
}