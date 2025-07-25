---
layout: post
title: "[ML] Customize Amazon Nova in Amazon SageMaker AI using Direct Preference Optimization"
date: 2025-07-23T19:08:16.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Nova, Amazon SageMaker AI, Artificial Intelligence, Foundation models, Intermediate (200)]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Bruno Pistone"
original_link: "https://aws.amazon.com/blogs/machine-learning/customize-amazon-nova-in-amazon-sagemaker-ai-using-direct-preference-optimization/"
---

# 🤖 Customize Amazon Nova in Amazon SageMaker AI using Direct Preference Optimization

> **原文链接**: [Customize Amazon Nova in Amazon SageMaker AI using Direct Preference Optimization](https://aws.amazon.com/blogs/machine-learning/customize-amazon-nova-in-amazon-sagemaker-ai-using-direct-preference-optimization/)
> **作者**: Bruno Pistone
> **发布日期**: 2025-07-23 19:08:16 UTC

## 📋 内容摘要

本文介绍了如何使用Amazon SageMaker AI中的Direct Preference Optimization (DPO)来定制Amazon Nova基础模型。文章详细说明了如何使用SageMaker训练作业和Nova特定配方来优化模型的工具调用能力。通过使用约8000条记录的训练数据集，经过微调的模型相比基础模型在F1分数上提高了81%。文章还展示了完整的实施流程，包括数据准备、模型训练、评估和部署到Amazon Bedrock的步骤。SageMaker训练作业和优化配方简化了定制过程，使组织能够针对特定领域用例调整Amazon Nova模型。这种集成代表了使先进AI定制变得更加易用和实用的重要进展。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Nova**
- **Amazon SageMaker AI**
- **Artificial Intelligence**
- **Foundation models**
- **Intermediate (200)**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*