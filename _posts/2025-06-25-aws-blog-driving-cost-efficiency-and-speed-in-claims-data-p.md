---
layout: post
title: "[ML] Driving cost-efficiency and speed in claims data processing with Amazon Nova Micro and Amazon Nova Lite"
date: 2025-06-25T16:50:00.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon Nova, Artificial Intelligence, Foundation models, Generative AI]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Aitzaz Ahmad"
original_link: "https://aws.amazon.com/blogs/machine-learning/driving-cost-efficiency-and-speed-in-claims-data-processing-with-amazon-nova-micro-and-amazon-nova-lite/"
---

# 🤖 Driving cost-efficiency and speed in claims data processing with Amazon Nova Micro and Amazon Nova Lite

> **原文链接**: [Driving cost-efficiency and speed in claims data processing with Amazon Nova Micro and Amazon Nova Lite](https://aws.amazon.com/blogs/machine-learning/driving-cost-efficiency-and-speed-in-claims-data-processing-with-amazon-nova-micro-and-amazon-nova-lite/)
> **作者**: Aitzaz Ahmad
> **发布日期**: 2025-06-25 16:50:00 UTC

## 📋 内容摘要

这篇文章介绍了亚马逊内部技术团队如何利用Amazon Nova基础模型来优化理赔数据处理。该团队面临着每个理赔案件平均包含75份文档的挑战，传统处理方法耗时3-5分钟且成本较高。通过采用Amazon Nova Lite和Nova Micro模型，团队实现了显著的改进：Nova Lite处理速度提高一倍，成本降低98%；Nova Micro处理速度提高四倍，成本降低99%。解决方案架构使用AWS Glue处理原始数据，通过Amazon S3存储，使用SQS管理任务队列，并利用Lambda和Bedrock进行模型推理。系统还通过DynamoDB缓存中间结果以提高效率。该方案特别适合处理长文档和复杂数据，在保持高性能的同时大幅降低运营成本。文章强调了Nova模型在文档处理方面的优势，包括多样化的模型组合、可扩展性以及易于集成等特点。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Nova**
- **Artificial Intelligence**
- **Foundation models**
- **Generative AI**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*