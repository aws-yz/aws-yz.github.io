---
layout: post
title: "[ML] Implementing on-demand deployment with customized Amazon Nova models on Amazon Bedrock"
date: 2025-07-17T19:36:59.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Artificial Intelligence, Foundation models]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Yanyan Zhang"
original_link: "https://aws.amazon.com/blogs/machine-learning/implementing-on-demand-deployment-with-customized-amazon-nova-models-on-amazon-bedrock/"
---

# 🤖 Implementing on-demand deployment with customized Amazon Nova models on Amazon Bedrock

> **原文链接**: [Implementing on-demand deployment with customized Amazon Nova models on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/implementing-on-demand-deployment-with-customized-amazon-nova-models-on-amazon-bedrock/)
> **作者**: Yanyan Zhang
> **发布日期**: 2025-07-17 19:36:59 UTC

## 📋 内容摘要

这篇博客介绍了Amazon Bedrock新推出的定制模型按需部署功能。主要内容包括：1) 按需部署允许用户仅在需要时调用定制模型，采用基于令牌的按使用量付费定价模型；2) 详细说明了通过AWS控制台和API/SDK两种实现按需部署的具体步骤；3) 讨论了最佳实践和注意事项，包括冷启动延迟、区域可用性、配额管理、部署选项选择和成本管理策略；4) 强调了按需部署的优势：成本优化、运营简单性、可扩展性和灵活性。文章还提供了完整的实施指南、代码示例和清理说明，帮助用户充分利用这一新功能。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Artificial Intelligence**
- **Foundation models**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*