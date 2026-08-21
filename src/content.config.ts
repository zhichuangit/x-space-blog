import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

// 资源共享集合：用于开源项目、开源软件、大模型下载等资源分享。
const resources = defineCollection({
	loader: glob({ base: './src/content/resources', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// 分类：开源项目 / 开源软件 / 大模型 / 其他
			category: z.enum(['开源项目', '开源软件', '大模型', '其他']).default('其他'),
			// 下载/访问链接（必填）
			link: z.string().url(),
			// 文件大小（可选，如 "7.2 GB"）
			size: z.string().optional(),
			// 版本/说明标签（可选）
			version: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

// 文档集合（deepseek-harness-docs）：只读展示，不进入 CMS 编辑。
// 章节文件大多没有 frontmatter，标题从正文第一个 `#` 提取，故使用宽松 schema。
const docs = defineCollection({
	loader: glob({ base: './src/content/deepseek-harness-docs', pattern: '**/*.md' }),
	schema: z.object({
		// 允许存在，但均可选；无 frontmatter 的文件自动通过
		title: z.string().optional(),
		description: z.string().optional(),
		layout: z.string().optional(),
		hero: z.any().optional(),
		features: z.array(z.any()).optional(),
		pubDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog, resources, docs };
