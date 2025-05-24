window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll("#skills .fill-bar");
  bars.forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  });
});

AOS.init({
  duration: 800,
  easing: "ease-in-out-quad",
  once: true, // Animasi hanya terjadi sekali
  offset: 100, // Mulai animasi sedikit lebih awal
});

// Animate progress bars when skills section is visible
document.addEventListener("aos:in", ({ detail }) => {
  if (detail.id === "skills-section") {
    document.querySelectorAll(".fill-bar").forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  }
});

function toggleTab(tab) {
  document
    .getElementById("skills")
    .classList.toggle("hidden", tab !== "skills");
  document.getElementById("tools").classList.toggle("hidden", tab !== "tools");
  document
    .getElementById("btn-skills")
    .classList.toggle("active", tab === "skills");
  document
    .getElementById("btn-tools")
    .classList.toggle("active", tab === "tools");
}

function togglePortfolio(type) {
  document
    .getElementById("webdev-portfolio")
    .classList.toggle("hidden", type !== "webdev");
  document
    .getElementById("graphic-portfolio")
    .classList.toggle("hidden", type !== "graphic");

  document
    .getElementById("btn-webdev")
    .classList.toggle("active", type === "webdev");
  document
    .getElementById("btn-graphic")
    .classList.toggle("active", type === "graphic");
}

function setupImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImage");
  const closeBtn = document.querySelector(".close-modal");

  // Ambil semua gambar experience
  const experienceImages = document.querySelectorAll(".experience-image");

  // Tambahkan event listener untuk setiap gambar
  experienceImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.classList.add("active");
      modalImg.src = this.src;
      document.body.style.overflow = "hidden";
    });
  });

  // Tutup modal saat klik close button
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Tutup modal saat klik di luar gambar
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Tutup modal dengan tombol ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Panggil fungsi saat DOM siap
document.addEventListener("DOMContentLoaded", function () {
  setupImageModal();

  const fillBars = document.querySelectorAll(".fill-bar");
  fillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");

  // Simpan preferensi
  localStorage.setItem("darkMode", isDark);

  // Update semua ikon
  updateThemeIcons(isDark);
}

// Fungsi untuk update semua ikon theme
function updateThemeIcons(isDark) {
  // Desktop icons
  document.getElementById("light-icon").classList.toggle("hidden", isDark);
  document.getElementById("dark-icon").classList.toggle("hidden", !isDark);

  document
    .getElementById("light-icon-mobile")
    .classList.toggle("hidden", isDark);
  document
    .getElementById("dark-icon-mobile")
    .classList.toggle("hidden", !isDark);
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
document
  .getElementById("theme-toggle-mobile")
  .addEventListener("click", toggleTheme);

// Cek preferensi awal saat load
function checkInitialTheme() {
  const savedTheme = localStorage.getItem("darkMode");
  const isDark =
    savedTheme === "true" ||
    (savedTheme === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    document.documentElement.classList.add("dark");
  }

  updateThemeIcons(isDark);
}

// Panggil saat pertama load
document.addEventListener("DOMContentLoaded", checkInitialTheme);
