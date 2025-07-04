# 📝 AWS-YZ 博客写作指南

## 📊 项目当前状态

### **博客统计**
- **总文章数**: 52篇
- **主要内容**: AWS技术博客、成本优化、游戏开发
- **最新清理**: 2025年7月4日删除了20篇重复文章
- **项目结构**: 标准Jekyll博客，使用Hamilton主题

### **内容分布**
- **AWS官方博客摘要**: 50篇 (96%)
- **原创技术文章**: 2篇 (4%)
  - AWS成本优化公式
  - 博客欢迎页面

## 🚀 快速发布流程

### 1. **创建新博客文章**
```bash
# 进入项目目录
cd /Users/wyz/project/aws-yz.github.io

# 使用模板创建新文章
cp _templates/post-template.md _posts/2025-07-04-my-new-blog-post.md

# 或者创建n8n相关文章
cp _templates/n8n-post-template.md _posts/2025-07-04-n8n-automation-guide.md
```

### 2. **编写文章内容**
使用你喜欢的编辑器打开文件，添加 front matter 和内容：
```markdown
---
layout: post
title: "我的新博客文章"
date: 2025-07-04 16:00:00 +0000
categories: [aws, tutorial]
tags: [lambda, serverless, best-practices]
toc: true
math: false
author: "YZ Wang"
---

# 🚀 我的新博客文章

## 添加图片示例

### 内容配图
![AWS Lambda架构](/assets/images/posts/aws/lambda-architecture.png "Lambda架构图")

### 截图
![AWS控制台](/assets/images/screenshots/aws-console.png)

### 流程图
![工作流程](/assets/images/diagrams/workflow.png)
```

### 3. **本地预览**
```bash
# 启动本地 Jekyll 服务器
bundle exec jekyll serve --port 4000

# 访问：http://localhost:4000
# 实时预览你的文章效果，修改文件后会自动重新生成
```

### 4. **发布到 GitHub**
```bash
# 添加新文件
git add _posts/2025-07-04-my-new-blog-post.md

# 提交更改
git commit -m "Add new blog post: 我的新博客文章"

# 推送到 GitHub
git push origin main
```

## 📈 内容策略建议

### **当前内容分析**
- **优势**: AWS技术内容丰富，覆盖面广
- **机会**: 增加原创深度技术文章
- **建议**: 平衡官方摘要与原创内容

### **推荐内容方向**
1. **AWS实战教程** - 基于实际项目经验
2. **成本优化案例** - 具体的优化策略和效果
3. **架构设计分享** - 真实的架构决策过程
4. **工具使用心得** - 开发工具和自动化经验
5. **技术趋势分析** - 对AWS新服务的深度解读

### **内容质量提升**
```markdown
# 建议的文章结构
## 🎯 问题背景
## 🔍 解决方案
## 💡 实施步骤
## 📊 效果评估
## 🚀 最佳实践
## 🔗 相关资源
```

## 🎨 简化设计理念

### **Emoji风格标题**
博客采用简洁的emoji风格，无需复杂的banner图片：
```markdown
# 🚀 技术教程类文章
# ☁️ AWS相关文章
# 💰 成本优化文章
# 📚 学习指南
# ✍️ 博客心得
# 🔗 n8n自动化
# 💾 存储相关
# 📰 新闻资讯
```

### **自动分类图标**
系统会自动为不同分类添加图标：
- `aws` → ☁️
- `n8n` → 🔗  
- `cost-optimization` → 💰
- `tutorial` → 📚
- `blog` → ✍️
- `storage` → 💾
- `news` → 📰

## 🛠 高级写作流程

### 1. **使用草稿功能**
```bash
# 创建草稿目录（如果不存在）
mkdir -p _drafts

# 创建草稿文件（不需要日期前缀）
touch _drafts/my-draft-post.md

# 预览包含草稿的站点
bundle exec jekyll serve --drafts
```

### 2. **批量操作和文件管理**
```bash
# 同时添加多个文章
git add _posts/*.md

# 批量提交
git commit -m "Add multiple blog posts"

# 查找特定时间创建的文件
find _posts -type f -newermt "2025-07-04 17:26:00" ! -newermt "2025-07-04 17:27:00" -ls

# 批量删除特定时间的文件（谨慎使用）
find _posts -type f -newermt "2025-07-04 17:26:00" ! -newermt "2025-07-04 17:27:00" -delete
```

### 3. **使用模板快速创建**
```bash
# 复制模板文件
cp _templates/post-template.md _posts/2025-07-04-new-post.md

# 编辑新文件
vim _posts/2025-07-04-new-post.md
```

## 🔧 项目维护工具

### **文件清理命令**
```bash
# 检查重复文件
find _posts -name "*.md" -exec basename {} \; | sort | uniq -d

# 统计文章数量
find _posts -name "*.md" | wc -l

# 按日期查看最近的文章
ls -lt _posts/ | head -10

# 查看Git提交历史
git log --oneline -10
```

### **内容审查**
```bash
# 检查文章的front matter格式
grep -l "^---$" _posts/*.md | head -5

# 统计不同类别的文章
grep -h "categories:" _posts/*.md | sort | uniq -c

# 查找缺少必要字段的文章
grep -L "title:" _posts/*.md
```

## 🖼️ 图片管理规范

### **图片目录结构**
```
assets/images/
├── posts/           # 文章内容配图
│   ├── aws/         # AWS相关图片
│   ├── n8n/         # n8n相关图片
│   └── general/     # 通用技术图片
├── icons/           # 图标 (64x64px)
├── diagrams/        # 架构图和流程图
└── screenshots/     # 截图
```

### **图片使用规范**

#### **内容配图**
```markdown
# 基础语法
![图片描述](/assets/images/posts/category/image-name.png)

# 带标题
![图片描述](/assets/images/posts/category/image-name.png "图片标题")

# 架构图示例
![AWS Lambda架构](/assets/images/diagrams/aws-lambda-architecture.png "无服务器架构")
```

### **免费图片资源**
- **Unsplash**: https://unsplash.com (高质量免费图片)
- **AWS Icons**: https://aws.amazon.com/architecture/icons/ (官方图标)
- **draw.io**: https://draw.io (免费架构图工具)
- **Canva**: https://canva.com (免费版，快速制作图片)

### **图片优化建议**
- 内容图片最大宽度：800px
- 文件大小：< 300KB
- 格式：JPG (照片), PNG (图标/截图)
- 使用 TinyPNG 压缩图片

## 📋 文章写作规范

### **Front Matter 必填字段**：
```yaml
---
layout: post
title: "文章标题"
date: 2025-07-01 16:00:00 +0000
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---
```

### **可选字段**：
- `toc: true` - 启用目录
- `math: true` - 启用数学公式
- `author: "作者名"` - 指定作者
- `original_author: "原作者"` - 转载文章的原作者
- `original_link: "原文链接"` - 转载文章的原文链接

### **文件命名规则**：
- 格式：`YYYY-MM-DD-title-slug.md`
- 示例：`2025-07-04-aws-lambda-best-practices.md`
- **重要**: 避免在同一时间创建多个文件，防止重复内容

### **标题格式规范**：
```markdown
# 🚀 技术教程：AWS Lambda最佳实践
# ☁️ AWS新功能：Amazon S3新特性解析
# 💰 成本优化：如何降低AWS账单
# 📚 学习指南：从零开始学习Docker
# ✍️ 博客心得：写技术博客的经验分享
```

### **内容质量检查清单**：
- [ ] 标题清晰且包含关键词
- [ ] Front matter完整且格式正确
- [ ] 内容结构清晰，有明确的章节
- [ ] 代码示例可执行且有注释
- [ ] 图片路径正确且文件存在
- [ ] 链接有效且指向正确资源
- [ ] 语法和拼写检查通过

## 🔧 常用命令速查

```bash
# 启动开发服务器
bundle exec jekyll serve

# 指定端口
bundle exec jekyll serve --port 4001

# 包含草稿
bundle exec jekyll serve --drafts

# 构建站点（不启动服务器）
bundle exec jekyll build

# 清理生成的文件
bundle exec jekyll clean
```

## 📁 推荐的工作流程

### **标准发布流程**
1. **规划** → 确定文章主题和目标读者
2. **写作** → 在 `_drafts/` 中创建草稿
3. **预览** → 使用 `--drafts` 参数本地预览
4. **完善** → 修改和优化内容，检查质量清单
5. **发布** → 移动到 `_posts/` 并添加正确的日期前缀
6. **推送** → Git 提交并推送到 GitHub
7. **验证** → 检查线上效果和链接有效性

### **内容管理最佳实践**
- **避免批量创建**: 不要在同一时间创建大量文件
- **定期清理**: 删除重复或低质量内容
- **版本控制**: 使用有意义的Git提交信息
- **备份重要**: 重要文章保留本地备份

### **质量控制流程**
```bash
# 发布前检查
bundle exec jekyll build --verbose  # 检查构建错误
bundle exec jekyll serve --drafts   # 本地预览
git status                          # 确认要提交的文件
git diff --cached                   # 检查更改内容
```

## 🎯 Hamilton 主题特色功能

### **数学公式支持**
在 front matter 中添加 `math: true`，然后可以使用 LaTeX 语法：
```markdown
$$E = mc^2$$

行内公式：$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$
```

### **目录功能**
在 front matter 中添加 `toc: true`，会自动生成文章目录。

### **代码高亮**
支持语法高亮的代码块：
```javascript
function hello() {
    console.log("Hello World!");
}
```

### **分类和标签样式**
- **Categories**：绿色背景标签，带emoji图标
- **Tags**：蓝色圆角标签，悬停效果

## 📝 写作技巧

### **标题层次**
```markdown
# 🚀 主标题（带emoji）
## 二级标题
### 三级标题
#### 四级标题
```

### **代码块**
```markdown
```javascript
// 指定语言获得语法高亮
function example() {
    return "Hello World!";
}
```
```

### **链接和引用**
```markdown
# 链接
[链接文字](URL)
[链接文字](URL "悬停提示")

# 引用
> 这是一个引用块
> 可以多行显示

# 列表
- 无序列表项1
- 无序列表项2

1. 有序列表项1
2. 有序列表项2
```

### **表格**
```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |
| 数据4 | 数据5 | 数据6 |
```

## ✨ 简化构建的优势

### **🚀 快速构建**
- 无需处理复杂的图片资源
- 标准Jekyll构建流程
- 减少构建时间和错误

### **🎯 专注内容**
- Emoji提供视觉效果，不分散注意力
- 简洁设计突出文章内容
- 更好的阅读体验

### **📱 移动友好**
- 响应式设计
- 快速加载
- 在所有设备上都表现良好

### **🔧 易维护**
- 减少了构建复杂度
- 降低潜在问题
- 更容易调试和修改

## 🎉 开始写作

现在你可以专注于内容创作，享受简洁高效的写作体验！

### **快速开始命令**
```bash
# 创建新文章
cp _templates/post-template.md _posts/2025-07-04-my-awesome-post.md

# 编辑内容
vim _posts/2025-07-04-my-awesome-post.md

# 本地预览
bundle exec jekyll serve

# 发布
git add . && git commit -m "Add new post: 我的精彩文章" && git push
```

### **项目健康检查**
```bash
# 检查项目状态
echo "文章总数: $(find _posts -name '*.md' | wc -l)"
echo "最新文章: $(ls -t _posts/*.md | head -1 | xargs basename)"
echo "Git状态: $(git status --porcelain | wc -l) 个未提交更改"
echo "构建状态: $(bundle exec jekyll build 2>&1 | grep -c 'done')"
```

### **下一步建议**
1. **增加原创内容**: 目前原创文章占比较低，建议增加更多原创技术分享
2. **内容深度优化**: 在AWS博客摘要基础上，添加个人见解和实践经验
3. **建立写作计划**: 制定定期发布计划，保持博客活跃度
4. **读者互动**: 考虑添加评论系统或社交媒体链接

Happy writing! ✍️

---

**最后更新**: 2025年7月4日  
**项目状态**: 52篇文章，已清理重复内容  
**维护者**: YZ Wang
