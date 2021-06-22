<template>
  <Layout>
    <h1>{{ $page.strapiAbout.title }}</h1>
    <article class="about" v-html="$page.strapiAbout.content.content" />
  </Layout>
</template>

<page-query>
  query	{
    strapiAbout(id: "1") {
      title
      content {
        content
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style>
.about {
  max-width: 1200px;
  width: auto;
  margin-bottom: 5rem;
  white-space: pre-line;
}
</style>
