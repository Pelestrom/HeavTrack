document.addEventListener('DOMContentLoaded', function() {


  // Validation en temps réel du formulaire
  const form = document.querySelector('form');
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  const submitBtn = document.querySelector('button[type="submit"]');

  const showError = (input, message) => {
      const errorContainer = document.createElement('p');
      errorContainer.classList.add('text-red-500', 'text-xs', 'italic');
      errorContainer.textContent = message;
      input.parentElement.appendChild(errorContainer);
      input.classList.add('border-red-500');
  };

  const clearErrors = () => {
      document.querySelectorAll('.text-red-500').forEach(el => el.remove());
      usernameInput.classList.remove('border-red-500');
      passwordInput.classList.remove('border-red-500');
  };

  const validateInput = (input) => {
      clearErrors(); // Effacer les erreurs avant la validation
      if (input.value.trim() === '') {
          showError(input, 'Ce champ est requis.');
      } else {
          input.classList.remove('border-red-500');
      }
  };

  usernameInput.addEventListener('input', function() {
      validateInput(usernameInput);
  });

  passwordInput.addEventListener('input', function() {
      validateInput(passwordInput);
  });

  // Validation lors de la soumission du formulaire
  form.addEventListener('submit', function(e) {
      e.preventDefault();  // Prévenir la soumission normale du formulaire
      clearErrors();       // Effacer les erreurs précédentes

      let hasErrors = false;

      if (usernameInput.value.trim() === '') {
          showError(usernameInput, 'Ce champ est requis.');
          hasErrors = true;
      }

      if (passwordInput.value.trim() === '') {
          showError(passwordInput, 'Ce champ est requis.');
          hasErrors = true;
      }

      if (!hasErrors) {
          form.submit();  // Soumettre le formulaire si pas d'erreurs
      }
  });

  // Animation sur le bouton de soumission
  submitBtn.addEventListener('mouseover', function() {
      submitBtn.classList.add('hover:bg-blue-600');
      submitBtn.style.transition = 'transform 0.2s';
      submitBtn.style.transform = 'scale(1.05)';
  });

  submitBtn.addEventListener('mouseout', function() {
      submitBtn.style.transform = 'scale(1)';
  });

  // Ajouter une animation d'entrée pour le formulaire
  const formContainer = document.querySelector('.bg-white');
  formContainer.style.opacity = '0';
  formContainer.style.transform = 'translateY(20px)';
  setTimeout(() => {
      formContainer.style.transition = 'all 0.5s ease';
      formContainer.style.opacity = '1';
      formContainer.style.transform = 'translateY(0)';
  }, 300);

});
