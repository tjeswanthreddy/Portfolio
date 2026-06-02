// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Custom Cursor (Disabled on Mobile)
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        follower.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });
} else {
    cursor.style.display = 'none';
    follower.style.display = 'none';
}

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signal transmitted successfully! Pradeep will respond soon.');
    form.reset();
});

// Project Hover Animation
const projectImages = document.querySelectorAll('.project-image');
projectImages.forEach(img => {
    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        img.style.transform = `scale(1.05) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });
});

// Scroll Animations
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(100px)';
    section.style.transition = 'all 0.8s ease';
});

// Particle Background
const heroParticles = document.querySelector('.hero-particles');
if (window.innerWidth > 768) { // Disable particles on small screens
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
        heroParticles.appendChild(particle);
    }
}
