/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://ibraheemganayim-portfolio.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/" },
    ],
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://ibraheemganayim-portfolio.vercel.app"
      }/sitemap.xml`,
    ],
  },
  exclude: ["/404", "/500", "/server-sitemap.xml", "/api/*"],
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    const priority =
      path === "/"
        ? 1.0
        : path === "/projects"
        ? 0.9
        : path === "/about"
        ? 0.8
        : path === "/contact"
        ? 0.7
        : 0.6;

    const changefreq =
      path === "/" ? "daily" : path === "/projects" ? "weekly" : "monthly";

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
