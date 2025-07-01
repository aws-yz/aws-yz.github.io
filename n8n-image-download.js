// n8n 图片下载节点代码
// 在"转换成功github API需要的参数"节点之后添加此节点

const inputData = $json;

// 检查是否需要下载图片
if (!inputData.needsImageDownload || !inputData.suggestedImageUrl) {
  // 如果不需要下载图片，直接传递数据
  return inputData;
}

try {
  // 下载图片
  const imageResponse = await $http.request({
    method: 'GET',
    url: inputData.suggestedImageUrl,
    responseType: 'arraybuffer',
    timeout: 30000
  });

  // 将图片转换为 base64
  const imageBuffer = Buffer.from(imageResponse.data);
  const imageBase64 = imageBuffer.toString('base64');

  // 返回包含图片数据的完整信息
  return {
    ...inputData,
    imageDownloaded: true,
    imageBase64: imageBase64,
    imageSize: imageBuffer.length,
    downloadTimestamp: new Date().toISOString()
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
    imageDownloaded: false,
    imageError: error.message,
    needsImageDownload: false
  };
}
