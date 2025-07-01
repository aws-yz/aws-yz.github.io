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

亚马逊今天宣布Amazon FSx for OpenZFS文件系统现在支持附加Amazon S3访问点功能，使用户可以像访问S3存储桶一样访问FSx中的文件数据，无需数据移动或复制。这项新功能让FSx for OpenZFS的数据可以与AWS的广泛服务集成，包括人工智能、机器学习和分析服务。用户可以通过S3 API操作（如GetObject、PutObject和ListObjectsV2）访问数据，同时保持通过NFS协议的访问能力。该功能支持细粒度的访问控制，包括IAM策略、阻止公共访问等安全特性。此外，用户可以将数据用于Amazon Bedrock的RAG工作流、SageMaker的机器学习训练，以及使用Athena和AWS Glue进行分析，就像数据存储在S3中一样。该功能现已在多个AWS区域推出，按S3请求和数据传输收费。

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