(function () {
  const STORAGE_KEY = "drops_lines_tiro_brochure_v1";
  let state = {
    completedIds: [],
    checkedIds: [],
    activeIndex: 0
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        state.completedIds = Array.isArray(parsed.completedIds) ? parsed.completedIds : [];
        state.checkedIds = Array.isArray(parsed.checkedIds) ? parsed.checkedIds : [];
      }
    } catch (e) {
      console.warn("로컬 상태 로드 실패:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completedIds: state.completedIds,
          checkedIds: state.checkedIds
        })
      );
    } catch (e) {
      console.warn("로컬 상태 저장 실패:", e);
    }
  }

  // 상단 메타 & 진행률 업데이트
  function updateTopStatus() {
    const { meta, destinations } = window.TRIP_DATA;
    document.getElementById("meta-date").textContent = meta.date;
    document.getElementById("meta-title").textContent = meta.title;

    const total = destinations.length;
    const done = state.completedIds.length;
    document.getElementById("progress-pill").textContent = `${done}/${total} 완료`;
  }

  // 고정 4단 미션 타임라인 탭 렌더링
  function renderTabs() {
    const tabsEl = document.getElementById("mission-tabs");
    const dotsEl = document.getElementById("dot-indicators");
    tabsEl.innerHTML = "";
    dotsEl.innerHTML = "";

    window.TRIP_DATA.destinations.forEach((dest, idx) => {
      const isDone = state.completedIds.includes(dest.id);
      const isActive = idx === state.activeIndex;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `m-tab ${isActive ? "active" : ""} ${isDone ? "done" : ""}`;
      btn.innerHTML = `
        <span class="m-tab-step">0${idx + 1} · ${dest.time.split("~")[0].trim()}</span>
        <span class="m-tab-name">${dest.shortTab}</span>
      `;
      btn.addEventListener("click", () => goToSlide(idx));
      tabsEl.appendChild(btn);

      const dot = document.createElement("span");
      dot.className = `dot-ind ${isActive ? "active" : ""}`;
      dotsEl.appendChild(dot);
    });
  }

  // 포스터 브로슈어 슬라이드 렌더링
  function renderPosters() {
    const slider = document.getElementById("brochure-slider");
    slider.innerHTML = "";

    window.TRIP_DATA.destinations.forEach((dest, idx) => {
      const isDone = state.completedIds.includes(dest.id);
      const slide = document.createElement("article");
      slide.className = `poster-slide ${dest.theme} ${isDone ? "is-done" : ""}`;
      slide.dataset.index = idx;

      const summaryRows = dest.posterSummary
        .map(
          (row) => `
          <div class="poster-summary-row">
            <span class="poster-summary-label">${row.label}</span>
            <span>${row.text}</span>
          </div>`
        )
        .join("");

      slide.innerHTML = `
        <div class="poster-top">
          <div>
            <span class="poster-time">${dest.time}</span>
            <span class="theme-badge">${dest.badgeText}</span>
          </div>
          <button type="button" class="poster-done-btn" data-done-id="${dest.id}">
            ${isDone ? "완료됨 ✓" : "미션 완료"}
          </button>
        </div>

        <div class="poster-hero">
          <p class="poster-kicker">${dest.kicker}</p>
          <h2 class="poster-title">${dest.title}</h2>
          <p class="poster-tagline">${dest.tagline}</p>
          <div class="poster-summary-box">${summaryRows}</div>
        </div>

        <div class="poster-bottom">
          <button type="button" class="open-detail-cta" data-detail-idx="${idx}">
            자세히 보기 · 환승 및 미션 전문 ↗
          </button>
        </div>
      `;

      // 포스터 영역 클릭 시 디테일 뷰 열기 (완료 버튼 제외)
      slide.addEventListener("click", (e) => {
        if (e.target.closest(".poster-done-btn")) return;
        openDetailModal(idx);
      });

      slider.appendChild(slide);
    });
  }

  // 슬라이드 이동 및 동기화
  function goToSlide(index) {
    const total = window.TRIP_DATA.destinations.length;
    const targetIdx = Math.max(0, Math.min(index, total - 1));
    state.activeIndex = targetIdx;

    const slider = document.getElementById("brochure-slider");
    const targetSlide = slider.children[targetIdx];
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
    renderTabs();
  }

  // 디테일 뷰 바텀시트 열기
  function openDetailModal(idx) {
    const dest = window.TRIP_DATA.destinations[idx];
    if (!dest) return;

    document.getElementById("detail-header-meta").innerHTML = `
      <span class="sheet-eyebrow">${dest.time} · ${dest.address}</span>
      <h2>${dest.title}</h2>
    `;

    const specsHTML = dest.specs.map((s) => `<span class="d-spec-chip">${s}</span>`).join("");

    const transitHTML = dest.transitSteps
      .map(
        (t) => `
        <div class="t-step">
          <span class="line-badge ${t.type}">${t.line}</span>
          <span>${t.text}</span>
        </div>`
      )
      .join("");

    let agendaHTML = "";
    if (dest.agenda && dest.agenda.length > 0) {
      const rows = dest.agenda
        .map(
          (a) => `
          <div class="agenda-row">
            <span class="agenda-time">${a.time}</span>
            <span>${a.desc}</span>
          </div>`
        )
        .join("");
      agendaHTML = `
        <div class="detail-section">
          <h3>🗓️ 세부 프로그램 타임테이블</h3>
          <div>${rows}</div>
        </div>`;
    }

    document.getElementById("detail-body").innerHTML = `
      <p style="font-size:13px; color:#475569; margin-bottom:10px; font-weight:600;">${dest.exhibition}</p>
      <div class="detail-specs">${specsHTML}</div>

      <div class="detail-section">
        <h3>🚌 100% 대중교통 이동 · 환승 경로</h3>
        ${transitHTML}
      </div>

      ${agendaHTML}

      <div class="detail-section">
        <h3>💡 현장 관람 및 이용 가이드</h3>
        <div class="detail-tip">${dest.detailGuide}</div>
      </div>

      <div class="detail-section">
        <h3>🎙️ 티로(Tiro) 기록 워크플로우</h3>
        <div class="detail-tiro-box">${dest.tiroMission}</div>
      </div>
    `;

    const footerBtns = dest.links
      .map((l) => {
        const cls = l.type === "naver" ? "btn-naver" : l.type === "kakao" ? "btn-kakao" : "btn-web";
        return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="action-btn ${cls}">${l.label}</a>`;
      })
      .join("");
    document.getElementById("detail-footer").innerHTML = footerBtns;

    openModal("detail-modal");
  }

  // 모달 열기 / 닫기 유틸
  function openModal(id) {
    document.getElementById(id).classList.add("is-open");
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove("is-open");
  }

  // 시작 모달 체크리스트 렌더링
  function renderChecklist() {
    const listEl = document.getElementById("checklist-list");
    listEl.innerHTML = "";

    window.TRIP_DATA.checklist.forEach((item) => {
      const checked = state.checkedIds.includes(item.id);
      const label = document.createElement("label");
      label.className = `chk-item ${checked ? "checked" : ""}`;
      label.innerHTML = `
        <input type="checkbox" data-chk-id="${item.id}" ${checked ? "checked" : ""} />
        <span class="chk-text"><span class="chk-tag">${item.tag}</span> ${item.text}</span>
      `;
      listEl.appendChild(label);
    });
  }

  // 이벤트 바인딩
  function bindEvents() {
    // 스와이프 스크롤 감지 -> 상단 타임라인 탭 동기화
    const slider = document.getElementById("brochure-slider");
    let scrollTimer = null;
    slider.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const slideWidth = slider.clientWidth;
        if (slideWidth > 0) {
          const newIdx = Math.round(slider.scrollLeft / slideWidth);
          if (newIdx !== state.activeIndex && newIdx >= 0 && newIdx < window.TRIP_DATA.destinations.length) {
            state.activeIndex = newIdx;
            renderTabs();
          }
        }
      }, 60);
    });

    // 좌우 화살표 버튼
    document.getElementById("prev-slide").addEventListener("click", () => goToSlide(state.activeIndex - 1));
    document.getElementById("next-slide").addEventListener("click", () => goToSlide(state.activeIndex + 1));

    // 미션 완료 토글
    slider.addEventListener("click", (e) => {
      const btn = e.target.closest(".poster-done-btn");
      if (!btn) return;
      e.stopPropagation();

      const id = btn.dataset.doneId;
      const idx = state.completedIds.indexOf(id);
      if (idx > -1) state.completedIds.splice(idx, 1);
      else state.completedIds.push(id);

      saveState();
      updateTopStatus();
      renderTabs();
      renderPosters();
    });

    // 시작 모달 다시 열기 버튼
    document.getElementById("open-start-modal").addEventListener("click", () => openModal("start-modal"));

    // 모달 닫기 버튼 및 배경 터치
    document.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => closeModal(el.dataset.close));
    });
    document.querySelectorAll(".sheet-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeModal(backdrop.id);
      });
    });

    // 체크리스트 토글
    document.getElementById("checklist-list").addEventListener("change", (e) => {
      if (e.target.type !== "checkbox") return;
      const id = e.target.dataset.chkId;
      const idx = state.checkedIds.indexOf(id);
      if (e.target.checked && idx === -1) state.checkedIds.push(id);
      else if (!e.target.checked && idx > -1) state.checkedIds.splice(idx, 1);

      saveState();
      renderChecklist();
    });

    // 체크 초기화
    document.getElementById("reset-btn").addEventListener("click", () => {
      if (confirm("체크리스트와 미션 완료 기록을 모두 초기화할까요?")) {
        state.completedIds = [];
        state.checkedIds = [];
        localStorage.removeItem(STORAGE_KEY);
        updateTopStatus();
        renderTabs();
        renderPosters();
        renderChecklist();
      }
    });
  }

  function init() {
    loadState();
    updateTopStatus();
    renderTabs();
    renderPosters();
    renderChecklist();
    bindEvents();

    // 앱 시작 시 아래에서 위로 사전점검 모달 슬라이드업 오픈
    requestAnimationFrame(() => {
      setTimeout(() => openModal("start-modal"), 120);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();