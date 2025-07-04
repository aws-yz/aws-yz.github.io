---
layout: post
title: "[ML] Context extraction from image files in Amazon Q Business using LLMs"
date: 2025-06-30T14:03:35.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon Machine Learning, Amazon Q, Amazon Q Business, Artificial Intelligence, Intermediate (200), AIML, Generative AI]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Nikhil Jha"
original_link: "https://aws.amazon.com/blogs/machine-learning/context-extraction-from-image-files-in-amazon-q-business-using-llms/"
---

# 🤖 Context extraction from image files in Amazon Q Business using LLMs

> **原文链接**: [Context extraction from image files in Amazon Q Business using LLMs](https://aws.amazon.com/blogs/machine-learning/context-extraction-from-image-files-in-amazon-q-business-using-llms/)
> **作者**: Nikhil Jha
> **发布日期**: 2025-06-30 14:03:35 UTC

## 📋 内容摘要

本文介绍了如何使用Amazon Q Business的自定义文档丰富(CDE)功能和Amazon Bedrock的大语言模型来处理和分析图像文件。通过Lambda函数和Anthropic的Claude 3.7 Sonnet模型，系统可以自动提取图表、图像中的上下文信息，并将其转换为可查询的文本数据。文章详细说明了实现步骤，包括创建Amazon Q Business应用程序、配置S3数据源、设置CDE规则以及编写Lambda函数代码。这个解决方案使组织能够将静态可视化数据转换为可交互的知识资产，用户可以通过自然语言查询来分析图表数据，无需额外的格式化工作。文章还提供了最佳实践建议和清理资源的步骤。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Machine Learning**
- **Amazon Q**
- **Amazon Q Business**
- **Artificial Intelligence**
- **Intermediate (200)**
- **AI/ML**
- **Generative AI**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*