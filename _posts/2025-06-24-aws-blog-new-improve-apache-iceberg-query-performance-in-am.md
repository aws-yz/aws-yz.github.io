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

亚马逊S3现在支持在Apache Iceberg表中使用sort和z-order压缩策略来提升查询性能。这两种新的压缩策略补充了现有的binpack策略，可用于S3 Tables和通过AWS Glue数据目录的常规S3存储桶。sort压缩根据用户定义的列顺序组织文件，通过将相似值聚集在一起来提高查询执行效率。z-order压缩则通过将多个列的二进制表示交织成单一标量值，实现了跨多个维度的高效文件筛选。这些新功能无需额外配置即可在支持S3 Tables的所有AWS区域使用，用户报告相比binpack策略可获得三倍以上的性能提升。这一更新对于经常处理大规模分析数据集的用户特别有价值，可显著降低查询成本并提高效率。

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