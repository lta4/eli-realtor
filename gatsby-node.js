/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

//Implement the Gatsby API "onCreatePage". This is called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
    * During the build step, `auth0-js` will break because it relies on browser-specific APIS. Fortunately, we don't need it during the build. Using Webpack's null loader, we're able to effectively ignore `auth0-js` during the build. 
    */
   actions.setWebpackConfig({
     module: {
       rules: [
         {
           test: /auth0-js/,
           use: loaders.null(),
         },
       ],
     },
   })
  }
}

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
                title
                author
                date
                path
          }
          html
        }
      }
    }
  }
  `)
  .then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(result.data.allMarkdownRemark)

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(markdown => {
      createPage({
        // Path for this page — required
        path: `andrew/${markdown.node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {
            blog: markdown
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}