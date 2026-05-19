// URL管理（差し替えはここだけ）
const JEWEL_URL = "https://www.j-live.tv/LiveChat/acs.php?si=jw10000&pid=MLA5685";
const MADAM_URL = "https://www.madamlive.tv/LiveChat/acs.php?si=md10000&pid=MLA5685";

const SERVICE_URLS = { jewel: JEWEL_URL, madam: MADAM_URL };
const EXTERNAL_LINK_ATTRS = { target: "_blank", rel: "nofollow sponsored noopener" };

const RECOMMEND_TEXT = {
  jewel: { title: "おすすめ：ジュエルライブ", body: "若い大人女性・清楚系・OL系を重視するあなたに向いています。" },
  madam: { title: "おすすめ：マダムライブ", body: "人妻・熟女・大人女性ジャンルを楽しみたいあなたに向いています。" },
};

const SPOTLIGHT_TEXT = {
  jewel: { name: "ジュエルライブ", description: "若い大人女性・清楚系・OL系を中心に、今の配信をチェックしやすいサービスです。" },
  madam: { name: "マダムライブ", description: "人妻・熟女・大人女性ジャンルを重視し、落ち着いた雰囲気で選びたい方に向いています。" },
};

const resultArea = document.getElementById("quiz-result");
const quizButtons = document.querySelectorAll(".quiz-btn");
const serviceLinks = document.querySelectorAll(".service-link");
const serviceSpotlight = document.getElementById("service-spotlight");

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const recommendation = RECOMMEND_TEXT[type];
    const spotlight = SPOTLIGHT_TEXT[type];
    if (!recommendation || !resultArea || !spotlight) return;

    const resultUrl = SERVICE_URLS[type] || "#";
    resultArea.innerHTML = `<p><strong>${recommendation.title}</strong></p><p>${recommendation.body}</p><a class="btn btn-primary" href="${resultUrl}" target="_blank" rel="nofollow sponsored noopener">公式サイトを確認する</a>`;

    if (serviceSpotlight) {
      serviceSpotlight.innerHTML = `
        <p><strong>${spotlight.name}</strong></p>
        <p>${spotlight.description}</p>
        <div class="cta-buttons">
          <a class="btn" href="#${type}">今ライブ中を見る</a>
          <a class="btn btn-primary" href="${resultUrl}" target="_blank" rel="nofollow sponsored noopener">公式サイトを確認する</a>
        </div>
      `;
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
