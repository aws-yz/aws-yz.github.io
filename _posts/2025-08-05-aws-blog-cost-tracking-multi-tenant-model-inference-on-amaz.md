---
layout: post
title: "[ML] Cost tracking multi-tenant model inference on Amazon Bedrock"
date: 2025-08-05T01:17:30.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Bedrock, Amazon QuickSight, Cloud Cost Optimization]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Praveen Chamarthi"
original_link: "https://aws.amazon.com/blogs/machine-learning/cost-tracking-multi-tenant-model-inference-on-amazon-bedrock/"
---

# 🤖 Cost tracking multi-tenant model inference on Amazon Bedrock

> **原文链接**: [Cost tracking multi-tenant model inference on Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/cost-tracking-multi-tenant-model-inference-on-amazon-bedrock/)
> **作者**: Praveen Chamarthi
> **发布日期**: 2025-08-05 01:17:30 UTC

## 📋 内容摘要

本文介绍了如何在Amazon Bedrock多租户环境中进行成本追踪和分析。文章详细说明了使用Converse API的requestMetadata参数来跟踪不同租户的模型使用情况，并通过AWS Glue进行ETL处理将日志数据转换为可分析的格式。通过Amazon QuickSight构建的仪表板，可以直观地展示各个租户的令牌使用量、部门分布、模型使用情况等关键指标。文章还介绍了完整的解决方案架构，包括数据处理管道、日志转换、数据目录更新等环节，以及如何通过IAM进行访问控制。该解决方案可帮助组织实现精确的成本分配、使用模式分析和性能优化，为AI应用的战略决策提供数据支持。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Bedrock**
- **Amazon QuickSight**
- **Cloud Cost Optimization**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*