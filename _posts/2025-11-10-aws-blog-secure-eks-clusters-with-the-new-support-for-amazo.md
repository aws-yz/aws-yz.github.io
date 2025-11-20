---
layout: post
title: "[AWS Blog] Secure EKS clusters with the new support for Amazon EKS in AWS Backup"
date: 2025-11-10T21:30:29.000+00:00
categories: [aws, security, news, storage]
tags: [Amazon Elastic Kubernetes Service, AWS Backup, Compute, Launch, News, Storage, Uncategorized]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Veliswa Boya"
original_link: "https://aws.amazon.com/blogs/aws/secure-eks-clusters-with-the-new-support-for-amazon-eks-in-aws-backup/"
---

# 🛡️ Secure EKS clusters with the new support for Amazon EKS in AWS Backup

> **原文链接**: [Secure EKS clusters with the new support for Amazon EKS in AWS Backup](https://aws.amazon.com/blogs/aws/secure-eks-clusters-with-the-new-support-for-amazon-eks-in-aws-backup/)
> **作者**: Veliswa Boya
> **发布日期**: 2025-11-10 21:30:29 UTC

## 📋 内容摘要

AWS宣布AWS Backup现已支持Amazon EKS，为Kubernetes应用提供集中化的数据保护解决方案。此集成简化了容器化应用的保护流程，同时为集群配置和应用数据提供企业级备份功能。之前，客户需要依赖自定义脚本或第三方工具来备份EKS集群，现在可通过AWS Backup统一管理EKS集群及其关联的持久卷（EBS、EFS和S3）的备份。该功能支持基于策略的自动化备份，创建不可变备份以满足合规需求，并提供便捷的还原体验，包括还原到现有集群或自动创建新集群。文章详细演示了备份和还原的步骤，并列出了主要优势，如多集群备份体验、集中化策略管理以及使用备份保管库组织备份。该功能已在所有AWS商业区域（中国除外）和AWS GovCloud（美国）区域推出。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Elastic Kubernetes Service**
- **AWS Backup**
- **Compute**
- **Launch**
- **News**
- **Storage**
- **Uncategorized**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*