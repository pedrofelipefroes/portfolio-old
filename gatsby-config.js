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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
