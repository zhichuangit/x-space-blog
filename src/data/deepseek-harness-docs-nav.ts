// 文档站左侧目录树配置（deepseek-harness-docs）
// 每个条目的 id 对应 content collection 中文件的 id（相对 deepseek-harness-docs 的路径，不含 .md）

export interface DocNavItem {
	id: string;
	label: string;
}

export interface DocNavSection {
	title: string;
	items: DocNavItem[];
}

export const docsNav: DocNavSection[] = [
	{
		title: '卷首',
		items: [
			{ id: 'index', label: '书籍首页' },
			{ id: 'preface', label: '前言' },
		],
	},
	{
		title: '第一部分 · 全景与架构',
		items: [
			{ id: 'part1-architecture/ch1-overview', label: '第 1 章 认识 DeepSeek Harness' },
			{ id: 'part1-architecture/ch2-repo-layout', label: '第 2 章 仓库布局' },
			{ id: 'part1-architecture/ch3-architecture', label: '第 3 章 总体架构' },
		],
	},
	{
		title: '第二部分 · Cordis 框架源码解析',
		items: [
			{ id: 'part2-cordis/ch4-cordis-context', label: '第 4 章 Context 与反射层' },
			{ id: 'part2-cordis/ch5-cordis-service-fiber', label: '第 5 章 Service 与 Fiber' },
			{ id: 'part2-cordis/ch6-cordis-events', label: '第 6 章 事件系统' },
			{ id: 'part2-cordis/ch7-cordis-registry', label: '第 7 章 插件注册表' },
		],
	},
	{
		title: '第三部分 · 核心子系统源码解析',
		items: [
			{ id: 'part3-core/ch8-boot-chain', label: '第 8 章 启动链路' },
			{ id: 'part3-core/ch9-profile-bundle', label: '第 9 章 Profile 与 Bundle' },
			{ id: 'part3-core/ch10-session-log', label: '第 10 章 会话日志' },
			{ id: 'part3-core/ch11-agent-loop', label: '第 11 章 Agent 循环' },
			{ id: 'part3-core/ch12-tools', label: '第 12 章 工具系统' },
			{ id: 'part3-core/ch13-system-prompt-scope', label: '第 13 章 系统提示与作用域' },
			{ id: 'part3-core/ch14-llm-seam', label: '第 14 章 LLM 接缝' },
			{ id: 'part3-core/ch15-capability-seams', label: '第 15 章 能力接缝' },
			{ id: 'part3-core/ch16-preset-goal-subagent', label: '第 16 章 预设/目标/子代理' },
		],
	},
	{
		title: '第四部分 · Web 客户端架构',
		items: [{ id: 'part4-web/ch17-web-client', label: '第 17 章 Web 客户端' }],
	},
	{
		title: '第五部分 · 插件开发技巧',
		items: [
			{ id: 'part5-plugins/ch18-plugin-basics', label: '第 18 章 插件开发基础' },
			{ id: 'part5-plugins/ch19-plugin-patterns', label: '第 19 章 实战模式' },
			{ id: 'part5-plugins/ch20-dynamic-plugin-workflow', label: '第 20 章 动态插件工作流' },
			{ id: 'part5-plugins/ch21-plugin-best-practices', label: '第 21 章 最佳实践与调试' },
		],
	},
	{
		title: '附录',
		items: [
			{ id: 'appendix/appendix-a-commands', label: '附录 A 常用命令与配置' },
			{ id: 'appendix/appendix-b-glossary', label: '附录 B 术语表' },
			{ id: 'appendix/appendix-c-references', label: '附录 C 参考资料' },
		],
	},
	{
		title: '变更记录',
		items: [
			{ id: 'changelog/index', label: '变更记录总览' },
			{ id: 'changelog/2026-08-13', label: '2026-08-13' },
			{ id: 'changelog/2026-08-17', label: '2026-08-17' },
			{ id: 'changelog/2026-08-19', label: '2026-08-19' },
		],
	},
];
