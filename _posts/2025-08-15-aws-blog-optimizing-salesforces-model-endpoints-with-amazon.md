---
layout: post
title: "[ML] Optimizing Salesforce's model endpoints with Amazon SageMaker AI inference components"
date: 2025-08-15T16:41:28.000+00:00
categories: [aws, ai-ml]
tags: [Amazon SageMaker, Amazon SageMaker AI, Artificial Intelligence, Customer Solutions]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Rishu Aggarwal"
original_link: "https://aws.amazon.com/blogs/machine-learning/optimizing-salesforces-model-endpoints-with-amazon-sagemaker-ai-inference-components/"
---

# 🤖 Optimizing Salesforce's model endpoints with Amazon SageMaker AI inference components

> **原文链接**: [Optimizing Salesforce's model endpoints with Amazon SageMaker AI inference components](https://aws.amazon.com/blogs/machine-learning/optimizing-salesforces-model-endpoints-with-amazon-sagemaker-ai-inference-components/)
> **作者**: Rishu Aggarwal
> **发布日期**: 2025-08-15 16:41:28 UTC

## 📋 内容摘要

本文介绍了Salesforce如何利用Amazon SageMaker AI推理组件优化其AI模型部署。Salesforce AI平台团队面临着大型模型(20-30GB)GPU利用率低下和中型模型(约15GB)成本过高的挑战。通过使用SageMaker推理组件，他们能够在同一个端点上部署多个基础模型，精确控制每个模型的加速器数量和内存分配。这种方案带来了显著效益：优化了资源分配、降低了部署成本(降低高达8倍)，并为较小模型提供了更好的性能。具体实践中，他们将CodeGen等专有模型整合到同一端点，实现了资源的动态扩展和智能共享。该解决方案不仅解决了当前的GPU利用率和成本管理问题，还为未来AI创新奠定了可扩展的基础架构基础。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon SageMaker**
- **Amazon SageMaker AI**
- **Artificial Intelligence**
- **Customer Solutions**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*