import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://omatoro.com',
  output: 'static',
  server: { port: 3000 },
  integrations: [],
  vite: {
    plugins: []
  }
});