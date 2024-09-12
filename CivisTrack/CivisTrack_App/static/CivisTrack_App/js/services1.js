document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const servicesList = document.getElementById('services-list');

  // Stockage des services pour le filtrage
  let services = []; // Assurez-vous que les services sont bien chargés

  // Fonction pour afficher les services filtrés
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

  // Fonction pour afficher les détails du service dans un modal
  function showServiceDetails(service) {
      // Création du modal si nécessaire
      const modal = document.getElementById('service-modal');
      if (!modal) {
          console.error('Modal not found');
          return;
      }

      modal.querySelector('h2').innerText = service.name;
      modal.querySelector('p').innerText = `Catégorie: ${service.category}`;
      // Autres détails...

      // Affichage du modal
      modal.classList.remove('hidden');

      // Initialiser la carte
      const map = L.map('map').setView([service.lat, service.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([service.lat, service.lng]).addTo(map);

      let routingControl;

      document.querySelector('.close-modal').addEventListener('click', () => {
          modal.classList.add('hidden');
      });

      document.getElementById('get-directions').addEventListener('click', () => {
          if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition(position => {
                  const userLatLng = [position.coords.latitude, position.coords.longitude];
                  if (routingControl) {
                      map.removeControl(routingControl);
                  }
                  routingControl = L.Routing.control({
                      waypoints: [
                          L.latLng(userLatLng),
                          L.latLng(service.lat, service.lng)
                      ],
                      routeWhileDragging: true
                  }).addTo(map);
              });
          } else {
              alert('Géolocalisation non supportée');
          }
      });
  }

  // Fonction pour filtrer les services en fonction de la recherche et de la catégorie
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

  // Ajouter les écouteurs d'événements pour la recherche et le filtre de catégorie
  searchInput.addEventListener('input', filterServices);
  categoryFilter.addEventListener('change', filterServices);

  // Rendre les services au chargement de la page
  renderServices(services);
});
console.log(services); // Vérifiez que les services sont bien chargés
