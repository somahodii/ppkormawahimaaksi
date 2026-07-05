/* =====================================================================
   MANGROVE.ID — SCRIPT.JS
   ===================================================================== */

/* =====================================================================
   SECTION: DATA PENYELENGGARA
   ===================================================================== */
const dataPenyelenggara = [
  { nama: "Duwi Khoirun Nisak",               peran: "Ketua",         nim: "14072420075", foto: "images/TimPpk/Ketua.jpg",     warna: "linear-gradient(135deg, #1A4D3C, #2D7A5F)" },
  { nama: "Izzatul Tul",                      peran: "Sekretaris",    nim: "14072420041", foto: "images/TimPpk/sekre.jpg",     warna: "linear-gradient(135deg, #1a3a5c, #2d6a8f)" },
  { nama: "Salsabilla Azzahra",               peran: "Bendahara",     nim: "14072420130", foto: "images/TimPpk/bendahara.jpg", warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Isma Khoirotun Nur Hasanah ",      peran: "Acara",         nim: "14072420121", foto: "images/TimPpk/Acara1.jpg",    warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Salma Rohmatuddina",               peran: "Acara",         nim: "14072420092", foto: "images/TimPpk/Acara2.jpg",    warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Aurelia Hanny Aqmarina Putri R.",  peran: "Acara",         nim: "14072420070", foto: "images/TimPpk/Acara3.jpg",    warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Linda Dwihermawati",               peran: "Acara",         nim: "14072420128", foto: "images/TimPpk/Acara4.jpg",    warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Rayhan Rahmandhani",               peran: "Humas",         nim: "14072420129", foto: "images/TimPpk/Humas1.jpg",    warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Muhammad Habib Riziq",             peran: "Humas",         nim: "14072420134", foto: "images/TimPpk/Humas2.jpg",    warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Yulia Salsa Nabila",               peran: "PDD",           nim: "14072420116", foto: "images/TimPpk/PDD1.jpg",      warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Riky Eriyanto",                    peran: "PDD",           nim: "14072420111", foto: "images/TimPpk/PDD2.jpg",      warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Ilhami Somahodi",                  peran: "PDD",           nim: "C2C023002"  , foto: "images/TimPpk/PDD3.jpg",      warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Neisya Latifa Zahra",              peran: "PDD",           nim: "14072420007", foto: "images/TimPpk/PDD4.jpg",      warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Andre Alan Pratama",               peran: "Perlengkapan",  nim: "14072420131", foto: "images/TimPpk/Perkap1.jpg",   warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
  { nama: "Khoiruddin Budiman",               peran: "Perlengkapan",  nim: "C2C023008",   foto: "images/TimPpk/Perkap2.jpg",   warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
];

/* =====================================================================
   SECTION: DATA MITRA
   Ganti nama, peran, ikon, dan deskripsi sesuai data nyata.
   ===================================================================== */
const dataMitra = [
  { nama: "Pak Udin",               peran: "Ketua",       nim: "20XXXX001", foto: "",     warna: "linear-gradient(135deg, #1A4D3C, #2D7A5F)" },
  { nama: "Pak Retno",              peran: "Sekretaris",  nim: "20XXXX002", foto: "",     warna: "linear-gradient(135deg, #1a3a5c, #2d6a8f)" },
  { nama: "Pak Budi",               peran: "Bendahara",   nim: "20XXXX003", foto: "",     warna: "linear-gradient(135deg, #3a1a4d, #6a2d8f)" },
];

/* =====================================================================
   SECTION: HELPER
   ===================================================================== */
function getInisial(nama) {
  return nama.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
}

/* Apakah user memilih untuk mengurangi animasi (aksesibilitas) */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =====================================================================
   SECTION: RENDER KARTU PENYELENGGARA
   ===================================================================== */
function renderPenyelenggara() {
  const grid = document.getElementById("penyelenggara-grid");
  if (!grid) return;
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

  dataPenyelenggara.forEach((p, i) => {
    const delayClass = delays[i % delays.length];
    const avatarHtml = p.foto && p.foto.trim() !== ""
      ? `<img class="avatar-photo" src="${p.foto}" alt="Foto ${p.nama}" onerror="this.outerHTML='<div class=\\'avatar\\' style=\\'background:${p.warna}\\'>${getInisial(p.nama)}</div>'" />`
      : `<div class="avatar" style="background:${p.warna}">${getInisial(p.nama)}</div>`;

    const col = document.createElement("div");
    col.className = `col-12 col-sm-6 col-md-4 col-lg-3 reveal ${delayClass}`;
    col.innerHTML = `
      <div class="penyelenggara-card tilt-target">
        <div class="avatar-wrap">
          ${avatarHtml}
          <div class="avatar-ring"></div>
        </div>
        <div class="penyelenggara-name">${p.nama}</div>
        <div class="penyelenggara-role">${p.peran}</div>
        <div class="penyelenggara-nim">NIM: ${p.nim}</div>
      </div>
    `;
    grid.appendChild(col);
  });

  document.querySelectorAll("#penyelenggara-grid .reveal").forEach(el => revealObserver.observe(el));
  document.querySelectorAll("#penyelenggara-grid .tilt-target").forEach(attachTilt);
}

/* =====================================================================
   SECTION: RENDER KARTU MITRA
   ===================================================================== */
function renderMitra() {
  const grid = document.getElementById("mitra-grid");
  if (!grid) return;
  const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

  dataMitra.forEach((m, i) => {
    const delayClass = delays[i % delays.length];
    const avatarHtml = m.foto && m.foto.trim() !== ""
      ? `<img class="avatar-photo" src="${m.foto}" alt="Foto ${m.nama}" onerror="this.outerHTML='<div class=\\'avatar\\' style=\\'background:${m.warna}\\'>${getInisial(m.nama)}</div>'" />`
      : `<div class="avatar" style="background:${m.warna}">${getInisial(m.nama)}</div>`;

    const col = document.createElement("div");
    col.className = `col-12 col-sm-6 col-md-4 col-lg-3 reveal ${delayClass}`;
    col.innerHTML = `
      <div class="mitra-card tilt-target">
        <div class="avatar-wrap">
          ${avatarHtml}
          <div class="avatar-ring"></div>
        </div>
        <div class="mitra-name">${m.nama}</div>
        <div class="mitra-role">${m.peran}</div>
      </div>
    `;
    grid.appendChild(col);
  });

  document.querySelectorAll("#mitra-grid .reveal").forEach(el => revealObserver.observe(el));
  document.querySelectorAll("#mitra-grid .tilt-target").forEach(attachTilt);
}

/* =====================================================================
   SECTION: PAGE LOADER
   ===================================================================== */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) setTimeout(() => loader.classList.add("hide"), 350);
});

/* =====================================================================
   SECTION: HEADER BLUR ON SCROLL
   ===================================================================== */
const topbar = document.getElementById("topbar");
function updateTopbarState() {
  if (!topbar) return;
  topbar.classList.toggle("scrolled", window.scrollY > 30);
}

/* =====================================================================
   SECTION: SIDEBAR TOGGLE
   - Desktop (>991px): toggle class "hidden-desktop" pada #sidebar,
     toggle class "full-width" pada #main-content.
     Saat hidden → sidebar lebar 0, konten penuh.
   - Mobile (≤991px): toggle class "open" (slide in/out).
   Tombol di pojok KANAN atas.
   ===================================================================== */
const sidebar        = document.getElementById("sidebar");
const mainContent    = document.getElementById("main-content");
const sidebarToggle  = document.getElementById("sidebar-toggle");
const sidebarOverlay = document.getElementById("sidebar-overlay");

function isDesktop() {
  return window.innerWidth > 991;
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("show");
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    if (isDesktop()) {
      /* Desktop: sembunyikan / tampilkan sidebar sepenuhnya */
      const isHidden = sidebar.classList.toggle("hidden-desktop");
      mainContent.classList.toggle("full-width", isHidden);
      localStorage.setItem("sidebarHidden", isHidden ? "1" : "0");
    } else {
      /* Mobile: slide open/close */
      sidebar.classList.toggle("open");
      sidebarOverlay.classList.toggle("show");
    }
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

/* Tutup sidebar mobile saat klik link */
document.querySelectorAll(".sidebar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (!isDesktop()) closeSidebar();
  });
});

/* Pulihkan preferensi sidebar desktop saat halaman dimuat */
(function restoreSidebar() {
  if (isDesktop() && localStorage.getItem("sidebarHidden") === "1") {
    sidebar.classList.add("hidden-desktop");
    mainContent.classList.add("full-width");
  }
})();

/* Reset state mobile ↔ desktop saat resize */
window.addEventListener("resize", () => {
  if (isDesktop()) {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
    /* Terapkan ulang state hidden jika tersimpan */
    const isHidden = localStorage.getItem("sidebarHidden") === "1";
    sidebar.classList.toggle("hidden-desktop", isHidden);
    mainContent.classList.toggle("full-width", isHidden);
  } else {
    /* Mobile: pastikan tidak ada class desktop yang tertinggal */
    sidebar.classList.remove("hidden-desktop");
    mainContent.classList.remove("full-width");
  }
});

/* =====================================================================
   SECTION: SCROLL REVEAL OBSERVER
   ===================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* =====================================================================
   SECTION: COUNTER ANIMATION
   ===================================================================== */
function animateCounter(el) {
  const target = +el.dataset.target;
  const suffix = target >= 1000 ? "+" : "";
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString("id") + suffix;
  }, 24);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-num[data-target]").forEach(el => counterObserver.observe(el));

/* =====================================================================
   SECTION: FORM KIRIM PESAN
   ===================================================================== */
function handleSend(btn) {
  btn.innerHTML = '<i class="fas fa-check me-2"></i>Pesan Terkirim!';
  btn.style.background = "var(--mangrove)";
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Kirim Pesan';
    btn.style.background = "";
  }, 3000);
}

/* =====================================================================
   SECTION: ACTIVE LINK HIGHLIGHT SAAT SCROLL
   ===================================================================== */
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section[id]").forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
  });
  document.querySelectorAll(".sidebar-nav .nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

/* =====================================================================
   SECTION: TILT + SPOTLIGHT KARTU
   Kartu mengikuti posisi kursor: sedikit miring (3D tilt) dan diberi
   cahaya spotlight lembut yang mengikuti mouse — memberi kesan hidup
   dan interaktif tanpa berlebihan.
   ===================================================================== */
function attachTilt(card) {
  if (!card || card.dataset.tiltReady) return;
  card.dataset.tiltReady = "1";

  // Sisipkan lapisan spotlight di posisi paling belakang (agar tidak menutupi konten)
  const spotlight = document.createElement("div");
  spotlight.className = "tilt-spotlight";
  card.insertBefore(spotlight, card.firstChild);

  if (prefersReducedMotion) return; // hormati preferensi user, cukup statis

  let rafId = null;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0..1
    const py = (e.clientY - rect.top) / rect.height;   // 0..1

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const tiltStrength = 7; // derajat maksimum kemiringan, dijaga tetap halus
      const rotateY = (px - 0.5) * tiltStrength * 2;
      const rotateX = (0.5 - py) * tiltStrength * 2;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });
  });

  card.addEventListener("mouseleave", () => {
    if (rafId) cancelAnimationFrame(rafId);
    card.style.transform = "";
  });
}

function initTiltCards() {
  document.querySelectorAll(".tilt-target").forEach(attachTilt);
}

/* =====================================================================
   SECTION: TOMBOL MAGNETIK
   Tombol CTA utama sedikit "tertarik" mengikuti kursor saat didekati,
   memberi kesan responsif dan menyenangkan saat disentuh.
   ===================================================================== */
function initMagneticButtons() {
  if (prefersReducedMotion) return;
  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    let rafId = null;
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        btn.style.transform = `translate(${relX * 0.18}px, ${relY * 0.35}px)`;
      });
    });
    btn.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      btn.style.transform = "";
    });
  });
}

/* =====================================================================
   SECTION: RIPPLE PADA TOMBOL
   Memberi feedback visual sentuhan/klik yang terasa hidup, seperti
   riak air menyentuh permukaan — selaras dengan tema mangrove & pesisir.
   ===================================================================== */
function initRippleButtons() {
  document.querySelectorAll(".btn-primary-custom, .btn-outline-custom").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
}

/* =====================================================================
   SECTION: PARALLAX LEMBUT DI HERO
   Mesh gradient di hero bergeser tipis mengikuti gerakan kursor,
   menambah kedalaman tanpa mengganggu keterbacaan.
   ===================================================================== */
function initHeroParallax() {
  const hero = document.getElementById("hero");
  const mesh = hero ? hero.querySelector(".hero-mesh") : null;
  if (!hero || !mesh || prefersReducedMotion) return;

  let rafId = null;
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      mesh.style.transform = `translate(${px * 22}px, ${py * 18}px) scale(1.05)`;
    });
  });
  hero.addEventListener("mouseleave", () => {
    if (rafId) cancelAnimationFrame(rafId);
    mesh.style.transform = "";
  });
}

/* =====================================================================
   SECTION: SCROLL PROGRESS BAR
   Menunjukkan seberapa jauh pengunjung sudah menelusuri halaman —
   membantu orientasi dan mengundang untuk terus menjelajah.
   ===================================================================== */
const scrollProgressEl = document.getElementById("scroll-progress");
function updateScrollProgress() {
  if (!scrollProgressEl) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressEl.style.width = `${pct}%`;
}

/* =====================================================================
   SECTION: TOMBOL KEMBALI KE ATAS
   ===================================================================== */
const backToTopBtn = document.getElementById("back-to-top");
function updateBackToTop() {
  if (!backToTopBtn) return;
  backToTopBtn.classList.toggle("show", window.scrollY > 600);
}
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

/* =====================================================================
   SECTION: GABUNGAN LISTENER SCROLL (satu listener, banyak update)
   ===================================================================== */
window.addEventListener("scroll", () => {
  updateTopbarState();
  updateScrollProgress();
  updateBackToTop();
});

/* =====================================================================
   SECTION: SLIDER FOTO "TENTANG KAMI"
   Klik foto atau geser (swipe/drag) untuk berpindah ke foto berikutnya.
   Panah kiri/kanan dan titik indikator disediakan sebagai kontrol tambahan.
   ===================================================================== */
function initProfilSlider() {
  const wrap  = document.getElementById("profil-slider");
  const track = document.getElementById("profil-slider-track");
  const dotsWrap = document.getElementById("profil-slider-dots");
  const btnPrev = document.getElementById("profil-prev");
  const btnNext = document.getElementById("profil-next");
  if (!wrap || !track) return;

  const slides = Array.from(track.querySelectorAll(".profil-slide"));
  if (slides.length === 0) return;

  let current = 0;
  let dragStartX = 0;
  let isDragging = false;
  let dragMoved = false;

  // Buat titik indikator sesuai jumlah foto
  if (dotsWrap && slides.length > 1) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", `Ke foto ${i + 1}`);
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(i);
      });
      dotsWrap.appendChild(dot);
    });
  }
  const dots = dotsWrap ? Array.from(dotsWrap.querySelectorAll(".dot")) : [];

  function updateActiveState() {
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    updateActiveState();
  }

  function nextSlide() { goToSlide(current + 1); }
  function prevSlide() { goToSlide(current - 1); }

  // Klik foto → pindah ke foto berikutnya (kecuali user baru saja menggeser/drag)
  wrap.addEventListener("click", (e) => {
    if (dragMoved) { dragMoved = false; return; }
    if (e.target.closest(".profil-slider-arrow") || e.target.closest(".profil-slider-dots")) return;
    nextSlide();
  });

  if (btnNext) btnNext.addEventListener("click", (e) => { e.stopPropagation(); nextSlide(); });
  if (btnPrev) btnPrev.addEventListener("click", (e) => { e.stopPropagation(); prevSlide(); });

  // Swipe (touch) untuk mobile
  wrap.addEventListener("touchstart", (e) => {
    dragStartX = e.touches[0].clientX;
    isDragging = true;
    dragMoved = false;
  }, { passive: true });

  wrap.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    if (Math.abs(diff) > 10) dragMoved = true;
  }, { passive: true });

  wrap.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = e.changedTouches[0].clientX - dragStartX;
    const threshold = 40;
    if (diff <= -threshold) nextSlide();
    else if (diff >= threshold) prevSlide();
  });

  // Drag mouse untuk desktop (opsional, selain klik)
  wrap.addEventListener("mousedown", (e) => {
    dragStartX = e.clientX;
    isDragging = true;
    dragMoved = false;
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 10) dragMoved = true;
  });
  window.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = e.clientX - dragStartX;
    const threshold = 40;
    if (dragMoved) {
      if (diff <= -threshold) nextSlide();
      else if (diff >= threshold) prevSlide();
    }
  });

  updateActiveState();
}

/* =====================================================================
   SECTION: INIT
   ===================================================================== */
updateTopbarState();
updateScrollProgress();
updateBackToTop();
renderPenyelenggara();
renderMitra();
initProfilSlider();
initTiltCards();
initMagneticButtons();
initRippleButtons();
initHeroParallax();