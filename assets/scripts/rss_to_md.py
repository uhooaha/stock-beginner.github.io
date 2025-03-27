import requests
import feedparser
from datetime import datetime
import os
import re

# --------------------------------------------------------------------
# 1. RSS 피드 URL 설정
# --------------------------------------------------------------------
# 예시: 조선일보 경제 RSS
# (실제 작동 여부는 사이트 차단 정책에 따라 다를 수 있음)
feed_url = 'https://www.chosun.com/arc/outboundfeeds/rss/category/economy/?outputType=xml'

# --------------------------------------------------------------------
# 2. User-Agent 등 HTTP 헤더 설정
# --------------------------------------------------------------------
headers = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/112.0.0.0 Safari/537.36"
    )
}

# --------------------------------------------------------------------
# 3. requests로 RSS 가져오기
# --------------------------------------------------------------------
try:
    response = requests.get(feed_url, headers=headers, timeout=10)
    print(f"HTTP Status: {response.status_code}")
    if response.status_code != 200:
        print("⚠️ 서버로부터 200 OK 응답을 받지 못했습니다.")
except Exception as e:
    print(f"⚠️ 요청 중 오류 발생: {e}")
    exit(1)

# --------------------------------------------------------------------
# 4. feedparser로 파싱
# --------------------------------------------------------------------
feed = feedparser.parse(response.text)

# (디버깅) 파싱된 뉴스 항목 개수, bozo 여부, bozo_exception
print(f"Total entries found: {len(feed.entries)}")
print(f"bozo: {feed.bozo}")
if feed.bozo:
    print("bozo_exception:", feed.bozo_exception)

# --------------------------------------------------------------------
# 5. _stock-news 폴더 생성
# --------------------------------------------------------------------
target_dir = "_stock-news"
os.makedirs(target_dir, exist_ok=True)

# --------------------------------------------------------------------
# 6. 최신 5개 뉴스만 처리 (필요에 따라 조절)
# --------------------------------------------------------------------
for entry in feed.entries[:5]:
    try:
        title = entry.title
        link = entry.link
        # published(또는 updated 등)를 가져옴
        published_str = entry.get('published') or entry.get('updated') or ''
        print(f"\nProcessing entry: {title}")
        print(f"published raw value: '{published_str}'")

        # 날짜 파싱 시도
        # (예: "%a, %d %b %Y %H:%M:%S %z" 형태가 아니면 예외가 날 수 있음)
        date = datetime.strptime(published_str, "%a, %d %b %Y %H:%M:%S %z")

    except Exception as e:
        print(f"⚠️ Error processing '{title}': {e}")
        # 날짜 파싱 실패 등으로 파일 생성 불가 → 건너뛰기
        continue

    # 슬러그 생성 (특수문자 -> 대시)
    slug = re.sub(r'\W+', '-', title.lower())[:40]
    filename = f"{target_dir}/{date.strftime('%Y-%m-%d')}-{slug}.md"

    # 이미 동일 파일이 있으면 건너뛰기
    if os.path.exists(filename):
        print(f"File already exists: {filename}")
        continue

    # ----------------------------------------------------------------
    # 7. 마크다운 파일 생성
    # ----------------------------------------------------------------
    try:
        with open(filename, "w", encoding="utf-8") as f:
            f.write(f"""---
title: "오늘의 주식 시장은?"
date: {date.strftime('%Y-%m-%d %H:%M:%S %z')}
categories: [stock-news]
---

- **기사 제목**: [{title}]({link})
- **출처**: 조선일보

자동 수집된 기사입니다.
""")
        print(f"✅ Created file: {filename}")
    except Exception as e:
        print(f"❌ Error writing file '{filename}': {e}")
