module.exports = {
  siteMetadata: {
    title: `Thunderbots 5604`,
      menuLinks: [
        {
          name:'Home',
          link:'/index'
        },
        {
          name:'page2',
          link:'/page-2'
        },
        {
          name:'404',
          link:'/404'
        },
        {
          name:'using-ssr',
          link:'using-ssr'
        }
      ],
    description: `Mountain View's FTC robotics team's website`,
    author: `@gatsbyjs, Dao Zhu`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3498db`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/thunderbots-logo-icon-blue.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
