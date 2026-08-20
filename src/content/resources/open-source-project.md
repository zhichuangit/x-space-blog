---
title: 'Astro 静态博客框架'
description: '一款集内容集合、图片优化、RSS 于一体的现代化静态站点框架，本博客即基于它构建。'
category: '开源项目'
link: 'https://github.com/withastro/astro'
version: 'v7.2.3'
pubDate: 'Aug 20 2026'
---

## 简介

**Astro** 是一个为内容驱动的网站而生的现代化静态站点生成器。它专注于提供**零 JS 默认加载**的高性能体验，同时通过「群岛架构」让你在需要的页面按需引入 React、Vue、Svelte 等框架组件。

本博客（X-Space Blog）就是基于 Astro 7 + Markdown/MDX 内容集合构建的，并部署到 GitHub Pages。

## 核心特性

- **内容集合（Content Collections）**：用 TypeScript Schema 校验 Markdown 文章 frontmatter
- **图片优化**：内置 `astro:assets`，自动压缩、生成响应式图片
- **RSS / Sitemap**：官方插件开箱即用
- **性能极佳**：默认零 JS，静态生成

## 快速开始

```bash
# 创建新项目
npm create astro@latest

# 启动开发服务器
npm run dev
```

## 下载

访问 [GitHub 仓库](https://github.com/withastro/astro) 查看源码、Issues 与最新版本发布。
