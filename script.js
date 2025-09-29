const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});

/* show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* Menu Hidden */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  /* when we click on each nav-link, we remove the show-menu class */
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* solid color navbar on scroll */
const headerScroll = document.querySelector('.header-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerScroll.classList.add('header-scrolled')
  } else if (window.scrollY <= 50) {
    headerScroll.classList.remove('header-scrolled')
  }
});