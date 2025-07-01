# n8n 图片下载解决方案

## 问题原因
在n8n的Code节点中，`$http`对象不可用，需要使用`this.helpers.httpRequest()`方法。

## 解决方案

### 方案1：修复Code节点（使用上面的修复代码）
将`n8n-image-download-fixed.js`中的代码替换到你的图片下载节点中。

### 方案2：使用HTTP Request节点（推荐）

#### 步骤1：添加条件判断
在"转换"节点后添加一个IF节点：
- **条件**: `{{ $json.suggestedImageUrl && $json.suggestedImageUrl.length > 0 }}`
- **True分支**: 下载图片
- **False分支**: 跳过图片下载

#### 步骤2：配置HTTP Request节点下载图片
**节点名称**: "下载图片"
**配置**:
- **Method**: GET
- **URL**: `{{ $json.suggestedImageUrl }}`
- **Response Format**: File
- **Binary Property**: imageData
- **Headers**:
  ```
  User-Agent: n8n-image-downloader
  ```

#### 步骤3：添加Code节点处理图片数据
**节点名称**: "处理图片数据"
**代码**:
```javascript
const inputData = $json;
const binaryData = $binary.imageData;

if (binaryData && binaryData.data) {
  // 获取图片的base64数据
  const imageBase64 = binaryData.data;
  const imageSize = Buffer.from(imageBase64, 'base64').length;
  
  console.log(`图片处理成功，大小: ${imageSize} bytes`);
  
  return {
    ...inputData,
    needsImageDownload: true,
    imageDownloaded: true,
    imageBase64: imageBase64,
    imageSize: imageSize,
    downloadTimestamp: new Date().toISOString(),
    imageError: null
  };
} else {
  console.error('未获取到图片数据');
  
  // 移除图片引用
  const contentWithoutImage = inputData.content.replace(
    /!\[.*?\]\(\/assets\/images\/banners\/.*?\)/g, 
    ''
  ).replace(
    /^image: \/assets\/images\/banners\/.*$/m,
    '# image: # 图片下载失败，已移除'
  );
  
  return {
    ...inputData,
    content: contentWithoutImage,
    needsImageDownload: false,
    imageDownloaded: false,
    imageError: 'No binary data received',
    downloadTimestamp: new Date().toISOString()
  };
}
```

### 方案3：最简单的解决方案

如果上述方案都有问题，可以暂时跳过图片下载，只修改转换节点：

#### 修改转换节点中的needsImageDownload设置
在你的转换节点最后，将：
```javascript
needsImageDownload: true,
```
改为：
```javascript
needsImageDownload: false, // 暂时禁用图片下载
```

这样文章仍然会包含图片路径，但不会尝试下载图片。你可以稍后手动添加图片。

## 立即修复建议

1. **快速修复**: 使用方案1的修复代码
2. **如果还有问题**: 使用方案3暂时禁用图片下载
3. **长期解决**: 实施方案2的HTTP Request节点方案

你想先试试哪个方案？
