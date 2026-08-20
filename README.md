# X-Space Blog

基于 [Astro](https://astro.build) 的个人博客，内容使用 Markdown/MDX 文件管理，部署到 GitHub Pages。

- **线上地址**：https://zhichuangit.github.io/x-space-blog/
- **内容管理**：Decap CMS（本地可视化编辑）+ Git 文件
- **自动部署**：GitHub Actions，推送 `main` 分支即自动构建并发布

## 🚀 本地开发

```sh
npm install        # 安装依赖
npm run dev        # 启动开发服务器（默认 http://localhost:4321）
npm run build      # 构建生产产物到 ./dist/
npm run preview    # 本地预览构建产物
```

## ✍️ 内容管理

内容以 Markdown/MDX 文件存放于 `src/content/blog/` 目录，每篇文章由 Frontmatter 元数据 + 正文组成。

### 方式一：Decap CMS 可视化编辑（推荐）

本机同时运行两个进程，然后访问后台：

```sh
npm run dev    # 终端 1：Astro 开发服务器
npm run cms    # 终端 2：Decap CMS 本地后端
```

浏览器打开 `http://localhost:4321/admin` 即可可视化编辑文章，保存后自动提交到本地 Git，推送仓库即触发线上部署。

### 方式二：直接编辑 Markdown 文件

在 `src/content/blog/` 下新建或编辑 `.md` 文件，Frontmatter 结构如下：

```md
---
title: '文章标题'
description: '文章摘要'
pubDate: 'Jul 08 2022'
heroImage: '../../assets/blog-placeholder-3.jpg'  # 可选
---

这里是正文内容...
```

### 内容字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | string | 文章标题（必填） |
| `description` | string | 摘要（必填） |
| `pubDate` | date | 发布日期（必填） |
| `updatedDate` | date | 更新日期（可选） |
| `heroImage` | image | 封面图（可选） |

Schema 校验定义在 `src/content.config.ts`。

## 🔄 发布流程

1. 在本地 `npm run dev` + `npm run cms` 编辑内容，或直接改 `.md` 文件
2. `git add . && git commit -m "..."` 提交
3. `git push origin main`
4. GitHub Actions 自动构建并部署到 GitHub Pages

## 📁 项目结构

```text
├── public/              # 静态资源（含 admin/ Decap CMS 后台）
│   └── admin/
├── src/
│   ├── components/      # Astro 组件
│   ├── content/blog/    # 博客文章内容（Markdown/MDX）
│   ├── layouts/         # 页面布局
│   ├── pages/           # 页面路由
│   └── content.config.ts# 内容 Schema
├── astro.config.mjs     # Astro 配置（含 GitHub Pages 部署路径）
└── package.json
```
