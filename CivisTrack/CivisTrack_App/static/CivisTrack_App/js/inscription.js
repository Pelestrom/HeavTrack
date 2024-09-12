// // document.addEventListener('DOMContentLoaded', () => {
// //   const inscriptionForm = document.getElementById('inscription-form');

// //   inscriptionForm.addEventListener('submit', function(e) {
// //     e.preventDefault();

// //     // Récupération des valeurs des champs
// //     const password = document.getElementById('password').value;
// //     const confirmPassword = document.getElementById('confirm-password').value;

// //     // Vérification que les mots de passe correspondent
// //     if (password !== confirmPassword) {
// //       alert('Les mots de passe ne correspondent pas.');
// //       return;
// //     }

// //     const formData = new FormData(inscriptionForm);

// //     fetch('/inscription/', {
// //       method: 'POST',
// //       body: formData,
// //       headers: {
// //         'X-Requested-With': 'XMLHttpRequest',
// //         'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
// //       }
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //       if (data.success) {
// //         alert('Inscription réussie !');
// //         window.location.href = '/accueil/';
// //       } else {
// //         alert('Erreur lors de l\'inscription : ' + data.message);
// //       }
// //     })
// //     .catch(error => {
// //       console.error('Erreur:', error);
// //       alert('Une erreur est survenue. Veuillez réessayer.');
// //     });
// //   });
// // });



//   // Gestion des traductions et du thème (inchangé)



// const translations = {
//   'fr': {
//     'inscription': 'Inscription',
//     'lastname': 'Nom',
//     'firstname': 'Prénom',
//     'email': 'Email',
//     'password': 'Mot de passe',
//     'confirmPassword': 'Confirmer le mot de passe',
//     'register': 'S\'inscrire',
//     'alreadyHaveAccount': 'Déjà un compte ?',
//     'home': 'Accueil',
//     'services': 'Services',
//     'about': 'À propos',
//     'contact': 'Contact',
//     'footerDesc': 'Localisez facilement les services publics en Côte d\'Ivoire',
//     'quickLinks': 'Liens rapides',
//     'contactUs': 'Nous contacter',
//     'followUs': 'Suivez-nous'
//   },
//   'en': {
//     'inscription': 'Sign Up',
//     'lastname': 'Last Name',
//     'firstname': 'First Name',
//     'email': 'Email',
//     'password': 'Password',
//     'confirmPassword': 'Confirm Password',
//     'register': 'Register',
//     'alreadyHaveAccount': 'Already have an account?',
//     'home': 'Home',
//     'services': 'Services',
//     'about': 'About',
//     'contact': 'Contact',
//     'footerDesc': 'Easily locate public services in Côte d\'Ivoire',
//     'quickLinks': 'Quick Links',
//     'contactUs': 'Contact Us',
//     'followUs': 'Follow Us'
//   }
// };

// let currentLanguage = 'fr';

// function changeLanguage(lang) {
//   currentLanguage = lang;
//   updatePageLanguage();
// }

// function updatePageLanguage() {
//   document.querySelectorAll('[data-translate]').forEach(element => {
//     const key = element.getAttribute('data-translate');
//     if (translations[currentLanguage][key]) {
//       element.textContent = translations[currentLanguage][key];
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', updatePageLanguage);

// const body = document.body;
// const themeToggle = document.createElement('button');
// themeToggle.innerHTML = '🌓';
// themeToggle.className = 'fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-xl';
// document.body.appendChild(themeToggle);

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark');
//   updateThemeColors();
//   localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
// });

// function updateThemeColors() {
//   const isDark = body.classList.contains('dark');
//   document.documentElement.style.setProperty('--bg-color', isDark ? '#1f2937' : '#f3f4f6');
//   document.documentElement.style.setProperty('--text-color', isDark ? '#f3f4f6' : '#1f2937');
// }
// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('form');

//   // Ajoute une animation lorsque le formulaire est chargé
//   form.classList.add('animate');

//   // Animation de suppression de l'animation après la première exécution
//   form.addEventListener('animationend', function() {
//       form.classList.remove('animate');
//   });

//   // Animation de focus sur les champs du formulaire
//   const inputs = form.querySelectorAll('input, textarea, select');
//   inputs.forEach(input => {
//       input.addEventListener('focus', function() {
//           this.style.borderColor = '#38a169'; // Couleur de bordure au focus
//           this.style.boxShadow = '0 0 0 3px rgba(56, 161, 105, 0.3)'; // Ombre portée au focus
//       });

//       input.addEventListener('blur', function() {
//           this.style.borderColor = ''; // Réinitialise la couleur de bordure
//           this.style.boxShadow = ''; // Réinitialise l'ombre portée
//       });
//   });
// });


// Sélection des éléments à animer
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const links = document.querySelectorAll('a');

// Animation pour le focus des champs de formulaire
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 10px rgba(0, 128, 0, 0.8)';
    });

    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});

// Animation du bouton lors du clic
button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.98)';
    button.style.boxShadow = 'none';
});

button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
});

// Animation pour les liens au survol
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#218838';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#28a745';
    });
});
