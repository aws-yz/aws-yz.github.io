---
layout: post
title: "Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement"
date: 2025-06-25T04:52:23+08:00
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

亚马逊宣布Amazon FSx for OpenZFS现在支持附加Amazon S3访问点功能，使文件数据可以像存储在S3中一样被访问，而无需数据迁移。这项新功能允许用户将数据用于广泛的AWS服务，包括人工智能、机器学习和分析服务。主要特点包括：1) 支持标准S3 API操作（如GetObject、ListObjectsV2、PutObject等）；2) 可以附加数百个访问点，每个都具有特定的应用程序权限；3) 数据继续存储在FSx文件系统中，同时保持NFS文件协议访问；4) 支持通过IAM进行精细的访问控制；5) 首字节延迟在数十毫秒范围内。该功能现已在多个AWS区域推出，包括美国东部、西部、欧洲和亚太地区。

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