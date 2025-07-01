---
layout: post
title: "Amazon GuardDuty expands Extended Threat Detection coverage to Amazon EKS clusters"
date: 2025-06-17T16:26:04.000Z
categories: [aws, news]
tags: [Amazon Elastic Kubernetes Service, Amazon GuardDuty, Announcements, AWS reInforce, Featured, Launch, News, Security Identity Compliance]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Esra Kayabali"
original_link: "https://aws.amazon.com/blogs/aws/amazon-guardduty-expands-extended-threat-detection-coverage-to-amazon-eks-clusters/"
---

# Amazon GuardDuty expands Extended Threat Detection coverage to Amazon EKS clusters

> **原文链接**: [Amazon GuardDuty expands Extended Threat Detection coverage to Amazon EKS clusters](https://aws.amazon.com/blogs/aws/amazon-guardduty-expands-extended-threat-detection-coverage-to-amazon-eks-clusters/)
> **作者**: Esra Kayabali
> **发布日期**: 2025/6/18

## 内容摘要

AWS宣布Amazon GuardDuty扩展了对Amazon EKS集群的扩展威胁检测覆盖范围。该功能通过correlating Amazon EKS审计日志、EKS集群中进程的运行时行为、EKS集群中的恶意软件执行以及AWS API活动，自动识别复杂的攻击模式。GuardDuty现在可以检测攻击序列，例如威胁行为者利用容器应用程序、获取特权服务帐户令牌，然后使用这些提升的权限访问敏感的Kubernetes机密或AWS资源。新功能使用GuardDuty关联算法来观察和识别表明潜在危害的操作序列，并提供全面的详细信息，包括潜在受影响的资源、事件时间线、参与的参与者以及用于检测序列的指标。要启用此功能，用户需要启用EKS Protection或Runtime Monitoring，建议同时启用两者以获得最大检测覆盖范围。该功能还提供了MITRE ATT&CK®战术和技术映射，以及基于AWS最佳实践的补救建议。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

- Amazon Elastic Kubernetes Service
- Amazon GuardDuty
- Announcements
- AWS re:Inforce
- Featured
- Launch
- News
- Security, Identity, & Compliance

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*