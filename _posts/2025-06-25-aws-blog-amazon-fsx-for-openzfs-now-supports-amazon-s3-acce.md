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

# 💾 Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement

> **原文链接**: [Amazon FSx for OpenZFS now supports Amazon S3 access without any data movement](https://aws.amazon.com/blogs/aws/amazon-fsx-for-openzfs-now-supports-amazon-s3-access-without-any-data-movement/)
> **作者**: Elizabeth Fuentes
> **发布日期**: 2025-06-25 20:52:23 UTC

## 📋 内容摘要

亚马逊今天宣布Amazon FSx for OpenZFS现在支持Amazon S3访问点功能，无需数据迁移即可通过S3 API访问FSx中的文件数据。这项新功能允许用户将S3访问点附加到FSx for OpenZFS文件系统，使数据可以被广泛的AWS人工智能、机器学习和分析服务使用。主要特点包括：1) 支持标准S3 API操作（如GetObject、ListObjectsV2、PutObject等）；2) 通过IAM提供细粒度访问控制；3) 数据仍存储在FSx文件系统中，同时保持NFS协议访问；4) 首字节延迟在数十毫秒范围内；5) 可在多个AWS区域使用。此功能特别适用于希望充分利用其文件数据进行AI/ML工作负载的组织，如使用Amazon Bedrock进行RAG工作流、用SageMaker训练模型或进行数据分析等场景。

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