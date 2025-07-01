---
layout: post
title: "Verify internal access to critical AWS resources with new IAM Access Analyzer capabilities"
date: 2025-06-17T22:09:08+08:00
categories: [aws, news]
tags: [Announcements, AWS IAM Access Analyzer, AWS Identity and Access Management (IAM), AWS reInforce, Featured, Launch, News, Security, Security Identity Compliance]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Micah Walter"
original_link: "https://aws.amazon.com/blogs/aws/verify-internal-access-to-critical-aws-resources-with-new-iam-access-analyzer-capabilities/"
---

# Verify internal access to critical AWS resources with new IAM Access Analyzer capabilities

> **原文链接**: [Verify internal access to critical AWS resources with new IAM Access Analyzer capabilities](https://aws.amazon.com/blogs/aws/verify-internal-access-to-critical-aws-resources-with-new-iam-access-analyzer-capabilities/)
> **作者**: Micah Walter
> **发布日期**: 2025/6/17

## 内容摘要

AWS宣布在IAM访问分析器(IAM Access Analyzer)中推出新功能，帮助安全团队验证哪些IAM角色和用户可以访问其关键AWS资源。这项新功能提供了对AWS组织内部访问权限的全面可视性，补充了现有的外部访问分析。新的内部访问发现功能可以自动评估多个策略，包括服务控制策略(SCPs)、资源控制策略(RCPs)和基于身份的策略，并在用户或角色可以访问S3存储桶、DynamoDB表或RDS快照时生成发现结果。所有发现都集中在统一的仪表板中，简化了访问审查和管理。用户可以使用EventBridge自动通知开发团队删除意外访问权限。该功能现已在所有商业区域推出，定价基于每月监控的关键AWS资源数量。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

- Announcements
- AWS IAM Access Analyzer
- AWS Identity and Access Management (IAM)
- AWS re:Inforce
- Featured
- Launch
- News
- Security
- Security, Identity, & Compliance

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*