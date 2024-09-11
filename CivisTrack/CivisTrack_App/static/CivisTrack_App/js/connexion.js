const translations = {
  'fr': {
    'login': 'Connexion',
    'email': 'Adresse e-mail',
    'password': 'Mot de passe',
    'rememberMe': 'Se souvenir de moi',
    'forgotPassword': 'Mot de passe oublié ?',
    'noAccount': 'Pas de compte ? S\'inscrire'
  },
  'en': {
    'login': 'Login',
    'email': 'Email address',
    'password': 'Password',
    'rememberMe': 'Remember me',
    'forgotPassword': 'Forgot password?',
    'noAccount': 'No account? Sign up'
  }
};

let currentLanguage = 'fr';

function updatePageLanguage() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updatePageLanguage();
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  updateThemeColors();
});

function updateThemeColors() {
  const isDark = document.body.classList.contains('dark');
  document.documentElement.style.setProperty('--bg-color', isDark ? '#1f2937' : '#f3f4f6');
  document.documentElement.style.setProperty('--text-color', isDark ? '#f3f4f6' : '#1f2937');
}

// document.getElementById('loginForm').addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   const formData = new FormData();
//   formData.append('email', email);
//   formData.append('password', password);

//   fetch('/connexion/', {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.success) {
//       alert('Connexion réussie !');
//       window.location.href = '/accueil/';
//     } else {
//       alert('Erreur : ' + data.message);
//     }
//   })
//   .catch(error => {
//     console.error('Erreur:', error);
//     alert('Une erreur est survenue. Veuillez réessayer.');
//   });
// });
