---
layout: post
title: "[AWS] Structured data response with Amazon Bedrock: Prompt Engineering and Tool Use"
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

这篇博客详细介绍了如何使用Amazon Bedrock生成结构化数据响应的两种方法：提示工程（Prompt Engineering）和工具使用（Tool Use）。文章首先解释了生成式AI在处理结构化数据输出（如JSON）时面临的挑战，然后展示了如何通过Bedrock克服这些挑战。在提示工程部分，详细说明了如何配置Bedrock客户端、定义JSON模式、编写提示和处理客户评论数据。在工具使用部分，介绍了如何利用Bedrock Converse API实现更可靠的结构化输出。通过对1000次迭代的测试结果显示，两种方法都能达到超过93%的成功率，其中Tool Use方法表现更佳。文章最后总结了两种方法的优缺点，并提供了实施建议。

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