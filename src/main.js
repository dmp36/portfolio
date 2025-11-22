import './style.css'
import './animations-3d.js'

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  mobileBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    mobileBtn.classList.remove('active');
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form Submission Mock
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = 'Message Sent!';
      btn.style.backgroundColor = '#10b981'; // Success green
      form.reset();

      setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.backgroundColor = '';
      }, 3000);
    }, 1500);
  });
}

// Scroll Animation (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section-title, .glass-panel, .project-card, .about-text, .about-skills').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.innerHTML = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  @media (max-width: 768px) {
    .nav-list.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: var(--header-height);
      left: 0;
      width: 100%;
      background: var(--bg-dark);
      padding: 2rem;
      border-bottom: var(--glass-border);
    }
  }
`;
document.head.appendChild(style);

// Theme Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';

html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Generic Link Feedback (for placeholders)
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Only alert if it's not the logo or handled elsewhere
    if (!link.classList.contains('logo')) {
      alert('This is a demo link. In a real portfolio, this would navigate to the specific page.');
    }
  });
});
