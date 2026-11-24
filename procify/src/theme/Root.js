import React from 'react';
import ChatWidget from '@site/src/components/ChatWidget';

// Docusaurus wraps the whole site in <Root>: the chat widget appears on every page.
export default function Root({children}) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
