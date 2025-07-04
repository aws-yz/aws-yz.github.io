---
layout: post
title: "[ML] Structured data response with Amazon Bedrock: Prompt Engineering and Tool Use"
date: 2025-06-26T15:46:20.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Best Practices, Generative AI, Intermediate (200), Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Adam Nemeth"
original_link: "https://aws.amazon.com/blogs/machine-learning/structured-data-response-with-amazon-bedrock-prompt-engineering-and-tool-use/"
---

# 🤖 Structured data response with Amazon Bedrock: Prompt Engineering and Tool Use

> **原文链接**: [Structured data response with Amazon Bedrock: Prompt Engineering and Tool Use](https://aws.amazon.com/blogs/machine-learning/structured-data-response-with-amazon-bedrock-prompt-engineering-and-tool-use/)
> **作者**: Adam Nemeth
> **发布日期**: 2025-06-26 15:46:20 UTC

## 📋 内容摘要

本文详细介绍了如何使用Amazon Bedrock生成结构化数据响应的两种方法：提示工程（Prompt Engineering）和工具使用（Tool Use）。文章首先解释了生成AI在处理结构化数据输出（如JSON）时面临的挑战，然后通过客户评论分析的实例，展示了如何使用提示工程方法，包括配置Bedrock客户端、定义JSON模式、编写提示和处理输入数据等步骤。接着介绍了使用Bedrock Converse API的工具使用方法，该方法提供了更好的控制性和一致性。通过对1000次迭代测试的结果显示，所有模型在两种方法下都达到了93%以上的成功率，而工具使用方法的表现普遍优于提示工程方法。文章最后总结了两种方法的优缺点，并提供了实施建议。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Best Practices**
- **Generative AI**
- **Intermediate (200)**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*