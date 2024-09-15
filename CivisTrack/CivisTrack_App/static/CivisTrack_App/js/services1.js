 
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
                          <button id="get-directions" class="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110">
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
          const modal = document.getElementById('service-modal');
          modal.classList.remove('animate-fade-in');
          modal.classList.add('animate-fade-out');
          modal.addEventListener('animationend', () => {
              modal.remove();
          }, { once: true });
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

  function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
          alert('Texte copié !');
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

  function filterServices(selectedCategory) {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredServices = services.filter(service => {
          const matchesSearch = service.name.toLowerCase().includes(searchTerm);
          const matchesCategory = !selectedCategory || service.category_id === selectedCategory;
          return matchesSearch && matchesCategory;
      });

      renderServices(filteredServices);
  }

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => filterServices(''));

  renderCategoryButtons();
  renderServices(services);
});

 
