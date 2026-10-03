
const header = document.getElementById("siteHeader");

window.addEventListener("scroll", function () {

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", isOpen);
  burger.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.textContent = "☰";
  });
});

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("theme", theme);
}

setTheme(localStorage.getItem("theme") || "light");

themeToggle.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(function (item) {
  observer.observe(item);
});
