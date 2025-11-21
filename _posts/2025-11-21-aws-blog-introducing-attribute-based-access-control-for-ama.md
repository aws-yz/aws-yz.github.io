---
layout: post
title: "[AWS Blog] Introducing attribute-based access control for Amazon S3 general purpose buckets"
date: 2025-11-21T01:02:35.000+00:00
categories: [aws, storage, news]
tags: [Amazon Simple Storage Service (S3), Announcements, AWS Identity and Access Management (IAM), Launch, News, Security Identity Compliance, Storage]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Matheus Guimaraes"
original_link: "https://aws.amazon.com/blogs/aws/introducing-attribute-based-access-control-for-amazon-s3-general-purpose-buckets/"
---

# 💾 Introducing attribute-based access control for Amazon S3 general purpose buckets

> **原文链接**: [Introducing attribute-based access control for Amazon S3 general purpose buckets](https://aws.amazon.com/blogs/aws/introducing-attribute-based-access-control-for-amazon-s3-general-purpose-buckets/)
> **作者**: Matheus Guimaraes
> **发布日期**: 2025-11-21 01:02:35 UTC

## 📋 内容摘要

亚马逊S3通用存储桶推出了基于属性的访问控制(ABAC)功能，可通过标签自动管理用户和角色的权限。该功能允许管理员使用基于标签的IAM或存储桶策略，根据S3存储桶的标签自动授予或拒绝访问权限，而不需要单独管理每个权限。使用ABAC，管理员可以给开发环境的S3存储桶添加标签(如environment:development)，然后将具有相同标签条件的ABAC策略附加到IAM主体。当存储桶标签与策略中的条件匹配时，主体将被授予访问权限。ABAC功能可以简化权限管理，减少策略更新需求，并且可与成本分配标签配合使用。此功能现已通过AWS管理控制台、API、SDK、CLI和CloudFormation提供，无额外费用。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Simple Storage Service (S3)**
- **Announcements**
- **AWS Identity and Access Management (IAM)**
- **Launch**
- **News**
- **Security, Identity, & Compliance**
- **Storage**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*