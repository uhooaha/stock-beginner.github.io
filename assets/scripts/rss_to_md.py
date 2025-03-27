import feedparser
from datetime import datetime
import os
import re

feed_url = 'https://rss.etnews.com/section.xml?section_id=101'
feed = feedparser.parse(feed_url)

print(f"Total entries found: {len(feed.entries)}")

target_dir = "_stock-news"
os.makedirs(target_dir, exist_ok=True)

for entry in feed.entries[:5]:
    try:
        title = entry.title
        link = entry.link
        published = entry.get('published', '')  # 혹시 'published'가 없을 수도 있음
        print(f"\nProcessing entry: {title}")
        print(f"published raw value: '{published}'")
        
        # 날짜 파싱 시도
        date = datetime.strptime(published, "%a, %d %b %Y %H:%M:%S %z")
        
    except Exception as e:
        print(f"⚠️ Error processing '{title}': {e}")
        # 여기서 continue 되면 파일 안 만들어짐
        continue

    slug = re.sub(r'\W+', '-', title.lower())[:40]
    filename = f"{target_dir}/{date.strftime('%Y-%m-%d')}-{slug}.md"

    if os.path.exists(filename):
        print(f"File already exists: {filename}")
        continue

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
        print(f"✅ Created file: {filename}")
    except Exception as e:
        print(f"❌ Error writing file '{filename}': {e}")
