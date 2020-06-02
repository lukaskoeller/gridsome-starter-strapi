<template>
  <div>
    <header>
      <div>
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="Gridsome image" src="~/favicon.png" width="52" />
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/">Blog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <footer>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <span>Thank you for reading my Blog!</span>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* MVP.css v1.6.2 - https://github.com/andybrewer/mvp */

:root {
    --border-radius: 0.4rem;
    --box-shadow: 2px 2px 10px;
    --color: #03045e;
    --color-accent: #0077b6;
    --color-bg: #fff;
    --color-bg-secondary: #caf0f8;
    --color-secondary: #00b4d8;
    --color-secondary-accent: #90e0ef;
    --color-shadow: #f4f4f4;
    --color-text: #000;
    --color-text-secondary: #999;
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    --hover-brightness: 1.2;
    --line-height: 1.5;
}

html {
  box-sizing: border-box;
  font-family: var(--font-family);
  font-size: 100%;
}

body {
  margin: auto;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: var(--color-secondary);
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
}

header > div {
  display: flex;
  align-items: center;
}

header img {
  margin-right: 1.5rem;
}

header strong a {
  font-size: 1.3rem;
  color: var(--color);
}

nav a {
  margin: 0 1rem;
}

main {
  padding: 2rem;
}

footer {
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: var(--color);
}

footer strong a {
  font-size: 1.3rem;
}

footer span {
  color: var(--color-accent);
}
</style>
