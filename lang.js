(function () {
  function showPreparingMessage() {
    alert("\uc900\ube44\uc911\uc785\ub2c8\ub2e4.");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-toggle").forEach((button) => {
      if (button.dataset.langBound) return;
      button.dataset.langBound = "true";
      button.setAttribute("aria-label", "\uc5b8\uc5b4 \uc804\ud658 \uc900\ube44\uc911");
      button.addEventListener("click", showPreparingMessage);
    });
  });
})();

// Original KOR/ENG language switching code is temporarily disabled.
// To restore it, remove the preparing-message code above and uncomment the code below.
//
//   Original KOR/ENG language switching code is temporarily disabled.
//   To restore it, remove this comment block and remove the preparing-message code above.
// 
// (function () {
//   const STORAGE_KEY = "ids-lab-language";
// 
//   const translations = new Map([
//     ["?곗뾽?곗씠?곌낵???곌뎄??, "Industrial Data Science Lab"],
//     ["?곗씠?곗? ?덉씠釉??덉쭏 臾몄젣瑜?ML/DL濡??닿껐?섍퀬,<br>?곗뾽 ?꾩옣??PHM ?곌뎄???묒슜?⑸땲??<br>We tackle data quality and label quality challenges<br>through machine learning, applied to industrial PHM.", "We solve data and label quality challenges with ML/DL<br>and apply them to PHM research in real industrial settings."],
//     ["?곌뎄 ?뚭컻 ??, "Research Areas ??],
//     ["SCI/SCIE ???諛?br>Top-tier 而⑦띁?곗뒪 寃뚯옱", "SCI/SCIE journals &amp;<br>top-tier conferences"],
//     ["?듭떖 ?곌뎄 遺꾩빞<br>Core Research Areas", "Core Research Areas"],
//     ["?고븰?묐젰 ?꾨줈?앺듃<br>Industry Collaborations", "Industry Collaborations"],
//     ["?대┛ ?곌뎄 臾명솕<br>Open Research Culture", "Open Research Culture"],
//     ["?곌뎄???뚯떇", "Lab News"],
//     ["Industrial Data Science Lab??二쇱슂 ?쇰Ц, ?섏긽, 援ъ꽦???뚯떇???꾪빀?덈떎.", "Updates on publications, awards, members, and major milestones from Industrial Data Science Lab."],
//     ["?럦 ?쇰Ц <strong>\"Missing Data Imputation with Irregular Sampling for Industrial Time Series\"</strong>??<strong>ICML 2026</strong>??梨꾪깮?섏뿀?듬땲??", "?럦 Our paper <strong>\"Missing Data Imputation with Irregular Sampling for Industrial Time Series\"</strong> was accepted to <strong>ICML 2026</strong>."],
//     ["?럦 ?쇰Ц <strong>\"Robust Fault Diagnosis under Noisy Label Conditions\"</strong>??<strong>IEEE Transactions on Industrial Informatics</strong>??寃뚯옱?섏뿀?듬땲??", "?럦 Our paper <strong>\"Robust Fault Diagnosis under Noisy Label Conditions\"</strong> was published in <strong>IEEE Transactions on Industrial Informatics</strong>."],
//     ["源泥좎닔, ?댁쁺???곌뎄?먯씠 <strong>2026 KSME 異섍퀎?숈닠???/strong>?먯꽌 ?곗닔 ?쇰Ц?곸쓣 ?섏긽?섏??듬땲??", "Chulsoo Kim and Younghee Lee received the Best Paper Award at the <strong>2026 KSME Spring Conference</strong>."],
//     ["諛뺣?以 ?곌뎄?먯씠 議몄뾽 ??<strong>?쇱꽦?꾩옄 DS遺臾?/strong>???낆궗?섏??듬땲??", "Minjun Park joined the <strong>Samsung Electronics DS Division</strong> after graduation."],
//     ["?쇰Ц <strong><a href=\"publication.html\">\"Semi-supervised Remaining Useful Life Estimation with Sparse Labels\"</a></strong>??<strong>NeurIPS 2024</strong>??梨꾪깮?섏뿀?듬땲??", "Our paper <strong><a href=\"publication.html\">\"Semi-supervised Remaining Useful Life Estimation with Sparse Labels\"</a></strong> was accepted to <strong>NeurIPS 2024</strong>."],
//     ["源誘쇱꽌, ?댁????곌뎄?먯씠 <strong>\"Label Noise in Industrial Data\"</strong> ?쇰Ц ?몃????명꽩?쇰줈 ?⑸쪟?섏??듬땲??", "Minseo Kim and Junhyuk Lee joined as research interns for the <strong>\"Label Noise in Industrial Data\"</strong> paper seminar."],
//     ["?곌뎄?ㅼ씠 李쎌꽕?섏뿀?듬땲?? ?곗뾽?곗씠?곌낵???곌뎄?ㅼ쓽 泥??곌뎄瑜??쒖옉?⑸땲??", "The lab was established, marking the beginning of Industrial Data Science Lab's first research projects."],
// 
//     ["?곌뎄 遺꾩빞", "Research Areas"],
//     ["遺덉셿?꾪븯怨?遺덇퇋移숉븳 ?곗뾽 ?곗씠?곕? ?좊ː?????덈뒗 AI 紐⑤뜽濡?蹂?섑븯????媛吏 ?듭떖 ?곌뎄瑜??섑뻾?⑸땲??", "We study three core areas that turn incomplete and irregular industrial data into reliable AI models."],
//     ["?곗씠???덉쭏", "Data Quality"],
//     ["?ㅼ젣 ?곗뾽 ?섍꼍???쇱꽌 ?곗씠?곕뒗 ?ㅽ듃?뚰겕 ?ㅻ쪟, ?λ퉬 ?먭?, ?쇱꽌 怨좎옣 ???ㅼ뼇???댁쑀濡?寃곗륫??諛쒖깮?섍굅??鍮꾧퇏?쇳븳 ?쒓컙 媛꾧꺽?쇰줈 ?섏쭛?⑸땲?? 蹂??곌뎄?? ?대윭??<strong>遺덉셿?꾪븳 ?쒓퀎???곗씠??/strong>瑜?癒몄떊?щ떇/?λ윭?앹쑝濡??④낵?곸쑝濡?泥섎━?섎뒗 諛⑸쾿濡좎쓣 ?곌뎄?⑸땲?? ?⑥닚 蹂닿컙???섏뼱, ?곗씠?곗쓽 ?쒓컙??援ъ“? ?곗뾽???뱀꽦??諛섏쁺??imputation 湲곕쾿 諛?遺덇퇋移??섑뵆留곸뿉 媛뺢굔??紐⑤뜽 ?ㅺ퀎瑜?紐⑺몴濡??⑸땲??", "Sensor data in industrial environments often contains missing values or is collected at irregular intervals due to network errors, maintenance, and sensor faults. Our group studies ML/DL methods for effectively handling such <strong>incomplete time-series data</strong>. Beyond simple interpolation, we aim to design imputation methods and robust models that reflect temporal structure and industrial characteristics."],
//     ["寃곗륫媛믪씠 ?ы븿???ㅻ????쒓퀎?댁뿉???⑦꽩???숈뒿?섏뿬 ?꾨씫??援ш컙???뺥솗?섍쾶 蹂듭썝?섎뒗 ?앹꽦 紐⑤뜽 諛?留덉뒪??湲곕컲 ?숈뒿 湲곕쾿", "Generative and masking-based learning methods that recover missing segments by learning patterns from multivariate time series with missing values"],
//     ["?섎즺쨌?곗뾽 ?쇱꽌?먯꽌 ?뷀엳 諛쒖깮?섎뒗 鍮꾧퇏???쒓컙 媛꾧꺽 ?곗씠?곕? 泥섎━?섎뒗 ODE 湲곕컲, Transformer 湲곕컲 紐⑤뜽 ?곌뎄", "ODE-based and Transformer-based models for irregularly sampled data commonly found in medical and industrial sensors"],
//     ["?곗씠???덉쭏 ????섍꼍?먯꽌??寃ш퀬???뱀쭠 ?쒗쁽???숈뒿?섎뒗 ?먭린吏??Self-supervised) 諛??議??숈뒿(Contrastive Learning) ?묎렐", "Self-supervised and contrastive learning approaches for robust representations under degraded data quality"],
//     ["?덉씠釉??덉쭏", "Label Quality"],
//     ["?곗뾽 ?꾩옣?먯꽌 ?꾨Ц媛媛 吏곸젒 ?덉씠釉붿쓣 遺李⑺븯???묒뾽? 鍮꾩슜怨??쒓컙??留됰??섍쾶 ?뚯슂?⑸땲?? 寃곌낵?곸쑝濡??덉씠釉붿씠 ?ъ냼?섍굅???ㅼ뿼??noisy) ?곹솴??留ㅼ슦 鍮덈쾲?⑸땲?? 蹂??곌뎄?? <strong>?덉씠釉??ъ냼??/strong> ?섍꼍(Semi-supervised Learning)怨?<strong>?몄씠利??덉씠釉?/strong> ?섍꼍(Learning with Noisy Labels)?먯꽌??媛뺢굔?섍쾶 ?숈뒿?섎뒗 諛⑸쾿濡좎쓣 ?곌뎄?⑸땲??", "In industrial settings, expert labeling is costly and time-consuming, so labels are often scarce or noisy. Our group studies robust learning methods for <strong>label scarcity</strong> settings such as semi-supervised learning and <strong>noisy label</strong> settings such as learning with noisy labels."],
//     ["?덉씠釉??ㅻ쪟媛 ?욎씤 ?숈뒿 ?곗씠?곗뿉???대┛ ?섑뵆???좊퀎?섍퀬, ?몄씠利덉뿉 媛뺢굔???먯떎?⑥닔 諛??뺢퇋??湲곕쾿 ?ㅺ퀎", "Selecting clean samples from mislabeled training data and designing noise-robust loss functions and regularization methods"],
//     ["?뚯닔???덉씠釉??곗씠?곗? ?ㅻ웾??鍮꾨젅?대툝 ?곗씠?곕? ?④퍡 ?쒖슜?섎뒗 ?섏궗 ?덉씠釉붾쭅(Pseudo-labeling), Consistency Regularization 湲곕쾿", "Pseudo-labeling and consistency regularization methods that use a small labeled set together with abundant unlabeled data"],
//     ["?덉씠釉붾쭅 鍮꾩슜 理쒖냼?붾? ?꾪빐 ?뺣낫?됱씠 ?믪? ?섑뵆???좏깮?곸쑝濡??덉씠釉붾쭅?섎뒗 ?λ룞 ?숈뒿 ?꾨왂 ?곌뎄", "Active learning strategies that selectively label informative samples to reduce labeling cost"],
//     ["?곗뾽?묒슜 ??PHM", "Industrial Applications ??PHM"],
//     ["????媛吏 ?듭떖 ?곌뎄瑜??ㅼ젣 ?곗뾽 ?섍꼍???곸슜?섎뒗 ?묒슜 ?곌뎄?낅땲?? ?뚯쟾 湲곌퀎, 怨듭옉湲곌퀎, 諛고꽣由? ??났?붿쭊 ???ㅼ뼇???곗뾽 ?ㅻ퉬瑜???곸쑝濡?<strong>寃고븿 吏꾨떒(Fault Diagnosis)</strong>, <strong>?붿뿬 ?섎챸 ?덉륫(RUL Estimation)</strong>, <strong>?댁긽 ?먯?(Anomaly Detection)</strong> 臾몄젣瑜??ㅻ９?덈떎. ?꾩떎??遺덉셿?꾪븳 ?곗씠?곗? ?ъ냼???덉씠釉?議곌굔 ?섏뿉???ㅼ슜?곸씤 PHM ?붾（?섏쓣 ?쒖븞?섎뒗 寃껋씠 紐⑺몴?낅땲??", "This application area applies the two core research directions to real industrial environments. We address <strong>fault diagnosis</strong>, <strong>remaining useful life estimation</strong>, and <strong>anomaly detection</strong> for rotating machinery, machine tools, batteries, aircraft engines, and other industrial assets. Our goal is to propose practical PHM solutions under incomplete data and scarce-label conditions."],
//     ["吏꾨룞쨌?뚰뼢쨌?꾨쪟 ?좏샇 湲곕컲 踰좎뼱留? 湲곗뼱諛뺤뒪 寃고븿 ?좏삎 遺꾨쪟 ???몄씠利??덉씠釉?諛??꾨찓???쒗봽???섍꼍 ???, "Classifying bearing and gearbox fault types using vibration, acoustic, and current signals under noisy labels and domain shift"],
//     ["?쇱꽌 ?곗씠??寃곗륫쨌遺덇퇋移??섑뵆留?議곌굔?먯꽌???ㅻ퉬 ?붿뿬 ?섎챸 ?덉륫 ?λ윭??紐⑤뜽 (LSTM, Transformer, Neural ODE)", "Deep learning models for RUL estimation under missing sensor data and irregular sampling conditions"],
//     ["?뺤긽 ?곗씠?곕쭔 ?쒖슜?섎뒗 鍮꾩????먭린吏???숈뒿 湲곕컲 ?곗뾽 ?댁긽 ?먯? ??遺덇퇏???곗씠??諛??덉씠釉??ъ냼 ?섍꼍 ?곸슜", "Unsupervised and self-supervised industrial anomaly detection using only normal data under imbalanced and label-scarce settings"],
//     ["二쇱슂 諛⑸쾿濡?, "Methodology"],
//     ["?곌뎄 ?꾨컲??嫄몄퀜 ?쒖슜?섎뒗 ?듭떖 ML/DL 湲곕쾿?ㅼ엯?덈떎.", "Core ML/DL methods used across our research."],
//     ["VAE, Diffusion Model ???앹꽦 紐⑤뜽???쒖슜??寃곗륫 ?곗씠??蹂댁셿 諛??곗씠??利앷컯", "Missing data recovery and data augmentation using generative models such as VAEs and diffusion models"],
//     ["遺덇퇋移??쒓퀎??泥섎━???곹빀??Attention 湲곕컲 ?꾪궎?띿쿂 ?ㅺ퀎 諛??곗뾽 ?꾨찓???곸쓳", "Attention-based architectures for irregular time series and adaptation to industrial domains"],
//     ["?곗냽 ?쒓컙 ??븰怨?紐⑤뜽濡?遺덇퇋移??섑뵆留??쒓퀎?댁쓽 ?좎옱 沅ㅼ쟻(latent trajectory) ?숈뒿", "Learning latent trajectories of irregularly sampled time series with continuous-time dynamical models"],
//     ["?덉씠釉??놁씠 ?덉쭏 醫뗭? ?뱀쭠 ?쒗쁽???숈뒿?섎뒗 ?먭린吏???議??숈뒿 ?꾨젅?꾩썙??, "Self-supervised contrastive learning frameworks for high-quality representations without labels"],
//     ["?몄씠利??덉씠釉붿뿉 媛뺢굔???먯떎 ?⑥닔 ?ㅺ퀎 (Symmetric Loss, GCE, Peer Loss ??", "Designing loss functions robust to noisy labels, including symmetric loss, GCE, and peer loss"],
//     ["?쒕줈 ?ㅻⅨ ?댁쟾 議곌굔쨌?λ퉬 媛?吏???꾩씠瑜??꾪븳 ?꾨찓???곸쓳 諛??꾩씠 ?숈뒿", "Domain adaptation and transfer learning for knowledge transfer across operating conditions and equipment"],
// 
//     ["?쇰Ц 紐⑸줉", "Publications"],
//     ["?댁긽??援먯닔???곗뾽 ?곗씠???ъ씠?몄뒪, ?쒓퀎??遺꾩꽍, PHM 諛?AI ?좊ː??愿??寃뚯옱 ?쇰Ц 紐⑸줉?낅땲??", "A list of Prof. Sangho Lee's publications on industrial data science, time-series analysis, PHM, and AI reliability."],
//     ["珥??쇰Ц ??, "Total Publications"],
//     ["二쇱????쇰Ц", "First-Author Papers"],
//     ["怨듬룞????쇰Ц", "Co-Author Papers"],
//     ["?쒕쾲", "No."],
//     ["?쒕ぉ", "Title"],
//     ["寃뚯옱?꾩썡", "Date"],
//     ["?숈닠吏紐?, "Journal"],
//     ["湲고?", "Role"],
//     ["二쇱???, "First author"],
//     ["怨듬룞???, "Co-author"],
// 
//     ["?곌뎄??援ъ꽦??, "Members"],
//     ["?곗뾽?곗씠?곌낵???곌뎄?ㅼ쓽 援먯닔 諛??숈깮 援ъ꽦?먯쓣 ?뚭컻?⑸땲??", "Meet the faculty and student members of Industrial Data Science Lab."],
//     ["吏?꾧탳??, "Principal Investigator"],
//     ["寃쎌긽援?┰??숆탳 ?곗뾽?쒖뒪?쒓났?숇?", "Department of Industrial &amp; Systems Engineering, Gyeongsang National University"],
//     ["?곗뾽 ?곗씠?곗쓽 ?덉쭏 臾몄젣? ?덉씠釉??덉쭏 臾몄젣瑜?癒몄떊?щ떇쨌?λ윭?앹쑝濡??닿껐?섍퀬, ?ㅼ젣 ?곗뾽 ?꾩옣??PHM(Prognostics and Health Management) 臾몄젣???곸슜?섎뒗 ?곌뎄瑜??섑뻾?⑸땲??", "Prof. Lee studies ML/DL methods for data quality and label quality problems in industrial data and applies them to PHM problems in real industrial settings."],
//     ["?숆뎅??숆탳 ??숈썝 ?곗뾽?쒖뒪?쒓났?숆낵 (2021.03 ~ 2025.02)", "Department of Industrial &amp; Systems Engineering, Dongguk University (2021.03 - 2025.02)"],
//     ["?숆뎅??숆탳 ??숈썝 ?곗뾽?쒖뒪?쒓났?숆낵 (2018.09 ~ 2020.08)", "Department of Industrial &amp; Systems Engineering, Dongguk University (2018.09 - 2020.08)"],
//     ["?숆뎅??숆탳 ?곗뾽?쒖뒪?쒓났?숆낵 (2013.03 ~ 2018.08)", "Department of Industrial &amp; Systems Engineering, Dongguk University (2013.03 - 2018.08)"],
//     ["寃쎌긽援?┰??숆탳 ?곗뾽?쒖뒪?쒓났?숇? 議곌탳??, "Assistant Professor, Department of Industrial &amp; Systems Engineering, Gyeongsang National University"],
//     ["?숆뎅??숆탳 ?곗뾽?쒖뒪?쒓났?숆낵 諛뺤궗?꾩뿰援ъ썝 (2025.03 ~ 2025.08)", "Postdoctoral Researcher, Department of Industrial &amp; Systems Engineering, Dongguk University (2025.03 - 2025.08)"],
//     ["二쇱떇?뚯궗 ?먰봽?덈뵓??AI Engineer (2020.01 ~ 2021.01)", "AI Engineer, OnePredict Inc. (2020.01 - 2021.01)"],
//     ["?앹궗怨쇱젙", "M.S. Students"],
//     ["源 ??寃?, "Younggyeom Kim"],
//     ["寃쎌긽援?┰??숆탳 ?곗뾽?쒖뒪?쒓났?숇?<br>Gyeongsang National University", "Department of Industrial &amp; Systems Engineering<br>Gyeongsang National University"],
//     ["M.S. 寃쎌긽援?┰??숆탳 ??숈썝 ?곗뾽?쒖뒪?쒓났?숇? (2026.03 ~ )", "M.S., Department of Industrial &amp; Systems Engineering, Gyeongsang National University (2026.03 - Present)"],
//     ["B.S. 寃쎌긽援?┰??숆탳 ?곗뾽?쒖뒪?쒓났?숇? (2020.03 ~ 2026.03)", "B.S., Department of Industrial &amp; Systems Engineering, Gyeongsang National University (2020.03 - 2026.03)"],
// 
//     ["?고븰?묐젰 &amp;<br>?곌뎄 ?묐젰", "Industry-Academia &amp;<br>Research Collaboration"],
//     ["?고븰?묐젰 &amp; ?곌뎄 ?묐젰", "Industry-Academia &amp; Research Collaboration"],
//     ["Industrial Data Science Lab? ?곗뾽 ?꾩옣???ㅼ젣 ?곗씠??臾몄젣瑜??곌뎄 吏덈Ц?쇰줈 ?곌껐?섍퀬, ?좊ː?????덈뒗 AI 湲곕컲 PHM ?붾（?섏쓣 ?④퍡 媛쒕컻?⑸땲??", "Industrial Data Science Lab turns real data problems from industrial sites into research questions and develops reliable AI-based PHM solutions with partners."],
//     ["?묐젰 湲곌?", "Partners"],
//     ["?ㅼ뼇???곗뾽 ?뚰듃??諛??곌뎄湲곌?怨??④퍡 ?ㅼ쭏?곸씤 臾몄젣 ?닿껐??紐⑺몴濡??곌뎄?⑸땲??", "We work with industry partners and research institutes to solve practical problems."],
//     ["?쇱꽦?꾩옄", "Samsung Electronics"],
//     ["?ㅻ퉬 怨좎옣 ?덉륫 AI 諛??쒖“ ?곗씠??湲곕컲 ?덉?蹂댁쟾 ?곌뎄", "AI for equipment failure prediction and predictive maintenance using manufacturing data"],
//     ["LG?꾩옄", "LG Electronics"],
//     ["?ㅻ쭏?명뙥?좊━ PHM 諛??쇱꽌 ?곗씠??遺꾩꽍 ?곌뎄", "Smart factory PHM and sensor data analytics research"],
//     ["?쒓뎅?먮꼫吏湲곗닠?곌뎄??, "Korea Institute of Energy Research"],
//     ["?먮꼫吏 ?ㅻ퉬 ?댁긽 ?먯? 諛??댁쁺 ?곗씠???덉쭏 愿由?, "Anomaly detection for energy systems and operational data quality management"],
//     ["?곗뾽 AI 怨쇱젣 諛??쒖“ 吏?ν솕 ?곌뎄 ?묐젰", "Industrial AI projects and manufacturing intelligence research collaboration"],
//     ["?꾨??먮룞李?, "Hyundai Motor Company"],
//     ["?쇱꽌 ?곗씠???덉쭏 愿由?諛??쒓퀎??紐⑤뜽留??곌뎄", "Sensor data quality management and time-series modeling research"],
//     ["湲곗큹?곌뎄?ъ뾽 湲곕컲 ?곗씠???덉쭏 諛??덉씠釉??덉쭏 ?곌뎄", "Data quality and label quality research based on fundamental research programs"],
//     ["?묐젰 二쇱젣", "Collaboration Topics"],
//     ["?곗뾽 ?꾩옣?먯꽌 諛섎났?곸쑝濡?諛쒖깮?섎뒗 ?곗씠??臾몄젣瑜??곌뎄 媛?ν븳 ?뺥깭濡??뺤쓽?⑸땲??", "We formulate recurring data problems in industrial sites as researchable problems."],
//     ["寃곗륫, 遺덇퇋移??섑뵆留? ?쇱꽌 ?ㅻ쪟 ???꾩떎 ?곗씠?곗쓽 ?덉쭏 ???臾몄젣瑜??ㅻ９?덈떎.", "We address real-world data quality issues such as missing values, irregular sampling, and sensor errors."],
//     ["?덉씠釉?遺議? ?몄씠利??덉씠釉? 遺덇퇏???곗씠???섍꼍?먯꽌 媛뺢굔???숈뒿 諛⑸쾿???곌뎄?⑸땲??", "We study robust learning under label scarcity, noisy labels, and imbalanced data."],
//     ["怨좎옣 吏꾨떒, ?댁긽 ?먯?, RUL ?덉륫 ???덉?蹂댁쟾 以묒떖???묒슜 臾몄젣瑜??닿껐?⑸땲??", "We solve predictive maintenance problems such as fault diagnosis, anomaly detection, and RUL estimation."],
// 
//     ["?④퍡 ?곌뎄??br>?숇즺瑜?李얠뒿?덈떎", "We Are Looking for<br>Research Collaborators"],
//     ["?곗씠???덉쭏, ?덉씠釉??덉쭏, PHM??愿???덈뒗 遺꾩씠?쇰㈃ ?꾧뎄?좎? ?섏쁺?⑸땲?? ??숈썝???씲룸컯?? 諛??숇? ?곌뎄?명꽩??紐⑥쭛?⑸땲??", "We welcome anyone interested in data quality, label quality, and PHM. Graduate students and undergraduate research interns are encouraged to contact us."],
//     ["紐⑥쭛 遺꾩빞", "Open Positions"],
//     ["?꾩옱 紐⑤뱺 ?ъ??섏뿉??吏?먯쓣 諛쏄퀬 ?덉뒿?덈떎.", "Applications are currently open for all positions."],
//     ["諛뺤궗怨쇱젙 ?곌뎄??, "Ph.D. Student"],
//     ["?곗씠???덉씠釉??덉쭏 ML ?곌뎄 ?먮뒗 PHM ?묒슜 ?곌뎄瑜??④퍡 ?대걣???섍컝 諛뺤궗怨쇱젙 ?곌뎄?먯쓣 紐⑥쭛?⑸땲??", "We are recruiting Ph.D. students who will lead ML research on data and label quality or applied PHM research."],
//     ["?곌뎄鍮?吏??(BK21 ??", "Research funding support, including BK21"],
//     ["援?궡??Top-tier 而⑦띁?곗뒪 諛쒗몴 吏??, "Support for presenting at top-tier conferences"],
//     ["?고븰?묐젰 ?꾨줈?앺듃 李몄뿬 湲고쉶", "Opportunities to join industry collaboration projects"],
//     ["?좎뿰???곌뎄 ?섍꼍", "Flexible research environment"],
//     ["?앹궗怨쇱젙 ?곌뎄??, "M.S. Student"],
//     ["癒몄떊?щ떇쨌?λ윭??湲곕컲 ?곌뎄瑜?泥섏쓬 ?쒖옉?섎뒗 遺꾩쓣 ?섏쁺?⑸땲?? 吏?꾪븯??鍮좊Ⅴ寃??깆옣?????덈뒗 ?섍꼍???쒓났?⑸땲??", "We welcome students beginning ML/DL-based research and provide an environment for rapid growth with close guidance."],
//     ["?곌뎄?ν븰湲?吏??, "Research scholarship support"],
//     ["?쇰Ц ?묒꽦 諛李?吏??, "Close guidance for paper writing"],
//     ["?곗뾽泥??명꽩???곌퀎 媛??, "Possible connection to industry internships"],
//     ["議몄뾽 ??吏꾨줈 吏??, "Career support after graduation"],
//     ["?숇? ?곌뎄?명꽩", "Undergraduate Intern"],
//     ["?숇??앹쑝濡쒖꽌 AI ?곌뎄瑜?寃쏀뿕?섍퀬 ?띠? 遺꾩쓣 ?꾪븳 ?꾨줈洹몃옩?낅땲?? ?쇰Ц ?몃???諛??뚭퇋紐??꾨줈?앺듃??李몄뿬?⑸땲??", "This program is for undergraduate students who want to experience AI research through paper seminars and small projects."],
//     ["?쇰Ц ?쎄린 ?몃???李몄뿬", "Participation in paper reading seminars"],
//     ["??숈썝 吏꾪븰 ???곕?", "Preferred consideration for graduate study"],
//     ["?곌뎄 ?꾨줈?앺듃 肄붾뱶 李몄뿬", "Participation in research project code"],
//     ["?뚯젙???명꽩??吏?먭툑", "Internship stipend support"],
//     ["吏???먭꺽", "Qualifications"],
//     ["?꾨옒 議곌굔??紐⑤몢 異⑹”?섏? ?딆븘???⑸땲?? ?댁젙怨??깆옣 ?섏?媛 媛??以묒슂?⑸땲??", "You do not need to satisfy every item below. Curiosity, motivation, and willingness to grow matter most."],
//     ["???꾩닔 ?붽굔", "??Requirements"],
//     ["Python ?꾨줈洹몃옒諛?湲곕낯 ?댁긽 媛??, "Basic or higher Python programming ability"],
//     ["?곸뼱 ?쇰Ц ?낇빐 媛??(?묒꽦 ?λ젰? ?꾩닔 ?꾨떂)", "Ability to read English papers; writing ability is not required"],
//     ["癒몄떊?щ떇/?λ윭??湲곗큹 媛쒕뀗 ?댄빐 (?좏삎 紐⑤뜽, ??쟾????", "Understanding of basic ML/DL concepts such as linear models and backpropagation"],
//     ["二쇨린?곸씤 誘명똿 諛?諛쒗몴 李몄뿬 媛??, "Ability to participate in regular meetings and presentations"],
//     ["狩??곕? ?ы빆", "狩?Preferred"],
//     ["PyTorch ?ъ슜 寃쏀뿕", "Experience with PyTorch"],
//     ["?쒓퀎???곗씠???먮뒗 ?곗뾽 ?곗씠??泥섎━ 寃쏀뿕", "Experience with time-series or industrial data"],
//     ["PHM, ?좏샇泥섎━, ?쒖“/?먮꼫吏 遺꾩빞 ?꾨찓??吏??, "Domain knowledge in PHM, signal processing, manufacturing, or energy"],
//     ["?숇? ?곌뎄 ?먮뒗 媛쒖씤 ?꾨줈?앺듃 寃쏀뿕", "Undergraduate research or personal project experience"],
//     ["?곸뼱 ?쇰Ц ?묒꽦 寃쏀뿕 (諛뺤궗怨쇱젙 ?곕?)", "Experience writing English papers, preferred for Ph.D. applicants"],
//     ["吏???덉감", "Application Process"],
//     ["?꾨옒 ?쒖꽌濡?吏꾪뻾?⑸땲?? ?몄젣?좎? ?대찓?쇰줈 癒쇱? 臾몄쓽??二쇱꽭??", "The process proceeds as follows. Feel free to contact us by email first."],
//     ["?대찓??臾몄쓽", "Email Inquiry"],
//     ["CV? 媛꾨떒??吏???숆린瑜??대찓?쇰줈 蹂대궡二쇱꽭??, "Send your CV and a brief statement of motivation by email"],
//     ["?쒕쪟 寃??, "Document Review"],
//     ["?깆쟻?? ?곌뎄 寃쏀뿕 ???쒕쪟瑜?寃?좏빀?덈떎 (1~2二?", "We review transcripts, research experience, and related materials for 1-2 weeks"],
//     ["硫대떞 / ?명꽣酉?, "Meeting / Interview"],
//     ["援먯닔?섍낵 30~60遺??댁쇅 ?㉱룹삤?꾨씪??誘명똿??吏꾪뻾?⑸땲??, "A 30-60 minute online or offline meeting with the professor"],
//     ["理쒖쥌 ?⑸쪟", "Final Join"],
//     ["?⑸쪟媛 寃곗젙?섎㈃ ?낇븰/?명꽩 ?쒖옉 ?쇱젙??議곗쑉?⑸땲??, "After acceptance, admission or internship start dates are arranged"],
//     ["吏湲?諛붾줈 ?곕씫?섏꽭??, "Contact Us"],
//     ["吏덈Ц???덉쑝?쒓굅???곌뎄?ㅼ뿉 愿?ъ씠 ?덉쑝?쒕㈃ ?몄젣?좎? ?대찓?쇰줈 臾몄쓽??二쇱꽭??<br>吏???섏궗媛 ?녿뜑?쇰룄 沅곴툑???먯? ?명븯寃?臾쇱뼱蹂댁떎 ???덉뒿?덈떎.", "If you have questions or are interested in the lab, feel free to contact us by email.<br>You are welcome to ask questions even if you are not ready to apply."],
//     ["?곌뎄 遺꾩빞 ?댄렣蹂닿린 ??, "Explore Research Areas ??],
// 
//     ["?곌뎄?ㅼ뿉<br>臾몄쓽?섏꽭??, "Contact<br>Industrial Data Science Lab"],
//     ["Industrial Data Science Lab? ?곗뾽 ?곗씠?? PHM, ?곗씠???덉쭏 諛??덉씠釉??덉쭏 ?곌뎄瑜??④퍡 ?뺤옣???곌뎄 ?묐젰怨?臾몄쓽瑜?湲곕떎由쎈땲??", "Industrial Data Science Lab welcomes inquiries and collaborations that expand research on industrial data, PHM, data quality, and label quality."],
//     ["?곌뎄 ?묐젰, ?고븰 ?꾨줈?앺듃, ?몃??? ??숈썝 吏꾪븰 愿??臾몄쓽瑜??대찓?쇰줈 蹂대궡二쇱꽭??", "Please email us about research collaboration, industry projects, seminars, or graduate study."],
//     ["臾몄쓽 紐⑹쟻, ?뚯냽, 媛꾨떒???뚭컻瑜??④퍡 蹂대궡二쇱떆硫???鍮좊Ⅴ寃??뺤씤?????덉뒿?덈떎. ??숈썝 吏꾪븰 ?먮뒗 ?곌뎄?명꽩 臾몄쓽??寃쎌슦 CV? 愿???곌뎄 遺꾩빞瑜??④퍡 泥⑤???二쇱꽭??", "Please include the purpose of your inquiry, affiliation, and a brief introduction. For graduate study or research intern inquiries, attach your CV and research interests."],
//     ["寃쎌긽援?┰??숆탳 ?곗뾽?쒖뒪?쒓났?숇?<br>寃쎈궓 吏꾩＜??吏꾩＜?濡?501<br>401??401??, "Department of Industrial &amp; Systems Engineering, Gyeongsang National University<br>501 Jinju-daero, Jinju-si, Gyeongnam<br>Building 401, Room 401"],
//     ["諛⑸Ц 諛?硫대떞? ?대찓?쇰줈 ?쇱젙??議곗쑉????吏꾪뻾?⑸땲??", "Visits and meetings are arranged by email in advance."],
//     ["臾몄쓽 遺꾩빞", "Inquiry Topics"],
//     ["?꾨옒 二쇱젣? 愿?⑤맂 ?곕씫???섏쁺?⑸땲??", "We welcome inquiries related to the following topics."],
//     ["?곗뾽 ?곗씠??遺꾩꽍, PHM, ?쒓퀎??紐⑤뜽留? ?곗씠???덉쭏 媛쒖꽑 愿??怨듬룞?곌뎄瑜??쇱쓽?⑸땲??", "We discuss joint research on industrial data analysis, PHM, time-series modeling, and data quality improvement."],
//     ["?쒖“, ?ㅻ퉬, ?쇱꽌 ?곗씠??湲곕컲??怨좎옣 吏꾨떒怨??덉?蹂댁쟾 ?꾨줈?앺듃瑜??묒쓽?⑸땲??", "We discuss fault diagnosis and predictive maintenance projects based on manufacturing, equipment, and sensor data."],
//     ["??숈썝 吏꾪븰, ?곌뎄 ?명꽩, ?쇰Ц ?몃???李몄뿬 ???곌뎄??愿???곷떞??吏꾪뻾?⑸땲??", "We provide consultation on graduate study, research internships, paper seminars, and lab participation."],
// 
//     ["Industrial Data Science Lab???쇰Ц, ?섏긽, 援ъ꽦???뚯떇怨?二쇱슂 ?곌뎄 ?대젰???뺣━?⑸땲??", "A summary of Industrial Data Science Lab's publications, awards, member news, and major research milestones."],
//     ["?쇰Ц <strong>\"Missing Data Imputation with Irregular Sampling for Industrial Time Series\"</strong>??<strong>ICML 2026</strong>??梨꾪깮?섏뿀?듬땲??", "Our paper <strong>\"Missing Data Imputation with Irregular Sampling for Industrial Time Series\"</strong> was accepted to <strong>ICML 2026</strong>."],
//     ["?쇰Ц <strong>\"Robust Fault Diagnosis under Noisy Label Conditions\"</strong>??<strong>IEEE Transactions on Industrial Informatics</strong>??寃뚯옱?섏뿀?듬땲??", "Our paper <strong>\"Robust Fault Diagnosis under Noisy Label Conditions\"</strong> was published in <strong>IEEE Transactions on Industrial Informatics</strong>."],
// 
//     ["Industrial Data Science Laboratory<br>?곗뾽?곗씠?곌낵???곌뎄??br>?곗씠?곗? ?덉씠釉??덉쭏 臾몄젣瑜??닿껐?섎뒗 ?곌뎄瑜??섑뻾?⑸땲??", "Industrial Data Science Laboratory<br>We study data and label quality challenges<br>for reliable industrial AI."],
//     ["Industrial Data Science Laboratory<br>?곗뾽?곗씠?곌낵???곌뎄??br>?곗씠?곗? ?덉씠釉??덉쭏 臾몄젣瑜??닿껐?섎뒗<br>?곌뎄瑜??섑뻾?⑸땲??", "Industrial Data Science Laboratory<br>We study data and label quality challenges<br>for reliable industrial AI."],
//     ["寃쎈궓 吏꾩＜??吏꾩＜?濡?501", "501 Jinju-daero, Jinju-si, Gyeongnam"],
//     ["401??401??, "Building 401, Room 401"]
//   ]);
// 
//   const labelTranslations = new Map([
//     ["?쒕쾲", "No."],
//     ["?쒕ぉ", "Title"],
//     ["寃뚯옱?꾩썡", "Date"],
//     ["?숈닠吏紐?, "Journal"],
//     ["湲고?", "Role"]
//   ]);
// 
//   function normalizeHtml(value) {
//     return value
//       .replace(/\s*<br\s*\/?>\s*/gi, "<br>")
//       .replace(/>\s+</g, "><")
//       .replace(/\s+/g, " ")
//       .trim();
//   }
// 
//   function setLanguage(lang) {
//     document.documentElement.lang = lang;
// 
//     const elements = Array.from(document.querySelectorAll("body *"));
//     elements.forEach((element) => {
//       if (!element.isConnected || ["SCRIPT", "STYLE", "NOSCRIPT", "IMG", "BR"].includes(element.tagName)) {
//         return;
//       }
// 
//       if (!element.dataset.langKoHtml) {
//         element.dataset.langKoHtml = element.innerHTML;
//       }
// 
//       const key = normalizeHtml(element.dataset.langKoHtml);
//       const translated = translations.get(key);
// 
//       if (translated) {
//         element.innerHTML = lang === "en" ? translated : element.dataset.langKoHtml;
//       }
// 
//       if (element.hasAttribute("data-label")) {
//         if (!element.dataset.langKoLabel) {
//           element.dataset.langKoLabel = element.getAttribute("data-label");
//         }
//         const koLabel = element.dataset.langKoLabel;
//         element.setAttribute("data-label", lang === "en" ? (labelTranslations.get(koLabel) || koLabel) : koLabel);
//       }
//     });
// 
//     document.querySelectorAll(".lang-toggle").forEach((button) => {
//       button.textContent = lang === "en" ? "ENG / KOR" : "KOR / ENG";
//       button.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
//       button.setAttribute("aria-label", lang === "en" ? "Switch language to Korean" : "Switch language to English");
//     });
//   }
// 
//   function readSavedLanguage() {
//     try {
//       return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ko";
//     } catch (error) {
//       return "ko";
//     }
//   }
// 
//   function saveLanguage(lang) {
//     try {
//       localStorage.setItem(STORAGE_KEY, lang);
//     } catch (error) {
//       // The toggle should still work for the current page even if storage is blocked.
//     }
//   }
// 
//   window.toggleLang = function () {
//     const current = document.documentElement.lang === "en" ? "en" : readSavedLanguage();
//     const next = current === "en" ? "ko" : "en";
//     saveLanguage(next);
//     setLanguage(next);
//   };
// 
//   document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".lang-toggle").forEach((button) => {
//       if (button.dataset.langBound) return;
//       button.dataset.langBound = "true";
//       button.addEventListener("click", window.toggleLang);
//     });
// 
//     const savedLang = readSavedLanguage();
//     setLanguage(savedLang);
//   });
// })();
