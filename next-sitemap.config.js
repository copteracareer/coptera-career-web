/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://career.coptera.id",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COPTERA_API}/api/job-vacancy`
    );
    const data = await res.json();

    const base = String(config.siteUrl).replace(/\/$/, "");
    const jobUrls = data.data.data.map((job) => {
      return {
        loc: `${base}/job/${job.id}`,
        changefreq: "daily",
        priority: 0.8,
        lastmod: new Date(job.updated_at || job.created_at).toISOString(),
      };
    });

    return jobUrls;
  },
};
