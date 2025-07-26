---
layout: post
title: "[ML] How PerformLine uses prompt engineering on Amazon Bedrock to detect compliance violations"
date: 2025-07-25T17:03:23.000+00:00
categories: [aws, ai-ml, compute]
tags: [Amazon Bedrock, Amazon Bedrock Prompt Management, Amazon Nova, Artificial Intelligence, AWS Lambda, Compliance, Customer Solutions, Generative AI, Serverless]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Bogdan Arsenie, Nick Mattei"
original_link: "https://aws.amazon.com/blogs/machine-learning/how-performline-uses-prompt-engineering-on-amazon-bedrock-to-detect-compliance-violations/"
---

# 🤖 How PerformLine uses prompt engineering on Amazon Bedrock to detect compliance violations

> **原文链接**: [How PerformLine uses prompt engineering on Amazon Bedrock to detect compliance violations](https://aws.amazon.com/blogs/machine-learning/how-performline-uses-prompt-engineering-on-amazon-bedrock-to-detect-compliance-violations/)
> **作者**: Bogdan Arsenie, Nick Mattei
> **发布日期**: 2025-07-25 17:03:23 UTC

## 📋 内容摘要

本文介绍了PerformLine如何使用Amazon Bedrock构建AI驱动的合规检测系统。PerformLine是一家营销合规服务提供商，通过使用Amazon Bedrock、EventBridge、Amazon SQS、Lambda和DynamoDB等AWS服务，构建了一个高度可扩展的无服务器架构。该系统每天能处理150-200万个网页，提取40-50万个产品信息，并进行合规检查。系统的主要特点包括：多级AI推理优化以降低成本；使用Amazon Bedrock的提示管理服务实现集中化管理；通过变更数据捕获(CDC)减少重复处理，使人工评估工作量减少15%，分析师工作量减少超过50%。系统采用事件驱动架构，能够动态解析、提取和分析网页内容，同时保持高可靠性、灵活性和成本效益。未来，PerformLine计划利用Amazon Bedrock的提示缓存和Flows等新功能进一步优化系统性能。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Bedrock Prompt Management**
- **Amazon Nova**
- **Artificial Intelligence**
- **AWS Lambda**
- **Compliance**
- **Customer Solutions**
- **Generative AI**
- **Serverless**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*