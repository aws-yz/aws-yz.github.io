// n8n 增强版结果处理节点代码
// 替换现有的"提交结果"节点

const result = $json;

if (result.status === 'error') {
  return {
    status: 'error',
    error: result.error,
    fileName: result.fileName || 'unknown',
    title: result.title || 'Unknown',
    timestamp: result.timestamp || new Date().toISOString(),
    filesCommitted: 0,
    articleSuccess: false,
    imageSuccess: false
  };
}

if (result.status === 'published') {
  const articleInfo = result.articleCommit || {};
  const imageInfo = result.imageCommit || {};
  
  return {
    status: 'published',
    
    // 文章信息
    fileName: articleInfo.fileName || 'unknown',
    filePath: articleInfo.filePath || '',
    fileSize: articleInfo.size || 0,
    commitSha: articleInfo.sha ? articleInfo.sha.substring(0, 8) : 'unknown',
    commitMessage: result.commitMessage || '',
    githubFileUrl: articleInfo.url || '',
    githubCommitUrl: articleInfo.commitUrl || '',
    
    // 图片信息
    imageFileName: imageInfo.fileName || null,
    imageCommitted: imageInfo.success || false,
    imageSize: imageInfo.size || 0,
    imageCommitSha: imageInfo.sha ? imageInfo.sha.substring(0, 8) : null,
    imageUrl: imageInfo.url || null,
    
    // 统计信息
    filesCommitted: result.summary.filesCommitted || 0,
    articleSuccess: result.summary.articleSuccess || false,
    imageSuccess: result.summary.imageSuccess || false,
    hasErrors: result.summary.hasErrors || false,
    totalErrors: result.summary.totalErrors || 0,
    errors: result.errors || [],
    
    // 基本信息
    title: result.title || 'Unknown Title',
    categories: result.categories || [],
    tags: result.tags || [],
    blogUrl: result.blogUrl || 'https://blog.ifyz.wang',
    timestamp: result.timestamp || new Date().toISOString(),
    
    // 成功标识
    success: true,
    extractedTitle: result.title || 'Unknown Title'
  };
}

// 其他状态
return {
  status: result.status || 'unknown',
  error: 'Unknown status',
  timestamp: new Date().toISOString(),
  filesCommitted: 0,
  articleSuccess: false,
  imageSuccess: false
};
