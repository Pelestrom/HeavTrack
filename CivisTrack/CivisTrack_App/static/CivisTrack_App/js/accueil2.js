const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden'); // Assurez-vous que vous utilisez cette classe dans votre CSS
});

var map; // Variable globale

function initMap() {
  // Initialise la carte avec Leaflet
  map = L.map('map').setView([0, 0], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Localiser l'utilisateur
  map.locate({setView: true, maxZoom: 16});

  function onLocationFound(e) {
    // Arrondir le rayon et le convertir en nombre
    var radius = parseFloat((e.accuracy / 2).toFixed(2));

    // Ajout du marqueur par défaut (bleu) avec une animation de rebond
    var marker = L.marker(e.latlng, {
      bounceOnAdd: true, // Activer l'animation de rebond à l'ajout
      bounceOnAddOptions: {duration: 500, height: 100}, // Paramètres de l'animation
      icon: L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41], // Taille du marqueur par défaut
        iconAnchor: [12, 41], // Ancre pour placer le marqueur
        popupAnchor: [1, -34], // Positionnement du popup
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [41, 41]
      })
    }).addTo(map);

    marker.bindPopup("Vous êtes dans un rayon de " + radius + " mètres de ce point").openPopup();
    
    // Ajouter un cercle avec le rayon arrondi
    L.circle(e.latlng, { radius: radius }).addTo(map);
  }

  map.on('locationfound', onLocationFound);

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationerror', onLocationError);

  // Ajout de l'effet d'inclinaison lors du défilement
  window.addEventListener('scroll', function() {
    // Calcul du pourcentage de défilement de la page
    var scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // Limite l'inclinaison entre -30 et 30 degrés
    var maxTilt = 30;
    var tilt = scrollPercent * maxTilt * 2 - maxTilt;

    // Appliquer l'inclinaison à la carte
    document.getElementById('map').style.transform = `rotateX(${tilt}deg)`;
  });

  // Désactiver le zoom de la carte à la molette pour permettre à l'effet de fonctionner
  map.scrollWheelZoom.disable();
}

// Charger la carte
window.addEventListener('load', initMap);

// Animation de zoom sur la carte après 1 seconde
setTimeout(function() {
  if (map) {
    map.setZoom(15, {animate: true, duration: 2}); // zoom avec une animation de 2 secondes
  }
}, 1000);

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
    'contact': 'Contact',
    'searchPublicSpace': 'Rechercher un espace public'
  },
  'en': {
    'welcome': 'Welcome to CivisTrack',
    'locateServices': 'Easily locate public services in Côte d\'Ivoire',
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
    'contact': 'Contact',
    'searchPublicSpace': 'Search public space'
  }
};

// Chargez la langue enregistrée dans localStorage ou définissez le français par défaut
let currentLanguage = localStorage.getItem('language') || 'fr';

// Mise à jour du bouton avec l'abréviation de la langue
languageToggle.textContent = currentLanguage.toUpperCase();

// Affiche ou masque le menu déroulant de la langue
languageToggle.addEventListener('click', () => {
  languageDropdown.classList.toggle('hidden');
});

// Change la langue, met à jour localStorage et la page
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang); // Enregistre la langue choisie
  languageToggle.textContent = lang.toUpperCase();
  languageDropdown.classList.add('hidden');
  updatePageLanguage();
}

// Met à jour tous les éléments traduits de la page
function updatePageLanguage() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Initialise la page avec la langue correcte
updatePageLanguage();


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
 