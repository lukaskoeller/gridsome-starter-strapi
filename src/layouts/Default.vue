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
:root {
    --border-radius: 0.4rem;
    --box-shadow: 2px 2px 10px;
    --color-numbers: 239, 94%, 19%;
    --color: hsl(239, 94%, 19%);
    --color-accent: hsl(201, 100%, 36%);
    --color-bg: hsl(0, 0%, 100%);
    --color-bg-secondary: hsl(190, 77%, 88%);
    --color-secondary: hsl(190, 100%, 42%);
    --color-secondary-accent: hsl(189, 75%, 75%);
    --color-shadow: hsl(0, 0%, 96%);
    --color-text: hsl(0, 0%, 100%);
    --color-text-secondary: hsl(0, 0%, 60%);
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

blockquote {
  margin: 0;
  padding-left: 40px;
  box-shadow: inset 3px 0px 0px var(--color-secondary-accent);
}

</style>
