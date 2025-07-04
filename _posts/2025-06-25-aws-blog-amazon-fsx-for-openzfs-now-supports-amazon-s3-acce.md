---
layout: post
title: "[AWS Blog] Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement"
date: 2025-06-25T20:52:23.000+00:00
categories: [aws, storage, news]
tags: [Amazon FSx, Amazon Simple Storage Service (S3), Announcements, Featured, Launch, News, Storage]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Elizabeth Fuentes"
original_link: "https://aws.amazon.com/blogs/aws/amazon-fsx-for-openzfs-now-supports-amazon-s3-access-without-any-data-movement/"
---

# 💾 Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement

> **原文链接**: [Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement](https://aws.amazon.com/blogs/aws/amazon-fsx-for-openzfs-now-supports-amazon-s3-access-without-any-data-movement/)
> **作者**: Elizabeth Fuentes
> **发布日期**: 2025-06-25 20:52:23 UTC

## 📋 内容摘要

亚马逊今天宣布Amazon FSx for OpenZFS文件系统现在支持附加Amazon S3访问点功能，使用户无需移动数据即可通过S3 API访问FSx中的文件数据。这项新功能让用户能够将FSx for OpenZFS中的数据用于广泛的AWS服务，包括人工智能、机器学习和分析应用。主要特点：1) 支持标准S3 API操作（如GetObject、ListObjectsV2、PutObject等）；2) 通过IAM提供精细的访问控制；3) 数据保持在FSx文件系统中，同时支持NFS协议访问；4) 性能方面提供数十毫秒级的首字节延迟；5) 可以附加数百个访问点到一个文件系统。该功能现已在多个AWS区域推出，包括美国东部、美国西部、欧洲和亚太地区的主要区域。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon FSx**
- **Amazon Simple Storage Service (S3)**
- **Announcements**
- **Featured**
- **Launch**
- **News**
- **Storage**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*