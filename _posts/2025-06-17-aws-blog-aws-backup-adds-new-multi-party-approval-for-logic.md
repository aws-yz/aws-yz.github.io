---
layout: post
title: "AWS Backup adds new Multi-party approval for logically air-gapped vaults"
date: 2025-06-17T15:50:14.000Z
categories: [aws, news, storage]
tags: [Announcements, AWS Backup, AWS CloudTrail, AWS IAM Identity Center, AWS Organizations, AWS reInforce, Featured, Launch, News, Security Identity Compliance, Storage]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "Veliswa Boya"
original_link: "https://aws.amazon.com/blogs/aws/aws-backup-adds-new-multi-party-approval-for-logically-air-gapped-vaults/"
---

# AWS Backup adds new Multi-party approval for logically air-gapped vaults

> **原文链接**: [AWS Backup adds new Multi-party approval for logically air-gapped vaults](https://aws.amazon.com/blogs/aws/aws-backup-adds-new-multi-party-approval-for-logically-air-gapped-vaults/)
> **作者**: Veliswa Boya
> **发布日期**: 2025/6/17

## 内容摘要

AWS宣布推出AWS Backup逻辑气隔保管库与多方审批的集成新功能，即使在AWS账户无法访问的情况下也能确保备份数据的访问。该功能通过以下方式工作：1) 在AWS Organizations管理账户中创建由受信任人员组成的审批团队；2) 通过AWS RAM将保管库与审批团队关联；3) 当账户被破坏时，可以从其他账户请求访问备份；4) 审批团队通过审批门户审查请求；5) 获得批准后即可在新的恢复账户中开始恢复数据。该解决方案提供了一个完全独立于AWS账户凭证的认证路径，即使攻击者获得了根访问权限也无法阻止基于审批团队的恢复流程。该功能现已在所有支持AWS Backup的区域推出，具有分布式决策、完整审计、防止凭证泄露等多重安全优势。

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

- Announcements
- AWS Backup
- AWS CloudTrail
- AWS IAM Identity Center
- AWS Organizations
- AWS re:Inforce
- Featured
- Launch
- News
- Security, Identity, & Compliance
- Storage

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*