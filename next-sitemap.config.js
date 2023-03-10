const url = process.env.BASEURL || ""

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: url,
  generateRobotsTxt: true,
  changefreq: "monthly",
  exclude: ["/dashboard/" /* , "/produits/sitemap.xml" */],
  transform: async (_config, path) => {
    const n = path.split("/").filter((f) => f.length > 0)
    return {
      loc: path,
      priority: 1 - n.length * 0.1,
      lastmod: new Date().toISOString(),
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/dashboard/",
      },
    ],
  },
}

module.exports = config
