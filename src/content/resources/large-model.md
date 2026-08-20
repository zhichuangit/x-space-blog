---
title: 'DeepSeek-V3 开源大模型'
description: 'DeepSeek 团队开源的高性能大语言模型，推理成本低、性能强劲，支持本地部署与微调。'
category: '大模型'
link: 'https://huggingface.co/deepseek-ai/DeepSeek-V3'
version: 'v3'
size: '约 685B 参数（多副本）'
pubDate: 'Aug 18 2026'
---

## 简介

**DeepSeek-V3** 是深度求索（DeepSeek）开源的大语言模型，凭借出色的性能和极低的推理成本，成为开源社区广泛关注和使用的模型之一。其权重在 Hugging Face 上公开，支持本地部署、微调与二次开发。

## 核心特性

- **高性能**：多项基准测试表现优异
- **低成本推理**：采用 MoE 架构，激活参数少，推理成本低
- **完全开源**：权重与代码公开，可商用
- **生态完善**：支持 vLLM、Ollama、Transformers 等主流推理框架

## 下载方式

模型权重发布在 Hugging Face 官方仓库，支持通过 `huggingface-cli` 或 `git lfs` 下载：

```bash
# 使用 huggingface-cli 下载（需先安装）
pip install huggingface_hub
huggingface-cli download deepseek-ai/DeepSeek-V3 --local-dir ./DeepSeek-V3
```

## 注意

由于模型体积较大，请确保本地磁盘空间充足，并参考官方文档配置合理的推理环境。
