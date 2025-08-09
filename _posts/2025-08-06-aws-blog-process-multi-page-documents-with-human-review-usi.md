---
layout: post
title: "[ML] Process multi-page documents with human review using Amazon Bedrock Data Automation and Amazon SageMaker AI"
date: 2025-08-06T19:04:41.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon Bedrock Data Automation, Amazon SageMaker AI, Amazon SageMaker Ground Truth, Customer Solutions, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Prashanth Ramanathan"
original_link: "https://aws.amazon.com/blogs/machine-learning/process-multi-page-documents-with-human-review-using-amazon-bedrock-data-automation-and-amazon-sagemaker-ai/"
---

# 🤖 Process multi-page documents with human review using Amazon Bedrock Data Automation and Amazon SageMaker AI

> **原文链接**: [Process multi-page documents with human review using Amazon Bedrock Data Automation and Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/process-multi-page-documents-with-human-review-using-amazon-bedrock-data-automation-and-amazon-sagemaker-ai/)
> **作者**: Prashanth Ramanathan
> **发布日期**: 2025-08-06 19:04:41 UTC

## 📋 内容摘要

这篇文章介绍了如何结合使用Amazon Bedrock Data Automation和SageMaker AI来处理多页文档。系统通过自动化处理提取文档信息，并在置信度较低时引入人工审核流程。主要特点包括：1) 使用置信度评分（90-100%高置信，70-89%中等置信，<70%低置信）来决定是否需要人工审核；2) 提供了完整的无服务器解决方案架构，包括S3存储、EventBridge触发、Step Functions工作流程等组件；3) 详细说明了如何部署解决方案、设置私有标注团队，以及如何使用人工审核界面审核低置信度的提取结果。这个解决方案可以帮助组织在保持高准确率的同时实现文档处理的自动化，特别适用于需要准确信息提取的多页面文档处理场景。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Bedrock Data Automation**
- **Amazon SageMaker AI**
- **Amazon SageMaker Ground Truth**
- **Customer Solutions**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*