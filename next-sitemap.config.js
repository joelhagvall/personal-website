const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(__dirname, 'content/blog');

// Real lastmod dates for blog posts from their frontmatter. Other pages leave
// lastmod out rather than claiming they changed on every build.
function blogLastmods() {
  const dates = {};
  for (const file of fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))) {
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8'));
    const date = data.updated ?? data.date;
    if (date) dates[`/blog/${file.replace(/\.mdx$/, '')}`] = new Date(date).toISOString();
  }
  return dates;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://joelhagvall.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/opengraph-image'],
  transform: async (config, loc) => {
    const lastmods = blogLastmods();
    const latestPost = Object.values(lastmods).sort().at(-1);
    const lastmod = loc === '/blog' ? latestPost : lastmods[loc];

    return {
      loc,
      ...(lastmod ? { lastmod } : {}),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
