#!/usr/bin/env python3
"""
博客图片获取辅助脚本
帮助快速获取和管理博客图片资源
"""

import os
import requests
import json
from urllib.parse import urlparse
from pathlib import Path

class BlogImageManager:
    def __init__(self, base_path="/Users/wyz/project/aws-yz.github.io"):
        self.base_path = Path(base_path)
        self.images_path = self.base_path / "assets" / "images"
        
    def create_directories(self):
        """创建图片目录结构"""
        dirs = [
            "banners",
            "posts/aws",
            "posts/n8n", 
            "posts/general",
            "icons",
            "diagrams",
            "screenshots"
        ]
        
        for dir_name in dirs:
            dir_path = self.images_path / dir_name
            dir_path.mkdir(parents=True, exist_ok=True)
            print(f"✅ 创建目录: {dir_path}")
    
    def suggest_unsplash_keywords(self, category):
        """根据分类建议Unsplash搜索关键词"""
        keywords = {
            "aws": ["cloud computing", "server", "technology", "data center", "network"],
            "n8n": ["automation", "workflow", "integration", "api", "connection"],
            "cost-optimization": ["finance", "analytics", "chart", "money", "optimization"],
            "tutorial": ["learning", "education", "guide", "book", "study"],
            "general": ["technology", "computer", "coding", "development"]
        }
        
        return keywords.get(category, ["technology"])
    
    def download_image(self, url, filename, category="general"):
        """下载图片到指定目录"""
        try:
            response = requests.get(url)
            response.raise_for_status()
            
            # 确定保存路径
            if category == "banner":
                save_path = self.images_path / "banners" / filename
            else:
                save_path = self.images_path / "posts" / category / filename
            
            # 确保目录存在
            save_path.parent.mkdir(parents=True, exist_ok=True)
            
            # 保存文件
            with open(save_path, 'wb') as f:
                f.write(response.content)
            
            print(f"✅ 图片已保存: {save_path}")
            return str(save_path.relative_to(self.base_path))
            
        except Exception as e:
            print(f"❌ 下载失败: {e}")
            return None
    
    def generate_banner_suggestions(self, title, category):
        """生成头图建议"""
        suggestions = {
            "aws": [
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop",
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop"
            ],
            "n8n": [
                "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=630&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
            ]
        }
        
        print(f"\n🎨 {title} 头图建议:")
        print(f"分类: {category}")
        print("推荐图片URL:")
        
        for i, url in enumerate(suggestions.get(category, []), 1):
            print(f"{i}. {url}")
        
        print(f"\n💡 Unsplash搜索关键词: {', '.join(self.suggest_unsplash_keywords(category))}")
        print("🔗 Unsplash: https://unsplash.com")
        print("🔗 Canva: https://canva.com")
    
    def create_post_images_dir(self, post_date, post_slug, category="general"):
        """为新文章创建图片目录"""
        dir_name = f"{post_date}-{post_slug}"
        post_dir = self.images_path / "posts" / category / dir_name
        post_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"✅ 为文章创建图片目录: {post_dir}")
        return post_dir

def main():
    manager = BlogImageManager()
    
    print("🖼️  博客图片管理工具")
    print("=" * 40)
    
    while True:
        print("\n选择操作:")
        print("1. 创建图片目录结构")
        print("2. 为新文章创建图片目录")
        print("3. 获取头图建议")
        print("4. 退出")
        
        choice = input("\n请选择 (1-4): ").strip()
        
        if choice == "1":
            manager.create_directories()
            
        elif choice == "2":
            date = input("文章日期 (YYYY-MM-DD): ").strip()
            slug = input("文章slug: ").strip()
            category = input("分类 (aws/n8n/general): ").strip() or "general"
            manager.create_post_images_dir(date, slug, category)
            
        elif choice == "3":
            title = input("文章标题: ").strip()
            category = input("分类 (aws/n8n/general): ").strip() or "general"
            manager.generate_banner_suggestions(title, category)
            
        elif choice == "4":
            print("👋 再见!")
            break
            
        else:
            print("❌ 无效选择，请重试")

if __name__ == "__main__":
    main()
