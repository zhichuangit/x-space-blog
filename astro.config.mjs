// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 部署到 GitHub Pages 子路径：https://zhichuangit.github.io/x-space-blog/
	site: 'https://zhichuangit.github.io/x-space-blog',
	base: '/x-space-blog',
	integrations: [mdx(), sitemap()],
});
