// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const http = require('http');
const path = require('path');

module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allStrapiPost {
        edges {
          node {
              id
              title
              subtitle
              article
              image {
                url
                caption
              }
          }
        }
      }
    }`)

    data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.id}`,
        component: './src/templates/Post.vue',
        context: {
          id: node.id
        }
      })
    })
  })

  api.onCreateNode((options, collection) => {
    // Transform article markdown into html
    if (options.article) {
      const markdownStore = collection._store.addCollection('StrapiMarkdown');
      const markdownNode = markdownStore.addNode({
        internal: {
          mimeType: 'text/markdown',
          content: options.article,
          origin: options.id,
        }
      });

      options.content = collection._store.createReference(markdownNode)
    }

    // Download image from Strapi and save it in ./src/assets/images
    if (options.image) {
      const filePath = `./src/assets/images/${options.image.hash + options.image.ext}`;

      http.get(`http://localhost:1337${options.image.url}`, (response) => {
        options.image.url = path.resolve(__dirname, filePath);

        const file = fs.createWriteStream(filePath);
        response.pipe(file);
      });
    }
  });
}
