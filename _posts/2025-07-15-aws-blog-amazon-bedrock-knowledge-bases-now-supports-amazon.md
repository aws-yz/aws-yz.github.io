---
layout: post
title: "[ML] Amazon Bedrock Knowledge Bases now supports Amazon OpenSearch Service Managed Cluster as vector store"
date: 2025-07-15T22:05:53.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Bedrock, Amazon Bedrock Knowledge Bases, Amazon OpenSearch Service, Artificial Intelligence, Generative AI, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Manoj Selvakumar"
original_link: "https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-knowledge-bases-now-supports-amazon-opensearch-service-managed-cluster-as-vector-store/"
---

# 🤖 Amazon Bedrock Knowledge Bases now supports Amazon OpenSearch Service Managed Cluster as vector store

> **原文链接**: [Amazon Bedrock Knowledge Bases now supports Amazon OpenSearch Service Managed Cluster as vector store](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-knowledge-bases-now-supports-amazon-opensearch-service-managed-cluster-as-vector-store/)
> **作者**: Manoj Selvakumar
> **发布日期**: 2025-07-15 22:05:53 UTC

## 📋 内容摘要

本文详细介绍了Amazon Bedrock Knowledge Bases新增对Amazon OpenSearch Service托管集群作为向量存储的支持。文章分步骤讲解了如何设置OpenSearch Service域、配置向量索引、以及将其与Bedrock Knowledge Bases集成。主要内容包括：创建IAM管理用户和角色、设置OpenSearch域、配置Cognito认证、创建k-NN向量索引、设置细粒度访问控制权限等。这次更新扩展了向量数据库选项，除了已支持的OpenSearch Serverless、Aurora PostgreSQL等选项外，用户现在可以使用OpenSearch Service托管集群。托管集群提供了更灵活的配置选项、性能调优能力和可扩展性，特别适合企业级AI应用。文章最后还详细说明了不同场景下的访问策略配置，包括同账户和跨账户访问的情况。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Bedrock**
- **Amazon Bedrock Knowledge Bases**
- **Amazon OpenSearch Service**
- **Artificial Intelligence**
- **Generative AI**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*