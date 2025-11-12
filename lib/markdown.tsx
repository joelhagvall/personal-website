import React from 'react';

/**
 * Parse simple markdown bold syntax **text** and return JSX elements
 */
export function parseSimpleMarkdown(text: string): (string | React.ReactElement)[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
