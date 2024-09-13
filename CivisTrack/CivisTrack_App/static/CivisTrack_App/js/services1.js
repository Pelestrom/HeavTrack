 
// // Services data retrieved from Django context
// const services = {
//     {% for service in services %}
//         {{ service.id }}: {
//             'name': '{{ service.name }}',
//             'description': '{{ service.description }}',
//             'horaires': '{{ service.horaires }}',
//             'contact': '{{ service.contact }}',
//             'email': '{{ service.email }}',
//             'lat': {{ service.lat }},
//             'lng': {{ service.lng }}
//         },
//     {% endfor %}
// };

// const searchInput = document.getElementById('search-input');
// const categoryFilter = document.getElementById('category-filter');
// const servicesList = document.getElementById('services-list');

// function showServiceDetails(serviceId) {
//     const service = services[serviceId];
    
//     document.getElementById('service-name').textContent = service.name;
//     document.getElementById('service-description').textContent = service.description;
//     document.getElementById('service-horaires').textContent = service.horaires;
//     document.getElementById('service-contact').textContent = service.contact;
//     document.getElementById('service-email').textContent = service.email;

//     const map = L.map('map').setView([service.lat, service.lng], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);
//     L.marker([service.lat, service.lng]).addTo(map);

//     const modal = document.getElementById('service-details-modal');
//     modal.classList.remove('hidden');

//     document.getElementById('get-directions').addEventListener('click', () => {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(position => {
//                 const userLatLng = [position.coords.latitude, position.coords.longitude];
//                 L.Routing.control({
//                     waypoints: [
//                         L.latLng(userLatLng),
//                         L.latLng(service.lat, service.lng)
//                     ],
//                     routeWhileDragging: true
//                 }).addTo(map);
//             });
//         } else {
//             alert('Géolocalisation non supportée');
//         }
//     });

//     document.getElementById('close-modal').addEventListener('click', () => {
//         modal.classList.add('hidden');
//         map.remove();
//     });
// }

// function filterServices() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const selectedCategory = categoryFilter.value;
    
//     const serviceCards = document.querySelectorAll('.service-card');
//     serviceCards.forEach(card => {
//         const serviceName = card.querySelector('h3').textContent.toLowerCase();
//         const serviceCategory = card.querySelector('p').textContent;

//         const matchesSearch = serviceName.includes(searchTerm);
//         const matchesCategory = !selectedCategory || serviceCategory === selectedCategory;

//         if (matchesSearch && matchesCategory) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// searchInput.addEventListener('input', filterServices);
// categoryFilter.addEventListener('change', filterServices);
 
