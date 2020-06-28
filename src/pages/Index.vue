<template>
  <Layout>
    <h1>Hi, and welcome to my Blog! 👋</h1>
    <section>
      <div class="post" v-for="post in $page.allStrapiPost.edges" :key="post.node.id">
        <g-image class="post__img" :src="post.node.image.url" :title="post.node.image.caption" />
        <g-link :to="`/blog/${post.node.id}`" class="post__info">
          <h2 class="post__title">{{ post.node.title }}</h2>
          <h4 class="post__subtitle">{{ post.node.subtitle }}</h4>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
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
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Gridsome-Starter-Strapi Blog'
  }
}
</script>

<style>
h1 {
  margin-bottom: 2rem;
  margin-top: 0rem;
  color: var(--color-accent);
}

section {
  width: 100%;
  margin-bottom: 11.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
  grid-gap: 2rem;
}

.post {
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 8px 60px 0px hsla(var(--color-numbers), 0.15);
}

.post__img {
  display: block;
  width: 100%;
  min-height: 260px;
  height: 14vw;
  object-fit: cover;
}

.post__info {
  display: block;
  padding: 1rem;
}

.post__title {
  margin: 0;
  color: var(--color);
}

.post__subtitle {
  font-weight: normal;
  color: var(--color-accent);
  margin-top: 0.5rem;
  margin-bottom: 0;
}
</style>
