import requests
import feedparser
from datetime import datetime
import os
import re

# 여러 신문사의 RSS 피드 URL 목록
feed_urls = [
    ('chosun', 'https://www.chosun.com/arc/outboundfeeds/rss/category/economy/?outputType=xml'),
    ('cointelegraph', 'https://kr.cointelegraph.com/editors_pick_rss'),
    ('cointelegraph', 'https://kr.cointelegraph.com/rss/tag/altcoin'),
    ('investing', 'https://kr.investing.com/rss/forex_Signals.rss'),
    ('mk.co.kr', 'https://https://www.mk.co.kr/rss/50200011/'),
    # 여기에 다른 신문사의 RSS URL을 추가하세요.
]

# 저장 경로 (_stock-news 폴더)
target_dir = "_stock-news"
os.makedirs(target_dir, exist_ok=True)

# HTTP 헤더 설정 (브라우저처럼 보이도록)
headers = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/112.0.0.0 Safari/537.36"
    )
}

# 각 RSS 피드를 순회하며 처리
for source_name, feed_url in feed_urls:
    try:
        response = requests.get(feed_url, headers=headers, timeout=10)
        print(f"HTTP Status for {source_name}: {response.status_code}")
    except Exception as e:
        print(f"Error fetching {source_name} feed: {e}")
        continue

    feed = feedparser.parse(response.text)
    print(f"Total entries found for {source_name}: {len(feed.entries)}")
    
    # 최신 5개 뉴스 항목만 처리 (필요에 따라 숫자를 조절)
    for entry in feed.entries[:5]:
        try:
            title = entry.title
            link = entry.link
            published_str = entry.get('published') or entry.get('updated') or ''
            print(f"Processing entry from {source_name}: {title}")
            date = datetime.strptime(published_str, "%a, %d %b %Y %H:%M:%S %z")
        except Exception as e:
            print(f"Error processing '{title}' from {source_name}: {e}")
            continue

        # 슬러그 생성 (신문사 이름을 포함시킵니다)
        slug = re.sub(r'\W+', '-', title.lower())[:30]
        filename = f"{target_dir}/{source_name}-{date.strftime('%Y-%m-%d')}-{slug}.md"
        if os.path.exists(filename):
            print(f"File already exists: {filename}")
            continue

        try:
            safe_title = title.replace('"', '\\"')  # 큰따옴표 이스케이프
            safe_link = link.replace('"', '\\"')    # 혹시 모를 경우 대비
            with open(filename, "w", encoding="utf-8") as f:
                f.write(f"""---
title: "{safe_title}"
date: {date.strftime('%Y-%m-%d %H:%M:%S %z')}
categories: [stock-news]
article_link: "{safe_link}"
source_name: {slug}
---

- **기사 제목**: [{title}]({link})
- **출처**: {source_name}

자동 수집된 기사입니다.
""")
            print(f"Created file: {filename}")
        except Exception as e:
            print(f"Error writing file '{filename}': {e}")
