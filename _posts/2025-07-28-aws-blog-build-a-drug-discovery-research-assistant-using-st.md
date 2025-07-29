---
layout: post
title: "[ML] Build a drug discovery research assistant using Strands Agents and Amazon Bedrock"
date: 2025-07-28T19:14:26.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Bedrock, Artificial Intelligence, Life Sciences, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Brian Loyal"
original_link: "https://aws.amazon.com/blogs/machine-learning/build-a-drug-discovery-research-assistant-using-strands-agents-and-amazon-bedrock/"
---

# 🤖 Build a drug discovery research assistant using Strands Agents and Amazon Bedrock

> **原文链接**: [Build a drug discovery research assistant using Strands Agents and Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/build-a-drug-discovery-research-assistant-using-strands-agents-and-amazon-bedrock/)
> **作者**: Brian Loyal
> **发布日期**: 2025-07-28 19:14:26 UTC

## 📋 内容摘要

本文介绍了如何使用Strands Agents和Amazon Bedrock构建药物发现研究助手。该解决方案利用多个子代理来处理复杂的药物研究任务，包括搜索arXiv、PubMed、ChEMBL等科学数据库。系统架构包含一个协调代理（orchestrator agent）和多个专门的子代理，用于信息检索、规划、综合和报告生成。文章详细说明了如何定义基础模型、MCP工具和专门的子代理，以及如何使用Python实现整个工作流程。通过一个实际案例展示了如何生成关于HER2的综合研究报告，涵盖最新新闻、研究、相关化合物和临床试验信息。这个解决方案展示了AI辅助研究的新范式，特别适用于处理快速增长的科学信息量。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Bedrock**
- **Artificial Intelligence**
- **Life Sciences**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*