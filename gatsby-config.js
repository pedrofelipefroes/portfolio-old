const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Froes`,
    titleTemplate: `%s —— Full Stack Design Work`,
    description: `From Design to Development to Marketing, Froes is a full stack Designer who stands for cohesive user experiences.`,
    image: `/froes-og-image.jpg`,
    url: `https://froes.design`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/project-page-template.js"),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `projects`),
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
