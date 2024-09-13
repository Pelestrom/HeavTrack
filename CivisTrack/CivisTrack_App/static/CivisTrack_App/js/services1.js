document.addEventListener('DOMContentLoaded', function() {
    fetch('/services1/')
      .then(response => response.json())
      .then(data => {
        renderServices(data);  // Rendre les services dynamiquement
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des services:', error);
      });
  });

  categoryFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
  
    fetch('/services1/')
      .then(response => response.json())
      .then(services => {
        const filteredServices = selectedCategory
          ? services.filter(service => service.category === selectedCategory)
          : services;
        renderServices(filteredServices);
      })
      .catch(error => {
        console.error('Erreur lors du filtrage:', error);
      });
  });

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
  
    fetch('/services1/')
      .then(response => response.json())
      .then(services => {
        const filteredServices = services.filter(service => service.name.toLowerCase().includes(query));
        renderServices(filteredServices);
      })
      .catch(error => {
        console.error('Erreur lors de la recherche:', error);
      });
  });

  function showServiceDetails(service) {
    document.getElementById('service-name').textContent = service.name;
    document.getElementById('service-description').textContent = service.description;
    document.getElementById('service-horaires').textContent = service.horaires;
    document.getElementById('service-contact').textContent = service.contact;
    document.getElementById('service-email').textContent = service.email;
  
    // Initialize map
    const map = L.map('map').setView([service.lat, service.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([service.lat, service.lng]).addTo(map);
  
    document.getElementById('service-details-modal').classList.remove('hidden');
  }

  document.getElementById('get-directions').addEventListener('click', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            L.latLng(service.lat, service.lng)
          ]
        }).addTo(map);
      });
    } else {
      alert('Géolocalisation non supportée');
    }
  });
  