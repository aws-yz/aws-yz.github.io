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

# New: Improve Apache Iceberg query performance in Amazon S3 with sort and z-order compaction

> **原文链接**: [New: Improve Apache Iceberg query performance in Amazon S3 with sort and z-order compaction](https://aws.amazon.com/blogs/aws/new-improve-apache-iceberg-query-performance-in-amazon-s3-with-sort-and-z-order-compaction/)
> **作者**: Sébastien Stormacq
> **发布日期**: 2025-06-24 20:27:59 UTC

## 内容摘要

亚马逊S3现在支持两种新的压缩策略：sort和z-order，以提升Apache Iceberg查询性能。sort压缩根据用户定义的列顺序组织文件，通过将相似值聚集在一起来提高查询执行效率。z-order压缩则通过将多个列的二进制表示交织成单一标量值，实现多维度高效文件剪枝。这些新功能可用于完全托管的S3 Tables和通过AWS Glue Data Catalog优化的通用S3存储桶中的Iceberg表。根据数据布局和查询模式，从binpack切换到sort或z-order可实现3倍以上的性能提升。这些新策略现已在所有支持Amazon S3 Tables的AWS区域推出，使用S3 Tables无需额外费用。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

- Amazon S3 Tables
- Announcements
- AWS Glue
- Featured
- Launch
- News

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*