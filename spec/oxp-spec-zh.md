# OmniFlows 数据交换协议 (OXP) 规范

**版本:** 0.1.0-alpha  
**状态:** 草案  
**编辑:** dahui

## 1. 简介

OmniFlows 数据交换协议 (OXP) 是一种标准化的数据格式，旨在将碎片化的 AI 对话和网页研究捕获、关联并组织成层次化的“知识树”。

OXP 的目标是确保每一条信息都有可追溯的来源（父节点）和清晰的上下文，从而实现跨平台的知识合成。

## 2. 核心概念

### 2.1 节点 (The Node)

**节点**是 OXP 的原子单位。它代表一次单一的交互（例如：问答对）或捕获的信息片段。

### 2.2 知识血缘 (树状结构)

与线性的聊天历史不同，OXP 使用 `parent_id` 来建立有向无环图 (DAG)。

- **根节点 (Root Node)**: 探索的起点。`parent_id` 为 `null`。
- **分支节点 (Branch Node)**: 针对前一个回答的追问或深度探索。

## 3. 数据字段定义

### 3.1 身份识别

- `id`: 全局唯一标识符（推荐使用 UUID v4）。
- `protocol_version`: 当前规范必须为 `0.1.0`。
- `timestamp`: ISO 8601 UTC 格式 (`YYYY-MM-DDTHH:mm:ssZ`)。

### 3.2 图谱元数据 (`graph`)

- `parent_id`: 前序节点的 `id`。
- `relation`: 包含 `root` (根), `follow_up` (追问), `cross_ref` (交叉参考), 或 `summary` (总结)。

### 3.3 有效载荷策略 (`payload`)

- `trigger`: 触发节点创建的原因/上下文（例如：划词触发）。
- `input`: 用户输入的提示词或笔记。
- `output`: 接收到的 AI 回答或抓取的内容。

## 4. 安全与隐私

- 实现方案**严禁**在 OXP JSON 结构中包含 API 密钥、会话令牌或 Cookie 等敏感信息。
- 本地存储和传输过程**应当**尽可能进行加密。

---
© 2026 OmniFlows Project
