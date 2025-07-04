---
layout: post
title: "[ML] Power Your LLM Training and Evaluation with the New SageMaker AI Generative AI Tools"
date: 2025-06-24T23:44:24.000+00:00
categories: [aws, ai-ml, news]
tags: [Amazon SageMaker, Amazon SageMaker AI, Announcements, Artificial Intelligence, Generative AI]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Sundar Raghavan"
original_link: "https://aws.amazon.com/blogs/machine-learning/power-your-llm-training-and-evaluation-with-the-new-sagemaker-ai-generative-ai-tools/"
---

# 🤖 Power Your LLM Training and Evaluation with the New SageMaker AI Generative AI Tools

> **原文链接**: [Power Your LLM Training and Evaluation with the New SageMaker AI Generative AI Tools](https://aws.amazon.com/blogs/machine-learning/power-your-llm-training-and-evaluation-with-the-new-sagemaker-ai-generative-ai-tools/)
> **作者**: Sundar Raghavan
> **发布日期**: 2025-06-24 23:44:24 UTC

## 📋 内容摘要

AWS发布了两个新的SageMaker AI模板：文本排序(Text Ranking)和问答(Question and Answer)模板。文本排序模板允许人类标注者根据相关性、清晰度或事实准确性等自定义标准对大语言模型的多个响应进行排名，这些排名反馈可用于通过人类反馈强化学习(RLHF)来改进模型。问答模板则帮助基于提供的文本段落创建高质量的问答对，这些问答对作为监督式微调(SFT)的示例数据，教导模型如何准确回应类似输入。文章详细介绍了如何在SageMaker AI控制台中设置这些模板，包括输入清单配置、任务设置和输出格式，同时也提供了使用CreateLabelingJob API以编程方式创建标注作业的方法。这些新工具将帮助用户更高效地生成用于训练大语言模型的高质量数据集。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon SageMaker**
- **Amazon SageMaker AI**
- **Announcements**
- **Artificial Intelligence**
- **Generative AI**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*