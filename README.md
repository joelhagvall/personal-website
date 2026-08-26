# joelhagvall.com

My personal website where I share my projects, writing, resume, and a bit about myself. Live at [joelhagvall.com](https://joelhagvall.com).

## About

Built with Next.js 16, React 19, and TypeScript, exported as a static site. I went with Tailwind CSS for styling and Radix UI for accessible components. Framer Motion handles the animations. Blog posts are MDX files in `content/blog`.

## What's Here

- **Home**: a quick intro with a GitHub contribution graph
- **About**: more about me
- **Projects**: things I've built, with live GitHub stats
- **Blog**: posts written in MDX, with an RSS feed at `/feed.xml`
- **Resume**: my experience and skills
- **Work with me** and **Contact**: how to get in touch
- **Privacy** and **Security policy**

## Markdown for agents

Every page also exists as plain markdown for AI agents and other non-browser clients. `scripts/generate-markdown.ts` writes a `.md` version of each page into `public/` after every build, and `vercel.json` serves it when a request comes in with `Accept: text/markdown`. The same files are reachable directly, for example `/about.md`. Missing paths get a short `404.md` with a real HTTP 404. There is also `/llms.txt` and `/agents.md` as entry points.

## Running Locally

```bash
bun install
bun run dev
```

Then open [localhost:3000](http://localhost:3000)

The GitHub contribution graph on the home page uses the GitHub API. Set `GITHUB_TOKEN` in `.env.local` to raise the rate limit (works without it too).

## Scripts

| Command | What it does |
| --- | --- |
| `bun run build` | Static export to `out/`, then generates RSS, markdown pages, and sitemap |
| `bun run test` | Jest tests |
| `bun run lint` | ESLint |
| `bun run lighthouse` | Lighthouse CI (desktop), `lighthouse:mobile` for mobile |
| `bun run a11y` | pa11y accessibility checks |
| `bun run audit` | Lighthouse and pa11y against the built site in one go |

## Deployment

Hosted on Vercel. Routing and security headers live in `vercel.json`.

## License

The code is MIT licensed, see [LICENSE](LICENSE). The content (blog posts, images, resume, and other personal material) is mine; please don't republish it as your own.
