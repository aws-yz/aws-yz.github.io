---
layout: post
title: "[ML] Implement user-level access control for multi-tenant ML platforms on Amazon SageMaker AI"
date: 2025-07-11T16:17:51.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon SageMaker, Amazon SageMaker AI, Amazon SageMaker Studio, Best Practices]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Durga Sury"
original_link: "https://aws.amazon.com/blogs/machine-learning/implement-user-level-access-control-for-multi-tenant-ml-platforms-on-amazon-sagemaker-ai/"
---

# 🤖 Implement user-level access control for multi-tenant ML platforms on Amazon SageMaker AI

> **原文链接**: [Implement user-level access control for multi-tenant ML platforms on Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/implement-user-level-access-control-for-multi-tenant-ml-platforms-on-amazon-sagemaker-ai/)
> **作者**: Durga Sury
> **发布日期**: 2025-07-11 16:17:51 UTC

## 📋 内容摘要

本文介绍了如何在Amazon SageMaker AI多租户机器学习平台中实现用户级访问控制。文章详细讲解了如何使用SageMaker资源标签、上下文键和源身份传播来创建动态IAM策略，无需管理单独的IAM角色即可自动根据用户身份限制权限。主要内容包括：如何在SageMaker Studio、Amazon S3、Secrets Manager和Amazon EMR等AWS服务中应用这些模式；如何通过将SageMaker Studio用户配置文件名传播到CloudTrail日志来增强监控能力；以及如何通过Athena和Amazon EMR跟踪对Data Catalog表的访问。文章还提供了最佳实践建议，包括使用一致的命名约定、实施最小权限访问原则、审计用户访问记录以及标准化基于身份的策略等。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon SageMaker**
- **Amazon SageMaker AI**
- **Amazon SageMaker Studio**
- **Best Practices**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*