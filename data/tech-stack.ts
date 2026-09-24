export const TECH_STACK = [
  { name: "Java", url: "https://www.java.com/", icon: "/tech/java.svg" },
  { name: "Python", url: "https://www.python.org/", icon: "/tech/python.svg" },
  { name: "React", url: "https://reactjs.org/", icon: "/tech/react.svg" },
  { name: "Next.js", url: "https://nextjs.org/", icon: "/tech/nextjs.svg" },
  { name: "PHP", url: "https://www.php.net/", icon: "/tech/php.svg" },
  { name: "Swift", url: "https://developer.apple.com/swift/", icon: "/tech/swift.svg" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "/tech/typescript.svg" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "/tech/javascript.svg" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: "/tech/postgresql.svg" },
  { name: "Supabase", url: "https://supabase.com/", icon: "/tech/supabase.webp", rounded: true },
  { name: "TanStack Query", url: "https://tanstack.com/query/latest", icon: "/tech/tanstack-query.svg" },
  { name: "TanStack", url: "https://tanstack.com/", icon: "/tech/tanstack.webp", rounded: true },
] as const;

export type TechStackItem = typeof TECH_STACK[number];
