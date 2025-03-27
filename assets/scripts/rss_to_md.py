import feedparser
from datetime import datetime
import os
import re

# RSS 피드 URL (전자신문 예시)
feed_url = 'https://rss.etnews.com/section.xml?section_id=101'
feed = feedparser.parse(feed_url)

# 저장 경로
target_dir = "_stock-news"
os.makedirs(target_dir, exist_ok=True)

# 최신 5개 뉴스만
for entry in feed.entries[:5]:
    title = entry.title
    link = entry.link
    published = entry.published
    date = datetime.strptime(published, "%a, %d %b %Y %H:%M:%S %z")
    slug = re.sub(r'\W+', '-', title.lower())[:40]

    filename = f"{target_dir}/{date.strftime('%Y-%m-%d')}-{slug}.md"
    if os.path.exists(filename):
        continue  # 이미 있으면 건너뜀

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
