const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden'); // Assurez-vous que vous utilisez cette classe dans votre CSS
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
// Theme switching
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeToggleIcon();
}
function updateThemeToggleIcon() {
  const isDark = body.classList.contains('dark');
  themeToggle.innerHTML = isDark
    ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 theme-icon moon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 theme-icon sun" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>';
}

// Initialize theme
function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme');
  console.log('Stored theme:', storedTheme); // For debugging
  if (storedTheme === 'dark') {
    body.classList.add('dark');
  }
  updateThemeToggleIcon();
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', applyStoredTheme);

// Event listener for theme toggle button
themeToggle.addEventListener('click', toggleTheme);
 