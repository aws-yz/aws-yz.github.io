---
layout: post
title: "[ML] Fine-tune VLMs for multipage document-to-JSON with SageMaker AI and SWIFT"
date: 2025-11-10T19:59:01.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon SageMaker AI, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Nick McCarthy"
original_link: "https://aws.amazon.com/blogs/machine-learning/fine-tune-vlms-for-multipage-document-to-json-with-sagemaker-ai-and-swift/"
---

# 🤖 Fine-tune VLMs for multipage document-to-JSON with SageMaker AI and SWIFT

> **原文链接**: [Fine-tune VLMs for multipage document-to-JSON with SageMaker AI and SWIFT](https://aws.amazon.com/blogs/machine-learning/fine-tune-vlms-for-multipage-document-to-json-with-sagemaker-ai-and-swift/)
> **作者**: Nick McCarthy
> **发布日期**: 2025-11-10 19:59:01 UTC

## 📋 内容摘要

本文介绍了使用视觉语言模型(VLMs)进行智能文档处理(IDP)的方法，重点展示了如何使用Amazon SageMaker AI和SWIFT框架对VLMs进行微调，将多页文档转换为结构化JSON格式。文章比较了不同的IDP方法(零样本提示、少样本提示、检索增强少样本提示和模型微调)，并证明微调是最有效的方法。作者使用Fatura2数据集对Qwen2.5 VL 3B等模型进行微调，实现了98%的准确率，并提供了从数据准备、模型微调到评估和部署的完整工作流程。文章还讨论了不同的部署选项，包括使用vLLM容器扩展SageMaker、SageMaker推理组件以及Amazon Bedrock自定义模型导入。完整代码可在GitHub获取，为企业提供了一种高效、经济的解决方案，用于从不同格式的文档中提取结构化数据。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon SageMaker AI**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*