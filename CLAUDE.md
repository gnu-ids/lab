# IDS Lab 홈페이지 (gnu-ids/lab)

경상국립대 산업데이터과학 연구실(Industrial Data Science Lab) 공식 홈페이지.

## 배포

- **라이브 주소**: https://ids.gnu.ac.kr/
- **호스팅**: GitHub Pages (`gnu-ids/lab`, `main` 브랜치 루트, legacy build)
- **커스텀 도메인**: 루트의 `CNAME` 파일이 `ids.gnu.ac.kr`를 지정. **절대 삭제/수정 금지** — 지우면 도메인 연결이 끊김
- **HTTPS**: 강제 적용(enforced)
- `main`에 push하면 수 분 내 자동 재배포됨. 별도 빌드/CI 없음

## 구조

빌드 도구 없는 **순수 정적 사이트**. Node.js·npm 불필요.

| 파일 | 역할 |
|---|---|
| `index.html` | 메인 |
| `research.html` | 연구 분야 |
| `members.html` | 구성원 |
| `publication.html` | 논문 실적 |
| `join.html` | 지원 안내 |
| `style.css` | **공용 스타일** (토큰·리셋·네비·히어로·섹션·버튼·태그·푸터) |
| `lang.js` | 한/영 전환 |

### CSS

- 공통 규칙은 `style.css` 하나에 모여 있다. 색·폰트 등 **디자인 토큰을 바꾸려면 `style.css`의 `:root`만 고치면 된다.**
- 페이지 고유 규칙은 각 HTML의 인라인 `<style>`에 남아 있다.
- **로드 순서가 중요하다**: `<link rel="stylesheet" href="style.css">`가 반드시 인라인 `<style>`보다 **앞**에 와야 한다.
  이 순서 덕분에 페이지가 공용 값을 덮어쓸 수 있다 (예: `index.html`의 `.section-title`, `@keyframes fadeUp`).
- 폰트: Pretendard(jsDelivr CDN) + DM Sans / JetBrains Mono(Google Fonts)

### 한/영 전환 (`lang.js`)

**현재 의도적으로 꺼져 있다.** 언어 버튼을 누르면 "준비중입니다." 알림만 뜬다.

```js
var I18N_ENABLED = false;   // ← lang.js 맨 위. true로 바꾸면 전환이 켜진다
```

되살리려면 이 한 줄만 `true`로 바꿔 push하면 된다.
**사전을 주석 처리하지 말 것** — 예전에 그렇게 뒀다가 CP949로 저장되어 번역문을 통째로 잃었다.
꺼진 상태에서도 사전은 살아있는 코드로 남으므로 같은 사고가 재발하지 않는다.

켜기 전에 검수하려면 사이트를 열고 콘솔에서:

```js
idsLang.set("en")   // 영어 미리보기 (방문자에겐 영향 없음)
idsLang.set("ko")   // 되돌리기
idsLang.missing()   // 사전에 없어 번역 안 되는 문장 목록
```

- 사전 두 개로 동작한다.
  - `HTML` — `.history-text` / `.area-body` / `.footer-tagline` 처럼 `<strong>`이 문장 중간에 있어 **어순을 바꿔야 하는** 요소. innerHTML 통째로 교체
  - `TEXT` — 나머지 텍스트 노드와 `alt`/`title`/`aria-label`/`placeholder` 속성
- 원문(한국어)은 로드 시점에 보관해 두므로, **사전에 없는 문장은 사라지지 않고 한국어로 남는다.**
- 선택한 언어는 `localStorage`(`ids-lab-language`)에 저장된다.
- 켜져 있을 때 토글 버튼은 "지금 누르면 바뀔 언어"를 표시한다 (한국어 상태 → `ENG`).
  꺼져 있을 때는 원래 라벨 `KOR / ENG` 그대로 둔다.

**문장을 새로 추가했을 때**: 브라우저 콘솔에서 `idsLang.missing()` 을 실행하면 사전에 없는 문장이 전부 나온다.
그걸 `lang.js`의 `TEXT`(또는 인라인 태그가 섞였다면 `HTML`)에 추가하면 된다.

### 이미지

- 저장소 루트에 한글 파일명으로 보관 (`김영겸.jpg` 등).
인물 사진은 **`srcset`으로 1x / 2x 두 벌**을 제공한다 (`김영겸.jpg` + `김영겸@2x.jpg`).

| | 표시 크기 | 1x 파일 | 2x 파일 |
|---|---|---|---|
| PI (`.pi-avatar`) | 180×225 | 180×225 | 360×450 |
| 연구원 (`.researcher-avatar`) | 150×188 | 150×188 | 300×376 |

- 프레임은 **4:5 세로**. 원본이 대개 3:4라 아래쪽만 조금 잘라내면 좌우는 그대로 다 보인다.
- JPEG q86. 로고는 256색 팔레트 PNG (높이 138px / 푸터 222px).

**표시 크기의 3배짜리 한 장만 넣지 말 것.** 100% 배율 화면에서 브라우저가 3배 축소하는데,
브라우저 리샘플링은 품질이 낮아 눈·머리카락이 뭉개진다. 확대하면 멀쩡해 보이고 100%에서만
이상해 보이는 증상이 나오면 이 문제다. 배율별 크기를 따로 주어 브라우저가 리스케일할 일을 없애는 게 맞다.

**리사이즈로 축소한 이미지에만 언샤프 마스크를 걸 것.** 각 배율에서 리사이즈한 직후에,
그 크기에 맞는 강도로:

- 1x → `UnsharpMask(radius=0.6, percent=70, threshold=2)`
- 2x → `UnsharpMask(radius=0.8, percent=80, threshold=2)`

원본이 목표 크기보다 작아 축소가 없었다면 걸지 말 것 — 과하게 된다.
현재 `이민종 연구원@2x.jpg`(원본 295×370)가 그 경우다.

**`srcset`에서 파일명의 공백은 `%20`으로 인코딩할 것.** srcset은 공백을 URL과 배율
서술자(`1x`/`2x`)의 구분자로 쓰기 때문에, `이민종 연구원.jpg`를 그대로 쓰면 파싱이 깨진다.

원본은 저장소 안 **`_originals/`** 에 모여 있다 (로고 변형본, 고해상도 인물 사진 등).
`.gitignore`로 커밋에서 제외되므로 **이 PC에만 존재한다** — 다른 곳에서도 필요해지면
`.gitignore`의 `_originals/` 줄을 지우고 커밋하면 된다 (약 2.9MB).

최적화 이전의 인물 사진 4장은 git 이력(`96a9702~1`)에도 남아 있어 이중으로 복구 가능하다.
로고 변형본과 `경상대 로고.jpg`는 `_originals/`에만 있는 유일본이다.

## 주의사항

- 모든 HTML/CSS/JS는 **UTF-8**. 편집 시 인코딩 유지할 것.
  (과거 `lang.js`가 CP949로 저장되어 한글이 전부 깨진 적이 있음 — 원본 번역 코드는 그때 소실됐고 현재 사전은 새로 작성한 것)
- 푸터의 중간 브레이크포인트가 페이지마다 다르다 (index/research 900px, publication 768px, join/members 없음).
  통일하려면 각 HTML 인라인 `<style>`의 `@media`를 손봐야 한다.
- `publication.html` 표의 마지막 열 헤더가 한국어로는 "기타"인데 실제 내용은 주저자/공동저자다.
  영어 사전에는 "Role"로 넣어 두었으니, 한국어도 "역할"로 바꾸는 편이 자연스럽다.

## 작업 방식

로컬 미리보기:

```
cd "C:\Users\user\Desktop\ids-lab-web"
python -m http.server 8000
# http://localhost:8000
```

배포: 수정 → `git add` → `git commit` → `git push origin main`.
push 인증은 Git Credential Manager(HTTPS)로 설정 완료.
