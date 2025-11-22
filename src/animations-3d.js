// 3D Card Tilt Effect on Mouse Move
const tiltElements = document.querySelectorAll('.glass-panel, .project-card, .blog-card, .testimonial-card');

tiltElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Parallax Effect for Hero Elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual) {
        const glassCards = heroVisual.querySelectorAll('.glass-card');
        const orb = heroVisual.querySelector('.gradient-orb');

        glassCards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.2);
            card.style.transform = `translateY(${scrolled * speed}px)`;
        });

        if (orb) {
            orb.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0005})`;
        }
    }
});

// Smooth Mouse Follow for Gradient Orb
const hero = document.querySelector('.hero');
const orb = document.querySelector('.gradient-orb');

if (hero && orb) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.05;
        const moveY = (y - rect.height / 2) * 0.05;

        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// Enhanced Button Ripple Effect
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles dynamically
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `
  .btn-primary {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

export default {};
