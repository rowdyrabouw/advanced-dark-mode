const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (currentTheme) {
  document.body.classList.add(currentTheme);
} else if (prefersDarkScheme.matches) {
  document.body.classList.add("dark");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
