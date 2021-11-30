<template>
  <header>
    <h1><a href="./">Liste de mots pour le CE2</a></h1>
  </header>
  <router-view />
</template>

<script>
import 'normalize.css';

export default {
  name: 'app',
};
</script>

<style lang="scss">
:root {
  // Color
  --base-color-h: 240;
  --base-color-s: 100%;
  --base-color-l: 50%;
  --base-color-hsl: var(--base-color-h), var(--base-color-s),
    var(--base-color-l);

  --color-0: hsl(var(--base-color-hsl));

  --color-1: hsl(
    var(--base-color-h),
    var(--base-color-s),
    calc(var(--base-color-l) + 45%)
  );

  --color-2: hsl(
    var(--base-color-h),
    var(--base-color-s),
    calc(var(--base-color-l) + 40%)
  );

  --color-3: hsl(
    var(--base-color-h),
    var(--base-color-s),
    calc(var(--base-color-l) + 35%)
  );

  --color-4: hsl(
    var(--base-color-h),
    var(--base-color-s),
    calc(var(--base-color-l) + 25%)
  );

  --color-5: hsl(
    var(--base-color-h),
    var(--base-color-s),
    calc(var(--base-color-l) + 15%)
  );

  --font-color: hsl(
    var(--base-color-h),
    var(--base-color-s),
    calc(var(--base-color-l) - 35%)
  );

  // Font
  font-size: 62.5%; /* (62.5/100) * 16px = 10px */
  --font-size: 1.5rem;
  --line-height: 1.5;
}

html,
body {
  height: 100%;
  min-height: 100%;
}

body {
  // Font
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: var(--font-size);
  line-height: var(--line-height);
  text-align: center;
  color: var(--font-color);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  & > header {
    flex-shrink: 0;
    padding: 2rem 2rem 0;
  }
  & > footer {
    flex-shrink: 0;
    padding: 0 2rem 2rem;
  }
  & > main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    &.justify-center {
      justify-content: center;
    }
  }
}

h1 {
  margin: 0 0 1rem;
  font-size: calc(var(--font-size) * 3);
  a {
    text-decoration: none;
    color: inherit;
    &:focus {
      text-decoration: underline;
    }
  }
}

h2 {
  margin: 0;
}

h3 {
  margin: 0 0 1rem;
}

ul {
  // Display
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 2rem 0;
  // Decoration
  list-style: none;
}

button {
  // Dispaly
  display: inline-block;
  height: 4rem;
  padding: 0 2rem;
  // Decoration
  border: 0.5rem solid var(--color-4);
  border-radius: 2em;
  background-color: var(--color-5);
  // Font
  color: var(--color-1);
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.1;
    &:hover {
      cursor: not-allowed;
    }
  }
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;

  legend {
    font-size: 2rem;
  }
}
</style>
