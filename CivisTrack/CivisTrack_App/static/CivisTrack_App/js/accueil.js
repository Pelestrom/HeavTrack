const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

var map;

function initMap() {
  map = L.map('map').setView([0, 0], 13); // Défini une vue initiale
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  map.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map)
      .bindPopup("Vous êtes dans un rayon de " + radius + " mètres de ce point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationerror', onLocationError);
}

window.addEventListener('load', initMap);

const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');

const translations = {
  'fr': {
    'welcome': 'Bienvenue sur CivisTrack',
    'locateServices': 'Localisez facilement les services publics en Côte d\'Ivoire',
    'signup': 'S\'inscrire',
    'login': 'Se connecter',
    'nearbyServices': 'Services publics à proximité',
    'serviceCategories': 'Catégories de services',
    'health': 'Santé',
    'security': 'Sécurité',
    'education': 'Éducation',
    'administration': 'Administration',
    'restaurants': 'Restaurants',
    'leisure': 'Loisirs',
    'shoppingCenters': 'Centres commerciaux',
    'hotels': 'Hôtels',
    'banks': 'Banques',
    'home': 'Accueil',
    'services': 'Services',
    'about': 'À propos',
    'contact': 'Contact'
  },
  'en': {
    'welcome': 'Welcome to CivisTrack',
    'locateServices': 'Easily locate public services in Côte d\'Ivoire',
    'signup': 'Sign Up',
    'login': 'Log In',
    'nearbyServices': 'Nearby public services',
    'serviceCategories': 'Service Categories',
    'health': 'Health',
    'security': 'Security',
    'education': 'Education',
    'administration': 'Administration',
    'restaurants': 'Restaurants',
    'leisure': 'Leisure',
    'shoppingCenters': 'Shopping Centers',
    'hotels': 'Hotels',
    'banks': 'Banks',
    'home': 'Home',
    'services': 'Services',
    'about': 'About',
    'contact': 'Contact'
  }
};

let currentLanguage = 'fr';

languageToggle.addEventListener('click', () => {
  languageDropdown.classList.toggle('hidden');
});

function changeLanguage(lang) {
  currentLanguage = lang;
  languageToggle.textContent = lang.toUpperCase();
  languageDropdown.classList.add('hidden');
  updatePageLanguage();
}

function updatePageLanguage() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', updatePageLanguage);

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateThemeColors();
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

function updateThemeColors() {
  const isDark = body.classList.contains('dark');
  document.documentElement.style.setProperty('--bg-color', isDark ? '#1f2937' : '#f3f4f6');
  document.documentElement.style.setProperty('--text-color', isDark ? '#f3f4f6' : '#1f2937');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
  updateThemeColors();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  // Apply stored preferences
  applyTheme();
  applyLanguage();

  // Theme switcher
  document.getElementById('theme-toggle').addEventListener('click', () => {
      const currentTheme = localStorage.getItem('theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme();
  });

  // Language switcher
  document.getElementById('language-toggle').addEventListener('click', () => {
      const currentLanguage = localStorage.getItem('language');
      const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
      localStorage.setItem('language', newLanguage);
      applyLanguage();
  });
});

function applyTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.body.className = theme;
}

function applyLanguage() {
  const language = localStorage.getItem('language') || 'fr';
  // Assuming you have a function to handle translations
  translatePage(language);
}

function translatePage(language) {
  // Placeholder function for translation
  // You should replace this with actual translation logic
  const translations = {
      'en': {
          'theme-toggle': 'Switch to Dark Mode',
          'language-toggle': 'Switch to French'
      },
      'fr': {
          'theme-toggle': 'Passer en mode sombre',
          'language-toggle': 'Passer en anglais'
      }
  };
  document.getElementById('theme-toggle').textContent = translations[language]['theme-toggle'];
  document.getElementById('language-toggle').textContent = translations[language]['language-toggle'];
}
