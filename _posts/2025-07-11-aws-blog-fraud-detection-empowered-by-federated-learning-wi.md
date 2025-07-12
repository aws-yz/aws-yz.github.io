---
layout: post
title: "[ML] Fraud detection empowered by federated learning with the Flower framework on Amazon SageMaker AI"
date: 2025-07-11T16:03:51.000+00:00
categories: [aws, ai-ml]
tags: [Amazon SageMaker, Amazon SageMaker AI, Artificial Intelligence, Intermediate (200), AIML, distributed training]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Ray Wang"
original_link: "https://aws.amazon.com/blogs/machine-learning/fraud-detection-empowered-by-federated-learning-with-the-flower-framework-on-amazon-sagemaker-ai/"
---

# 🤖 Fraud detection empowered by federated learning with the Flower framework on Amazon SageMaker AI

> **原文链接**: [Fraud detection empowered by federated learning with the Flower framework on Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/fraud-detection-empowered-by-federated-learning-with-the-flower-framework-on-amazon-sagemaker-ai/)
> **作者**: Ray Wang
> **发布日期**: 2025-07-11 16:03:51 UTC

## 📋 内容摘要

这篇博客介绍了如何使用Amazon SageMaker AI和Flower框架实现联邦学习来进行欺诈检测。根据Nasdaq报告，2023年欺诈导致企业损失超过4856亿美元。文章详细探讨了如何通过联邦学习解决传统机器学习模型在数据隐私和安全性方面的挑战。主要内容包括：1) 使用Flower框架在不共享原始数据的情况下实现多机构协作训练模型；2) 运用Synthetic Data Vault (SDV)生成合成数据来增强欺诈检测能力；3) 提出了跨机构数据集的公平评估方法；4) 详细说明了在AWS上使用SageMaker和VPC对等连接的实现架构。文章还介绍了新光金控和新光人寿成功采用该方案的案例，展示了该方法在提高欺诈检测准确性的同时，确保符合数据隐私法规要求的优势。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon SageMaker**
- **Amazon SageMaker AI**
- **Artificial Intelligence**
- **Intermediate (200)**
- **AI/ML**
- **distributed training**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*