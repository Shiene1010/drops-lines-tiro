# Drops, Lines & Tiro

2026년 12월 8일 서울 당일치기 여정과 티로 오프라인 모임을 하나의 모바일 웹 브로슈어로 안내하는 정적 웹앱입니다.

## 여정 경로

`보라동 → 평창동 → 연희동 → 역삼동 → 보라동`

## 라이브 사이트

[브로슈어 웹앱 열기](https://shiene1010.github.io/drops-lines-tiro/)

## 주요 기능

- 좌우 스와이프 방식의 4개 행선지 브로슈어
- 상단 미션 타임라인과 완료 진행률 표시
- 행선지별 장소 테마와 대중교통 환승 정보
- 포스터를 누르면 자세한 일정이 바텀시트로 표시
- 출발 전 체크리스트와 용인 왕복 광역버스 안내
- 미션 완료와 체크리스트 상태를 `localStorage`에 저장
- 네이버지도, 카카오맵, 테이블링, 공식 웹사이트 바로가기
- 별도 빌드 과정 없이 정적 파일로 실행

## 일정 구성

| 순서 | 시간 | 장소 | 핵심 미션 |
| --- | --- | --- | --- |
| 01 | 10:00~11:00 | 김창열 화가의 집 | 물방울 작품과 지하 작업실 관람 |
| 02 | 12:00~13:00 | 우동카덴 연희점 | 11:30 테이블링 원격 줄서기 |
| 03 | 13:00~14:45 | 박서보미술관 | 14:00 도슨트 녹음 및 전사 |
| 04 | 19:00~21:30 | Tiro After Meeting | 강연, 소그룹 대화, 현장 인터뷰 |

귀가 구간은 역삼역 또는 강남역 이동 후 광역버스 5001-1B를 이용하도록 구성했습니다.

## 파일 구조

```text
drops-lines-tiro/
├── index.html  # 브로슈어 레이아웃과 바텀시트 구조
├── themes.css  # 장소별 테마와 반응형 스타일
├── data.js     # 행선지, 일정, 환승 경로, 체크리스트 데이터
├── app.js      # 슬라이드, 모달, 진행률, 로컬 상태 관리
├── README.md   # 프로젝트 문서
└── .gitignore
```

## 실행 방법

빌드 도구가 필요 없습니다.

```bash
cd '/Volumes/Crucial X6/Development/workspaces/drops-lines-tiro'
python3 -m http.server 3000
```

브라우저에서 `http://localhost:3000`을 열면 확인할 수 있습니다.

## 상태 저장

다음 정보는 브라우저의 `localStorage`에 저장됩니다.

- 행선지 미션 완료 여부
- 출발 전 체크리스트 선택 상태

하단 체크리스트 모달의 **초기화** 버튼으로 저장된 상태를 삭제할 수 있습니다.

## 데이터 수정

일정과 장소 정보는 `data.js`의 `window.TRIP_DATA`에서 수정합니다.

- `destinations`: 행선지 카드와 상세 모달 데이터
- `checklist`: 출발 전 필수 체크리스트
- `links`: 네이버지도, 카카오맵, 테이블링 등 바로가기 주소

테마는 `themes.css`의 다음 클래스로 관리합니다.

- `.theme-kim`
- `.theme-udon`
- `.theme-park`
- `.theme-tiro`

## GitHub Pages 배포

이 프로젝트는 GitHub Pages의 `main` 브랜치 루트에 배포됩니다.

```bash
git add --all
git commit -m "feat: update trip brochure"
git push origin main
```

### 배포 주소

[GitHub Pages 브로슈어](https://shiene1010.github.io/drops-lines-tiro/)
