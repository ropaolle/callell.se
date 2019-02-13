module.exports = {
  siteMetadata: {
    title: `Callell.se`,
    description: `Webbutveckling av och för oss som äklskar kod.`,
    author: `@callell`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Callell.se`,
        short_name: `Callell`,
        start_url: `/`,
        background_color: `#3fa9f5`, // Light blue
        theme_color: `#f39200`, // Orange
        display: `minimal-ui`,
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
