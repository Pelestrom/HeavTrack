document.addEventListener('DOMContentLoaded', function() {

  
    // Validation en temps réel du formulaire
    const form = document.querySelector('form');
    const password1Input = document.querySelector('#id_password1');
    const password2Input = document.querySelector('#id_password2');
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
        password1Input.classList.remove('border-red-500');
        password2Input.classList.remove('border-red-500');
    };
  
    const validateInput = (input) => {
        clearErrors(); // Effacer les erreurs avant la validation
        if (input.value.trim() === '') {
            showError(input, 'Ce champ est requis.');
        } else {
            input.classList.remove('border-red-500');
        }
    };
  
    password1Input.addEventListener('input', function() {
        validateInput(password1Input);
    });
  
    password2Input.addEventListener('input', function() {
        validateInput(password2Input);
    });
  
    // Validation lors de la soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prévenir la soumission normale du formulaire
        clearErrors();       // Effacer les erreurs précédentes
  
        // Validation des champs du formulaire
        validateInput(password1Input);
        validateInput(password2Input);
  
        // Validation des mots de passe
        if (password1Input.value !== password2Input.value) {
            showError(password2Input, 'Les mots de passe ne correspondent pas.');
        }
  
        // Si tout est valide, soumettre le formulaire
        if (document.querySelectorAll('.text-red-500').length === 0) {
            form.submit();
        }
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
  