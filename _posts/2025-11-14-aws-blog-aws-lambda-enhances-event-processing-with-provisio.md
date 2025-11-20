---
layout: post
title: "[AWS Blog] AWS Lambda enhances event processing with provisioned mode for SQS event-source mapping"
date: 2025-11-14T17:45:04.000+00:00
categories: [aws, news, compute]
tags: [Amazon Simple Queue Service (SQS), Announcements, AWS Lambda, Featured, Launch, News, Serverless]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Micah Walter"
original_link: "https://aws.amazon.com/blogs/aws/aws-lambda-enhances-sqs-processing-with-new-provisioned-mode-3x-faster-scaling-16x-higher-capacity/"
---

# 📰 AWS Lambda enhances event processing with provisioned mode for SQS event-source mapping

> **原文链接**: [AWS Lambda enhances event processing with provisioned mode for SQS event-source mapping](https://aws.amazon.com/blogs/aws/aws-lambda-enhances-sqs-processing-with-new-provisioned-mode-3x-faster-scaling-16x-higher-capacity/)
> **作者**: Micah Walter
> **发布日期**: 2025-11-14 17:45:04 UTC

## 📋 内容摘要

AWS宣布Lambda与Amazon SQS事件源映射(ESM)的预置模式正式全面可用。这一新功能通过配置专用轮询资源，优化了事件驱动应用程序的吞吐量，提供了3倍更快的扩展速度和16倍更高的并发性。预置模式引入了事件轮询器，这些专用资源可以每分钟自动扩展至1000个并发执行，处理突发流量，并提供高达20,000的并发能力，能够以低延迟处理数百万事件。用户可以配置事件轮询器的最小和最大数量，确保应用程序维持基准处理容量，同时控制总体处理吞吐量。该功能现已在所有商业AWS区域推出，可通过AWS管理控制台、CLI或SDK使用，定价基于预置的事件轮询器数量和持续时间，以事件轮询单位(EPU)计量。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Amazon Simple Queue Service (SQS)**
- **Announcements**
- **AWS Lambda**
- **Featured**
- **Launch**
- **News**
- **Serverless**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*