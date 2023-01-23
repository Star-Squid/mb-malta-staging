/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Barbara, Mat, and Cat`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-google-gtag", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/barbara-assets/icon.png"
    }
  }]
};