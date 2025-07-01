# n8n GitHub双重提交解决方案

## 问题原因
在n8n的Code节点中，`$credentials`的访问方式可能不同，导致凭据无法正确获取。

## 推荐解决方案：使用HTTP Request节点

### 方案1：分离图片和文章提交（推荐）

#### 步骤1：添加条件判断节点
在"图片下载"节点后添加一个IF节点：

**条件设置**：
- 条件：`{{ $json.imageDownloaded }} === true`
- True分支：提交图片
- False分支：直接提交文章

#### 步骤2：图片提交HTTP Request节点
**节点配置**：
- Method: PUT
- URL: `https://api.github.com/repos/aws-yz/aws-yz.github.io/contents/assets/images/banners/{{ $json.imageFileName }}`
- Authentication: GitHub API (使用你现有的凭据)
- Headers:
  ```
  Accept: application/vnd.github+json
  User-Agent: n8n-aws-blog-publisher
  X-GitHub-Api-Version: 2022-11-28
  ```
- Body (JSON):
  ```json
  {
    "message": "Add banner image for: {{ $json.title }}",
    "content": "{{ $json.imageBase64 }}",
    "branch": "main",
    "committer": {
      "name": "n8n bot",
      "email": "wangyz180@gmail.com"
    }
  }
  ```

#### 步骤3：文章提交HTTP Request节点
**节点配置**：
- Method: PUT
- URL: `https://api.github.com/repos/aws-yz/aws-yz.github.io/contents/{{ $json.filePath }}`
- Authentication: GitHub API (使用你现有的凭据)
- Headers: 同上
- Body (JSON):
  ```json
  {
    "message": "{{ $json.commitMessage }}",
    "content": "{{ $json.content.base64Encode() }}",
    "branch": "main",
    "committer": {
      "name": "n8n bot",
      "email": "wangyz180@gmail.com"
    }
  }
  ```

### 方案2：简化版本（保持现有结构）

如果你想保持现有的单节点结构，可以使用以下修复：

#### 在Code节点设置中：
1. 点击Code节点的设置
2. 在"Credentials"部分添加GitHub API凭据
3. 使用以下修复代码：

```javascript
// 修复版本 - 在Code节点中使用
const inputData = $json;

// 获取GitHub token的几种方式
let githubToken;

// 方式1：从节点凭据获取（需要在节点设置中配置）
try {
  githubToken = $credentials.githubApi.accessToken;
} catch (e) {
  console.log('无法从凭据获取token，尝试其他方式');
}

// 方式2：如果方式1失败，从环境变量获取（需要预先设置）
if (!githubToken) {
  githubToken = $env.GITHUB_TOKEN;
}

// 方式3：从前一个节点传递（需要在前面的节点中设置）
if (!githubToken && inputData.githubToken) {
  githubToken = inputData.githubToken;
}

if (!githubToken) {
  return {
    status: 'error',
    error: 'GitHub token not available. Please configure credentials.',
    timestamp: new Date().toISOString()
  };
}

// 其余代码保持不变...
```

### 方案3：最简单的临时解决方案

直接在你现有的"githubAPI" HTTP Request节点中添加图片提交逻辑：

1. 保持现有的文章提交节点
2. 在它之前添加一个新的HTTP Request节点专门用于图片提交
3. 使用IF节点控制是否执行图片提交

## 推荐实施步骤

1. **立即解决**：使用方案1的HTTP Request节点方式
2. **测试**：先用一个简单的文章测试图片提交
3. **优化**：确认工作后再处理错误情况

你想使用哪种方案？我可以帮你详细配置。
