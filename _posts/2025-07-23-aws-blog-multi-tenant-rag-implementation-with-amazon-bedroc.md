---
layout: post
title: "[ML] Multi-tenant RAG implementation with Amazon Bedrock and Amazon OpenSearch Service for SaaS using JWT"
date: 2025-07-23T16:44:31.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Bedrock, Amazon Bedrock Knowledge Bases, Amazon OpenSearch Service, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Kazuki Nagasawa"
original_link: "https://aws.amazon.com/blogs/machine-learning/multi-tenant-rag-implementation-with-amazon-bedrock-and-amazon-opensearch-service-for-saas-using-jwt/"
---

# 🤖 Multi-tenant RAG implementation with Amazon Bedrock and Amazon OpenSearch Service for SaaS using JWT

> **原文链接**: [Multi-tenant RAG implementation with Amazon Bedrock and Amazon OpenSearch Service for SaaS using JWT](https://aws.amazon.com/blogs/machine-learning/multi-tenant-rag-implementation-with-amazon-bedrock-and-amazon-opensearch-service-for-saas-using-jwt/)
> **作者**: Kazuki Nagasawa
> **发布日期**: 2025-07-23 16:44:31 UTC

## 📋 内容摘要

本文介绍了一个使用JWT和FGAC（细粒度访问控制）在多租户RAG（检索增强生成）环境中实现数据隔离的解决方案。主要内容包括：1) 使用Amazon Cognito进行用户认证并生成包含租户信息的JWT；2) 利用OpenSearch Service实现三种数据隔离模式：域级别、索引级别和文档级别隔离；3) 通过JWT和FGAC的组合确保租户数据安全访问；4) 使用DynamoDB存储租户路由信息和用户-租户映射关系；5) 完整解决方案架构包括Amazon Bedrock用于LLM和嵌入模型，Lambda用于协调层，以及S3用于文档存储。文章详细说明了实现步骤和注意事项，为SaaS提供商实现安全可靠的多租户RAG系统提供了参考。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Bedrock**
- **Amazon Bedrock Knowledge Bases**
- **Amazon OpenSearch Service**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*