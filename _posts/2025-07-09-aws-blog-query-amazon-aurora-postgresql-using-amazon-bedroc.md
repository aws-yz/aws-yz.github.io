---
layout: post
title: "[ML] Query Amazon Aurora PostgreSQL using Amazon Bedrock Knowledge Bases structured data"
date: 2025-07-09T16:48:35.000+00:00
categories: [aws, ai-ml, database]
tags: [Amazon Aurora, Amazon Bedrock, Amazon Bedrock Knowledge Bases, Amazon Redshift, Intermediate (200), Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Girish B"
original_link: "https://aws.amazon.com/blogs/machine-learning/query-amazon-aurora-postgresql-using-amazon-bedrock-knowledge-bases-structured-data/"
---

# 🤖 Query Amazon Aurora PostgreSQL using Amazon Bedrock Knowledge Bases structured data

> **原文链接**: [Query Amazon Aurora PostgreSQL using Amazon Bedrock Knowledge Bases structured data](https://aws.amazon.com/blogs/machine-learning/query-amazon-aurora-postgresql-using-amazon-bedrock-knowledge-bases-structured-data/)
> **作者**: Girish B
> **发布日期**: 2025-07-09 16:48:35 UTC

## 📋 内容摘要

本文介绍了如何通过Amazon Bedrock Knowledge Bases的结构化数据检索功能来查询Aurora PostgreSQL数据。文章详细说明了如何使用zero-ETL集成将Aurora PostgreSQL与Amazon Redshift连接，从而实现通过自然语言查询数据库的功能。主要步骤包括：设置Aurora PostgreSQL数据库和示例架构、配置Redshift集群和zero-ETL集成、设置Bedrock知识库。这种解决方案让用户能够使用自然语言而不是SQL语法来查询数据库，大大提升了数据访问的便利性。文章还提供了具体的实施步骤、配置说明和查询示例，帮助读者理解如何在实践中应用这一解决方案。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Aurora**
- **Amazon Bedrock**
- **Amazon Bedrock Knowledge Bases**
- **Amazon Redshift**
- **Intermediate (200)**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*