---
layout: post
title: "[ML] How Care Access achieved 86% data processing cost reductions and 66% faster data processing with Amazon Bedrock prompt caching"
date: 2025-11-20T16:15:04.000+00:00
categories: [aws, ai-ml]
tags: [Amazon Bedrock, Customer Solutions]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Michelle Tat, Christopher Penrose, Daniel Hansen, Rasmus Buchmann"
original_link: "https://aws.amazon.com/blogs/machine-learning/how-care-access-achieved-86-data-processing-cost-reductions-and-66-faster-data-processing-with-amazon-bedrock-prompt-caching/"
---

# 🤖 How Care Access achieved 86% data processing cost reductions and 66% faster data processing with Amazon Bedrock prompt caching

> **原文链接**: [How Care Access achieved 86% data processing cost reductions and 66% faster data processing with Amazon Bedrock prompt caching](https://aws.amazon.com/blogs/machine-learning/how-care-access-achieved-86-data-processing-cost-reductions-and-66-faster-data-processing-with-amazon-bedrock-prompt-caching/)
> **作者**: Michelle Tat, Christopher Penrose, Daniel Hansen, Rasmus Buchmann
> **发布日期**: 2025-11-20 16:15:04 UTC

## 📋 内容摘要

这篇文章介绍了医疗研究公司Care Access如何利用Amazon Bedrock的提示缓存技术来优化医疗记录处理。Care Access面临着每天需要处理300-500份医疗记录的挑战，同时必须保持严格的安全性和合规标准。通过在Amazon Bedrock中实施提示缓存功能，他们能够缓存静态的医疗记录内容，而只变化分析问题部分，从而实现了显著的成本降低(86%)和处理时间缩短(66%)。该解决方案使用了AWS Lake Formation进行权限管理，同时确保数据最小化和PII移除，满足HIPAA合规要求。这一技术优化使Care Access能够继续扩大其健康筛查计划，将更多社区与潜在改变生活的健康资源和临床研究机会联系起来。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Bedrock**
- **Customer Solutions**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*