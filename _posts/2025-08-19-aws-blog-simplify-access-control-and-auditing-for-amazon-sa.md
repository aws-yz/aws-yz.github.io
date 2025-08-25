---
layout: post
title: "[ML] Simplify access control and auditing for Amazon SageMaker Studio using trusted identity propagation"
date: 2025-08-19T20:00:45.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon SageMaker AI, Amazon SageMaker Studio, AWS IAM Identity Center, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Durga Sury"
original_link: "https://aws.amazon.com/blogs/machine-learning/simplify-access-control-and-auditing-for-amazon-sagemaker-studio-using-trusted-identity-propagation/"
---

# 🤖 Simplify access control and auditing for Amazon SageMaker Studio using trusted identity propagation

> **原文链接**: [Simplify access control and auditing for Amazon SageMaker Studio using trusted identity propagation](https://aws.amazon.com/blogs/machine-learning/simplify-access-control-and-auditing-for-amazon-sagemaker-studio-using-trusted-identity-propagation/)
> **作者**: Durga Sury
> **发布日期**: 2025-08-19 20:00:45 UTC

## 📋 内容摘要

本文介绍了如何使用可信身份传播(trusted identity propagation)功能来简化Amazon SageMaker Studio的访问控制和审计。该功能允许AWS服务在服务边界之间安全地传播用户身份,使管理员可以基于物理用户身份而不是IAM角色实现细粒度访问控制。文章详细讲解了如何在SageMaker Studio中启用和配置此功能,并通过实际用例展示了其在数据访问管理、用户会话控制和审计跟踪等方面的应用,包括与Amazon S3 Access Grants、Lake Formation和CloudTrail等服务的集成。这种方法显著简化了权限管理,同时保持了强大的安全性和可审计性。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon SageMaker AI**
- **Amazon SageMaker Studio**
- **AWS IAM Identity Center**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*