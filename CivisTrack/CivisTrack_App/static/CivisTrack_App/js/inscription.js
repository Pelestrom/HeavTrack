document.addEventListener('DOMContentLoaded', function() {

    // Changement de thème (clair/sombre)
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.innerText = 'Changer de thème';
    themeToggleBtn.classList.add('fixed', 'top-4', 'right-4', 'bg-gray-700', 'text-white', 'py-2', 'px-4', 'rounded');
    document.body.appendChild(themeToggleBtn);
  
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            themeToggleBtn.innerText = 'Passer en mode clair';
        } else {
            themeToggleBtn.innerText = 'Passer en mode sombre';
        }
    });
  
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
  
  });
  