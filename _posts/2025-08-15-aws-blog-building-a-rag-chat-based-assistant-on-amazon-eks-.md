---
layout: post
title: "[ML] Building a RAG chat-based assistant on Amazon EKS Auto Mode and NVIDIA NIMs"
date: 2025-08-15T15:52:28.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Elastic Kubernetes Service, Amazon OpenSearch Service, Intermediate (200), Technical How-to, Generative AI]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Riccardo Freschi"
original_link: "https://aws.amazon.com/blogs/machine-learning/building-a-rag-chat-based-assistant-on-amazon-eks-auto-mode-and-nvidia-nims/"
---

# 🤖 Building a RAG chat-based assistant on Amazon EKS Auto Mode and NVIDIA NIMs

> **原文链接**: [Building a RAG chat-based assistant on Amazon EKS Auto Mode and NVIDIA NIMs](https://aws.amazon.com/blogs/machine-learning/building-a-rag-chat-based-assistant-on-amazon-eks-auto-mode-and-nvidia-nims/)
> **作者**: Riccardo Freschi
> **发布日期**: 2025-08-15 15:52:28 UTC

## 📋 内容摘要

本文详细介绍了如何在Amazon EKS上使用NVIDIA NIM微服务部署基于RAG的聊天助手。该解决方案结合了Meta的llama-3-2-1b-instruct作为LLM模型和NVIDIA Retrieval QA E5作为嵌入模型，使用Amazon OpenSearch Serverless进行向量存储。文章重点展示了如何利用EKS Auto Mode和GPU加速AMI简化部署过程，通过Karpenter自动配置所需的NVIDIA组件。整个架构包括模型缓存、向量搜索和文档处理等功能，实现了一个可扩展的生产级系统。文章还提供了完整的部署步骤，从集群创建到chat客户端的配置，展示了如何将RAG技术应用于实际应用场景，使聊天助手能够基于知识库提供准确的回答。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Elastic Kubernetes Service**
- **Amazon OpenSearch Service**
- **Intermediate (200)**
- **Technical How-to**
- **Generative AI**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*