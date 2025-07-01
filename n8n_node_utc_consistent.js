// n8n 转换节点代码 - 统一使用 UTC 时间，保持一致性

// 检查必要字段是否存在
const item = $json.output;

// 基本格式验证
if (!item || !item.title || !item.summary || !item.link) {
  throw new Error('Missing required fields: title, summary, or link');
}

// 检查内容质量
if (item.summary.length < 50) {
  throw new Error('Summary too short (minimum 50 characters)');
}

// 生成文件名友好的 slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-')
    .substring(0, 50);
}

// 处理日期 - 统一使用 UTC 时间
const publishDate = new Date(item["Publish date"]);

// 生成文件名用的日期（YYYY-MM-DD）- 使用 UTC 日期
const dateStr = publishDate.toISOString().split('T')[0]; // YYYY-MM-DD

// 生成 front matter 中的日期 - 保持 UTC 时间但添加明确的时区标志
const isoDateTime = publishDate.toISOString().replace('Z', '+00:00'); // 明确标记为 UTC

// 生成文件名
const slug = createSlug(item.title);
const fileName = `${dateStr}-aws-blog-${slug}.md`;

// 处理 Categories（主要分类）
function generateCategories(tags) {
  const categoryMap = {
    'storage': ['s3', 'simple storage service', 'fsx', 'efs', 'storage'],
    'compute': ['lambda', 'ec2', 'fargate', 'batch', 'graviton'],
    'database': ['rds', 'dynamodb', 'elasticache', 'redshift'],
    'ai-ml': ['generative ai', 'machine learning', 'bedrock', 'sagemaker'],
    'networking': ['vpc', 'cloudfront', 'route 53', 'load balancer'],
    'developer-tools': ['codecommit', 'codebuild', 'codepipeline', 'open source'],
    'security': ['guardduty', 'shield', 'security hub', 'certificate manager', 'backup'],
    'news': ['announcements', 'launch', 'news', 'week in review']
  };
  
  const detectedCategories = new Set(['aws']);
  
  tags.forEach(tag => {
    const tagLower = tag.toLowerCase();
    Object.entries(categoryMap).forEach(([category, keywords]) => {
      if (keywords.some(keyword => tagLower.includes(keyword))) {
        detectedCategories.add(category);
      }
    });
  });
  
  return Array.from(detectedCategories).slice(0, 4);
}

// 处理 Tags（保留原始写法，仅做基本清理）
function cleanTags(tags) {
  return tags.map(tag => {
    return tag
      .replace(/[^\w\s()-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }).filter(tag => tag.length > 0);
}

const categories = generateCategories(item.Tag || []);
const tags = cleanTags(item.Tag || []);

// 生成博客内容 - 显示时使用 UTC 时间但标明时区
const utcDateDisplay = publishDate.toISOString().replace('T', ' ').replace('.000Z', ' UTC');

const content = `# ${item.title}

> **原文链接**: [${item.title}](${item.link})  
> **作者**: ${(item.Author || []).join(', ')}  
> **发布日期**: ${utcDateDisplay}

## 内容摘要

${item.summary}

## 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 涉及的 AWS 服务和主题

${(item.Tag || []).map(tag => `- ${tag}`).join('\n')}

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*`;

// 生成完整的 Markdown 文件
const frontMatter = `---
layout: post
title: "${item.title}"
date: ${isoDateTime}
categories: [${categories.join(', ')}]
tags: [${tags.join(', ')}]
toc: true
math: false
author: "AWS Blog 摘要"
original_author: "${(item.Author || []).join(', ')}"
original_link: "${item.link}"
---

${content}`;

return {
  fileName: fileName,
  filePath: `_posts/${fileName}`,
  content: frontMatter,
  commitMessage: `Add AWS blog summary: ${item.title}`,
  title: item.title,
  originalLink: item.link,
  publishDate: dateStr,
  categories: categories,
  tags: tags,
  contentValid: true
};
