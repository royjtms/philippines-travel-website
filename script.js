/* ===========================
  Swiper Initialization
=========================== */
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:    { slidesPerView: 1 },
    640:  { slidesPerView: 1.2 },
    768:  { slidesPerView: 2 },
    1080: { slidesPerView: 3 },
  },
});

/* ===========================
  Mobile Nav
=========================== */
const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

/* ===========================
  Scroll: Solid Navbar
=========================== */
const headerEl = document.querySelector('.header-nav');

window.addEventListener('scroll', () => {
  headerEl.classList.toggle('header-scrolled', window.scrollY > 50);
});

/* ===========================
  Footer: Current Year
=========================== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===========================
  Scroll Reveal (Intersection Observer)
=========================== */
const revealEls = document.querySelectorAll(
  '.packages-cards, .why-card, .testimonial-card, .card-item'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.classList.add('reveal-ready');
  revealObserver.observe(el);
});

/* ===========================
  Newsletter: Success Toast
=========================== */
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = newsletterForm.querySelector('.newsletter-button');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Subscribed!';
    btn.style.background = '#25713A';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      btn.disabled = false;
      newsletterForm.reset();
    }, 3000);
  });
}