# OmniFlows Protocol (OXP) 🌳

[中文](./README.zh-CN.md) | English

> A standardized protocol for personal AI knowledge exchange.

## Introduction

OXP (OmniFlows Exchange Protocol) is the core protocol of the [OmniFlows](https://omniflows.net) project. It defines how to capture, structure, and connect fragmented conversations from different AI platforms, such as ChatGPT, Gemini, and Grok.

## Core Design Goals

- **Traceability**: Reconstruct reasoning paths by establishing lineage between knowledge entries through `parent_id`.
- **Neutrality**: Stay independent of any specific large language model as a universal third-party data format.
- **Openness**: Support Webhook-based distribution so data can flow into OpenClaw, Obsidian, or private databases.

## Data Example

(You can paste the JSON structure here.)

## Status

Currently in **v0.1 Alpha** and intended for preview and experimentation only.

## Local Validation

Run the same JSON schema check locally before pushing:

```bash
npm install
npm run validate:oxp
```

To enable an automatic pre-push check:

```bash
git config core.hooksPath .githooks
```

After that, every `git push` will run the same validation command used by GitHub Actions.

---
Built by [OmniFlows Project](https://github.com/OmniFlows-Project)
