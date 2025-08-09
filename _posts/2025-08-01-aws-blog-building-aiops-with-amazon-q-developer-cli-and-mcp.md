---
layout: post
title: "[ML] Building AIOps with Amazon Q Developer CLI and MCP Server"
date: 2025-08-01T15:23:07.000+00:00
categories: [aws, ai-ml]
tags: [Advanced (300), Amazon Q Developer, Generative AI, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Biswanath Mukherjee"
original_link: "https://aws.amazon.com/blogs/machine-learning/building-aiops-with-amazon-q-developer-cli-and-mcp-server/"
---

# 🤖 Building AIOps with Amazon Q Developer CLI and MCP Server

> **原文链接**: [Building AIOps with Amazon Q Developer CLI and MCP Server](https://aws.amazon.com/blogs/machine-learning/building-aiops-with-amazon-q-developer-cli-and-mcp-server/)
> **作者**: Biswanath Mukherjee
> **发布日期**: 2025-08-01 15:23:07 UTC

## 📋 内容摘要

这篇文章详细介绍了如何使用Amazon Q Developer CLI和MCP服务器构建AIOps解决方案。文章展示了三个主要用例：1) 识别和修复EC2实例的高CPU使用率问题；2) 识别和移除S3存储桶的公共访问权限；3) 识别和阻止EC2实例的特定未授权开放端口。通过使用自然语言查询，Amazon Q Developer CLI能够自动将这些查询转换为适当的命令，并识别执行所需的工具。该解决方案具有智能错误处理功能，可以分析日志并执行自动纠正，最大限度地减少人工干预。文章还提供了详细的配置步骤，包括设置MCP服务器、部署AWS资源和创建Amazon Bedrock知识库。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Advanced (300)**
- **Amazon Q Developer**
- **Generative AI**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*