export const TECH_STACK = [
  { name: "Java", url: "https://www.java.com/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", url: "https://www.python.org/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", url: "https://reactjs.org/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://nextjs.org/", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg" },
  { name: "PHP", url: "https://www.php.net/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Swift", url: "https://developer.apple.com/swift/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PostgreSQL", url: "https://www.postgresql.org/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", url: "https://supabase.com/", icon: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4", rounded: true },
  { name: "TanStack Query", url: "https://tanstack.com/query/latest", icon: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" },
  { name: "TanStack", url: "https://tanstack.com/", icon: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4", rounded: true },
] as const;

export type TechStackItem = typeof TECH_STACK[number];
