/* ============================================================
   IDS Lab — 한국어 / 영어 전환
   ------------------------------------------------------------
   동작 방식
     1) HTML_SELECTORS 에 해당하는 요소는 innerHTML 통째로 교체한다.
        (<strong> 같은 인라인 태그가 문장 중간에 있어 어순을 바꿔야 하는 경우)
     2) 나머지는 텍스트 노드 단위로 교체한다.
     3) alt / title / aria-label / placeholder 속성도 같은 사전으로 교체한다.

   원문(한국어)은 페이지 로드 시점에 그대로 보관해 두고, 한국어로 되돌릴 때
   보관본을 복원한다. 따라서 사전에 없는 문장은 절대 사라지지 않고 한국어로 남는다.

   문장을 새로 추가했는데 영어로 안 바뀐다면
     - 인라인 태그가 없는 문장  -> TEXT 에 "원문": "번역" 한 줄 추가
     - 인라인 태그가 섞인 문장  -> HTML 에 추가하고, 필요하면 HTML_SELECTORS 에
                                  해당 class 를 등록
   브라우저 콘솔에서 idsLang.missing() 을 실행하면 사전에 없는 문장을 모아 보여준다.
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     ▼▼▼ 한/영 전환 on/off 스위치 ▼▼▼

       false → 언어 버튼을 누르면 "준비중입니다." 알림만 뜬다 (현재 상태)
       true  → 아래 사전을 써서 실제로 한/영 전환이 동작한다

     되살리고 싶으면 이 한 줄만 true로 바꾸고 push하면 된다.
     사전은 꺼져 있어도 그대로 살아있는 코드이므로, 예전처럼 주석 처리했다가
     인코딩이 깨져 번역문을 통째로 잃는 일은 생기지 않는다.
     ============================================================ */
  var I18N_ENABLED = false;

  var STORAGE_KEY = "ids-lab-language";

  /* ── 요소 통째로 교체할 대상 ── */
  var HTML_SELECTORS = [".history-text", ".area-body", ".footer-tagline"];

  /* ── 공백/줄바꿈 차이를 무시하기 위한 정규화 ── */
  function norm(s) {
    return s
      .replace(/<br\s*\/?>/gi, "<br>")
      .replace(/\s*<br>\s*/g, "<br>")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* ============================================================
     사전 1 — 요소 단위 (innerHTML)
     ============================================================ */
  var HTML = {
    "연구실 홈페이지가 개설되었습니다.":
      "The lab website is now online.",

    "🎉 논문 <strong>\"Adaptive Time Encoding for Irregular Multivariate Time-Series Classification\"</strong>이 <strong>NeurIPS 2025</strong>에 채택 및 게재되었습니다.":
      "🎉 Our paper <strong>\"Adaptive Time Encoding for Irregular Multivariate Time-Series Classification\"</strong> has been accepted and published at <strong>NeurIPS 2025</strong>.",

    "🎉 논문 <strong>\"Generating imperceptible adversarial examples via low-frequency aware transfer attacks on battery management systems\"</strong>이 <strong>Scientific Reports</strong>에 게재되었습니다.":
      "🎉 Our paper <strong>\"Generating imperceptible adversarial examples via low-frequency aware transfer attacks on battery management systems\"</strong> has been published in <strong>Scientific Reports</strong>.",

    "🎉 논문 <strong>\"Batch active learning for time-series classification with multi-mode exploration\"</strong>이 <strong>Information Sciences</strong>에 게재되었습니다.":
      "🎉 Our paper <strong>\"Batch active learning for time-series classification with multi-mode exploration\"</strong> has been published in <strong>Information Sciences</strong>.",

    "Industrial Data Science Laboratory<br>산업데이터과학 연구실":
      "Industrial Data Science Laboratory<br>Gyeongsang National University",

    "실제 산업 환경의 다변량 센서 데이터는 네트워크 오류, 장비 점검, 센서 고장 등 다양한 이유로 결측이 발생하거나 비균일한 시간 간격으로 수집됩니다. 본 연구팀은 이러한 <strong>불완전한 산업 데이터</strong>를 효과적으로 처리할 수 있는 ML/DL 방법론을 연구합니다.":
      "In real industrial environments, multivariate sensor data often contains missing values or is sampled at irregular time intervals, due to network errors, scheduled maintenance, sensor failures, and other causes. Our team studies ML/DL methods that can effectively handle such <strong>incomplete industrial data</strong>.",

    "산업 현장에서 전문가가 직접 레이블을 할당하는 작업은 비용과 시간이 막대하게 소요됩니다. 결과적으로 레이블이 희소하거나 오염된 상황이 매우 빈번합니다. 본 연구팀은 <strong>레이블 희소성</strong> 환경과 <strong>노이즈 레이블</strong> 환경 등에서도 강건하게 학습 가능한 ML/DL 방법론을 연구합니다.":
      "Having domain experts label industrial data by hand is enormously expensive and time-consuming, so labels are very often scarce or corrupted. Our team studies ML/DL methods that learn robustly even under <strong>label scarcity</strong> and <strong>noisy labels</strong>.",

    "ML/DL은 제조, 에너지, 의료 등 다양한 산업 분야에 폭넓게 활용되고 있습니다. 본 연구팀은 산업 시스템의 상태를 진단하고 미래 건전성을 예측하여 유지보수 의사결정을 지원하는 <strong>건전성예측관리</strong>를 중심으로 다양한 산업 응용 연구를 수행합니다.":
      "ML/DL is now widely used across manufacturing, energy, healthcare, and many other industries. Our team carries out applied research centred on <strong>Prognostics and Health Management</strong>, which diagnoses the condition of industrial systems and predicts their future health to support maintenance decisions."
  };

  /* ============================================================
     사전 2 — 텍스트 노드 / 속성 단위
     ============================================================ */
  var TEXT = {
    /* ── index.html ── */
    "불완전 데이터 기반의 ML/DL 방법론을 연구하고,":
      "We develop ML/DL methods for incomplete data",
    "PHM을 중심으로 다양한 산업 문제에 적용합니다.":
      "and apply them to industrial problems, with a focus on PHM.",
    "연구 소개 →": "Explore Research →",
    "SCIE 저널 및": "SCIE journals and",
    "Top-tier 컨퍼런스 게재": "top-tier conference papers",
    "핵심 연구 분야": "Core research areas",
    "국내외 특허": "Domestic & international patents",
    "열린 연구 문화": "Open research culture",
    "연구실 소식": "Lab News",
    "Industrial Data Science Lab의 주요 논문, 수상, 구성원 소식을 전합니다.":
      "Publications, awards, and member news from the Industrial Data Science Lab.",

    /* ── 공통 푸터 ── */
    "산업데이터과학 연구실": "Industrial Data Science Lab",
    "경상국립대학교 산업시스템공학부":
      "School of Industrial and Systems Engineering, Gyeongsang National University",
    "경남 진주시 진주대로 501":
      "501 Jinju-daero, Jinju-si, Gyeongsangnam-do, Republic of Korea",
    "401동 401호": "Bldg. 401, Room 401",

    /* ── join.html ── */
    "연구실 지원 안내": "Join the Lab",
    "대학원생(석·박사) 및 학부 연구생을 모집합니다.":
      "We are recruiting graduate students (M.S./Ph.D.) and undergraduate research interns.",
    "지원 자격": "Qualifications",
    "아래 조건을 모두 충족하지 않아도 됩니다. 열정과 성장 의지가 가장 중요합니다.":
      "You do not need to meet every item below. Enthusiasm and a willingness to grow matter most.",
    "✅ 필수 요건": "✅ Requirements",
    "Python 프로그래밍 기본 이상 가능": "Working knowledge of Python programming",
    "영어 논문 독해 가능 (작성 능력은 필수 아님)":
      "Able to read English papers (writing ability not required)",
    "ML/DL 기초 개념 이해": "Understanding of basic ML/DL concepts",
    "주기적인 미팅 및 발표 참여 가능":
      "Able to attend regular meetings and give presentations",
    "⭐ 우대 사항": "⭐ Preferred",
    "PyTorch 사용 경험": "Experience with PyTorch",
    "시계열 데이터 또는 산업 데이터 처리 경험":
      "Experience handling time-series or industrial data",
    "학부 연구 또는 개인 프로젝트 경험":
      "Undergraduate research or personal project experience",
    "영어 논문 작성 경험 (박사과정 우대)":
      "Experience writing English papers (preferred for Ph.D. applicants)",
    "지원 절차": "Application Process",
    "아래 순서로 진행됩니다. 언제든지 이메일로 먼저 문의해 주세요.":
      "The process runs as follows. Feel free to email us first at any time.",
    "이메일 문의": "Email inquiry",
    "CV와 간단한 지원 동기를 이메일로 보내주세요":
      "Send your CV and a brief statement of motivation by email",
    "서류 검토": "Document review",
    "성적표, 연구 경험 등 서류를 검토합니다 (1~2주)":
      "We review transcripts, research experience, and related documents (1-2 weeks)",
    "면담 / 인터뷰": "Meeting / interview",
    "교수님과 30~60분 내외 온·오프라인 미팅을 진행합니다":
      "A 30-60 minute meeting with the advisor, online or in person",
    "최종 합류": "Joining the lab",
    "합류가 결정되면 입학/인턴 시작 일정을 조율합니다":
      "Once confirmed, we arrange the admission or internship start date",
    "지금 바로 연락하세요": "Get in touch",
    "질문이 있으시거나 연구실에 관심이 있으시면 언제든지 이메일로 문의해 주세요.":
      "If you have questions or are interested in the lab, email us any time.",
    "지원 의사가 없더라도 궁금한 점은 편하게 물어보실 수 있습니다.":
      "You are welcome to ask even if you are not planning to apply.",
    "연구 분야 살펴보기 →": "Explore research areas →",

    /* ── members.html ── */
    "연구실 구성원": "Members",
    "산업데이터과학 연구실의 교수 및 학생 구성원을 소개합니다.":
      "Faculty and students of the Industrial Data Science Lab.",
    "지도교수": "Principal Investigator",
    "이 상 호": "Sangho Lee",
    "이상호": "Sangho Lee",
    "산업 데이터의 품질 문제와 레이블 품질 문제를 머신러닝·딥러닝으로 해결하고, 실제 산업 현장의 PHM(Prognostics and Health Management) 문제에 적용하는 연구를 수행합니다.":
      "We tackle data-quality and label-quality problems in industrial data with machine learning and deep learning, and apply the results to PHM (Prognostics and Health Management) problems in real industrial settings.",
    "동국대학교 대학원 산업시스템공학과 (2021.03 ~ 2025.02)":
      "Dept. of Industrial and Systems Engineering, Dongguk University Graduate School (Mar. 2021 - Feb. 2025)",
    "동국대학교 대학원 산업시스템공학과 (2018.09 ~ 2020.08)":
      "Dept. of Industrial and Systems Engineering, Dongguk University Graduate School (Sep. 2018 - Aug. 2020)",
    "동국대학교 산업시스템공학과 (2013.03 ~ 2018.08)":
      "Dept. of Industrial and Systems Engineering, Dongguk University (Mar. 2013 - Aug. 2018)",
    "경상국립대학교 산업시스템공학부 조교수":
      "Assistant Professor, School of Industrial and Systems Engineering, Gyeongsang National University",
    "동국대학교 산업시스템공학과 박사후연구원 (2025.03 ~ 2025.08)":
      "Postdoctoral Researcher, Dept. of Industrial and Systems Engineering, Dongguk University (Mar. 2025 - Aug. 2025)",
    "주식회사 원프레딕트 AI Engineer (2020.01 ~ 2021.01)":
      "AI Engineer, ONE Predict Co., Ltd. (Jan. 2020 - Jan. 2021)",
    "석사과정": "M.S. Student",
    "이 민 종": "Minjong Lee",
    "이민종": "Minjong Lee",
    "김 영 겸": "Youngkyeom Kim",
    "김영겸": "Youngkyeom Kim",
    "M.S. 경상국립대학교 대학원 산업시스템공학부 (2026.03 ~ )":
      "M.S., School of Industrial and Systems Engineering, Gyeongsang National University Graduate School (Mar. 2026 - )",
    "B.S. 경상국립대학교 산업시스템공학부 (2020.03 ~ 2026.03)":
      "B.S., School of Industrial and Systems Engineering, Gyeongsang National University (Mar. 2020 - Mar. 2026)",
    "현) 포스코(POSCO) AI 개발/운영":
      "Currently: AI development & operations, POSCO",
    "B.S. 학점은행제 컴퓨터공학과 (2024.08 ~ 2026.02)":
      "B.S., Computer Engineering, Academic Credit Bank System (Aug. 2024 - Feb. 2026)",
    "A.S. 진주 연암공과대학교 전기전자과 (2011.03 ~ 2016.02)":
      "A.S., Electrical and Electronic Engineering, Yeonam Institute of Technology, Jinju (Mar. 2011 - Feb. 2016)",
    "학부연구생": "Undergraduate Researcher",
    "금 재 훈": "Jaehun Geum",
    "금재훈": "Jaehun Geum",
    "경상국립대학교 산업시스템공학부 (2024.03 ~ )":
      "School of Industrial and Systems Engineering, Gyeongsang National University (Mar. 2024 - )",

    /* ── publication.html ── */
    "논문 목록": "Publications",
    "이상호 교수의 ML/DL 방법론 및 산업 응용 분야와 관련된 연구 논문 목록입니다.":
      "Research papers by Prof. Sangho Lee on ML/DL methodology and its industrial applications.",
    "총 논문 수": "Total papers",
    "주저자 논문": "First-author papers",
    "공동저자 논문": "Co-authored papers",
    "국제학술지 논문": "International journal papers",
    "순번": "No.",
    "제목": "Title",
    "게재년월": "Date",
    "학술지명": "Journal",
    "기타": "Role",
    "주저자": "First author",
    "공동저자": "Co-author",

    /* ── research.html ── */
    "연구 분야": "Research Areas",
    "불완전한 산업 데이터를 기반으로 실용적인 ML/DL 연구를 수행합니다.":
      "We conduct practical ML/DL research grounded in incomplete industrial data.",
    "데이터 품질": "Data Quality",
    "불완전한 산업 데이터": "Incomplete industrial data",
    "결측값이 포함된 데이터에서 패턴을 학습하여 누락된 시점/구간을 복원하고, 해당 데이터를 안정적으로 활용하기 위한 방법론 연구":
      "Methods that learn patterns from data containing missing values in order to reconstruct the missing time points or intervals, so that the data can be used reliably.",
    "의료·산업 데이터에서 흔히 발생하는 비균일 시간 간격 데이터를 효과적으로 처리하기 위한 방법론 연구":
      "Methods for effectively handling irregularly sampled data, which is common in medical and industrial settings.",
    "다수의 센서 간 관계와 상호 의존성을 효과적으로 반영하여 복잡한 데이터 패턴을 학습하기 위한 방법론 연구":
      "Methods that capture the relationships and interdependencies among many sensors in order to learn complex data patterns.",
    "레이블 품질": "Label Quality",
    "레이블 희소성": "Label scarcity",
    "노이즈 레이블": "Noisy labels",
    "레이블링 비용 최소화를 위해 정보량이 높은 샘플을 선택적으로 레이블링하는 학습 전략 연구":
      "Learning strategies that selectively label the most informative samples in order to minimise labelling cost.",
    "소수의 레이블 데이터와 다량의 비레이블 데이터를 함께 활용하기 위한 학습 방법론 연구":
      "Learning methods that jointly exploit a small amount of labelled data and a large amount of unlabelled data.",
    "레이블 오류가 섞인 학습 데이터에서 클린 샘플을 선별하고, 안정적인 학습 성능을 확보하기 위한 방법론 연구":
      "Methods that identify clean samples within training data contaminated by label errors, in order to secure stable learning performance.",
    "산업 응용 — 건전성예측관리":
      "Industrial Applications — Prognostics and Health Management",
    "건전성예측관리": "Prognostics and Health Management",
    "산업 설비 및 시스템의 정상 패턴으로부터 벗어나는 이상 상태를 조기에 탐지하기 위한 방법론 연구":
      "Methods for the early detection of abnormal states that deviate from the normal patterns of industrial equipment and systems.",
    "산업 설비에서 발생한 고장의 원인과 유형을 정확하게 식별하기 위한 방법론 연구":
      "Methods for accurately identifying the cause and type of faults occurring in industrial equipment.",
    "산업 설비의 미래 열화 상태를 예측하여 잔여 사용 가능 수명을 추정하기 위한 방법론 연구":
      "Methods that predict the future degradation of industrial equipment in order to estimate its remaining useful life."
  };

  /* ── 정규화한 키로 다시 인덱싱 ── */
  var HTML_NORM = {};
  Object.keys(HTML).forEach(function (k) { HTML_NORM[norm(k)] = HTML[k]; });

  /* ============================================================
     수집 — 페이지 로드 시점의 원문을 보관
     ============================================================ */
  var ATTRS = ["alt", "title", "aria-label", "placeholder"];
  var htmlNodes = [];   // {el, ko}
  var textNodes = [];   // {node, ko}
  var attrNodes = [];   // {el, attr, ko}
  var unknown = [];     // 사전에 없던 문장

  function collect() {
    var htmlSel = HTML_SELECTORS.join(",");

    document.querySelectorAll(htmlSel).forEach(function (el) {
      htmlNodes.push({ el: el, ko: el.innerHTML });
    });

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.tagName;
        if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
        if (p.closest(htmlSel)) return NodeFilter.FILTER_REJECT;   // 1)에서 처리됨
        if (p.classList.contains("lang-toggle")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) textNodes.push({ node: n, ko: n.nodeValue });

    ATTRS.forEach(function (attr) {
      document.querySelectorAll("[" + attr + "]").forEach(function (el) {
        // 1)에서 innerHTML이 통째로 갈리는 요소 안의 노드는 참조가 끊기므로 제외
        if (el.parentElement && el.parentElement.closest(htmlSel)) return;
        attrNodes.push({ el: el, attr: attr, ko: el.getAttribute(attr) });
      });
    });
  }

  /* ============================================================
     적용
     ============================================================ */
  var HANGUL = /[가-힣]/;

  function toEnglish() {
    unknown = [];

    htmlNodes.forEach(function (it) {
      var en = HTML_NORM[norm(it.ko)];
      if (en) it.el.innerHTML = en;
      else if (HANGUL.test(it.ko)) unknown.push(norm(it.ko));
    });

    textNodes.forEach(function (it) {
      var trimmed = it.ko.trim();
      var en = TEXT[trimmed] || TEXT[trimmed.replace(/\s+/g, " ")];
      if (en) {
        // 앞뒤 공백을 살려서 인접 요소와의 간격이 무너지지 않게 한다
        var lead = it.ko.match(/^\s*/)[0];
        var tail = it.ko.match(/\s*$/)[0];
        it.node.nodeValue = lead + en + tail;
      } else if (HANGUL.test(trimmed)) {
        unknown.push(trimmed);
      }
    });

    attrNodes.forEach(function (it) {
      var en = TEXT[(it.ko || "").trim()];
      if (en) it.el.setAttribute(it.attr, en);
    });

    document.documentElement.lang = "en";
  }

  function toKorean() {
    htmlNodes.forEach(function (it) { it.el.innerHTML = it.ko; });
    textNodes.forEach(function (it) { it.node.nodeValue = it.ko; });
    attrNodes.forEach(function (it) { it.el.setAttribute(it.attr, it.ko); });
    document.documentElement.lang = "ko";
  }

  var current = "ko";

  function apply(lang) {
    if (lang === "en") toEnglish(); else toKorean();
    current = lang;
    document.querySelectorAll(".lang-toggle").forEach(function (b) {
      // 버튼에는 "지금 누르면 바뀔 언어"를 표시한다
      b.textContent = lang === "en" ? "KOR" : "ENG";
      b.setAttribute("aria-label", lang === "en" ? "한국어로 보기" : "View in English");
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* 무시 */ }
  }

  /* 전환이 꺼져 있을 때: 버튼은 원래 라벨 그대로 두고 알림만 띄운다 */
  function initDisabled() {
    document.querySelectorAll(".lang-toggle").forEach(function (b) {
      if (b.dataset.langBound) return;
      b.dataset.langBound = "true";
      b.setAttribute("aria-label", "언어 전환 준비중");
      b.addEventListener("click", function () { alert("준비중입니다."); });
    });
  }

  function init() {
    if (!I18N_ENABLED) { initDisabled(); return; }

    ensureCollected();

    var saved = "ko";
    try { saved = localStorage.getItem(STORAGE_KEY) || "ko"; } catch (e) { /* 무시 */ }
    apply(saved === "en" ? "en" : "ko");

    document.querySelectorAll(".lang-toggle").forEach(function (b) {
      if (b.dataset.langBound) return;
      b.dataset.langBound = "true";
      b.addEventListener("click", function () {
        apply(current === "en" ? "ko" : "en");
      });
    });
  }

  /* ── 콘솔 디버깅용 ──────────────────────────────────────────
     I18N_ENABLED가 false여도 아래는 동작한다. 사이트를 열고 콘솔에서
       idsLang.set("en")   → 영어 번역 미리보기 (방문자에겐 영향 없음)
       idsLang.set("ko")   → 되돌리기
       idsLang.missing()   → 사전에 없어 번역 안 되는 문장 목록
     로 검수한 뒤, 만족스러우면 파일 맨 위 I18N_ENABLED를 true로 바꾼다. */
  var collected = false;
  function ensureCollected() {
    if (!collected) { collect(); collected = true; }
  }

  window.idsLang = {
    set: function (lang) { ensureCollected(); apply(lang); },
    get: function () { return current; },
    missing: function () {
      ensureCollected();
      var before = current;
      toEnglish();
      var list = unknown.slice();
      if (before !== "en") toKorean();
      if (!list.length) console.log("사전에 없는 문장 없음");
      else console.log("사전에 없는 문장 " + list.length + "개:\n" + list.join("\n"));
      return list;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
