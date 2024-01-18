const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    title: `Shutter Network`,
    description: `Preventing front running and malicious MEV on Ethereum`,
    author: `@shutter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    }
  ],
};
