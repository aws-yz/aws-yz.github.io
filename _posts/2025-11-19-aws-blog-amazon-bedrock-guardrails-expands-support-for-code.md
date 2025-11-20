---
layout: post
title: "[ML] Amazon Bedrock Guardrails expands support for code domain"
date: 2025-11-19T22:27:14.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock Guardrails, Technical How-to]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Phu Mon Htut"
original_link: "https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-guardrails-expands-support-for-code-domain/"
---

# 🤖 Amazon Bedrock Guardrails expands support for code domain

> **原文链接**: [Amazon Bedrock Guardrails expands support for code domain](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-guardrails-expands-support-for-code-domain/)
> **作者**: Phu Mon Htut
> **发布日期**: 2025-11-19 22:27:14 UTC

## 📋 内容摘要

Amazon Bedrock Guardrails现在扩展了对代码领域的支持，提供针对用户提示、注释、变量、函数名和字符串文字等代码元素中不良内容的保护。该功能支持Python、JavaScript、TypeScript、Java、C#、C++、PHP、Shell、HTML、SQL、C和GO等主要编程语言。Bedrock Guardrails提供了六种关键保障措施，包括内容过滤器（检测有害意图）、禁止主题过滤器（允许自定义代码相关限制）、敏感信息过滤器（跨代码上下文保护个人数据）、以及防范提示攻击（包括越狱、提示注入和提示泄露）的功能。这些安全控制有助于组织在保持AI辅助开发生产力的同时，解决代码生成中的安全挑战，如恶意代码生成和数据泄露等风险。本文详细介绍了如何配置这些保障措施，并提供了实际测试示例，帮助开发者在保持开发效率的同时确保AI应用符合负责任的AI政策。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock Guardrails**
- **Technical How-to**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*