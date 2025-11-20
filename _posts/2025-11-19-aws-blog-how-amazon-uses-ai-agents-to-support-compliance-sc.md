---
layout: post
title: "[ML] How Amazon uses AI agents to support compliance screening of billions of transactions per day"
date: 2025-11-19T19:39:18.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Amazon Bedrock AgentCore, Artificial Intelligence]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Damodar Shetyo"
original_link: "https://aws.amazon.com/blogs/machine-learning/how-amazon-uses-ai-agents-to-support-compliance-screening-of-billions-of-transactions-per-day/"
---

# 🤖 How Amazon uses AI agents to support compliance screening of billions of transactions per day

> **原文链接**: [How Amazon uses AI agents to support compliance screening of billions of transactions per day](https://aws.amazon.com/blogs/machine-learning/how-amazon-uses-ai-agents-to-support-compliance-screening-of-billions-of-transactions-per-day/)
> **作者**: Damodar Shetyo
> **发布日期**: 2025-11-19 19:39:18 UTC

## 📋 内容摘要

亚马逊开发了一个AI驱动的合规筛查系统，每天处理约20亿笔交易，确保全球合规。该系统采用三层架构：第一层使用模糊匹配算法和向量嵌入模型进行初步筛查；第二层利用传统机器学习过滤低质量匹配；第三层由专门的AI代理执行深入调查。这些代理包括姓名匹配代理、地址匹配代理、实体类型推断代理、客户信息验证代理和建议代理，它们使用各种工具(如数据聚合器、地图工具和开源数据工具)协同工作。该系统在Amazon Bedrock AgentCore Runtime上运行，使用Strands代理框架构建，实现了96%的整体准确率，自动化了60%的决策流程。文章还分享了开发经验：从明确的标准操作程序开始、迭代开发、平衡自主性与控制、重视工具设计和确保可观察性。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Amazon Bedrock AgentCore**
- **Artificial Intelligence**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*