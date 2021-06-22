# gridsome-starter-strapi

This is a Gridsome Starter using the headless CMS [Strapi](https://strapi.io). It is suppose to kick-start development with Strapi. 

A **[Demo](https://gridsome-starter-strapi.netlify.com)** is hosted on Netlify.

Under the hood, the starter is using the source plugin [`@gridsome/source-strapi`](https://gridsome.org/plugins/@gridsome/source-strapi) to pull data from Strapi into Gridsome's data store.

Images provided by Strapi are downloaded and saved locally via `onCreateNode`. Thus, the build version includes all images in `/static`.

Rich text which is provided as markdown from Strapi is prepared via `onCreateNode` and transformed to html using [@gridsome/transformer-remark](https://gridsome.org/plugins/@gridsome/transformer-remark).

![Gridsome-Starter-Strapi Preview](https://raw.githubusercontent.com/lukaskoeller/gridsome-starter-strapi/master/gridsome-starter-strapi-1680x1680.png)

## Strapi Setup

*Note: Steps that are marked with a check are already done and are just necessary if you set up a completely new project.*

1. ✅ Install the [@gridsome/source-strapi](https://gridsome.org/plugins/@gridsome/source-strapi) Plugin: `npm install @gridsome/source-strapi --save`
2. ✅ Add it to the config file:
```
export default {
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    }
  ]
}
```
3. Install Strapi by following the [Get Started Guide](https://strapi.io/documentation/v3.x/getting-started/quick-start.html).
4. Install Strapi and create a new project: `npx create-strapi-app gridsome-starter-strapi-cms --quickstart`.
5. Complete the form to create the first Administrator user.
6. Since we are using GraphQL, install the GraphQL plugin: `npm run strapi install graphql`. Open the GraphQL Playground ([http://localhost:1337/graphql](http://localhost:1337/graphql)) to test your queries.
7. Restart your server: `npm run develop`.
### Create Posts
1. In the Strapi Admin Interface you can now add Content Types (`Plugins` > `Content-Types Builder` > `Create new collection type`).
2. Name you new collection type `Post`.
3. Now, add 4 fields, namely `title` (text), `subtitle` (text), `article` (rich text) and `image` (single media).
4. Click on `Save` & `Publish`.
5. Add blog entries by clicking on `Collection Types` > `Posts` > `Add New Post`.
6. Go to `Settings` > `Roles` under `USERS & PERMISSIONS PLUGIN`. Click on the column saying `Public`. Put a check on `find` and `findOne` under `Post`. Click on `Save`.
7. ✅ In `gridsome.config.js` add `post` (API ID) under `contentTypes`.

## Gridsome Setup

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. ✅ `gridsome create gridsome-starter-strapi` to install default starter
2. ✅ `cd gridsome-starter-strapi` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lukaskoeller/gridsome-starter-strapi)
