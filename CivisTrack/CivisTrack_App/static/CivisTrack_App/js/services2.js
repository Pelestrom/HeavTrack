const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const services = [
  {
    id: 1,
    name: "Passeport",
    category: "administration",
    shortDescription: "Demande et renouvellement de passeport",
    description: "Service de demande et de renouvellement de passeport pour les citoyens ivoiriens.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 23",
    email: "passeport@interieur.gouv.ci",
    icon: "passport"
  },
  {
    id: 2,
    name: "Carte Nationale d'Identité",
    category: "administration",
    shortDescription: "Demande et renouvellement de CNI",
    description: "Service de demande et de renouvellement de la Carte Nationale d'Identité pour les citoyens ivoiriens.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 24",
    email: "cni@interieur.gouv.ci",
    icon: "id-card"
  },
  {
    id: 3,
    name: "Vaccination COVID-19",
    category: "sante",
    shortDescription: "Centre de vaccination contre la COVID-19",
    description: "Centre de vaccination pour la prévention contre la COVID-19.",
    openingHours: "Lundi - Samedi: 8h00 - 18h00",
    contact: "+225 27 20 21 22 25",
    email: "vaccination@sante.gouv.ci",
    icon: "vaccine"
  },
  {
    id: 4,
    name: "Inscription Universitaire",
    category: "education",
    shortDescription: "Inscription dans les universités publiques",
    description: "Service d'inscription et de réinscription dans les universités publiques de Côte d'Ivoire.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 26",
    email: "inscription@ensup.gouv.ci",
    icon: "university"
  },
  {
    id: 5,
    name: "Permis de Conduire",
    category: "transport",
    shortDescription: "Demande et renouvellement de permis de conduire",
    description: "Service de demande et de renouvellement de permis de conduire pour les citoyens ivoiriens.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 27",
    email: "permis@transport.gouv.ci",
    icon: "car"
  },
  {
    id: 6,
    name: "Acte de Naissance",
    category: "administration",
    shortDescription: "Demande d'acte de naissance",
    description: "Service de demande et de délivrance d'acte de naissance pour les citoyens ivoiriens.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 28",
    email: "etatcivil@interieur.gouv.ci",
    icon: "document"
  },
  {
    id: 7,
    name: "Impôts",
    category: "administration",
    shortDescription: "Déclaration et paiement des impôts",
    description: "Service de déclaration et de paiement des impôts pour les particuliers et les entreprises.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 29",
    email: "impots@finances.gouv.ci",
    icon: "calculator"
  },
  {
    id: 8,
    name: "Hôpital Général",
    category: "sante",
    shortDescription: "Services médicaux généraux",
    description: "Hôpital public offrant une large gamme de services médicaux pour tous les citoyens.",
    openingHours: "24/7",
    contact: "+225 27 20 21 22 30",
    email: "info@hopitalgeneral.gouv.ci",
    icon: "hospital"
  },
  {
    id: 9,
    name: "Inscription Scolaire",
    category: "education",
    shortDescription: "Inscription dans les écoles publiques",
    description: "Service d'inscription et de réinscription dans les écoles primaires et secondaires publiques.",
    openingHours: "Lundi - Vendredi: 8h00 - 16h00",
    contact: "+225 27 20 21 22 31",
    email: "inscription@education.gouv.ci",
    icon: "book-open"
  },
  {
    id: 10,
    name: "Transport Public",
    category: "transport",
    shortDescription: "Informations sur les transports publics",
    description: "Service d'information sur les horaires, itinéraires et tarifs des transports publics urbains.",
    openingHours: "Lundi - Samedi: 6h00 - 20h00",
    contact: "+225 27 20 21 22 32",
    email: "info@transport-public.gouv.ci",
    icon: "bus"
  }
];

document.addEventListener('alpine:init', () => {
  Alpine.data('services', () => ({
    services: services,
    searchQuery: '',
    activeCategory: 'all',
    showServiceModal: false,
    selectedService: null,

    get filteredServices() {
      return this.services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              service.shortDescription.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.activeCategory === 'all' || service.category === this.activeCategory;
        return matchesSearch && matchesCategory;
      });
    },

    showServiceDetails(service) {
      this.selectedService = service;
      this.showServiceModal = true;
    },

    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Copié dans le presse-papiers!');
      });
    },

    showItinerary() {
      alert('Fonctionnalité d\'itinéraire à implémenter');
    }
  }));
});

const serviceIcons = {
  passport: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>',
  'id-card': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>',
  vaccine: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>',
  university: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>',
  car: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>',
  document: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>',
  calculator: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>',
  hospital: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>',
  'book-open': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>',
  bus: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7H6a2 2 0 00-2 2v.93a2 2 0 001 1.73l.5.27a2 2 0 001 .27H6.5m11 3.95V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1.5M17.5 11H18a2 2 0 002 2v.93a2 2 0 01-1 1.73l-.5.27a2 2 0 01-1 .27h-.5a2 2 0 100-4h-1"></path>'
};

services.forEach(service => {
  const iconSvg = document.querySelector(`.service-icon svg.${service.icon}`);
  if (iconSvg) {
    iconSvg.innerHTML = serviceIcons[service.icon];
  }
});
 