window.TRIP_DATA = {
  meta: {
    date: "2026. 12. 08 (화) · 당일치기",
    title: "Drops, Lines & Tiro",
    routeSummary: "보라동 ➔ 평창동 ➔ 연희동 ➔ 역삼동 ➔ 보라동"
  },

  timeline: [
    {
      id: "step-1",
      theme: "theme-transit",
      badgeClass: "transit-badge",
      badgeText: "🚌 상행 100% 대중교통",
      time: "07:50 ~ 09:50",
      title: "보라동 출발 ➔ 평창동 이동",
      subtitle: "광역버스 · 지하철 3호선 · 지선버스 환승 (약 1시간 55분)",
      transitSteps: [
        { line: "4101", type: "bus-red", text: "보라동 탑승 ➔ 을지로입구·광교 하차 (남산1호터널 경유)" },
        { line: "3호선", type: "sub-3", text: "을지로3가역 탑승 ➔ 경복궁역 하차 (3정거장)" },
        { line: "1711", type: "bus-green", text: "경복궁역 3번출구(1020/1711/7212) ➔ 벽산블루밍평창힐스 하차 후 도보 8분" }
      ],
      tip: "오전 10:00 미술관 오픈에 맞추려면 보라동에서 늦어도 08:00 이전 4101번에 탑승하는 것이 좋습니다.",
      links: [
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/을지로입구역 광교 정류장" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/김창열 화가의 집" }
      ]
    },
    {
      id: "step-2",
      theme: "theme-kim",
      badgeClass: "drop-badge",
      badgeText: "💧 물방울 & 생가",
      time: "10:00 ~ 11:00",
      title: "김창열 화가의 집",
      subtitle: "서울 종로구 평창7길 74 · 개관전 《김창열, 물방울의 흔적》",
      specs: ["10:00~18:00", "성인 5,000원", "현장 발권", "신발 벗고 입장"],
      tip: "12월 20일 최종 종료되는 개관 연장전의 막바지 관람 기회입니다. 화요일은 도슨트 없는 자유 관람일이며, 지하 작업실이 핵심입니다.",
      tiroMemo: "🎙️ 티로 기록: 관람 직후 평창동 골목을 내려오며 인상 깊었던 작품과 공간의 느낌을 1~2분 음성 메모로 남기세요.",
      links: [
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/김창열 화가의 집" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/김창열 화가의 집" }
      ]
    },
    {
      id: "step-3",
      theme: "theme-transit",
      badgeClass: "transit-badge",
      badgeText: "🚌 평창동 ➔ 연희동 환승",
      time: "11:00 ~ 11:50",
      title: "평창동 출발 ➔ 우동카덴 연희점 이동",
      subtitle: "지선버스 1회 환승 (약 45분 소요)",
      transitSteps: [
        { line: "1711", type: "bus-green", text: "벽산블루밍평창힐스(1711/7212) 탑승 ➔ 세검정·상명대 하차" },
        { line: "7017", type: "bus-green", text: "세검정·상명대(7017/7730) 환승 ➔ 연희104고지앞·구성산회관 하차 후 도보 6분" }
      ],
      tip: "이동 중 11:30 정각이 되면 테이블링 앱에서 우동카덴 원격 줄서기를 바로 신청하세요.",
      links: [
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/우동카덴 연희점" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/우동카덴 연희점" }
      ]
    },
    {
      id: "step-4",
      theme: "theme-udon",
      badgeClass: "stamp-badge",
      badgeText: "테이블링 필수",
      time: "12:00 ~ 13:00",
      title: "우동카덴 연희점 (점심)",
      subtitle: "서울 서대문구 연희로 173 · 정호영 셰프 자가제면 우동",
      specs: ["화요일 정상영업", "11:30 원격줄서기", "순서미루기 가능"],
      tip: "도착 시간이 빠르면 테이블링 '순서 미루기'를 활용하세요. 저녁 7시 티로 행사에서 다과·식사가 나오므로 점심은 적당량 드시는 것을 추천합니다.",
      tiroMemo: "🎙️ 티로 기록: 식사 후 연희동 골목으로 이동하며 오전 일정 중간 회고 음성 메모 남기기.",
      links: [
        { label: "테이블링", type: "web", url: "https://www.tabling.co.kr/restaurant/7m9nfd22g38i3hjx5h0e4j" },
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/우동카덴 연희점" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/우동카덴 연희점" }
      ]
    },
    {
      id: "step-5",
      theme: "theme-park",
      badgeClass: "ecriture-badge",
      badgeText: "📏 묘법 & 14:00 도슨트",
      time: "13:00 ~ 14:45",
      title: "박서보미술관",
      subtitle: "서울 서대문구 연희로24길 9-54 · 《박서보와 흐엉 도딘: 비움 그 충만》",
      specs: ["도보 15분 이동", "성인 5,000원", "현장 발권", "14:00 무료 도슨트"],
      tip: "1층 사물함에 짐 보관 후 먼저 공간을 감상하고, 13:55까지 로비로 모여 14:00 정기 도슨트 투어에 합류하세요.",
      tiroMemo: "🎙️ 핵심 미션: 14:00 도슨트 해설 전체를 티로(Tiro) 앱으로 실시간 녹음·전사합니다. (스마트폰 무음 모드 필수!)",
      links: [
        { label: "공식웹", type: "web", url: "https://parkseobomuseum.org/" },
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/박서보미술관" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/박서보미술관" }
      ]
    },
    {
      id: "step-6",
      theme: "theme-free",
      badgeClass: "transit-badge",
      badgeText: "☕ 휴식 & 전사 정리",
      time: "14:45 ~ 17:30",
      title: "연희동 카페 휴식 및 티로 노트 정리",
      subtitle: "보조배터리 충전 & 저녁 네트워킹 준비",
      tip: "조용한 연희동 카페에서 방금 녹음 전사된 박서보 도슨트 요약본을 확인하고, 저녁 모임에서 나눌 AI 활용 경험과 명함을 점검하세요.",
      links: [
        { label: "연희동 카페 검색", type: "naver", url: "https://map.naver.com/p/search/연희동 카페" }
      ]
    },
    {
      id: "step-7",
      theme: "theme-transit",
      badgeClass: "transit-badge",
      badgeText: "🚇 퇴근길 강남 환승",
      time: "17:30 ~ 18:45",
      title: "연희동 출발 ➔ 역삼 fyi 이동",
      subtitle: "마을버스 + 지하철 2호선 + 도보 9분 (약 60분)",
      transitSteps: [
        { line: "서대문03", type: "bus-green", text: "연희삼거리/자치회관(서대문03/04) ➔ 홍대입구역 하차" },
        { line: "2호선", type: "sub-2", text: "홍대입구역 외선순환(시청·성수 방면) ➔ 역삼역 하차 (약 40분)" },
        { line: "도보 9분", type: "walk-tag", text: "역삼역 2번 출구 직진 ➔ MARU180 1층 역삼 fyi 도착" }
      ],
      tip: "17:30 퇴근길 지상 정체를 피하기 위해 반드시 지하철 2호선을 이용하세요.",
      links: [
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/서울 강남구 역삼로 180" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/역삼 fyi" }
      ]
    },
    {
      id: "step-8",
      theme: "theme-tiro",
      badgeClass: "rec-pill",
      badgeText: "<span class='rec-dot'></span>실시간 기록 중 · 19:00",
      time: "19:00 ~ 21:30",
      title: "Tiro After Meeting",
      subtitle: "역삼 fyi (MARU180 1층 · 서울 강남구 역삼로 180)",
      specs: ["저녁 식사 & 음료 제공", "명함 지참", "인터뷰 시 한정판 굿즈"],
      agenda: [
        { time: "19:00", desc: "간단한 저녁 식사 & 음료, 티로 굿즈 둘러보기" },
        { time: "19:40", desc: "강연 세션 (김미림 · 김상철 CTO · 신주혜 각 15분)" },
        { time: "20:30", desc: "조별 소그룹 대화 (30분 · 명함 교환 및 활용법 공유)" },
        { time: "21:30", desc: "자유 퇴장 & 티로 팀 현장 인터뷰(한정판 굿즈 증정)" }
      ],
      tip: "낮에 미술관에서 도슨트와 참관 후기를 티로로 기록한 실제 사례를 소그룹 대화나 현장 인터뷰에서 공유해 보세요!",
      links: [
        { label: "초대장", type: "web", url: "https://tiro.ooo/ko/after-meeting" },
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/역삼 fyi" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/역삼 fyi" }
      ]
    },
    {
      id: "step-9",
      theme: "theme-transit",
      badgeClass: "transit-badge",
      badgeText: "🚌 하행 용인 복귀",
      time: "21:30 ~ 23:10",
      title: "역삼 fyi 출발 ➔ 용인 보라동 복귀",
      subtitle: "강남역 이동 후 광역버스 5001-1B번 탑승",
      transitSteps: [
        { line: "도보/2호선", type: "sub-2", text: "역삼 fyi ➔ 신분당선강남역(중앙차로) 정류장 이동 (도보 15분 또는 1정거장)" },
        { line: "5001-1B", type: "bus-red", text: "신분당선강남역(또는 신논현역) 탑승 ➔ 경부고속도로 경유 ➔ 보라동 하차" }
      ],
      tip: "5001-1B번 막차는 신논현역 기준 자정(24:00) 무렵입니다. 귀가 버스 안에서 오늘 하루의 최종 소감을 티로 음성 메모로 마무리하세요.",
      links: [
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/신분당선강남역 버스정류장" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/신분당선강남역 버스정류장" }
      ]
    }
  ],

  checklist: [
    { id: "chk-1", tag: "준비물", text: "명함 챙기기 (티로 20:30 소그룹 대화 필수)" },
    { id: "chk-2", tag: "앱세팅", text: "티로(Tiro) 앱 최신 업데이트 및 백그라운드 녹음 테스트" },
    { id: "chk-3", tag: "복장", text: "신고 벗기 편한 신발 착용 (김창열 화가의 집 실내화 착용)" },
    { id: "chk-4", tag: "앱설치", text: "테이블링 앱 설치 및 로그인 (11:30 우동카덴 원격 줄서기)" },
    { id: "chk-5", tag: "행사확인", text: "티로 행사 참가 확정 안내 및 참가비(15,000원) 입금 확인" },
    { id: "chk-6", tag: "전자기기", text: "보조배터리 & 케이블 (도슨트 장시간 녹음 대비 완충)" }
  ]
};