#!/usr/bin/env python3
"""
将博客文章日期统一为 UTC 时间格式
确保文件名日期和显示日期一致，都使用 UTC 时间
"""

import os
import re
from datetime import datetime, timezone

def fix_date_to_utc(file_path):
    """将文件中的日期修改为 UTC 格式"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 查找日期行 - 支持多种格式
    date_patterns = [
        r'date: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+08:00)',  # 北京时间格式
        r'date: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.000Z)',   # UTC Z 格式
        r'date: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+00:00)'   # UTC +00:00 格式
    ]
    
    for pattern in date_patterns:
        match = re.search(pattern, content)
        if match:
            date_str = match.group(1)
            
            # 解析日期
            if date_str.endswith('+08:00'):
                # 北京时间，需要转换为 UTC
                beijing_date = datetime.fromisoformat(date_str)
                utc_date = beijing_date.astimezone(timezone.utc)
            elif date_str.endswith('.000Z'):
                # 已经是 UTC，只需要改格式
                utc_date = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            elif date_str.endswith('+00:00'):
                # 已经是正确格式
                utc_date = datetime.fromisoformat(date_str)
            else:
                continue
            
            # 从文件名提取日期
            filename = os.path.basename(file_path)
            file_date_match = re.match(r'(\d{4}-\d{2}-\d{2})', filename)
            
            if file_date_match:
                file_date = file_date_match.group(1)
                
                # 检查 UTC 日期是否与文件名日期一致
                utc_date_str = utc_date.strftime('%Y-%m-%d')
                
                if utc_date_str != file_date:
                    # 如果不一致，使用文件名日期但保持原始时间
                    new_datetime = f"{file_date}T{utc_date.strftime('%H:%M:%S')}+00:00"
                else:
                    # 如果一致，使用标准 UTC 格式
                    new_datetime = utc_date.strftime('%Y-%m-%dT%H:%M:%S+00:00')
                
                # 替换内容
                new_content = re.sub(
                    pattern,
                    f'date: {new_datetime}',
                    content
                )
                
                # 写回文件
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print(f"✅ 修复: {filename}")
                print(f"   原始: {date_str}")
                print(f"   修复: {new_datetime}")
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
            if fix_date_to_utc(file_path):
                fixed_count += 1
    
    print(f"\n🎉 总共修复了 {fixed_count} 个文件")
    print("📝 所有文章现在都使用 UTC 时间格式 (+00:00)")

if __name__ == '__main__':
    main()
