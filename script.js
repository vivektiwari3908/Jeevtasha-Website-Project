// =========================
// AOS
// =========================

AOS.init({
  duration:1000,
  once:true
});


// =========================
// LOADER
// =========================

window.addEventListener('load',()=>{

  const loader = document.querySelector('.loader');

  setTimeout(()=>{

    loader.classList.add('hide');

  },1500);

});


// =========================
// STICKY NAVBAR
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll',()=>{

  header.classList.toggle(
    'scrolled',
    window.scrollY > 50
  );

});


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector('.menu-toggle');

const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click',()=>{

  navbar.classList.toggle('active');

});


// =========================
// GSAP HERO ANIMATION
// =========================

gsap.from('.hero-tag',{

  y:50,
  opacity:0,
  duration:1,
  delay:0.3

});

gsap.from('.hero-content h1',{

  y:80,
  opacity:0,
  duration:1,
  delay:0.5

});

gsap.from('.hero-content p',{

  y:50,
  opacity:0,
  duration:1,
  delay:0.7

});

gsap.from('.hero-buttons',{

  y:50,
  opacity:0,
  duration:1,
  delay:0.9

});

gsap.from('.hero-stats',{

  y:50,
  opacity:0,
  duration:1,
  delay:1.1

});

gsap.from('.main-image',{

  x:100,
  opacity:0,
  duration:1.2,
  delay:0.5

});

gsap.from('.card1',{

  x:-80,
  y:-80,
  opacity:0,
  duration:1.2,
  delay:1

});

gsap.from('.card2',{

  x:80,
  y:80,
  opacity:0,
  duration:1.2,
  delay:1.2

});

gsap.from('.donation-badge',{

  scale:0,
  opacity:0,
  duration:1,
  delay:1.4

});


// =========================
// MOUSE PARALLAX EFFECT
// =========================

const hero = document.querySelector('.hero');

hero.addEventListener('mousemove',(e)=>{

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  gsap.to('.main-image',{

    x:(x - 0.5) * 30,
    y:(y - 0.5) * 30,
    duration:1
  });

  gsap.to('.card1',{

    x:(x - 0.5) * 60,
    y:(y - 0.5) * 60,
    duration:1
  });

  gsap.to('.card2',{

    x:(x - 0.5) * -60,
    y:(y - 0.5) * -60,
    duration:1
  });

});


// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{

  counter.innerText = '0';

  const updateCounter = ()=>{

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target + '+';

    }

  };

  updateCounter();

});


// =========================
// TESTIMONIAL SWIPER
// =========================

const testimonialSwiper = new Swiper(".testimonialSwiper", {

  loop:true,

  spaceBetween:30,

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },

  breakpoints:{

    0:{
      slidesPerView:1,
    },

    768:{
      slidesPerView:2,
    },

    1200:{
      slidesPerView:3,
    }

  }

});

// =========================
// GALLERY LIGHTBOX
// =========================

const galleryItems = document.querySelectorAll('.gallery-item img');

const lightbox = document.querySelector('.lightbox');

const lightboxImage = document.querySelector('.lightbox-image');

const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(item=>{

  item.addEventListener('click',()=>{

    lightbox.classList.add('active');

    lightboxImage.src = item.src;

  });

});

closeLightbox.addEventListener('click',()=>{

  lightbox.classList.remove('active');

});

// =========================
// ACTIVE NAV LINKS
// =========================

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll',()=>{

  let current = '';

  sections.forEach(section=>{

    const sectionTop = section.offsetTop;

    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute('id');

    }

  });

  navLinks.forEach(link=>{

    link.classList.remove('active');

    if(link.getAttribute('href') === `#${current}`){

      link.classList.add('active');

    }

  });

});

// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector('.custom-cursor');

const cursorDot = document.querySelector('.cursor-dot');

window.addEventListener('mousemove',(e)=>{

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';

});


// =========================
// CURSOR HOVER EFFECT
// =========================

const hoverElements = document.querySelectorAll(
  'a, button, .gallery-item, .campaign-card'
);

hoverElements.forEach(el=>{

  el.addEventListener('mouseenter',()=>{

    cursor.classList.add('active');

  });

  el.addEventListener('mouseleave',()=>{

    cursor.classList.remove('active');

  });

});


// =========================
// MAGNETIC BUTTON EFFECT
// =========================

const magneticButtons = document.querySelectorAll('.magnetic');

magneticButtons.forEach(button=>{

  button.addEventListener('mousemove',(e)=>{

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button,{

      x:x * 0.2,
      y:y * 0.2,
      duration:0.3

    });

  });

  button.addEventListener('mouseleave',()=>{

    gsap.to(button,{

      x:0,
      y:0,
      duration:0.5,
      ease:"elastic.out(1,0.3)"

    });

  });

});





