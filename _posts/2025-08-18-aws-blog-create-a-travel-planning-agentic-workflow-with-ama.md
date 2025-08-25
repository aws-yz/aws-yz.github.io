---
layout: post
title: "[ML] Create a travel planning agentic workflow with Amazon Nova"
date: 2025-08-18T20:30:15.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Bedrock, Amazon Nova, Generative AI]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Isaac Privitera"
original_link: "https://aws.amazon.com/blogs/machine-learning/create-a-travel-planning-agentic-workflow-with-amazon-nova/"
---

# 🤖 Create a travel planning agentic workflow with Amazon Nova

> **原文链接**: [Create a travel planning agentic workflow with Amazon Nova](https://aws.amazon.com/blogs/machine-learning/create-a-travel-planning-agentic-workflow-with-amazon-nova/)
> **作者**: Isaac Privitera
> **发布日期**: 2025-08-18 20:30:15 UTC

## 📋 内容摘要

本文介绍了如何使用Amazon Nova构建旅行规划解决方案。该系统基于无服务器AWS Lambda架构，使用Docker容器实现，采用三层架构：前端交互、核心处理和集成服务。系统核心使用LangGraph编排框架创建智能代理系统，通过Amazon Nova Pro和Lite模型处理不同复杂度的任务。解决方案集成了多个外部服务，包括天气API、商品推荐API和搜索API等。系统使用DynamoDB存储用户资料和对话历史，通过Amazon Bedrock Knowledge Bases提供旅游目的地信息。整个架构支持简单查询和复杂多步骤交互，可以横向扩展，并能通过添加新的动作节点和API集成来扩展功能。文章还详细介绍了部署步骤、必要的API密钥配置以及如何使用AWS CDK进行部署。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Bedrock**
- **Amazon Nova**
- **Generative AI**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*