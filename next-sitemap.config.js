/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://joelhagvall.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Defaults
    let changefreq = 'daily';
    let priority = 0.7;

    if (path === '/') {
      changefreq = 'daily';
      priority = 1.0;
    } else if (path === '/projects') {
      changefreq = 'weekly';
      priority = 0.6;
    } else if (path === '/resume') {
      changefreq = 'monthly';
      priority = 0.5;
    } else if (path === '/about') {
      changefreq = 'monthly';
      priority = 0.5;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};


