---
layout: post
title: "Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement"
date: 2025-06-26T04:52:23+08:00
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
> **发布日期**: 2025/6/26

## 内容摘要

亚马逊今天宣布Amazon FSx for OpenZFS现在支持S3访问点功能，无需数据迁移即可通过S3 API访问FSx文件系统中的数据。这项新功能让用户能够将FSx for OpenZFS中的文件数据用于AWS的人工智能、机器学习和分析服务，就像数据存储在S3中一样。主要特点包括：1) 可以将数百个S3访问点附加到文件系统，每个访问点都可以配置特定的应用程序权限；2) 支持通过S3 API进行读写操作，如GetObject、PutObject和ListObjectsV2；3) 数据仍然保存在FSx文件系统中，可继续通过NFS访问；4) 支持与Amazon Bedrock、SageMaker、Athena等服务的无缝集成；5) 提供细粒度的访问控制，包括IAM策略和VPC访问限制。该功能现已在多个AWS区域推出，按S3请求和数据传输收费。

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