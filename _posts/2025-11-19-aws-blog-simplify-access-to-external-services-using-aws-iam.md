---
layout: post
title: "[AWS Blog] Simplify access to external services using AWS IAM Outbound Identity Federation"
date: 2025-11-19T23:21:24.000+00:00
categories: [aws, news]
tags: [AWS Identity and Access Management (IAM), Identity, Launch, News, Security Identity Compliance]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Donnie Prakoso"
original_link: "https://aws.amazon.com/blogs/aws/simplify-access-to-external-services-using-aws-iam-outbound-identity-federation/"
---

# 📰 Simplify access to external services using AWS IAM Outbound Identity Federation

> **原文链接**: [Simplify access to external services using AWS IAM Outbound Identity Federation](https://aws.amazon.com/blogs/aws/simplify-access-to-external-services-using-aws-iam-outbound-identity-federation/)
> **作者**: Donnie Prakoso
> **发布日期**: 2025-11-19 23:21:24 UTC

## 📋 内容摘要

AWS宣布推出IAM出站身份联合功能，允许开发者使用短期JSON Web Tokens (JWTs)安全地将AWS身份联合到外部服务，而无需存储长期凭证。此功能通过AWS STS的GetWebIdentityToken API获取加密签名的JWT，外部服务可验证令牌的真实性，从而降低安全风险。设置过程包括在IAM控制台启用此功能、配置IAM权限以及在外部服务中注册AWS账户颁发者URL。令牌包含标准OIDC声明和AWS特定元数据，管理员可使用IAM策略精细控制令牌生成。该功能在所有AWS商业区域、GovCloud区域和中国区域均可免费使用。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **AWS Identity and Access Management (IAM)**
- **Identity**
- **Launch**
- **News**
- **Security, Identity, & Compliance**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*