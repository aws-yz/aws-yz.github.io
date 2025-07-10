---
layout: post
title: "[ML] Configure fine-grained access to Amazon Bedrock models using Amazon SageMaker Unified Studio"
date: 2025-07-09T16:45:56.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon Machine Learning, Amazon SageMaker Unified Studio, Artificial Intelligence, AWS Identity and Access Management (IAM), Security Identity Compliance, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Varun Jasti"
original_link: "https://aws.amazon.com/blogs/machine-learning/configure-fine-grained-access-to-amazon-bedrock-models-using-amazon-sagemaker-unified-studio/"
---

# 🤖 Configure fine-grained access to Amazon Bedrock models using Amazon SageMaker Unified Studio

> **原文链接**: [Configure fine-grained access to Amazon Bedrock models using Amazon SageMaker Unified Studio](https://aws.amazon.com/blogs/machine-learning/configure-fine-grained-access-to-amazon-bedrock-models-using-amazon-sagemaker-unified-studio/)
> **作者**: Varun Jasti
> **发布日期**: 2025-07-09 16:45:56 UTC

## 📋 内容摘要

本文介绍了如何使用Amazon SageMaker Unified Studio和AWS IAM来为Amazon Bedrock模型建立细粒度的权限控制框架。文章详细说明了如何在安全的协作环境中，让管理员精确控制哪些用户和团队可以访问特定的模型。通过创建模型消费角色(Model Consumption Role)和模型配置角色(Model Provisioning Role)，以及配置相应的信任策略和内联策略，实现了对模型访问的精细化控制。文章还介绍了如何在playground场景和项目场景中实施这些权限控制，包括完整的配置步骤和策略解释。这种方法不仅保护了敏感数据，还使企业能够在受控环境中充分发挥AI的潜力。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Machine Learning**
- **Amazon SageMaker Unified Studio**
- **Artificial Intelligence**
- **AWS Identity and Access Management (IAM)**
- **Security, Identity, & Compliance**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*