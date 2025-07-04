---
layout: post
title: "[AWS] Context extraction from image files in Amazon Q Business using LLMs"
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

这篇博客介绍了如何使用Amazon Q Business的自定义文档增强(CDE)功能和Amazon Bedrock的大语言模型来处理和分析图像文件。文章详细说明了如何设置Lambda函数来处理S3存储桶中的图像，使用Claude 3.7 Sonnet模型提取图像内容，并将结果整合到Amazon Q Business的知识库中。这个解决方案能够将静态的图表和图像转换为可查询的知识资产，使用户能够通过自然语言查询来获取图像中的信息。文章还提供了完整的代码示例，包括Lambda函数实现、最佳实践建议和清理步骤，帮助组织更好地利用视觉数据中的信息。

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