// n8n 增强版汇总统计节点代码
// 替换现有的"汇总统计"节点

const results = $input.all();

console.log('=== AWS Blog Publishing Summary (Enhanced) ===');
console.log(`处理 ${results.length} 个项目`);

// 统计各种状态
let published = 0;
let skipped = 0;
let errors = 0;
let imagesCommitted = 0;
let articlesCommitted = 0;

const publishedArticles = [];
const failedArticles = [];
const imageStats = {
  total: 0,
  successful: 0,
  failed: 0
};

results.forEach((result, index) => {
  const data = result.json;
  const status = data.status;

  console.log(`项目 ${index}: status = "${status}"`);

  if (status === 'published') {
    published++;
    
    // 统计文章
    if (data.articleSuccess) {
      articlesCommitted++;
    }
    
    // 统计图片
    imageStats.total++;
    if (data.imageSuccess) {
      imagesCommitted++;
      imageStats.successful++;
    } else {
      imageStats.failed++;
    }
    
    publishedArticles.push({
      fileName: data.fileName || 'unknown',
      title: data.extractedTitle || data.title || 'Unknown Title',
      commitSha: data.commitSha || 'unknown',
      fileSize: data.fileSize || 0,
      
      // 图片信息
      imageFileName: data.imageFileName || null,
      imageCommitted: data.imageSuccess || false,
      imageSize: data.imageSize || 0,
      imageCommitSha: data.imageCommitSha || null,
      
      // 统计
      filesCommitted: data.filesCommitted || 0,
      hasErrors: data.hasErrors || false,
      errors: data.errors || [],
      
      githubUrl: data.githubFileUrl || '',
      timestamp: data.timestamp || new Date().toISOString()
    });
    
  } else if (status === 'skipped') {
    skipped++;
    failedArticles.push({
      status: 'skipped',
      fileName: data.fileName || 'unknown',
      error: data.error || data.reason || 'skipped',
      timestamp: data.timestamp || new Date().toISOString()
    });
    
  } else if (status === 'error') {
    errors++;
    failedArticles.push({
      status: 'error',
      fileName: data.fileName || 'unknown',
      error: data.error || 'unknown error',
      timestamp: data.timestamp || new Date().toISOString()
    });
  }
});

// 检测重复文章
const uniqueFiles = new Set();
const duplicates = [];

publishedArticles.forEach((article, index) => {
  if (uniqueFiles.has(article.fileName)) {
    duplicates.push({
      index: index,
      fileName: article.fileName,
      reason: 'duplicate_filename'
    });
  } else {
    uniqueFiles.add(article.fileName);
  }
});

const actualPublished = uniqueFiles.size;

// 生成增强汇总
const summary = {
  // 基础统计
  total: results.length,
  published: published,
  skipped: skipped,
  errors: errors,
  unique_articles: actualPublished,
  duplicates_detected: duplicates.length,
  
  // 文件统计
  articles_committed: articlesCommitted,
  images_committed: imagesCommitted,
  total_files_committed: articlesCommitted + imagesCommitted,
  
  // 图片统计
  image_stats: imageStats,
  image_success_rate: imageStats.total > 0 ? 
    ((imageStats.successful / imageStats.total) * 100).toFixed(1) + '%' : '0%',
  
  // 时间和成功率
  timestamp: new Date().toISOString(),
  success_rate: results.length > 0 ? 
    ((published / results.length) * 100).toFixed(1) + '%' : '0%',
  
  // 详细数据
  published_articles: publishedArticles,
  failed_articles: failedArticles
};

// 生成增强消息
let message = '';
if (errors > 0) {
  message = `❌ ${errors} 篇处理失败`;
  if (published > 0) {
    message += `，${published} 篇成功发布`;
    if (imagesCommitted > 0) {
      message += `（含 ${imagesCommitted} 张图片）`;
    }
  }
} else if (published > 0) {
  message = `✅ 成功发布 ${published} 篇 AWS 博客摘要`;
  if (imagesCommitted > 0) {
    message += `，上传 ${imagesCommitted} 张头图`;
  }
  if (duplicates.length > 0) {
    message += ` (检测到 ${duplicates.length} 个重复项)`;
  }
} else {
  message = `ℹ️ 本次运行无新文章发布`;
}

if (skipped > 0) {
  message += `，跳过 ${skipped} 篇`;
}

const finalResult = {
  ...summary,
  message: message,
  blog_url: 'https://blog.ifyz.wang',

  run_statistics: {
    total_processed: summary.total,
    unique_published: actualPublished,
    files_committed: summary.total_files_committed,
    images_success_rate: summary.image_success_rate,
    duplicate_rate: summary.total > 0 ? 
      ((duplicates.length / summary.total) * 100).toFixed(1) + '%' : '0%',
    processing_time: new Date().toISOString()
  }
};

// 增强控制台输出
console.log(`总处理: ${summary.total} 个项目`);
console.log(`成功发布: ${published} 个`);
console.log(`文章提交: ${articlesCommitted} 个`);
console.log(`图片上传: ${imagesCommitted} 个`);
console.log(`图片成功率: ${summary.image_success_rate}`);
console.log(`跳过: ${skipped} 个`);
console.log(`错误: ${errors} 个`);
console.log(`总成功率: ${summary.success_rate}`);

if (errors > 0) {
  console.log('\n处理失败的项目:');
  failedArticles.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.fileName || 'Unknown'}`);
    console.log(`     状态: ${item.status}`);
    console.log(`     错误: ${item.error}`);
  });
}

if (published > 0) {
  console.log('\n成功发布的文章:');
  publishedArticles.forEach((article, index) => {
    console.log(`  ${index + 1}. ${article.title}`);
    console.log(`     文件: ${article.fileName}`);
    console.log(`     提交: ${article.commitSha}`);
    console.log(`     图片: ${article.imageCommitted ? '✅' : '❌'} ${article.imageFileName || 'N/A'}`);
    console.log(`     文件数: ${article.filesCommitted}`);
    if (article.hasErrors && article.errors.length > 0) {
      console.log(`     警告: ${article.errors.join(', ')}`);
    }
  });
}

if (duplicates.length > 0) {
  console.log('\n检测到的重复项:');
  duplicates.forEach((dup, index) => {
    console.log(`  ${index + 1}. ${dup.fileName}`);
  });
}

console.log('=====================================');

return finalResult;
