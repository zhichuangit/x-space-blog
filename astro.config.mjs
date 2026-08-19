// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 部署到 GitHub Pages 子路径：https://zhangxiantian.github.io/x-space-blog-content/
	site: 'https://zhangxiantian.github.io/x-space-blog-content',
	base: '/x-space-blog-content',
	integrations: [mdx(), sitemap()],
});
