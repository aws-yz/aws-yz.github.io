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
image: /assets/images/banners/2025-06-25-aws-blog-amazon-fsx-for-openzfs-now-supports-amazon-s3-acce.jpg
---

# Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement

![Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement](/assets/images/banners/2025-06-25-aws-blog-amazon-fsx-for-openzfs-now-supports-amazon-s3-acce.jpg"Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement")

> **原文链接**: [Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement](https://aws.amazon.com/blogs/aws/amazon-fsx-for-openzfs-now-supports-amazon-s3-access-without-any-data-movement/)
> **作者**: Elizabeth Fuentes
> **发布日期**: 2025-06-25 20:52:23 UTC
> **主要分类**: storage

## 📋 内容摘要

AWS今天宣布Amazon FSx for OpenZFS现在支持Amazon S3访问点功能，使用户无需数据移动即可通过S3 API访问FSx文件系统中的数据。这项新功能允许用户将S3访问点直接附加到FSx for OpenZFS文件系统，使其可以像访问S3存储桶一样访问文件数据。用户可以使用GetObject、PutObject和ListObjectsV2等S3 API操作读写数据，同时保持通过NFS协议的访问能力。这使得企业能够将其文件数据与AWS的人工智能、机器学习和分析服务无缝集成，如Amazon Bedrock、SageMaker和Athena等。该功能支持细粒度的访问控制，包括IAM策略和VPC网络控制，且无需数据复制或迁移即可实现数据的双重访问方式。此功能现已在多个AWS区域推出，包括美国东部、西部、欧洲和亚太地区的主要区域。

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

<!-- 图片配置信息 -->
<!-- 建议头图: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&crop=center -->
<!-- 图片主题: storage -->
