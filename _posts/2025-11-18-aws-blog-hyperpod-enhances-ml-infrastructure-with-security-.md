---
layout: post
title: "[ML] HyperPod enhances ML infrastructure with security and storage"
date: 2025-11-18T17:54:27.000+00:00
categories: [aws, ai-ml, news]
tags: [Advanced (300), Amazon SageMaker, Amazon SageMaker AI, Amazon SageMaker HyperPod, Compute, Launch, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Mark Vinciguerra"
original_link: "https://aws.amazon.com/blogs/machine-learning/hyperpod-enhances-ml-infrastructure-with-security-and-storage/"
---

# 🤖 HyperPod enhances ML infrastructure with security and storage

> **原文链接**: [HyperPod enhances ML infrastructure with security and storage](https://aws.amazon.com/blogs/machine-learning/hyperpod-enhances-ml-infrastructure-with-security-and-storage/)
> **作者**: Mark Vinciguerra
> **发布日期**: 2025-11-18 17:54:27 UTC

## 📋 内容摘要

本文介绍了Amazon SageMaker HyperPod的两项新功能，提升了大规模机器学习工作负载的安全性和灵活性。第一项是客户托管密钥(CMK)支持，允许客户使用自己的加密密钥加密HyperPod实例的EBS卷，满足HIPAA和FIPS等合规要求。第二项是Amazon EBS CSI驱动程序支持，为Kubernetes卷提供动态存储管理功能，支持卷大小调整等操作。文章详细演示了如何配置这些功能，包括设置IAM权限、创建服务账户和实施卷大小调整的实例。这些增强功能使SageMaker HyperPod成为更加强大和企业级的环境，用于大规模训练和部署基础模型。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon SageMaker**
- **Amazon SageMaker AI**
- **Amazon SageMaker HyperPod**
- **Compute**
- **Launch**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*