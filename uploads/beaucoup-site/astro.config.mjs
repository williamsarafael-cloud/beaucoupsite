import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Hide the /blog page from the sitemap until at least one non-draft post exists.
const dir = './src/content/blog';
const hasPosts = fs.readdirSync(dir).some((f) => f.endsWith('.md') && !f.startsWith('_') && !/draft:\s*true/.test(fs.readFileSync(`${dir}/${f}`, 'utf8')));

// Your live domain. Used for canonical URLs, sitemap and social tags.
export default defineConfig({
  site: 'https://beaucoupconsult.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/thanks') && (hasPosts || !/\/blog$/.test(page)) }),
  ],
});
