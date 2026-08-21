# joelhagvall.com

My personal website where I share my projects, resume, and a bit about myself. Live at [joelhagvall.com](https://joelhagvall.com).

## About

Built with Next.js 16, React 19, and TypeScript. I went with Tailwind CSS for styling and Radix UI for accessible components. Framer Motion handles the animations.

## What's Here

- **Home** — A quick intro
- **About** — More about me
- **Projects** — Things I've built, with live GitHub stats
- **Resume** — My experience and skills

## Running Locally

```bash
bun install
bun run dev
```

Then open [localhost:3000](http://localhost:3000)

The GitHub contribution graph on the home page uses the GitHub API. Set `GITHUB_TOKEN` in `.env.local` to raise the rate limit (works without it too).

## Deployment

Hosted on Vercel.

## License

The code is MIT licensed — see [LICENSE](LICENSE). The content (blog posts, images, resume, and other personal material) is mine; please don't republish it as your own.
