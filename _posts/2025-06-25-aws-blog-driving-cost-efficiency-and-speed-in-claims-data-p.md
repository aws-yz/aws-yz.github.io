---
layout: post
title: "[AWS] Driving cost-efficiency and speed in claims data processing with Amazon Nova Micro and Amazon Nova Lite"
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

这篇文章介绍了亚马逊内部技术团队如何使用Amazon Nova基础模型来优化理赔数据处理。文章描述了团队面临的挑战：每个理赔案件平均包含75个文档，随着亚马逊业务规模扩大，理赔经理需要更高效地处理不断增长的索赔数量。2024年12月，团队开发了一个AI驱动的解决方案，但面临高推理成本和处理时间长（每个理赔3-5分钟）的问题。通过评估Amazon Nova模型，团队发现Nova Lite的处理速度提高了一倍，成本降低了98%，而Nova Micro的速度提高了四倍，成本降低了99%。该解决方案使用AWS Glue处理原始数据，通过Amazon S3存储，使用SQS管理任务，并通过Lambda执行摘要生成。系统还使用DynamoDB缓存中间结果以减少重复推理。测试显示，Nova模型在处理长文档时特别有效，且能很好地遵循指令生成所需格式的输出。这个解决方案展示了Nova模型在提高效率和降低成本方面的显著优势，特别适合处理大量多样化文档的场景。

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