const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
  mobileMenu.classList.toggle('hidden'); // Assurez-vous que vous utilisez cette classe dans votre CSS
});

 
 

const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');

const translations = {
  'fr': {
    'Sign': 'Connectez-vous à CivisTrack',
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
    'Sign': 'Sign Up to CivisTrack',
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



 
document.addEventListener('DOMContentLoaded', () => {
    const services = JSON.parse(document.getElementById('services-data').textContent);
    const categories = JSON.parse(document.getElementById('categories-data').textContent);

    function renderServices(filteredServices) {
        const servicesList = document.getElementById('services-list');
        servicesList.innerHTML = '';
        filteredServices.forEach(service => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-2 w-full mx-auto';
            serviceElement.innerHTML = `
                <h3 class="font-extrabold text-xl mb-3 text-black-100 transition-all duration-300 hover:text-black-200">${service.name}</h3>
            `;
            serviceElement.addEventListener('click', () => showServiceDetails(service));
            servicesList.appendChild(serviceElement);
        });
    }

    function renderCategoryButtons() {
        const categoryButtonsContainer = document.getElementById('category-buttons');
        categoryButtonsContainer.innerHTML = '';

        const allButton = document.createElement('button');
        allButton.textContent = 'Toutes les catégories';
        allButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none';
        allButton.addEventListener('click', () => filterServices(''));
        categoryButtonsContainer.appendChild(allButton);

        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category.name;
            button.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none';
            button.addEventListener('click', () => filterServices(category.id));
            categoryButtonsContainer.appendChild(button);
        });
    }

    function filterServices(categoryId) {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        let filteredServices = services;
        if (categoryId) {
            filteredServices = services.filter(service => service.category_id === parseInt(categoryId));
        }
        if (searchTerm) {
            filteredServices = filteredServices.filter(service => service.name.toLowerCase().includes(searchTerm));
        }
        renderServices(filteredServices);
    }

    function showServiceDetails(service) {
        const selectedCategory = categories.find(category => category.id === service.category_id);
        const categoryName = selectedCategory ? selectedCategory.name : 'Unknown';

        const detailsHtml = `
            <div class="fixed inset-0 bg-gray-700 bg-opacity-60 overflow-y-auto h-full w-full flex justify-center items-center" id="service-modal">
                <div class="relative p-6 w-full md:w-3/4 lg:w-2/3 bg-white rounded-lg shadow-lg animate-fade-in transform transition-transform duration-300 ease-in-out">
                    <div class="flex justify-between items-center">
                        <h2 class="text-3xl font-bold text-black-500">${service.name}</h2>
                        <button class="text-2xl text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center close-modal" title="Fermer">&times;</button>
                    </div>
                    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p class="mb-3">${service.description}</p>
                            <p class="mb-2"><strong>Horaires:</strong> ${service.horaires}</p>
                            <p class="mb-2 flex items-center">
                                <strong>Contact:</strong> ${service.contact}
                                <svg class="copy-icon inline-block w-5 h-5 ml-2 cursor-pointer text-green-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onclick="copyToClipboard('${service.contact}')">
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                                </svg>
                            </p>
                            <p class="mb-2 flex items-center">
                                <strong>Email:</strong> ${service.email}
                                <svg class="copy-icon inline-block w-5 h-5 ml-2 cursor-pointer text-green-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onclick="copyToClipboard('${service.email}')">
                                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                                </svg>
                            </p>
                        </div>
                        <div>
                            <div id="map" style="height: 300px;" class="rounded-lg overflow-hidden"></div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4" onclick="calculateRoute(${service.lat}, ${service.lng})">Calculer l'itinéraire</button>
                        </div>
                    </div>
                    <button class="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700 close-modal" title="Fermer">&times;</button>
                </div>
            </div>
        `;
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = detailsHtml;
        document.body.appendChild(modalContainer);

        const map = L.map('map').setView([service.lat, service.lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);
        L.marker([service.lat, service.lng]).addTo(map);

        document.querySelectorAll('.close-modal').forEach(button => {
            button.addEventListener('click', () => {
                modalContainer.classList.add('animate-fade-out');
                setTimeout(() => document.body.removeChild(modalContainer), 300);
            });
        });
    }

    function calculateRoute(lat, lng) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLatLng = [position.coords.latitude, position.coords.longitude];
                if (routingControl) {
                    routingControl.remove();
                }
                routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(userLatLng),
                        L.latLng(lat, lng)
                    ],
                    routeWhileDragging: true
                }).addTo(map);
            }, () => {
                alert("Impossible de récupérer votre position.");
            });
        } else {
            alert("La géolocalisation n'est pas supportée par votre navigateur.");
        }
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texte copié dans le presse-papiers!');
        }).catch(err => {
            console.error('Erreur lors de la copie du texte: ', err);
        });
    }

    renderCategoryButtons();
    filterServices('');
});
 
