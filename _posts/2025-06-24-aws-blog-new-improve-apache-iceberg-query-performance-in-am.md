---
layout: post
title: "New: Improve Apache Iceberg query performance in Amazon S3 with sort and z-order compaction"
date: 2025-06-24T20:27:59.000+00:00
categories: [aws, storage, news]
tags: [Amazon S3 Tables, Announcements, AWS Glue, Featured, Launch, News]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Sébastien Stormacq"
original_link: "https://aws.amazon.com/blogs/aws/new-improve-apache-iceberg-query-performance-in-amazon-s3-with-sort-and-z-order-compaction/"
---

# 💾 New: Improve Apache Iceberg query performance in Amazon S3 with sort and z-order compaction

> **原文链接**: [New: Improve Apache Iceberg query performance in Amazon S3 with sort and z-order compaction](https://aws.amazon.com/blogs/aws/new-improve-apache-iceberg-query-performance-in-amazon-s3-with-sort-and-z-order-compaction/)
> **作者**: Sébastien Stormacq
> **发布日期**: 2025-06-24 20:27:59 UTC

## 📋 内容摘要

亚马逊S3现在支持Apache Iceberg表的sort和z-order压缩策略，以提升查询性能。sort压缩根据用户定义的列顺序组织文件，将相似值聚集在一起，减少需要扫描的文件数量。z-order压缩通过将多个维度的二进制表示交错成单个标量值，实现跨多维度的高效文件剪枝。这些新功能适用于S3 Tables和通过AWS Glue Data Catalog优化的通用S3存储桶中的Iceberg表。根据数据布局和查询模式，与默认的binpack策略相比，使用sort或z-order可以获得3倍或更高的性能提升。这些新压缩策略现已在所有支持Amazon S3 Tables的AWS区域可用。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon S3 Tables**
- **Announcements**
- **AWS Glue**
- **Featured**
- **Launch**
- **News**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*