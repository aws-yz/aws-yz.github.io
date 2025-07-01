---
layout: post
title: "Build the highest resilience apps with multi-Region strong consistency in Amazon DynamoDB global tables"
date: 2025-06-30T20:30:48.000+00:00
categories: [aws, database, news]
tags: [Amazon DynamoDB, Announcements, Database, Featured, Launch, News]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Donnie Prakoso"
original_link: "https://aws.amazon.com/blogs/aws/build-the-highest-resilience-apps-with-multi-region-strong-consistency-in-amazon-dynamodb-global-tables/"
---

# Build the highest resilience apps with multi-Region strong consistency in Amazon DynamoDB global tables

> **原文链接**: [Build the highest resilience apps with multi-Region strong consistency in Amazon DynamoDB global tables](https://aws.amazon.com/blogs/aws/build-the-highest-resilience-apps-with-multi-region-strong-consistency-in-amazon-dynamodb-global-tables/)
> **作者**: Donnie Prakoso
> **发布日期**: 2025-06-30 20:30:48 UTC

## 内容摘要

Amazon DynamoDB现在推出了新的全球表功能，提供多区域强一致性(MRSC)，实现零RPO（恢复点目标）。这项功能专为需要最高级别弹性的关键应用程序（如支付处理系统和金融服务）设计。MRSC需要三个AWS区域配置，可以选择三个完整副本，或两个副本加一个见证节点的方式部署。见证节点只包含复制的更改数据，无需维护完整表数据副本，可降低成本。用户可以通过控制台或AWS CLI启用此功能，并通过设置ConsistentRead=True来实现跨区域的强一致性读取。该功能目前在美国东部、美国西部、亚太地区和欧洲的多个区域提供，并采用现有的全球表定价结构。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

- Amazon DynamoDB
- Announcements
- Database
- Featured
- Launch
- News

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*