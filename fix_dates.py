#!/usr/bin/env python3
"""
修复博客文章中的日期时区问题
将 UTC 时间转换为北京时间，确保显示日期与文件名一致
"""

import os
import re
from datetime import datetime, timezone, timedelta

def fix_date_in_file(file_path):
    """修复单个文件中的日期"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找日期行
    date_pattern = r'date: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.000Z)'
    match = re.search(date_pattern, content)
    
    if match:
        utc_date_str = match.group(1)
        
        # 解析 UTC 时间
        utc_date = datetime.fromisoformat(utc_date_str.replace('Z', '+00:00'))
        
        # 转换为北京时间
        beijing_tz = timezone(timedelta(hours=8))
        beijing_date = utc_date.astimezone(beijing_tz)
        
        # 从文件名提取日期
        filename = os.path.basename(file_path)
        file_date_match = re.match(r'(\d{4}-\d{2}-\d{2})', filename)
        
        if file_date_match:
            file_date = file_date_match.group(1)
            
            # 使用文件名中的日期，但保持原始时间
            new_date_str = f"{file_date}T{beijing_date.strftime('%H:%M:%S')}+08:00"
            
            # 替换内容
            new_content = re.sub(
                date_pattern,
                f'date: {new_date_str}',
                content
            )
            
            # 写回文件
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ 修复: {filename}")
            print(f"   原始: {utc_date_str}")
            print(f"   修复: {new_date_str}")
            return True
    
    return False

def main():
    """主函数"""
    posts_dir = '_posts'
    
    if not os.path.exists(posts_dir):
        print("❌ _posts 目录不存在")
        return
    
    fixed_count = 0
    
    # 遍历所有 markdown 文件
    for filename in os.listdir(posts_dir):
        if filename.endswith('.md') and filename.startswith('2025-'):
            file_path = os.path.join(posts_dir, filename)
            if fix_date_in_file(file_path):
                fixed_count += 1
    
    print(f"\n🎉 总共修复了 {fixed_count} 个文件")

if __name__ == '__main__':
    main()
