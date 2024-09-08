const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
languageToggle.addEventListener('click', () => {
  languageDropdown.classList.toggle('hidden');
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

window.addEventListener('click', (e) => {
  if (!languageToggle.contains(e.target)) {
    languageDropdown.classList.add('hidden');
  }
});

function changeLanguage(lang) {
  console.log(`Changing language to ${lang}`);
  languageDropdown.classList.add('hidden');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.classList.add('shadow-lg');
  });
  section.addEventListener('mouseleave', () => {
    section.classList.remove('shadow-lg');
  });
});
 