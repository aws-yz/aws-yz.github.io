---
layout: post
title: "[ML] Build a biomedical research agent with Biomni tools and Amazon Bedrock AgentCore Gateway"
date: 2025-11-14T18:28:42.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon Bedrock AgentCore, Amazon Machine Learning, Healthcare, Life Sciences, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Hasan Poonawala"
original_link: "https://aws.amazon.com/blogs/machine-learning/build-a-biomedical-research-agent-with-biomni-tools-and-amazon-bedrock-agentcore-gateway/"
---

# 🤖 Build a biomedical research agent with Biomni tools and Amazon Bedrock AgentCore Gateway

> **原文链接**: [Build a biomedical research agent with Biomni tools and Amazon Bedrock AgentCore Gateway](https://aws.amazon.com/blogs/machine-learning/build-a-biomedical-research-agent-with-biomni-tools-and-amazon-bedrock-agentcore-gateway/)
> **作者**: Hasan Poonawala
> **发布日期**: 2025-11-14 18:28:42 UTC

## 📋 内容摘要

本文介绍了如何使用Amazon Bedrock AgentCore和斯坦福Biomni工具构建生物医学研究代理。文章详细说明了如何通过AgentCore Gateway整合30多个专业生物医学数据库工具，包括蛋白质结构、基因组学、表达组学、临床数据等领域的工具。该方案使用Strands Agents开源框架，结合Claude Sonnet 4交织思考能力，实现了具有PubMed本地工具的研究代理。系统通过AgentCore Memory服务实现上下文感知的研究助手，支持持久化记忆，并使用AgentCore Runtime部署为可扩展的服务。文章还展示了该代理在药物机制分析、基因变异研究等场景的应用，以及如何利用AgentCore Observability提供全面的监控和审计能力，确保生物医学研究的再现性和合规性。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Bedrock AgentCore**
- **Amazon Machine Learning**
- **Healthcare**
- **Life Sciences**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*