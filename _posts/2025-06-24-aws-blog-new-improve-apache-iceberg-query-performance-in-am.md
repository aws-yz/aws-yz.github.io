---
layout: post
title: "New: Improve Apache Iceberg query performance in Amazon S3 with sort and z-order compaction"
date: 2025-06-24T20:27:59.000Z
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
> **发布日期**: 2025/6/25

## 内容摘要

亚马逊S3现在支持在Apache Iceberg表中使用sort和z-order压缩策略来提升查询性能。除了默认的binpack压缩外，新增的sort压缩可以根据用户定义的列顺序组织文件，而z-order压缩则通过在多个维度上进行高效的文件剪枝来进一步优化。这些功能适用于S3 Tables和通过AWS Glue Data Catalog的通用S3存储桶。根据数据布局和查询模式的不同，相比binpack策略，使用sort或z-order可以获得三倍或更多的性能提升。这些新功能在所有支持Amazon S3 Tables的AWS区域中均可使用，除了现有的使用和维护费用外，S3 Tables不收取额外费用。

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