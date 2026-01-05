import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-white mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-white mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-300 text-lg leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-primary hover:text-primary/80 underline decoration-primary/50 hover:decoration-primary transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-lg pl-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/50 pl-4 my-4 text-gray-400 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-primary">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-black/50 border border-primary/20 rounded-lg p-4 overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-primary/20 my-8" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-200">{children}</em>,
};
