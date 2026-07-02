const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const header = document.querySelector("[data-header]");
const yearNode = document.querySelector("[data-year]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const savedTheme = localStorage.getItem("site-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

function updateThemeLabel() {
  const isDark = root.dataset.theme === "dark";
  themeToggle?.setAttribute("aria-label", isDark ? "切换浅色模式" : "切换深色模式");
  themeToggle?.setAttribute("title", isDark ? "切换浅色模式" : "切换深色模式");
}

function setActiveLink() {
  const scrollPosition = window.scrollY + 120;
  let currentId = "home";

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
}

function updateHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

themeToggle?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("site-theme", root.dataset.theme);
  updateThemeLabel();
});

window.addEventListener("scroll", () => {
  updateHeaderState();
  setActiveLink();
}, { passive: true });

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

updateThemeLabel();
updateHeaderState();
setActiveLink();
