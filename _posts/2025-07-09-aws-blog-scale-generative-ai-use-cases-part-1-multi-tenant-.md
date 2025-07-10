---
layout: post
title: "[ML] Scale generative AI use cases, Part 1: Multi-tenant hub and spoke architecture using AWS Transit Gateway"
date: 2025-07-09T16:29:11.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, AWS PrivateLink, AWS Transit Gateway, Intermediate (200)]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Nikhil Penmetsa"
original_link: "https://aws.amazon.com/blogs/machine-learning/scale-generative-ai-use-cases-part-1-multi-tenant-hub-and-spoke-architecture-using-aws-transit-gateway/"
---

# 🤖 Scale generative AI use cases, Part 1: Multi-tenant hub and spoke architecture using AWS Transit Gateway

> **原文链接**: [Scale generative AI use cases, Part 1: Multi-tenant hub and spoke architecture using AWS Transit Gateway](https://aws.amazon.com/blogs/machine-learning/scale-generative-ai-use-cases-part-1-multi-tenant-hub-and-spoke-architecture-using-aws-transit-gateway/)
> **作者**: Nikhil Penmetsa
> **发布日期**: 2025-07-09 16:29:11 UTC

## 📋 内容摘要

本文介绍了一种使用AWS Transit Gateway实现多租户架构的hub-and-spoke模式，以帮助组织扩展生成式AI应用。文章详细说明了如何设置一个集中式的hub账户来托管共享服务（如身份验证、授权和网络），以及如何配置spoke账户来托管特定租户的资源（如Amazon Bedrock）。该架构通过Transit Gateway实现VPC之间的安全互连，确保请求通过中心入口点流动的同时保持租户隔离。文章还讨论了重要的设计考虑因素，包括Lambda函数部署、VPC端点策略、客户端应用程序部署选项、多租户模型选择以及前端网关的选择等。最后提供了详细的部署步骤和验证方法，展示了如何在实践中实现这种架构。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **AWS PrivateLink**
- **AWS Transit Gateway**
- **Intermediate (200)**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*