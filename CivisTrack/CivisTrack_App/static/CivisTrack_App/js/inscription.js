 const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }

  // Ici, vous pouvez ajouter le code pour envoyer les données d'inscription à votre backend
  console.log('Inscription soumise:', { nom, prenom, email, password });
  alert('Inscription réussie !');
  // Rediriger vers la page de connexion ou le tableau de bord après l'inscription
  window.location.href = '/connexion.html';
});

const translations = {
  'fr': {
    'signup': 'Inscription',
    'lastname': 'Nom',
    'firstname': 'Prénom',
    'email': 'Email',
    'password': 'Mot de passe',
    'confirmPassword': 'Confirmer le mot de passe',
    'register': 'S\'inscrire',
    'alreadyHaveAccount': 'Déjà un compte ?',
    'home': 'Accueil',
    'services': 'Services',
    'about': 'À propos',
    'contact': 'Contact',
    'footerDesc': 'Localisez facilement les services publics en Côte d\'Ivoire',
    'quickLinks': 'Liens rapides',
    'contactUs': 'Nous contacter',
    'followUs': 'Suivez-nous'
  },
  'en': {
    'signup': 'Sign Up',
    'lastname': 'Last Name',
    'firstname': 'First Name',
    'email': 'Email',
    'password': 'Password',
    'confirmPassword': 'Confirm Password',
    'register': 'Register',
    'alreadyHaveAccount': 'Already have an account?',
    'home': 'Home',
    'services': 'Services',
    'about': 'About',
    'contact': 'Contact',
    'footerDesc': 'Easily locate public services in Côte d\'Ivoire',
    'quickLinks': 'Quick Links',
    'contactUs': 'Contact Us',
    'followUs': 'Follow Us'
  }
};

let currentLanguage = 'fr';

function changeLanguage(lang) {
  currentLanguage = lang;
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

const body = document.body;
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌓';
themeToggle.className = 'fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-xl';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  updateThemeColors();
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

function updateThemeColors() {
  const isDark = body.classList.contains('dark');
  document.documentElement.style.setProperty('--bg-color', isDark ? '#1f2937' : '#f3f4f6');
  document.documentElement.style.setProperty('--text-color', isDark ? '#f3f4f6' : '#1f2937');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
  updateThemeColors();
});
