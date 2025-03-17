/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ibraheemganayim.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://ibraheemganayim.com"
      }/sitemap.xml`,
    ],
  },
  exclude: ["/404", "/500", "/server-sitemap.xml"],
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
};
