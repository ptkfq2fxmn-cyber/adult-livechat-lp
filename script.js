// URL管理（差し替えはここだけ）
const JEWEL_URL = "https://www.j-live.tv/LiveChat/acs.php?si=jw10000&pid=MLA5685";
const MADAM_URL = "https://www.madamlive.tv/LiveChat/acs.php?si=md10000&pid=MLA5685";
const FANZA_URL = "https://al.fanza.co.jp/?lurl=https%3A%2F%2Flivechat.dmm.co.jp%2Facha&af_id=kazuma4649-001&ch=toolbar_sp&ch_id=link";

const SERVICE_URLS = {
  jewel: JEWEL_URL,
  madam: MADAM_URL,
  fanza: FANZA_URL,
};

const EXTERNAL_LINK_ATTRS = {
  target: "_blank",
  rel: "nofollow sponsored noopener",
};

const RECOMMEND_TEXT = {
  jewel: {
    title: "おすすめ：ジュエルライブ",
    body: "若い大人女性・清楚系・OL系を重視するあなたに向いています。まずはジュエルライブをチェックしてみましょう。",
  },
  madam: {
    title: "おすすめ：マダムライブ",
    body: "人妻・熟女・大人女性ジャンルを楽しみたいあなたに向いています。マダムライブから比較を始めるのがおすすめです。",
  },
  fanza: {
    title: "おすすめ：FANZAライブチャット",
    body: "大手・知名度・安心感を重視するあなたに向いています。まずはFANZAライブチャットを確認してみましょう。",
  },
};

const resultArea = document.getElementById("quiz-result");
const quizButtons = document.querySelectorAll(".quiz-btn");
const serviceLinks = document.querySelectorAll(".service-link");

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const recommendation = RECOMMEND_TEXT[type];
    if (!recommendation || !resultArea) return;

    const resultUrl = SERVICE_URLS[type] || "#";
    resultArea.innerHTML = `
      <p><strong>${recommendation.title}</strong></p>
      <p>${recommendation.body}</p>
      <a class="btn btn-primary" href="${resultUrl}" target="_blank" rel="nofollow sponsored noopener">公式サイトを確認する</a>
    `;

    const section = document.getElementById(type);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

serviceLinks.forEach((link) => {
  const service = link.dataset.service;
  const url = SERVICE_URLS[service];
  if (!url) return;

  link.href = url;
  link.target = EXTERNAL_LINK_ATTRS.target;
  link.rel = EXTERNAL_LINK_ATTRS.rel;
});
