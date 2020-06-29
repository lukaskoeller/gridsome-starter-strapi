<template>
  <Layout>
    <article>
        <div class="article__hero">
            <g-image class="article__img" :src="$page.strapiPost.image.url"/>
        </div>
        <h1 class="article__title">{{ $page.strapiPost.title }}</h1>
        <div class="article__body">
            {{ $page.strapiPost.article }}
        </div>
    </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  strapiPost(id: $id) {
    title
    article
    image {
        url
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
article {
    margin: 0 auto;
    max-width: 1200px;
    width: auto;
    color: var(--color);
}

.article__hero {
    width: 100%;
    height: 500px;
}

.article__img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
}

.article__title {
    font-weight: normal;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0rem;
}

.article__body {
    font-size: 1.1rem;
    line-height: var(--line-height);
    white-space: pre-line;
}
</style>
