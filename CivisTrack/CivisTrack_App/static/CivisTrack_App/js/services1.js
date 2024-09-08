const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const servicesList = document.getElementById('services-list');

const services = [
  { id: 1, name: 'Hôpital Central', category: 'sante', description: "L'Hôpital Central offre une gamme complète de services médicaux.", horaires: "Lun-Dim: 24h/24", contact: "+225 27 20 21 22 23", email: "contact@hopitalcentral.ci", lat: 5.3484, lng: -4.0126 },
  { id: 2, name: 'Commissariat de Police', category: 'securite', description: "Le Commissariat de Police assure la sécurité des citoyens.", horaires: "Lun-Dim: 24h/24", contact: "+225 27 20 25 26 27", email: "contact@police.ci", lat: 5.3456, lng: -4.0178 },
  { id: 3, name: 'École Primaire Publique', category: 'education', description: "L'École Primaire Publique offre une éducation de qualité aux enfants.", horaires: "Lun-Ven: 7h30-16h30", contact: "+225 27 20 30 31 32", email: "contact@ecoleprimaire.ci", lat: 5.3512, lng: -4.0098 },
  { id: 4, name: 'Mairie Centrale', category: 'administration', description: "La Mairie Centrale gère les services municipaux pour les citoyens.", horaires: "Lun-Ven: 8h-17h", contact: "+225 27 20 35 36 37", email: "contact@mairie.ci", lat: 5.3498, lng: -4.0156 },
  { id: 5, name: 'Restaurant Le Palmier', category: 'restaurants', description: "Le Palmier offre une cuisine locale raffinée.", horaires: "Lun-Sam: 11h-23h", contact: "+225 27 20 40 41 42", email: "contact@lepalmier.ci", lat: 5.3470, lng: -4.0190 },
  { id: 6, name: 'Parc d\'Attractions', category: 'loisirs', description: "Le Parc d'Attractions propose des activités pour toute la famille.", horaires: "Mer-Dim: 10h-20h", contact: "+225 27 20 45 46 47", email: "contact@parcattractions.ci", lat: 5.3528, lng: -4.0112 },
  { id: 7, name: 'Centre Commercial Abidjan Mall', category: 'centres-commerciaux', description: "Abidjan Mall regroupe de nombreuses boutiques et services.", horaires: "Lun-Dim: 9h-21h", contact: "+225 27 20 50 51 52", email: "contact@abidjanmall.ci", lat: 5.3442, lng: -4.0204 },
  { id: 8, name: 'Hôtel Ivoire', category: 'hotels', description: "L'Hôtel Ivoire offre un hébergement de luxe et des services haut de gamme.", horaires: "24h/24", contact: "+225 27 20 55 56 57", email: "contact@hotelivoire.ci", lat: 5.3554, lng: -4.0078 },
  { id: 9, name: 'Banque Atlantique', category: 'banques', description: "La Banque Atlantique propose des services bancaires complets.", horaires: "Lun-Ven: 8h-16h", contact: "+225 27 20 60 61 62", email: "contact@banqueatlantique.ci", lat: 5.3484, lng: -4.0220 },
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
}

function renderServices(filteredServices) {
  servicesList.innerHTML = '';
  filteredServices.forEach(service => {
    const serviceElement = document.createElement('div');
    serviceElement.className = 'bg-white p-4 rounded shadow cursor-pointer hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105';
    serviceElement.innerHTML = `
      <h3 class="font-bold text-lg mb-2">${service.name}</h3>
      <p class="text-sm text-gray-600">${service.category}</p>
    `;
    serviceElement.addEventListener('click', () => showServiceDetails(service));
    servicesList.appendChild(serviceElement);
  });
}

function showServiceDetails(service) {
  const detailsHtml = `
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="service-modal">
      <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white animate-fade-in">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold">${service.name}</h2>
          <button class="text-black close-modal">&times;</button>
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="mb-2">${service.description}</p>
            <p class="mb-2"><strong>Horaires:</strong> ${service.horaires}</p>
            <p class="mb-2">
              <strong>Contact:</strong> ${service.contact}
              <svg class="copy-icon inline-block w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onclick="copyToClipboard('${service.contact}')">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
              </svg>
            </p>
            <p class="mb-2">
              <strong>Email:</strong> ${service.email}
              <svg class="copy-icon inline-block w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onclick="copyToClipboard('${service.email}')">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
              </svg>
            </p>
          </div>
          <div>
            <div id="map" style="height: 300px;"></div>
            <button id="get-directions" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Obtenir l'itinéraire
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', detailsHtml);

  const map = L.map('map').setView([service.lat, service.lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  const serviceMarker = L.marker([service.lat, service.lng]).addTo(map);
  let routingControl;

  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('service-modal').remove();
  });

  document.getElementById('get-directions').addEventListener('click', () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        if (routingControl) {
          map.removeControl(routingControl);
        }
        routingControl = L.Routing.control({
          waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            L.latLng(service.lat, service.lng)
          ],
          routeWhileDragging: true
        }).addTo(map);
      });
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  });
}

searchInput.addEventListener('input', filterServices);
categoryFilter.addEventListener('change', filterServices);

function filterServices() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === '' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderServices(filteredServices);
}

renderServices(services);
 