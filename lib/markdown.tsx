import React from 'react';

// Hoist RegExp outside function to avoid recreation on every call
// See: https://vercel.com/blog/introducing-react-best-practices (rule 7.9)
const BOLD_REGEX = /(\*\*.*?\*\*)/g;

/**
 * Parse simple markdown bold syntax **text** and return JSX elements
 */
export function parseSimpleMarkdown(text: string): (string | React.ReactElement)[] {
  const parts = text.split(BOLD_REGEX);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
