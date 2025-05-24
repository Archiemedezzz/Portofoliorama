// Fungsi untuk inisialisasi AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi AOS
   if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quad",
      once: true,
      offset: 100,
      // Tambahkan ini untuk debugging
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      disable: window.innerWidth < 768 // Disable di mobile jika perlu
    });
    
    // Refresh AOS setelah load semua konten
    window.addEventListener('load', function() {
      AOS.refresh();
    });
  } else {
    console.warn('AOS is not loaded');
  }


  // Setup modal gambar
  setupImageModal();

  // Setup progress bars
  setupProgressBars();

  // Setup event listeners untuk tab
  setupTabListeners();

  // Setup event listeners untuk portfolio
  setupPortfolioListeners();

  // Setup smooth scrolling
  setupSmoothScrolling();

  // Setup theme toggle
  setupThemeToggle();

  // Cek tema awal
  checkInitialTheme();
});

// Fungsi untuk toggle tab skills/tools
function toggleTab(tab) {
  document.getElementById("skills").classList.toggle("hidden", tab !== "skills");
  document.getElementById("tools").classList.toggle("hidden", tab !== "tools");
  document.getElementById("btn-skills").classList.toggle("active", tab === "skills");
  document.getElementById("btn-tools").classList.toggle("active", tab === "tools");
}

// Fungsi untuk toggle portfolio webdev/graphic
function togglePortfolio(type) {
  document.getElementById("webdev-portfolio").classList.toggle("hidden", type !== "webdev");
  document.getElementById("graphic-portfolio").classList.toggle("hidden", type !== "graphic");
  document.getElementById("btn-webdev").classList.toggle("active", type === "webdev");
  document.getElementById("btn-graphic").classList.toggle("active", type === "graphic");
}

// Fungsi untuk setup modal gambar
function setupImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("expandedImage");
  const closeBtn = document.querySelector(".close-modal");

  // Ambil semua gambar experience
  const experienceImages = document.querySelectorAll(".experience-image");

  // Tambahkan event listener untuk setiap gambar
  experienceImages.forEach((img) => {
    img.addEventListener("click", function() {
      modal.classList.add("active");
      modalImg.src = this.src;
      document.body.style.overflow = "hidden";
    });
  });

  // Tutup modal saat klik close button
  closeBtn.addEventListener("click", function() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Tutup modal saat klik di luar gambar
  modal.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Tutup modal dengan tombol ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Fungsi untuk setup progress bars
function setupProgressBars() {
  const bars = document.querySelectorAll(".fill-bar");
  bars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });

  // Animate progress bars ketika section skills terlihat
  document.addEventListener("aos:in", ({ detail }) => {
    if (detail.id === "skills-section") {
      document.querySelectorAll(".fill-bar").forEach((bar) => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });
    }
  });
}

// Fungsi untuk setup tab listeners
function setupTabListeners() {
  document.getElementById("btn-skills")?.addEventListener("click", () => toggleTab("skills"));
  document.getElementById("btn-tools")?.addEventListener("click", () => toggleTab("tools"));
}

// Fungsi untuk setup portfolio listeners
function setupPortfolioListeners() {
  document.getElementById("btn-webdev")?.addEventListener("click", () => togglePortfolio("webdev"));
  document.getElementById("btn-graphic")?.addEventListener("click", () => togglePortfolio("graphic"));
}

// Fungsi untuk smooth scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Fungsi untuk toggle tema
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");

  // Simpan preferensi
  localStorage.setItem("darkMode", isDark);

  // Update semua ikon
  updateThemeIcons(isDark);
}

// Fungsi untuk update theme icons
function updateThemeIcons(isDark) {
  // Desktop icons
  document.getElementById("light-icon")?.classList.toggle("hidden", isDark);
  document.getElementById("dark-icon")?.classList.toggle("hidden", !isDark);

  // Mobile icons
  document.getElementById("light-icon-mobile")?.classList.toggle("hidden", isDark);
  document.getElementById("dark-icon-mobile")?.classList.toggle("hidden", !isDark);
}

// Fungsi untuk setup theme toggle
function setupThemeToggle() {
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  document.getElementById("theme-toggle-mobile")?.addEventListener("click", toggleTheme);
}

// Fungsi untuk cek tema awal
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