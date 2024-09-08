// Mobile menu toggle
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Form submission
function submitForm() {
  // Here you would typically send the form data to a server
  // For this example, we'll just log it to the console
  console.log('Form submitted:', {
    name: this.name,
    email: this.email,
    message: this.message
  });
  
  // Clear the form
  this.name = '';
  this.email = '';
  this.message = '';
  
  // Show a success message (you might want to use a more sophisticated notification system)
  alert('Votre message a été envoyé avec succès!');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add hover effects to contact info items
const contactItems = document.querySelectorAll('.contact-info-item');
contactItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateX(10px)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateX(0)';
  });
});
 