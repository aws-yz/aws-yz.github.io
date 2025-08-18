---
layout: post
title: "[ML] Build an intelligent financial analysis agent with LangGraph and Strands Agents"
date: 2025-08-13T16:32:20.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Evan Grenda"
original_link: "https://aws.amazon.com/blogs/machine-learning/build-an-intelligent-financial-analysis-agent-with-langgraph-and-strands-agents/"
---

# 🤖 Build an intelligent financial analysis agent with LangGraph and Strands Agents

> **原文链接**: [Build an intelligent financial analysis agent with LangGraph and Strands Agents](https://aws.amazon.com/blogs/machine-learning/build-an-intelligent-financial-analysis-agent-with-langgraph-and-strands-agents/)
> **作者**: Evan Grenda
> **发布日期**: 2025-08-13 16:32:20 UTC

## 📋 内容摘要

本文介绍了一个结合LangGraph、Strands Agents和Model Context Protocol (MCP)的金融分析智能代理架构。该解决方案通过LangGraph处理动态工作流程编排，Strands Agents负责结构化推理，MCP用于工具集成。主要功能包括：1) 处理复杂的金融分析工作流，如季度收益报告分析和公司业绩比较；2) 提供灵活的多代理系统，可以分解复杂任务并保持分析连贯性；3) 标准化集成各种金融数据源和工具。文章详细说明了系统架构、本地开发部署步骤以及在AWS上的生产环境部署方案，包括使用AWS Amplify、Amazon ECS、Amazon Bedrock和DynamoDB等服务。这种架构为金融分析应用提供了可扩展、安全且灵活的基础框架。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*