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

# 🗄️ Build the highest resilience apps with multi-Region strong consistency in Amazon DynamoDB global tables

> **原文链接**: [Build the highest resilience apps with multi-Region strong consistency in Amazon DynamoDB global tables](https://aws.amazon.com/blogs/aws/build-the-highest-resilience-apps-with-multi-region-strong-consistency-in-amazon-dynamodb-global-tables/)
> **作者**: Donnie Prakoso
> **发布日期**: 2025-06-30 20:30:48 UTC

## 📋 内容摘要

亚马逊宣布DynamoDB全球表现在支持多区域强一致性(MRSC)功能，为应用程序提供零RPO（恢复点目标）的最高级别弹性。该功能要求配置三个AWS区域，可以选择三个完整副本或两个副本加一个见证者模式。见证者模式只存储变更数据，无需保存完整表数据，可降低成本。用户可以通过控制台或AWS CLI启用MRSC，并通过设置ConsistentRead=True来实现跨区域的强一致性读取。该功能目前在美国东部、美国西部、亚太地区和欧洲的多个区域提供，并且随着最近DynamoDB全球表定价降低高达67%，使得这种高弹性架构更加经济实惠。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon DynamoDB**
- **Announcements**
- **Database**
- **Featured**
- **Launch**
- **News**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*