# 图片资源管理

## 目录结构

```
images/
├── banners/          # 文章头图 (1200x630px 推荐)
├── posts/           # 文章内容配图
│   ├── aws/         # AWS相关文章图片
│   ├── n8n/         # n8n相关文章图片
│   └── general/     # 通用技术文章图片
├── icons/           # 服务图标和小图标 (64x64px)
├── diagrams/        # 架构图和流程图
└── screenshots/     # 截图和界面图片
```

## 图片规范

### 文章头图 (banners/)
- 尺寸: 1200x630px (适合社交媒体分享)
- 格式: JPG/PNG
- 文件大小: < 500KB
- 命名: `YYYY-MM-DD-article-slug.jpg`

### 内容配图 (posts/)
- 最大宽度: 800px
- 格式: JPG/PNG/WebP
- 文件大小: < 300KB
- 命名: 描述性名称，如 `aws-lambda-architecture.png`

### 图标 (icons/)
- 尺寸: 64x64px 或 128x128px
- 格式: PNG (透明背景)
- 命名: 服务名称，如 `aws-lambda.png`

## 免费资源推荐

### 图片来源
- Unsplash (https://unsplash.com) - 高质量免费图片
- AWS Architecture Icons (https://aws.amazon.com/architecture/icons/)
- Heroicons (https://heroicons.com) - 简洁图标
- Feather Icons (https://feathericons.com) - 轻量图标

### 在线工具
- Canva (免费版) - 快速创建头图
- draw.io - 架构图绘制
- GIMP - 免费图片编辑
- TinyPNG - 图片压缩
