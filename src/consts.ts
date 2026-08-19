// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'X-Space Blog';
export const SITE_DESCRIPTION = '记录开发、设计与产品的随笔与思考。';

// 站点部署基础路径，始终以 / 结尾（如 /x-space-blog-content/）。
// 用于拼接站内链接，避免子路径部署时硬编码根路径导致 404。
export const baseUrl = import.meta.env.BASE_URL.endsWith('/')
	? import.meta.env.BASE_URL
	: import.meta.env.BASE_URL + '/';
