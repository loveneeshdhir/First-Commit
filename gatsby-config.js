module.exports = {
  siteMetadata: {
    title: 'FirstCommit',
    author: 'loveneeshdhir',
    profile: 'https://github.com/loveneeshdhir',
    siteUrl: `https://firstcommit.org`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/profiles`,
        name: 'profiles',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-101997744-4",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      //for generating sitemaps for the website
      resolve: `gatsby-plugin-sitemap`
    }
  ]
}
