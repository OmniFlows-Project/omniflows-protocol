# OmniFlows Protocol (OXP) 🌳

中文 | [English](./README.en.md)

> 标准化的个人 AI 知识交换协议。

## 简介

OXP (OmniFlows Exchange Protocol) 是 [OmniFlows](https://omniflows.net) 项目的核心协议。它定义了如何捕获、结构化以及关联来自不同 AI 平台的碎片化对话，例如 ChatGPT、Gemini 和 Grok。

## 核心设计目标

- **溯源性**：通过 `parent_id` 建立知识条目之间的血缘关系，还原思维路径。
- **中立性**：不绑定任何特定大模型，作为通用的第三方数据格式。
- **开放性**：支持基于 Webhook 的分发，让数据能够流向 OpenClaw、Obsidian 或私有数据库。

## 数据示例

（可在此处粘贴 JSON 结构。）

## 状态

目前处于 **v0.1 Alpha** 阶段，仅供预览与实验使用。

## 本地校验

可以在 push 前先运行和 GitHub Actions 相同的 JSON Schema 校验：

```bash
npm install
npm run validate:oxp
```

如果想在每次 `git push` 前自动执行校验，可以启用仓库内置的 pre-push hook：

```bash
git config core.hooksPath .githooks
```

启用后，每次 `git push` 都会先执行和 GitHub Actions 相同的校验命令。

---
Built by [OmniFlows Project](https://github.com/OmniFlows-Project)
