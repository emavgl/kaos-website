import { defineConfig } from 'astro/config';

// Published to the custom domain kaos.viglianisi.eu, which serves Pages at the
// domain root (/). Assets must be rooted at / or they 404 and render unstyled.
export default defineConfig({
  output: 'static',
  base: '/',
});
