---
layout: post
title: "[ML] Introducing agent-to-agent protocol support in Amazon Bedrock AgentCore Runtime"
date: 2025-11-11T21:32:31.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock AgentCore, Generative AI]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Madhur Prashant"
original_link: "https://aws.amazon.com/blogs/machine-learning/introducing-agent-to-agent-protocol-support-in-amazon-bedrock-agentcore-runtime/"
---

# 🤖 Introducing agent-to-agent protocol support in Amazon Bedrock AgentCore Runtime

> **原文链接**: [Introducing agent-to-agent protocol support in Amazon Bedrock AgentCore Runtime](https://aws.amazon.com/blogs/machine-learning/introducing-agent-to-agent-protocol-support-in-amazon-bedrock-agentcore-runtime/)
> **作者**: Madhur Prashant
> **发布日期**: 2025-11-11 21:32:31 UTC

## 📋 内容摘要

AWS宣布在Amazon Bedrock AgentCore Runtime中支持Agent-to-Agent(A2A)协议，使AI代理能够跨平台发现对等体、共享能力并协调行动。AgentCore Runtime提供安全的无服务器环境，支持任何框架和模型，实时和长时间运行的工作负载，以及会话隔离和内置身份验证。文章展示了如何使用A2A协议构建监控和事件响应系统，其中包含三个专业代理：使用Google ADK构建的主机代理作为协调中心，使用Strands SDK构建的监控代理分析CloudWatch日志和指标，以及使用OpenAI SDK构建的运维代理提供修复策略。这种多代理系统通过标准化的A2A协议实现了无缝协作，允许不同框架构建的代理进行高效通信，无需复杂的转换层。AgentCore Runtime支持OAuth 2.0和AWS IAM认证方法来确保A2A通信安全。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock AgentCore**
- **Generative AI**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*