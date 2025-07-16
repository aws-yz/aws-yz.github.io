---
layout: post
title: "[AWS Blog] Amazon S3 Metadata now supports metadata for all your S3 objects"
date: 2025-07-15T23:33:22.000+00:00
categories: [aws, storage, news]
tags: [Amazon S3 Tables, Amazon Simple Storage Service (S3), Announcements, AWS Summit New York, Featured, Launch, News]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Sébastien Stormacq"
original_link: "https://aws.amazon.com/blogs/aws/amazon-s3-metadata-now-supports-metadata-for-all-your-s3-objects/"
---

# 💾 Amazon S3 Metadata now supports metadata for all your S3 objects

> **原文链接**: [Amazon S3 Metadata now supports metadata for all your S3 objects](https://aws.amazon.com/blogs/aws/amazon-s3-metadata-now-supports-metadata-for-all-your-s3-objects/)
> **作者**: Sébastien Stormacq
> **发布日期**: 2025-07-15 23:33:22 UTC

## 📋 内容摘要

亚马逊S3 Metadata现在提供了对所有现有S3存储桶对象的完整可见性。此更新引入了两个主要功能：实时清单表（Live Inventory Tables）和日志表（Journal Tables）。实时清单表提供了存储桶中所有对象的完整快照，包括现有对象的回填支持，变更通常在一小时内更新。日志表则提供了对象级别变更的近实时视图。这些表格采用Apache Iceberg格式，可通过熟悉的SQL工具进行查询。用户可以使用这些功能来分析存储使用情况、优化成本、进行审计和治理。该服务目前在美国东部（俄亥俄州、弗吉尼亚北部）和美国西部（加利福尼亚北部）地区可用，提供了灵活的定价模式，包括每百万更新0.30美元的日志表费用，以及对于超过十亿个对象的存储桶，每月每百万对象0.10美元的清单表费用。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon S3 Tables**
- **Amazon Simple Storage Service (S3)**
- **Announcements**
- **AWS Summit New York**
- **Featured**
- **Launch**
- **News**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*