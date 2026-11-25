(function () {
  const STORAGE_KEY = "drops_lines_tiro_20261208";
  let appState = {
    completedSteps: [],
    checkedItems: []
  };

  // 1. 로컬 스토리지에서 상태 불러오기
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        appState.completedSteps = Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [];
        appState.checkedItems = Array.isArray(parsed.checkedItems) ? parsed.checkedItems : [];
      }
    } catch (e) {
      console.warn("상태 복원 실패, 초기 상태로 시작합니다.", e);
    }
  }

  // 2. 로컬 스토리지에 상태 저장하기
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
      console.warn("상태 저장 실패:", e);
    }
  }

  // 3. 상단 헤더 & 진행률 렌더링
  function renderHeader() {
    const { meta } = window.TRIP_DATA;
    document.getElementById("meta-date").textContent = meta.date;
    document.getElementById("meta-title").textContent = meta.title;
    document.getElementById("meta-route").textContent = meta.routeSummary;
  }

  function updateProgress() {
    const total = window.TRIP_DATA.timeline.length;
    const done = appState.completedSteps.length;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;

    document.getElementById("progress-text").textContent = `${done} / ${total} 완료 (${percent}%)`;
    document.getElementById("progress-fill").style.width = `${percent}%`;
  }

  // 4. 타임라인 카드 동적 렌더링
  function renderTimeline() {
    const container = document.getElementById("timeline-feed");
    container.innerHTML = "";

    window.TRIP_DATA.timeline.forEach((step) => {
      const isDone = appState.completedSteps.includes(step.id);
      const node = document.createElement("article");
      node.className = `timeline-node ${step.theme} ${isDone ? "is-done" : ""}`;
      node.dataset.id = step.id;

      // 환승 스텝 HTML
      let transitHTML = "";
      if (step.transitSteps && step.transitSteps.length > 0) {
        const items = step.transitSteps
          .map(
            (t) => `
            <div class="t-step">
              <span class="line-badge ${t.type}">${t.line}</span>
              <span>${t.text}</span>
            </div>`
          )
          .join("");
        transitHTML = `<div class="transit-steps">${items}</div>`;
      }

      // 스펙 칩 HTML
      let specsHTML = "";
      if (step.specs && step.specs.length > 0) {
        const pills = step.specs.map((s) => `<span class="spec-pill">${s}</span>`).join("");
        specsHTML = `<div class="spec-list">${pills}</div>`;
      }

      // 티로 내부 아젠다 HTML
      let agendaHTML = "";
      if (step.agenda && step.agenda.length > 0) {
        const rows = step.agenda
          .map(
            (a) => `
            <div class="agenda-row">
              <span class="agenda-time">${a.time}</span>
              <span class="agenda-desc">${a.desc}</span>
            </div>`
          )
          .join("");
        agendaHTML = `<div class="agenda-list">${rows}</div>`;
      }

      // 티로 녹음/메모 미션 HTML
      let tiroMemoHTML = "";
      if (step.tiroMemo) {
        tiroMemoHTML = `<div class="tiro-memo-box">${step.tiroMemo}</div>`;
      }

      // 팁 HTML
      let tipHTML = step.tip ? `<div class="tip-box">${step.tip}</div>` : "";

      // 하단 지도/웹 액션 버튼 HTML
      let linksHTML = "";
      if (step.links && step.links.length > 0) {
        const btns = step.links
          .map((l) => {
            const btnClass =
              l.type === "naver" ? "btn-naver" : l.type === "kakao" ? "btn-kakao" : "btn-web";
            return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="action-btn ${btnClass}">${l.label}</a>`;
          })
          .join("");
        linksHTML = `<div class="action-bar">${btns}</div>`;
      }

      node.innerHTML = `
        <div class="node-dot"></div>
        <div class="card-box">
          <div class="card-top">
            <div class="card-meta-left">
              <span class="card-time">${step.time}</span>
              ${step.badgeText ? `<span class="${step.badgeClass}">${step.badgeText}</span>` : ""}
            </div>
            <button type="button" class="done-toggle" data-step-id="${step.id}">
              ${isDone ? "완료됨 ✓" : "완료 체크"}
            </button>
          </div>
          <h2 class="card-title">${step.title}</h2>
          <p class="card-subtitle">${step.subtitle}</p>
          ${specsHTML}
          ${transitHTML}
          ${agendaHTML}
          ${tipHTML}
          ${tiroMemoHTML}
          ${linksHTML}
        </div>
      `;

      container.appendChild(node);
    });
  }

  // 5. 하단 체크리스트 렌더링
  function renderChecklist() {
    const container = document.getElementById("checklist-list");
    container.innerHTML = "";

    window.TRIP_DATA.checklist.forEach((item) => {
      const isChecked = appState.checkedItems.includes(item.id);
      const label = document.createElement("label");
      label.className = `chk-item ${isChecked ? "checked" : ""}`;
      label.innerHTML = `
        <input type="checkbox" data-chk-id="${item.id}" ${isChecked ? "checked" : ""} />
        <span class="chk-text"><span class="chk-tag">${item.tag}</span> ${item.text}</span>
      `;
      container.appendChild(label);
    });
  }

  // 6. 이벤트 바인딩 (이벤트 위임)
  function bindEvents() {
    // 타임라인 완료 토글
    document.getElementById("timeline-feed").addEventListener("click", (e) => {
      const btn = e.target.closest(".done-toggle");
      if (!btn) return;

      const stepId = btn.dataset.stepId;
      const idx = appState.completedSteps.indexOf(stepId);
      if (idx > -1) {
        appState.completedSteps.splice(idx, 1);
      } else {
        appState.completedSteps.push(stepId);
      }

      saveState();
      renderTimeline();
      updateProgress();
    });

    // 체크리스트 토글
    document.getElementById("checklist-list").addEventListener("change", (e) => {
      if (e.target.type !== "checkbox") return;

      const chkId = e.target.dataset.chkId;
      const idx = appState.checkedItems.indexOf(chkId);
      if (e.target.checked && idx === -1) {
        appState.checkedItems.push(chkId);
      } else if (!e.target.checked && idx > -1) {
        appState.checkedItems.splice(idx, 1);
      }

      saveState();
      renderChecklist();
    });

    // 전체 초기화
    document.getElementById("reset-btn").addEventListener("click", () => {
      if (confirm("오늘의 완료 체크 및 준비물 기록을 모두 초기화할까요?")) {
        appState = { completedSteps: [], checkedItems: [] };
        localStorage.removeItem(STORAGE_KEY);
        renderTimeline();
        renderChecklist();
        updateProgress();
      }
    });
  }

  // 앱 초기화 실행
  function init() {
    loadState();
    renderHeader();
    renderTimeline();
    renderChecklist();
    updateProgress();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
