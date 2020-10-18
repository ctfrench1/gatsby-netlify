/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Awesome-Bootstrap",
    description: "this is awesome chucks, awesome react div",
    keywords: "awesome chuck, react, bootstrap, wordpress",
    image: '/static/bill-nunn.jpg',
    url: 'http://www.awesomechuck.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {resolve: `gatsby-transformer-remark`},
    {resolve: `gatsby-source-wordpress`, options: {
      baseUrl: `practice.codingsrc.com`,
      protocol: `http`,
      hostingWPCOM: false,
    },
  },
  `gatsby-plugin-react-helmet`
  ],
}

/*
      <Helmet>
        <title>You Are The Sunshine</title>
        <meta name="descripton" content="yad yada yaddddaaa bing bang"/>
        <meta name="keywords" content="this keywor, that keyword"/>
        <meta name="robots" content="index,follow" />
      </Helmet>
*/