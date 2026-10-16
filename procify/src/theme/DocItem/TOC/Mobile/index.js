import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOCCollapsible from '@theme/TOCCollapsible';
 
import {sessionToc} from '../../../../utils/sessionToc.js';
 
// Same as the built-in component, except that session pages list only sessions
export default function DocItemTOCMobile() {
  const {toc, frontMatter} = useDoc();
  const view = sessionToc(toc);
 
  return (
    <TOCCollapsible
      toc={view.toc}
      minHeadingLevel={
        frontMatter.toc_min_heading_level ?? view.minHeadingLevel
      }
      maxHeadingLevel={
        frontMatter.toc_max_heading_level ?? view.maxHeadingLevel
      }
      className={clsx(
        ThemeClassNames.docs.docTocMobile,
        view.isSessionPage && 'toc-sessions',
      )}
    />
  );
}