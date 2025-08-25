---
layout: post
title: "[ML] Benchmarking document information localization with Amazon Nova"
date: 2025-08-19T18:17:36.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Bedrock, Amazon Nova, Artificial Intelligence, Generative AI, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Ryan Razkenari"
original_link: "https://aws.amazon.com/blogs/machine-learning/benchmarking-document-information-localization-with-amazon-nova/"
---

# 🤖 Benchmarking document information localization with Amazon Nova

> **原文链接**: [Benchmarking document information localization with Amazon Nova](https://aws.amazon.com/blogs/machine-learning/benchmarking-document-information-localization-with-amazon-nova/)
> **作者**: Ryan Razkenari
> **发布日期**: 2025-08-19 18:17:36 UTC

## 📋 内容摘要

这篇文章介绍了使用Amazon Bedrock的基础模型（特别是Amazon Nova Pro）来实现高精度文档字段定位的方法。文章详细描述了如何简化传统的计算机视觉工作流程，通过多模态大语言模型来准确定位和解释文档字段。研究团队使用FATURA数据集（包含10,000份发票文档）进行基准测试，测试了两种不同的提示策略：图像维度策略和缩放坐标策略。测试结果显示Amazon Nova Pro在文档字段定位方面表现出色，平均精确度（mAP）达到0.8305，在50个模板中的45个上获得了超过0.80的mAP。文章还提供了详细的实现指南、性能评估方法以及完整的解决方案代码库，对企业文档处理具有重要参考价值。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Bedrock**
- **Amazon Nova**
- **Artificial Intelligence**
- **Generative AI**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*