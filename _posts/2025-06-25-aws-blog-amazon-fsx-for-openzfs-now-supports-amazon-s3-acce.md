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

亚马逊今天宣布Amazon FSx for OpenZFS现在支持Amazon S3访问点功能，无需数据迁移即可通过S3 API访问文件数据。这项新功能允许用户将S3访问点附加到FSx for OpenZFS文件系统，使其数据可以像存储在S3中一样被访问，同时继续保留在FSx文件系统中。用户可以使用标准的S3 API操作（如GetObject、PutObject和ListObjectsV2）来访问数据，并可以附加数百个具有特定应用程序权限的访问点。这使得企业可以将其文件数据与AWS的人工智能、机器学习和分析服务无缝集成，如Amazon Bedrock、SageMaker和Athena等，而无需复制或移动数据。该功能支持通过IAM的细粒度访问控制，同时保持了通过NFS协议的原有访问方式，目前在多个AWS区域可用。

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