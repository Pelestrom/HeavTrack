// document.addEventListener('DOMContentLoaded', function() {
//     fetch('/services/')
//       .then(response => response.json())
//       .then(data => {
//         renderServices(data);  // Rendre les services dynamiquement
//       })
//       .catch(error => {
//         console.error('Erreur lors de la récupération des services:', error);
//       });
//   });

//   categoryFilter.addEventListener('change', function() {
//   const selectedCategory = this.value;

//   fetch('/services/')
//     .then(response => response.json())
//     .then(services => {
//       const filteredServices = selectedCategory
//         ? services.filter(service => service.category === selectedCategory)
//         : services;
//       renderServices(filteredServices);
//     })
//     .catch(error => {
//       console.error('Erreur lors du filtrage:', error);
//     });
// });
