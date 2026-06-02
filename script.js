// Portfolio JavaScript
// Add interactivity and dynamic functionality

document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code here
  console.log('Portfolio loaded');
});

// Example: Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Example: Add active class to current navigation item
function setActiveNavItem() {
  const currentPage = window.location.pathname;
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

setActiveNavItem();
