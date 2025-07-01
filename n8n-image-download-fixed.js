// n8n 图片下载节点代码 - 修复版本
// 使用n8n内置的HTTP请求方法

const inputData = $json;

// 检查是否需要下载图片
if (!inputData.suggestedImageUrl) {
  // 如果没有图片URL，直接传递数据
  return {
    ...inputData,
    needsImageDownload: false,
    imageDownloaded: false,
    imageError: 'No image URL provided'
  };
}

try {
  console.log(`开始下载图片: ${inputData.suggestedImageUrl}`);
  
  // 使用n8n的内置HTTP请求方法
  const response = await this.helpers.httpRequest({
    method: 'GET',
    url: inputData.suggestedImageUrl,
    encoding: null, // 重要：设置为null以获取二进制数据
    timeout: 30000,
    headers: {
      'User-Agent': 'n8n-image-downloader'
    }
  });

  // 将响应转换为Buffer（如果还不是）
  const imageBuffer = Buffer.isBuffer(response) ? response : Buffer.from(response);
  
  // 转换为base64
  const imageBase64 = imageBuffer.toString('base64');

  console.log(`图片下载成功，大小: ${imageBuffer.length} bytes`);

  // 返回包含图片数据的完整信息
  return {
    ...inputData,
    needsImageDownload: true,
    imageDownloaded: true,
    imageBase64: imageBase64,
    imageSize: imageBuffer.length,
    downloadTimestamp: new Date().toISOString(),
    imageError: null
  };

} catch (error) {
  console.error('图片下载失败:', error.message);
  
  // 图片下载失败时，移除图片引用但继续处理
  const contentWithoutImage = inputData.content.replace(
    /!\[.*?\]\(\/assets\/images\/banners\/.*?\)/g, 
    ''
  );
  
  const frontMatterWithoutImage = contentWithoutImage.replace(
    /^image: \/assets\/images\/banners\/.*$/m,
    '# image: # 图片下载失败，已移除'
  );

  return {
    ...inputData,
    content: frontMatterWithoutImage,
    needsImageDownload: false,
    imageDownloaded: false,
    imageError: error.message,
    downloadTimestamp: new Date().toISOString()
  };
}
