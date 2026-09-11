// Alt bilgideki yılı otomatik güncelle
document.getElementById("year").textContent = new Date().getFullYear();

// Açık / koyu tema değiştirici
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙";
  }
}

// Tarayıcının sistem temasına göre başlangıç ayarı
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(prefersDark ? "dark" : "light");

toggleBtn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  applyTheme(isDark ? "light" : "dark");
});
