# OmniFlows Exchange Protocol (OXP) Specification

**Version:** 0.1.0-alpha  
**Status:** Draft  
**Editor:** dahui

## 1. Introduction

The OmniFlows Exchange Protocol (OXP) is a standardized data format designed to capture, link, and organize fragmented AI conversations and web research into a hierarchical "Knowledge Tree."

The goal of OXP is to ensure that every piece of information has a traceable origin (Parent) and a clear context, enabling cross-platform knowledge synthesis.

## 2. Core Concepts

### 2.1 The Node

A **Node** is the atomic unit of OXP. It represents a single interaction (e.g., a Question-Answer pair) or a captured snippet of information.

### 2.2 Knowledge Lineage (The Tree)

Unlike linear chat histories, OXP uses `parent_id` to establish a directed acyclic graph (DAG).

- **Root Node**: The starting point of an exploration. `parent_id` is `null`.
- **Branch Node**: A follow-up question or a deep dive into a previous answer.

## 3. Data Fields Definition

### 3.1 Identification

- `id`: A globally unique identifier (UUID v4 recommended).
- `protocol_version`: Must be `0.1.0`.
- `timestamp`: ISO 8601 UTC format (`YYYY-MM-DDTHH:mm:ssZ`).

### 3.2 Graph Metadata (`graph`)

- `parent_id`: The `id` of the preceding node.
- `relation`: `root`, `follow_up`, `cross_ref`, or `summary`.

### 3.3 Payload Strategy (`payload`)

- `trigger`: The reason/context for the node creation (e.g., text selection).
- `input`: The user's prompt or note.
- `output`: The AI response or captured content.

## 4. Security & Privacy

- Implementations MUST NOT include sensitive information like API Keys or Session Tokens.
- Local storage and transmission SHOULD be encrypted.

---
© 2026 OmniFlows Project
