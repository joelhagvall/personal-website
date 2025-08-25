// ESLint 9 flat config for Next.js 15
import next from 'eslint-config-next';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  ...next(), // includes core-web-vitals by default in Next 15
  {
    ignores: ['node_modules', '.next', 'dist', 'build', '**/*.config.*'],
  },
];


