const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  // NOTE: remove `pathPrefix` if custom domain is configured
  pathPrefix: "/shutter-website",
  siteMetadata: {
    title: `Shutter Network`,
    description: `Preventing frontrunning and malicious MEV on Ethereum`,
    author: `@shutter`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shutter Network`,
        short_name: `Shutter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
  ],
};
