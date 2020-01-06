const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Froes — Designer, Developer & Marketer`,
    titleTemplate: `%s — Froes — Designer, Developer & Marketer`,
    description: `This is the portfolio of a Designer, Developer, and Marketer who loves to work developing cohesive user experiences through comprehensive design systems.`,
    image: `/froes-og-image.png`,
    url: `https://froes.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Froes ⸺ Designer, Developer, and Marketer `,
        short_name: `Froes`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/project-page-layout.js"),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
