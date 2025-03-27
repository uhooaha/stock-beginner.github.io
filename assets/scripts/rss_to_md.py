import feedparser
from datetime import datetime
import os
import re

# RSS 피드 URL (전자신문 예시)
feed_url = 'https://rss.etnews.com/section.xml?section_id=101'
print("Fetching RSS feed from:", feed_url)
feed = feedparser.parse(feed_url)

print("Total entries found:", len(feed.entries))

# 저장 경로
target_dir = "_stock-news"
os.makedirs(target_dir, exist_ok=True)
print("Target directory created (or already exists):", target_dir)

# 최신 5개 뉴스만 처리
for entry in feed.entries[:5]:
    title = entry.title
    print("Processing entry:", title)
    link = entry.link
    published = entry.published

    try:
        date = datetime.strptime(published, "%a, %d %b %Y %H:%M:%S %z")
        print("Parsed date for entry:", date)
    except Exception as e:
        print("Error parsing date for entry:", title, "->", e)
        continue

    # 슬러그 생성: 제목을 소문자로, 특수문자는 대시로 변환
    slug = re.sub(r'\W+', '-', title.lower())[:40]
    filename = f"{target_dir}/{date.strftime('%Y-%m-%d')}-{slug}.md"

    if os.path.exists(filename):
        print("File already exists, skipping:", filename)
        continue  # 파일이 이미 존재하면 건너뜁니다.

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
        print("Created file:", filename)
    except Exception as e:
        print("Error writing file:", filename, "->", e)
