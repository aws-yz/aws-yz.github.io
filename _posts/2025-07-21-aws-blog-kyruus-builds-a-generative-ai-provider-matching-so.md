---
layout: post
title: "[ML] Kyruus builds a generative AI provider matching solution on AWS"
date: 2025-07-21T17:23:36.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon OpenSearch Service, Customer Solutions, Healthcare]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Zach Heath"
original_link: "https://aws.amazon.com/blogs/machine-learning/kyruus-builds-a-generative-ai-provider-matching-solution-on-aws/"
---

# 🤖 Kyruus builds a generative AI provider matching solution on AWS

> **原文链接**: [Kyruus builds a generative AI provider matching solution on AWS](https://aws.amazon.com/blogs/machine-learning/kyruus-builds-a-generative-ai-provider-matching-solution-on-aws/)
> **作者**: Zach Heath
> **发布日期**: 2025-07-21 17:23:36 UTC

## 📋 内容摘要

这篇文章介绍了Kyruus Health如何利用AWS服务构建Guide解决方案，帮助医疗保险会员更轻松地寻找合适的医疗服务提供者。该解决方案结合使用Amazon Bedrock的Claude 3.5 Sonnet模型和Amazon OpenSearch Service，将患者用日常语言描述的症状转换为结构化的医疗参数，并匹配相应的专科医生。系统架构包括通过Amazon API Gateway接收查询，使用Amazon ECS运行会话服务和提供者搜索服务，通过Amazon S3存储提供者数据。这个解决方案显著提高了用户体验和预约转化率，同时保持HIPAA合规性。Kyruus Health与AWS合作伙伴Tribe AI合作实施该项目，重点关注医疗保健特定测试、以用户为中心的设计原则和战略性模型选择，成功实现了日常语言与临床术语之间的转换。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon OpenSearch Service**
- **Customer Solutions**
- **Healthcare**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*