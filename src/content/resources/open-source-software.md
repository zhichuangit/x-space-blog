---
title: 'Ollama 本地大模型运行工具'
description: '一条命令即可在本地电脑运行开源大语言模型，支持 Llama、Qwen、DeepSeek 等主流开源模型。'
category: '开源软件'
link: 'https://ollama.com/download'
version: 'v0.6.0'
size: '约 1 GB（含默认模型）'
pubDate: 'Aug 19 2026'
---

## 简介

**Ollama** 是一个开源的本地大模型运行工具，让你无需 GPU 服务器也能在自己的电脑上轻松运行 Llama、Qwen、DeepSeek、Mistral 等开源大语言模型。它提供了简洁的命令行和 REST API，非常适合个人开发、学习与离线场景。

## 核心特性

- **一键安装**：支持 Windows / macOS / Linux
- **模型管理**：`ollama pull`、`ollama run` 简单命令即可下载和运行模型
- **REST API**：内置 HTTP 接口，方便集成到自己的应用中
- **量化支持**：自动量化模型，降低显存占用

## 常用命令

```bash
# 安装后拉取模型（以 Qwen 为例）
ollama pull qwen2.5

# 运行模型
ollama run qwen2.5

# 查看已安装的模型
ollama list
```

## 下载

前往 [Ollama 官网](https://ollama.com/download) 下载对应系统的安装包。
