---
layout: post
title: "Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement"
date: 2025-06-25T20:52:23.000Z
categories: [aws, news]
tags: []
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

亚马逊宣布Amazon FSx for OpenZFS现在支持直接附加S3访问点功能，无需数据迁移即可通过S3 API访问文件数据。这项新功能让用户能够将FSx for OpenZFS中的数据用于AWS的人工智能、机器学习和分析服务，就像数据存储在S3中一样。主要特点包括：1) 通过S3 API操作（如GetObject、PutObject和ListObjectsV2）访问数据；2) 支持数百个访问点，每个都可配置特定应用程序权限；3) 保持数据在FSx文件系统中，同时维持NFS协议访问；4) 支持通过Amazon Bedrock进行生成式AI应用、用SageMaker训练ML模型，以及使用Athena和AWS Glue进行分析。该功能现已在多个AWS区域推出，包括美国东部、西部、欧洲和亚太地区。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务

- 详见原文

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。*