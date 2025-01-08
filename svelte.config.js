import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
		base: process.argv.includes('dev') ? '' : '/zeldsite'
    },
    prerender: {
      entries: ['*'] // Pre-render all pages
    }
  },
  preprocess: vitePreprocess()
};

export default config;
