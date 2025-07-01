---
layout: post
title: "Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement"
date: 2025-06-25T20:52:23.000+00:00
categories: [aws, storage, news]
tags: [Amazon FSx, Amazon Simple Storage Service (S3), Announcements, Featured, Launch, News, Storage]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Elizabeth Fuentes"
original_link: "https://aws.amazon.com/blogs/aws/amazon-fsx-for-openzfs-now-supports-amazon-s3-access-without-any-data-movement/"
---

# Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement

> **原文链接**: [Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement](https://aws.amazon.com/blogs/aws/amazon-fsx-for-openzfs-now-supports-amazon-s3-access-without-any-data-movement/)
> **作者**: Elizabeth Fuentes
> **发布日期**: 2025-06-25 20:52:23 UTC

## 内容摘要

AWS今天宣布Amazon FSx for OpenZFS现在支持Amazon S3访问点功能，让用户可以像访问S3存储桶一样访问FSx for OpenZFS文件系统中的数据，无需数据迁移。这项新功能让用户能够将FSx for OpenZFS中的文件数据与AWS的人工智能、机器学习和分析服务无缝集成。主要特点包括：1) 通过S3 API操作(如GetObject、PutObject和ListObjectsV2)访问数据；2) 支持每个文件系统附加数百个访问点，并提供细粒度的权限控制；3) 保持NFS协议访问能力；4) 可与Amazon Bedrock、SageMaker、Athena等服务集成；5) 支持Apache Spark和Hive等开源工具。该功能已在多个AWS区域推出，按S3请求和数据传输收费。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

- Amazon FSx
- Amazon Simple Storage Service (S3)
- Announcements
- Featured
- Launch
- News
- Storage

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*