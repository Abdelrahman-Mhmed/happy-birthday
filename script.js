/* =========================================================
   حكايتنا — كل المحتوى القابل للتعديل موجود هنا
   لا تحتاج لتعديل index.html لتغيير بيانات الموقع.
   ========================================================= */

const CONFIG = {
  herName: "[HER_NAME]",
  myName: "[MY_NAME]",
  birthday: "[BIRTHDAY_DATE]",

  heroImage: "assets/images/photo-01.jpg",

  song: {
    title: "[SONG_TITLE]",
    artist: "[ARTIST]",
    file: "assets/music/our-song.mp3",
    cover: "assets/images/photo-01.jpg"
  },

  memories: [
    {
      date: "[DATE]",
      title: "أول مرة اتكلمنا",
      location: "[LOCATION]",
      image: "assets/images/photo-01.jpg",
      description: "اليوم اللي مكنتش أعرف فيه إن الشخص ده هيبقى من أهم الأشخاص في حياتي."
    },
    {
      date: "[DATE]",
      title: "أول مرة اتقابلنا",
      location: "[LOCATION]",
      image: "assets/images/photo-02.jpg",
      description: "لحظة بسيطة وقتها، لكنها بقت واحدة من اللحظات اللي بحب أفتكرها."
    },
    {
      date: "[DATE]",
      title: "أول صورة لينا",
      location: "[LOCATION]",
      image: "assets/images/photo-03.jpg",
      description: "مش فاكر كنا بنتكلم عن إيه، بس فاكر إني كنت مبسوط جدًا وأنا جنبك."
    },
    {
      date: "[DATE]",
      title: "أول خروجة",
      location: "[LOCATION]",
      image: "assets/images/photo-01.jpg",
      description: "يوم عادي في شكله، استثنائي في إحساسي بيه."
    },
    {
      date: "[DATE]",
      title: "أحلى يوم قضيناه سوا",
      location: "[LOCATION]",
      image: "assets/images/photo-02.jpg",
      description: "من الأيام اللي نفسي أعيشها تاني بنفس التفاصيل."
    },
    {
      date: "[DATE]",
      title: "أكتر موقف ضحكنا فيه",
      location: "[LOCATION]",
      image: "assets/images/photo-03.jpg",
      description: "الضحكة اللي بتخليني أقول إن وجودك في حياتي نعمة."
    },
    {
      date: "[DATE]",
      title: "موقف صعب عديناه سوا",
      location: "[LOCATION]",
      image: "assets/images/photo-01.jpg",
      description: "حتى الأيام الصعبة بقت أهون لما كنا فيها مع بعض."
    },
    {
      date: "[DATE]",
      title: "ذكرى عمري ما هنساها",
      location: "[LOCATION]",
      image: "assets/images/photo-02.jpg",
      description: "ذكرى صغيرة، لكن مكانها كبير جدًا جوايا."
    },
    {
      date: "[DATE]",
      title: "أكتر لحظة حسيت فيها إني بحبك",
      location: "[LOCATION]",
      image: "assets/images/photo-03.jpg",
      description: "يمكن مقلتهاش وقتها، بس اللحظة دي قالتلي حاجات كتير."
    },
    {
      date: "[BIRTHDAY_DATE]",
      title: "النهارده ❤️",
      location: "[LOCATION]",
      image: "assets/images/photo-01.jpg",
      description: "عيد ميلاد أجمل إنسانة، وبداية سنة جديدة أتمنى تكون مليانة فرح."
    }
  ],

  gallery: [
    { image: "assets/images/photo-01.jpg", title: "لحظة حلوة", description: "مش فاكر كنا بنتكلم عن إيه، بس فاكر الإحساس." },
    { image: "assets/images/photo-02.jpg", title: "ذكرى", description: "تفصيلة صغيرة أقدر أفتكرها بابتسامة." },
    { image: "assets/images/photo-03.jpg", title: "إحنا", description: "صورة واحدة، وحكاية كاملة." },
    { image: "assets/images/photo-01.jpg", title: "يوم جميل", description: "يوم عادي اتحول لذكرى مميزة." },
    { image: "assets/images/photo-02.jpg", title: "ضحكتك", description: "من الحاجات اللي مستحيل أمل منها." },
    { image: "assets/images/photo-03.jpg", title: "مع بعض", description: "المكان بيبقى أحلى لما تكوني فيه." }
  ],

  letters: [
    {
      title: "ليه بحبك؟",
      message: "عشان وجودك مش بس بيخليني مبسوط، ده بيخليني أحس إن الدنيا فيها مكان أهدى وأجمل."
    },
    {
      title: "إيه أكتر حاجة بحبها فيكي؟",
      message: "التفاصيل الصغيرة. طريقتك في الكلام، ضحكتك، نظرتك، والحاجات اللي يمكن إنتي مش واخدة بالك منها."
    },
    {
      title: "إنتي بالنسبالي إيه؟",
      message: "إنتي الشخص اللي بفتكر معاه إن أجمل الحاجات مش لازم تكون كبيرة؛ ساعات وجود شخص واحد كفاية."
    },
    {
      title: "أجمل ذكرى ليا معاكي",
      message: "أي لحظة كنتي فيها مرتاحة وبتضحكي من قلبك. دي عندي ذكرى حتى لو مفيهاش حدث كبير."
    },
    {
      title: "حاجة نفسي نعيشها سوا",
      message: "نفسي نفضل نكتشف أماكن جديدة، ناخد صور أكتر، ونرجع نفتكر الأيام دي وإحنا أكبر."
    },
    {
      title: "رسالة من قلبي",
      message: "كل سنة وانتي حبيبتي. أتمنى السنة الجديدة تاخدك لأماكن أجمل، وأنا أفضل موجود جنبك في أكبر عدد ممكن من الفصول."
    }
  ],

  details: [
    ["ضحكتك", "الضحكة اللي بتغيّر مود يوم كامل."],
    ["صوتك", "صوت أعرفه وسط ألف صوت."],
    ["ابتسامتك", "تفصيلة صغيرة، بس تأثيرها كبير جدًا."],
    ["طريقتك في الكلام", "حتى الحكايات العادية منك ليها طعم مختلف."],
    ["تصرفاتك الصغيرة", "الحاجات اللي يمكن مش واخدة بالك منها وأنا باخد بالي منها كلها."],
    ["عاداتك", "التفاصيل اللي خلتني أعرفك أكتر وأحبك أكتر."],
    ["نظرتك", "نظرة واحدة ساعات بتقول كلام كتير."],
    ["الطريقة اللي بتخليني مبسوط", "من غير مجهود، مجرد وجودك."],
    ["وجودك جنبي", "أبسط إجابة لأكتر سؤال: إيه اللي بيخليني أحس بالأمان؟"]
  ],

  future: [
    "لسه هنروح أماكن كتير...",
    "ولسه هناخد صور أكتر...",
    "ولسه عندنا حكايات كتير نكتبها.",
    "لسه في أعياد ميلاد جاية هنحتفل بيها.",
    "لسه في مغامرات مش عارفين عنها حاجة.",
    "ولسه في لحظات صغيرة هتبقى أهم من أي خطة."
  ],

  videos: [
    { file: "assets/videos/video-01.mp4", title: "لحظة مننا", description: "ضيفي فيديوك هنا." },
    { file: "assets/videos/video-02.mp4", title: "ضحكة محفوظة", description: "كل فيديو هنا ممكن يبقى فصل صغير." },
    { file: "assets/videos/video-03.mp4", title: "يوم تاني", description: "الذكريات وهي بتتحرك." }
  ],

  emotionalLines: [
    "لو كان ينفع أرجع لأول يوم شوفتك فيه...",
    "مش هغير أي حاجة.",
    "لأن كل لحظة حصلت بينا...",
    "وصلتني ليكي. ❤️"
  ],

  endingLines: [
    "شكرًا على كل ضحكة.",
    "كل ذكرى.",
    "كل كلام بينا.",
    "كل لحظة صغيرة خلت حياتي أحلى."
  ],

  secretMessage: "يمكن الموقع ده يخلص هنا، بس إحساسي ناحيتك ملوش صفحة أخيرة. كل سنة وانتي أقرب حد لقلبي، وكل سنة وأنا ممتن إن حكايتنا بدأت أصلًا. ❤️"
};

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const intro = $("#intro");
const app = $("#app");
const audio = $("#audio");
const toast = $("#toast");

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

function initContent() {
  setText("#intro-name", `${CONFIG.herName} ❤️`);
  setText("#hero-name", CONFIG.herName);
  setText("#ending-name", `${CONFIG.herName}...`);
  setText("#signature", `— ${CONFIG.myName}`);
  $("#hero-photo").src = CONFIG.heroImage;
  $("#song-cover").src = CONFIG.song.cover || CONFIG.heroImage;
  setText("#song-title", CONFIG.song.title);
  setText("#song-artist", CONFIG.song.artist);
  audio.src = CONFIG.song.file;
  renderStory();
  renderMemories();
  renderGallery();
  renderLetters();
  renderDetails();
  renderFuture();
  renderVideos();
  renderEnding();
}

function renderStory() {
  const wrap = $("#story-timeline");
  wrap.innerHTML = CONFIG.memories.slice(0, 3).map((m, i) => `
    <article class="timeline-item reveal-on-scroll">
      <span class="timeline-dot"></span>
      <div class="timeline-card" data-memory="${i}">
        <img src="${m.image}" alt="${m.title}" loading="lazy">
        <span class="memory-date">${m.date}</span>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
      </div>
    </article>
  `).join("");
}

function renderMemories() {
  const wrap = $("#memory-timeline");
  wrap.innerHTML = CONFIG.memories.map((m, i) => `
    <article class="memory-chip reveal-on-scroll" data-memory="${i}">
      <span class="memory-number">${String(i + 1).padStart(2, "0")}</span>
      <div><h3>${m.title}</h3><p>${m.date} · ${m.location}</p></div>
    </article>
  `).join("");
}

function renderGallery() {
  $("#gallery-grid").innerHTML = CONFIG.gallery.map((item, i) => `
    <article class="gallery-item reveal-on-scroll" data-gallery="${i}" tabindex="0" role="button" aria-label="فتح ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay"><strong>${item.title}</strong><span>${item.description}</span></div>
    </article>
  `).join("");
}

function renderLetters() {
  $("#letters-grid").innerHTML = CONFIG.letters.map((letter, i) => `
    <article class="letter-card reveal-on-scroll" data-letter="${i}" tabindex="0">
      <div class="envelope">💌</div>
      <h3>${letter.title}</h3>
      <p class="letter-message">${letter.message}</p>
    </article>
  `).join("");
}

function renderDetails() {
  const icons = ["✨","🎙️","😊","💬","🌷","🫶","👀","🌙","❤️"];
  $("#details-grid").innerHTML = CONFIG.details.map((d, i) => `
    <article class="detail-card reveal-on-scroll">
      <div class="icon">${icons[i % icons.length]}</div>
      <h3>${d[0]}</h3>
      <p>${d[1]}</p>
    </article>
  `).join("");
}

function renderFuture() {
  $("#future-grid").innerHTML = CONFIG.future.map((text, i) => `
    <article class="future-card reveal-on-scroll">
      <span class="section-kicker">Dream ${String(i + 1).padStart(2, "0")}</span>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderVideos() {
  $("#videos-grid").innerHTML = CONFIG.videos.map((v, i) => `
    <article class="video-card-mini reveal-on-scroll" data-video="${i}" tabindex="0">
      <video src="${v.file}" preload="metadata" muted playsinline></video>
      <h3>${v.title}</h3><p>${v.description}</p>
    </article>
  `).join("");
}

function renderEnding() {
  $("#ending-lines").innerHTML = CONFIG.endingLines.map(line => `<p>${line}</p>`).join("");
  $("#secret-message").textContent = CONFIG.secretMessage;
}

function startExperience() {
  intro.classList.add("is-hidden");
  app.classList.add("ready");
  app.setAttribute("aria-hidden", "false");
  audio.play().catch(() => showToast("اضغطي تشغيل من مشغل الأغنية لو المتصفح منع التشغيل."));
  createFloatingHearts();
  setTimeout(() => $("#home")?.scrollIntoView({behavior:"smooth"}), 500);
}

$("#start-btn").addEventListener("click", startExperience);

function createFloatingHearts() {
  if ($(".floating-hearts")) return;
  const layer = document.createElement("div");
  layer.className = "floating-hearts";
  layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:5;overflow:hidden;";
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("span");
    h.textContent = Math.random() > .5 ? "♥" : "✦";
    h.style.cssText = `position:absolute;left:${Math.random()*100}%;bottom:-30px;color:rgba(255,111,159,${.12+Math.random()*.3});font-size:${10+Math.random()*18}px;animation:floatHeart ${8+Math.random()*10}s linear ${Math.random()*5}s infinite;`;
    layer.appendChild(h);
  }
  document.body.appendChild(layer);
  const style = document.createElement("style");
  style.textContent = "@keyframes floatHeart{to{transform:translateY(-110vh) rotate(360deg);opacity:0}}";
  document.head.appendChild(style);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.id === "emotional") startEmotional();
      if (entry.target.id === "ending") startEnding();
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

function observeDynamic() {
  $$(".reveal-on-scroll, #emotional, #ending").forEach(el => observer.observe(el));
}
observeDynamic();

document.addEventListener("click", e => {
  const memory = e.target.closest("[data-memory]");
  if (memory) openMemory(Number(memory.dataset.memory));

  const gallery = e.target.closest("[data-gallery]");
  if (gallery) openLightbox(Number(gallery.dataset.gallery));

  const letter = e.target.closest("[data-letter]");
  if (letter) letter.classList.toggle("open");

  const video = e.target.closest("[data-video]");
  if (video) openVideo(Number(video.dataset.video));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeAllModals();
  if ($("#lightbox").classList.contains("open")) {
    if (e.key === "ArrowLeft") changeLightbox(1);
    if (e.key === "ArrowRight") changeLightbox(-1);
  }
});

function openModal(id) {
  const modal = $(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeModal(id) {
  const modal = $(id);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!$$(".modal.open").length) document.body.classList.remove("modal-open");
}
function closeAllModals() {
  $$(".modal.open").forEach(m => closeModal("#" + m.id));
  const v = $("#modal-video");
  v.pause(); v.removeAttribute("src"); v.load();
}

$$("[data-close-modal]").forEach(b => b.addEventListener("click", () => closeModal("#memory-modal")));
$$("[data-close-lightbox]").forEach(b => b.addEventListener("click", () => closeModal("#lightbox")));
$$("[data-close-video]").forEach(b => b.addEventListener("click", () => { closeModal("#video-modal"); $("#modal-video").pause(); }));
$$("[data-close-secret]").forEach(b => b.addEventListener("click", () => closeModal("#secret-modal")));

function openMemory(i) {
  const m = CONFIG.memories[i];
  if (!m) return;
  $("#modal-image").src = m.image;
  $("#modal-image").alt = m.title;
  setText("#modal-date", m.date);
  setText("#modal-location", m.location);
  setText("#modal-title", m.title);
  setText("#modal-description", m.description);
  openModal("#memory-modal");
}

let lightboxIndex = 0;
function openLightbox(i) {
  lightboxIndex = i;
  updateLightbox();
  openModal("#lightbox");
}
function updateLightbox() {
  const item = CONFIG.gallery[lightboxIndex];
  $("#lightbox-image").src = item.image;
  $("#lightbox-image").alt = item.title;
  setText("#lightbox-title", item.title);
  setText("#lightbox-description", item.description);
}
function changeLightbox(direction) {
  lightboxIndex = (lightboxIndex + direction + CONFIG.gallery.length) % CONFIG.gallery.length;
  updateLightbox();
}
$("#lightbox-prev").addEventListener("click", () => changeLightbox(-1));
$("#lightbox-next").addEventListener("click", () => changeLightbox(1));

function openVideo(i) {
  const v = CONFIG.videos[i];
  if (!v) return;
  const player = $("#modal-video");
  player.src = v.file;
  openModal("#video-modal");
  player.play().catch(() => {});
}

const playBtn = $("#play-btn");
playBtn.addEventListener("click", toggleAudio);
audio.addEventListener("loadedmetadata", () => setText("#duration", formatTime(audio.duration)));
audio.addEventListener("timeupdate", () => {
  $("#progress").value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  setText("#current-time", formatTime(audio.currentTime));
});
audio.addEventListener("play", () => {
  playBtn.textContent = "❚❚";
  $(".music-shell").classList.add("playing");
});
audio.addEventListener("pause", () => {
  playBtn.textContent = "▶";
  $(".music-shell").classList.remove("playing");
});
audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  $(".music-shell").classList.remove("playing");
});
$("#progress").addEventListener("input", e => {
  if (audio.duration) audio.currentTime = (Number(e.target.value) / 100) * audio.duration;
});
$("#volume").addEventListener("input", e => audio.volume = Number(e.target.value));
audio.volume = .8;

function toggleAudio() {
  if (audio.paused) audio.play().catch(() => showToast("أضيفي ملف الأغنية داخل assets/music/"));
  else audio.pause();
}
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

let emotionalStarted = false;
function startEmotional() {
  if (emotionalStarted) return;
  emotionalStarted = true;
  const wrap = $("#emotional-text");
  CONFIG.emotionalLines.forEach((line, i) => {
    const el = document.createElement("div");
    el.className = "emotional-line";
    el.textContent = line;
    wrap.appendChild(el);
    setTimeout(() => el.classList.add("show"), i * 2200);
  });
}

let endingStarted = false;
function startEnding() {
  if (endingStarted) return;
  endingStarted = true;
  $$("#ending-lines p").forEach((p, i) => setTimeout(() => p.classList.add("show"), i * 750));
}

$("#secret-heart").addEventListener("click", () => {
  openModal("#secret-modal");
  burstConfetti();
});

function burstConfetti() {
  const chars = ["♥","✦","✧","❤"];
  for (let i = 0; i < 45; i++) {
    const el = document.createElement("span");
    el.textContent = chars[Math.floor(Math.random()*chars.length)];
    el.style.cssText = `position:fixed;z-index:400;left:${50+(Math.random()-.5)*10}%;top:55%;font-size:${12+Math.random()*18}px;color:${Math.random()>.5?"#ff6f9f":"#f5d7a1"};pointer-events:none;`;
    document.body.appendChild(el);
    const dx = (Math.random()-.5)*500, dy = -100-Math.random()*500;
    el.animate([{transform:"translate(-50%,-50%) scale(.4)",opacity:1},{transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random()*720-360}deg)`,opacity:0}], {duration:1200+Math.random()*900,easing:"cubic-bezier(.2,.8,.2,1)"}).finished.then(()=>el.remove());
  }
}

$("#menu-toggle").addEventListener("click", () => {
  const nav = $("#nav");
  const open = nav.classList.toggle("open");
  $("#menu-toggle").setAttribute("aria-expanded", String(open));
});
$$(".nav a").forEach(a => a.addEventListener("click", () => {
  $("#nav").classList.remove("open");
  $("#menu-toggle").setAttribute("aria-expanded","false");
}));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

window.addEventListener("load", () => {
  initContent();
  observeDynamic();
  if (!CONFIG.videos.length) $("#videos").remove();
  // Keep the site useful when placeholder assets are not present.
  $$("img").forEach(img => img.addEventListener("error", () => {
    img.style.background = "linear-gradient(135deg,#21101a,#0f0a12)";
    img.alt = img.alt || "أضيفي صورتك هنا";
  }));
});
