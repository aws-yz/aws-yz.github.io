// n8n 增强转换节点代码 - 支持自动模板和图片配置
// 替换你现有的"转换成功github API需要的参数"节点中的代码

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

// 处理日期 - 确保一致性
const publishDate = new Date(item["Publish date"]);
const dateStr = publishDate.toISOString().split('T')[0]; // YYYY-MM-DD
const isoDateTime = publishDate.toISOString().replace('Z', '+00:00');

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

// 处理 Tags
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

// 🎨 图片配置 - 新增功能
function generateImageConfig(title, categories, tags) {
  // 根据分类和标签推荐头图
  const imageMap = {
    'ai-ml': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&crop=center',
    'storage': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&crop=center',
    'compute': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop&crop=center',
    'database': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=630&fit=crop&crop=center',
    'security': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop&crop=center',
    'networking': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center',
    'developer-tools': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop&crop=center',
    'news': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=630&fit=crop&crop=center'
  };

  // 选择最相关的分类作为图片主题
  const primaryCategory = categories.find(cat => cat !== 'aws') || 'news';
  const suggestedImage = imageMap[primaryCategory] || imageMap['news'];
  
  // 生成图片文件名
  const imageFileName = `${dateStr}-aws-blog-${slug}.jpg`;
  const imagePath = `/assets/images/banners/${imageFileName}`;
  
  return {
    suggestedImageUrl: suggestedImage,
    imagePath: imagePath,
    imageFileName: imageFileName,
    primaryCategory: primaryCategory
  };
}

const imageConfig = generateImageConfig(item.title, categories, tags);

// 🎯 使用增强模板生成内容
const enhancedContent = `# ${item.title}

![${item.title}](${imageConfig.imagePath} "${item.title}")

> **原文链接**: [${item.title}](${item.link})  
> **作者**: ${(item.Author || []).join(', ')}  
> **发布日期**: ${publishDate.toISOString().replace('T', ' ').replace('.000Z', ' UTC')}  
> **主要分类**: ${imageConfig.primaryCategory}

## 📋 内容摘要

${item.summary}

## 🔗 相关信息

这是来自 AWS 官方博客的最新资讯摘要。点击上方原文链接查看完整内容和技术细节。

### 🏷️ 涉及的 AWS 服务和主题

${(item.Tag || []).map(tag => `- **${tag}**`).join('\n')}

## 📚 延伸阅读

- [AWS 官方文档](https://docs.aws.amazon.com/)
- [AWS 架构中心](https://aws.amazon.com/architecture/)
- [AWS 最佳实践](https://aws.amazon.com/architecture/well-architected/)

---

*本文为 AWS 官方博客内容摘要，完整内容请访问原文链接。版权归原作者所有。*

<!-- 图片配置信息 -->
<!-- 建议头图: ${imageConfig.suggestedImageUrl} -->
<!-- 图片主题: ${imageConfig.primaryCategory} -->`;

// 生成完整的 Markdown 文件（使用增强模板）
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
image: ${imageConfig.imagePath}
---

${enhancedContent}`;

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
  contentValid: true,
  
  // 🎨 新增图片相关信息
  imageConfig: imageConfig,
  needsImageDownload: true,
  suggestedImageUrl: imageConfig.suggestedImageUrl,
  imagePath: imageConfig.imagePath,
  imageFileName: imageConfig.imageFileName
};
