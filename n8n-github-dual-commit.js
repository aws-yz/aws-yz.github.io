// n8n GitHub 双重提交节点代码
// 替换现有的"githubAPI"节点，同时提交文章和图片

const inputData = $json;
const githubToken = $credentials.githubApi.accessToken;
const repoOwner = 'aws-yz';
const repoName = 'aws-yz.github.io';
const branch = 'main';

// GitHub API 基础配置
const githubHeaders = {
  'Accept': 'application/vnd.github+json',
  'Authorization': `Bearer ${githubToken}`,
  'User-Agent': 'n8n-aws-blog-publisher',
  'X-GitHub-Api-Version': '2022-11-28'
};

async function commitToGitHub(filePath, content, message, isBase64 = false) {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
  
  const body = {
    message: message,
    content: isBase64 ? content : Buffer.from(content, 'utf8').toString('base64'),
    branch: branch,
    committer: {
      name: 'n8n bot',
      email: 'wangyz180@gmail.com'
    }
  };

  const response = await $http.request({
    method: 'PUT',
    url: url,
    headers: githubHeaders,
    data: body,
    timeout: 30000
  });

  return response.data;
}

try {
  const results = {
    articleCommit: null,
    imageCommit: null,
    status: 'processing',
    errors: []
  };

  // 1. 首先提交图片（如果有）
  if (inputData.imageDownloaded && inputData.imageBase64) {
    try {
      console.log(`正在提交图片: ${inputData.imageFileName}`);
      
      const imageCommitResult = await commitToGitHub(
        `assets/images/banners/${inputData.imageFileName}`,
        inputData.imageBase64,
        `Add banner image for: ${inputData.title}`,
        true // 图片是 base64 格式
      );
      
      results.imageCommit = {
        success: true,
        fileName: inputData.imageFileName,
        sha: imageCommitResult.commit.sha,
        size: inputData.imageSize,
        url: imageCommitResult.content.html_url
      };
      
      console.log(`图片提交成功: ${imageCommitResult.commit.sha}`);
      
    } catch (imageError) {
      console.error('图片提交失败:', imageError.message);
      results.errors.push(`图片提交失败: ${imageError.message}`);
      
      // 图片提交失败时，从文章内容中移除图片引用
      inputData.content = inputData.content.replace(
        /!\[.*?\]\(\/assets\/images\/banners\/.*?\)/g, 
        ''
      ).replace(
        /^image: \/assets\/images\/banners\/.*$/m,
        '# image: # 图片上传失败，已移除'
      );
    }
  }

  // 2. 提交文章内容
  console.log(`正在提交文章: ${inputData.fileName}`);
  
  const articleCommitResult = await commitToGitHub(
    inputData.filePath,
    inputData.content,
    inputData.commitMessage,
    false // 文章内容是文本格式
  );
  
  results.articleCommit = {
    success: true,
    fileName: inputData.fileName,
    filePath: inputData.filePath,
    sha: articleCommitResult.commit.sha,
    size: articleCommitResult.content.size,
    url: articleCommitResult.content.html_url,
    commitUrl: articleCommitResult.commit.html_url
  };
  
  console.log(`文章提交成功: ${articleCommitResult.commit.sha}`);
  
  // 3. 生成最终结果
  results.status = 'published';
  results.timestamp = new Date().toISOString();
  results.blogUrl = 'https://blog.ifyz.wang';
  results.title = inputData.title;
  results.categories = inputData.categories;
  results.tags = inputData.tags;
  
  // 统计信息
  results.summary = {
    filesCommitted: (results.articleCommit ? 1 : 0) + (results.imageCommit ? 1 : 0),
    articleSuccess: !!results.articleCommit,
    imageSuccess: !!results.imageCommit,
    hasErrors: results.errors.length > 0,
    totalErrors: results.errors.length
  };

  return results;

} catch (error) {
  console.error('GitHub 提交过程出错:', error.message);
  
  return {
    status: 'error',
    error: error.message,
    timestamp: new Date().toISOString(),
    fileName: inputData.fileName,
    title: inputData.title,
    articleCommit: null,
    imageCommit: null,
    summary: {
      filesCommitted: 0,
      articleSuccess: false,
      imageSuccess: false,
      hasErrors: true,
      totalErrors: 1
    }
  };
}
