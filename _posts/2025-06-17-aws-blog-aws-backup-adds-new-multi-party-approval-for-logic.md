---
layout: post
title: "[AWS Blog] AWS Backup adds new Multi-party approval for logically air-gapped vaults"
date: 2025-06-17T15:50:14.000+00:00
categories: [aws, news, security, storage]
tags: [Announcements, AWS Backup, AWS CloudTrail, AWS IAM Identity Center, AWS Organizations, AWS reInforce, Featured, Launch, News, Security Identity Compliance, Storage]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Veliswa Boya"
original_link: "https://aws.amazon.com/blogs/aws/aws-backup-adds-new-multi-party-approval-for-logically-air-gapped-vaults/"
---

# 📰 AWS Backup adds new Multi-party approval for logically air-gapped vaults

> **原文链接**: [AWS Backup adds new Multi-party approval for logically air-gapped vaults](https://aws.amazon.com/blogs/aws/aws-backup-adds-new-multi-party-approval-for-logically-air-gapped-vaults/)
> **作者**: Veliswa Boya
> **发布日期**: 2025-06-17 15:50:14 UTC

## 📋 内容摘要

AWS宣布推出将AWS Backup逻辑气隙保管库与多方批准集成的新功能。该功能即使在AWS账户因意外或恶意事件而无法访问时，也能确保对备份的访问。新功能的主要特点包括：1) 允许创建由组织内受信任人员组成的审批团队；2) 通过AWS Resource Access Manager与拥有逻辑气隙保管库的账户共享；3) 在账户被入侵时可从其他账户请求访问备份；4) 具备多方批准机制，所有请求和批准都记录在AWS CloudTrail中；5) 获得授权后可立即开始恢复数据。该功能提供了一个完全独立于AWS账户凭证的身份验证路径，即使攻击者获得账户的root访问权限，也无法阻止基于审批团队的恢复流程。该服务现已在所有支持AWS Backup的AWS区域推出。

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

- **Announcements**
- **AWS Backup**
- **AWS CloudTrail**
- **AWS IAM Identity Center**
- **AWS Organizations**
- **AWS re:Inforce**
- **Featured**
- **Launch**
- **News**
- **Security, Identity, & Compliance**
- **Storage**

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*