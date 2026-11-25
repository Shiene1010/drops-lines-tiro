window.TRIP_DATA = {
  meta: {
    date: "2026. 12. 08 (화)",
    title: "Drops, Lines & Tiro"
  },

  destinations: [
    {
      id: "dest-1",
      shortTab: "김창열",
      time: "10:00 ~ 11:00",
      theme: "theme-kim",
      badgeText: "💧 천창의 빛 & 물방울",
      kicker: "DESTINATION 01 · 평창동 화강석 자택",
      title: "김창열 화가의 집",
      tagline: "원형 천창에서 떨어지는 빛과 침묵의 지하 작업실, 그곳에 머문 물방울의 흔적",
      posterSummary: [
        { label: "🚌 가는 길", text: "보라동 4101번 ➔ 을지로3가(3호선) ➔ 경복궁역 1711번" },
        { label: "🎟️ 관람 정보", text: "현장 발권 5,000원 · 신발 벗고 실내화 입장" },
        { label: "🎙️ 티로 기록", text: "관람 직후 평창동 골목 1분 참관후기 음성메모" }
      ],
      address: "서울 종로구 평창7길 74",
      exhibition: "개관전 《김창열, 물방울의 흔적》 (12/20 최종 종료 막바지)",
      specs: ["10:00~18:00", "성인 5,000원", "현장 발권", "실내화 착용"],
      transitSteps: [
        { line: "4101", type: "bus-red", text: "07:50경 보라동 탑승 ➔ 을지로입구·광교 하차 (남산1호터널)" },
        { line: "3호선", type: "sub-3", text: "을지로3가역 탑승 ➔ 경복궁역 하차 (3정거장)" },
        { line: "1711", type: "bus-green", text: "경복궁역 3번출구(1020/1711/7212) ➔ 벽산블루밍평창힐스 하차 후 도보 8분" }
      ],
      detailGuide: "당초 예정보다 연장되어 12월 20일 최종 종료되는 개관전의 막바지 관람 기회입니다. 화요일은 도슨트 없는 자유 관람일이며, 원형 천창 아래 거실과 지하 작업실이 가장 핵심 공간입니다. 11:00경 출발해 연희동으로 넘어갑니다.",
      tiroMission: "🎙️ 티로 음성메모 미션: 미술관을 나와 평창동 언덕을 내려오면서 가장 기억에 남는 작품과 공간의 인상을 티로 앱에 1~2분간 음성 메모로 남겨두세요.",
      links: [
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/김창열 화가의 집" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/김창열 화가의 집" }
      ]
    },
    {
      id: "dest-2",
      shortTab: "우동카덴",
      time: "12:00 ~ 13:00",
      theme: "theme-udon",
      badgeText: "자가제면 · 테이블링",
      kicker: "DESTINATION 02 · 연희동 일식 다이닝",
      title: "우동카덴 연희점",
      tagline: "정갈한 히노끼 테이블 위, 깊은 다시마 츠유와 쫄깃한 자가제면 우동 한 그릇",
      posterSummary: [
        { label: "🚌 가는 길", text: "평창동 1711번 ➔ 세검정·상명대 7017번 환승 (약 45분)" },
        { label: "📱 원격 대기", text: "이동 중 11:30 정각 테이블링 원격 줄서기 오픈" },
        { label: "🍽️ 식사 팁", text: "저녁 7시 티로 행사 다과·식사 대비 과식 주의" }
      ],
      address: "서울 서대문구 연희로 173",
      exhibition: "화요일 정상 영업 (일·월 정기휴무 직후)",
      specs: ["11:30 원격줄서기", "순서미루기 가능", "자가제면 우동"],
      transitSteps: [
        { line: "1711", type: "bus-green", text: "벽산블루밍평창힐스(1711/7212) 탑승 ➔ 세검정·상명대 하차" },
        { line: "7017", type: "bus-green", text: "세검정·상명대(7017/7730) 환승 ➔ 연희104고지앞·구성산회관 하차 후 도보 6분" }
      ],
      detailGuide: "버스 이동 중 11:30 정각이 되면 테이블링 앱으로 원격 줄서기를 바로 신청하세요. 예상보다 일찍 도착할 경우 '순서 미루기' 기능을 활용할 수 있습니다. 저녁 19:00 티로 행사에서 간단한 식사와 음료가 제공되므로 점심은 적당량 드시는 것이 좋습니다.",
      tiroMission: "🎙️ 티로 음성메모 미션: 식사 후 박서보미술관으로 15분간 산책하며 오전 전시와 점심의 감상을 짧게 음성 기록하세요.",
      links: [
        { label: "테이블링", type: "web", url: "https://www.tabling.co.kr/restaurant/7m9nfd22g38i3hjx5h0e4j" },
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/우동카덴 연희점" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/우동카덴 연희점" }
      ]
    },
    {
      id: "dest-3",
      shortTab: "박서보",
      time: "13:00 ~ 14:45",
      theme: "theme-park",
      badgeText: "📏 14:00 도슨트 녹음",
      kicker: "DESTINATION 03 · 연희동 유리 큐브 & 블랙박스",
      title: "박서보미술관",
      tagline: "지하 블랙박스에서 3층 반투명 유리 큐브의 빛까지, 묘법의 호흡을 전사하다",
      posterSummary: [
        { label: "🚶 가는 길", text: "우동카덴에서 연희동 골목 산책 도보 15분" },
        { label: "🎙️ 핵심 미션", text: "14:00 무료 도슨트 해설 전체 티로 녹음·전사" },
        { label: "☕ 자유 시간", text: "14:45~17:30 연희동 카페 휴식 및 전사본 정리" }
      ],
      address: "서울 서대문구 연희로24길 9-54",
      exhibition: "개관전 《박서보와 흐엉 도딘: 비움 그 충만》",
      specs: ["성인 5,000원", "현장 발권", "14:00 무료 도슨트", "도슨트 전사"],
      transitSteps: [
        { line: "도보 15분", type: "walk-tag", text: "우동카덴에서 연희로24길 주택가 골목을 따라 천천히 도보 이동" }
      ],
      detailGuide: "12월 8일(화)은 14:00 상시 무료 도슨트가 정상 진행됩니다. 1층 사물함에 짐을 보관한 뒤 지하 블랙박스부터 3층 유리 큐브까지 먼저 둘러보고 13:55까지 로비로 모이세요. 관람 후 17:30까지는 인근 카페에서 보조배터리를 충전하며 휴식합니다.",
      tiroMission: "🎙️ 핵심 미션 (도슨트 전사): 14:00 도슨트 시작 전 스마트폰을 반드시 '무음(진동)'으로 전환하고, 티로(Tiro) 실시간 녹음을 켜 해설 전체를 텍스트로 전사하세요.",
      links: [
        { label: "공식웹", type: "web", url: "https://parkseobomuseum.org/" },
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/박서보미술관" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/박서보미술관" }
      ]
    },
    {
      id: "dest-4",
      shortTab: "티로앱",
      time: "19:00 ~ 21:30",
      theme: "theme-tiro",
      badgeText: "<span class='sage-dot'></span>조용한 경청 · 19:00",
      kicker: "DESTINATION 04 · 역삼 fyi",
      title: "Tiro After Meeting",
      tagline: "화려함을 덜고 곁을 지키는 속기사처럼, 낮의 기록을 들고 만나는 첫 유저 모임",
      posterSummary: [
        { label: "🚇 가는 길", text: "마을버스(서대문03) ➔ 홍대입구역 2호선 ➔ 역삼역 도보 9분" },
        { label: "🗓️ 프로그램", text: "19:00 식사 · 19:40 강연 · 20:30 소그룹 대화" },
        { label: "🚌 용인 복귀", text: "21:30 종료 후 신분당선강남역 5001-1B번 탑승" }
      ],
      address: "역삼 fyi (MARU180 1층 · 서울 강남구 역삼로 180)",
      exhibition: "티로(Tiro) 첫 오프라인 유저 네트워킹 나잇",
      specs: ["저녁 식사·음료 제공", "명함 지참", "인터뷰 한정판 굿즈"],
      transitSteps: [
        { line: "서대문03", type: "bus-green", text: "17:30 연희삼거리/자치회관(서대문03/04) ➔ 홍대입구역 하차" },
        { line: "2호선", type: "sub-2", text: "홍대입구역 외선순환 ➔ 역삼역 하차 (약 40분) ➔ 2번출구 도보 9분" },
        { line: "5001-1B", type: "bus-red", text: "귀가(21:30~): 신분당선강남역(중앙차로) 탑승 ➔ 용인 보라동 복귀" }
      ],
      agenda: [
        { time: "19:00", desc: "간단한 저녁 식사 & 음료, 티로 굿즈 둘러보기" },
        { time: "19:40", desc: "연사 세션 강연 (김미림 · 김상철 CTO · 신주혜 각 15분)" },
        { time: "20:30", desc: "조별 소그룹 대화 (30분 · 명함 교환 및 기록 활용법 공유)" },
        { time: "21:30", desc: "자유 퇴장 & 티로 팀 현장 인터뷰 (한정판 굿즈 증정)" }
      ],
      detailGuide: "퇴근길 도로 정체를 피하기 위해 17:30경 연희동에서 출발해 지하철 2호선으로 역삼역까지 이동합니다. 소그룹 대화 시간과 현장 인터뷰에서 낮 동안 미술관 도슨트와 참관 후기를 티로로 기록한 경험을 공유해 보세요.",
      tiroMission: "🎙️ 티로 활용 포인트: 낮에 생성된 박서보 도슨트 전사 요약본과 참관 후기 노트를 스몰토크 소재로 바로 꺼내 보여줄 수 있습니다.",
      links: [
        { label: "초대장", type: "web", url: "https://tiro.ooo/ko/after-meeting" },
        { label: "네이버지도", type: "naver", url: "https://map.naver.com/p/search/역삼 fyi" },
        { label: "카카오맵", type: "kakao", url: "https://map.kakao.com/link/search/역삼 fyi" }
      ]
    }
  ],

  checklist: [
    { id: "chk-1", tag: "준비물", text: "명함 챙기기 (티로 20:30 소그룹 대화 필수)" },
    { id: "chk-2", tag: "티로앱", text: "티로(Tiro) 앱 최신 업데이트 및 백그라운드 녹음 테스트" },
    { id: "chk-3", tag: "복장", text: "신고 벗기 편한 신발 착용 (김창열 화가의 집 실내화 착용)" },
    { id: "chk-4", tag: "테이블링", text: "테이블링 앱 설치 및 로그인 (11:30 우동카덴 원격 줄서기)" },
    { id: "chk-5", tag: "행사확인", text: "티로 행사 참가 확정 안내 및 참가비(15,000원) 입금 확인" },
    { id: "chk-6", tag: "배터리", text: "보조배터리 & 케이블 완충 (도슨트 장시간 녹음 대비)" }
  ]
};