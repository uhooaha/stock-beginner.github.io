import feedparser
from datetime import datetime
import os
import re

# RSS 피드 URL (전자신문 예시)
feed_url = 'https://rss.etnews.com/section.xml?section_id=101'
feed = feedparser.parse(feed_url)

# 디버깅: 파싱된 뉴스 항목 개수 출력
print(f"Total entries found: {len(feed.entries)}")

# 저장 경로
target_dir = "_stock-news"
os.makedirs(target_dir, exist_ok=True)

# 최신 5개 뉴스만 처리
for entry in feed.entries[:5]:
    try:
        title = entry.title
        link = entry.link
        published = entry.published
        # 디버깅: 각 항목의 제목 출력
        print(f"Processing entry: {title}")
        date = datetime.strptime(published, "%a, %d %b %Y %H:%M:%S %z")
    except Exception as e:
        print(f"Error processing entry '{entry.get('title', 'No Title')}': {e}")
        continue

    slug = re.sub(r'\W+', '-', title.lower())[:40]
    filename = f"{target_dir}/{date.strftime('%Y-%m-%d')}-{slug}.md"
    
    if os.path.exists(filename):
        print(f"File already exists: {filename}")
        continue  # 이미 있으면 건너뜀

    try:
        with open(filename, "w") as f:
            f.write(f"""---
title: "오늘의 주식 시장은?"
date: {date.strftime('%Y-%m-%d %H:%M:%S %z')}
categories: [stock-news]
---

- **기사 제목**: [{title}]({link})  
- **출처**: 전자신문

자동 수집된 기사입니다.
""")
        print(f"Created file: {filename}")
    except Exception as e:
        print(f"Error writing file '{filename}': {e}")
