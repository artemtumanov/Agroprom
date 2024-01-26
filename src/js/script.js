//Конфигурация swiper slider в секции promo
const promoSwiper = new Swiper('.promo__slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    speed: 800,
    effect: 'fade',
  
    pagination: {
      el: '.promo__pagination',
    },
    breakpoints: {
      1500: {
        direction: 'vertical',
      },
    },
  });


//Подключаем Glightbox для увеличения картинок при клике
const lightbox = GLightbox({ loop: true, });


// Скрипт для секции photo, переключающий сетки
const buttonGrid = document.querySelector('.photo__button')
  	  firstSlide = document.querySelector('.photo__grid-first')
	  secondSlide = document.querySelector('.photo__grid-second');

      buttonGrid.addEventListener('click', () => {
		firstSlide.classList.toggle('photo__grid-first-show')
		secondSlide.classList.toggle('photo__grid-second-hidden')
	  });


//Конфигурация swiper slider для секции partners
const productSwiper = new Swiper(".partners__slider", {
  slidesPerView: 5,
  grid: {
    rows: 3,
  },
  spaceBetween: 24,
  pagination: {
    el: ".partners__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".partners__next",
    prevEl: ".partners__prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
  },
});


//Конфигурация swiper slider для секции how
const howSwiper = new Swiper('.how__slider', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.how__pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: ".how__next",
    prevEl: ".how__prev",
  },
});


//Скрипт свитчера Овощи - Фрукты
const switcher = document.querySelector('.season__switcher')
	  vegetables = document.querySelector('.season__vegetables')
	  fruits = document.querySelector('.season__fruits');

switcher.addEventListener('click', () => {
	switcher.classList.toggle('season__switcher_active')
	vegetables.classList.toggle('season__vegetables_active')
	fruits.classList.toggle('season__fruits_active')
  
});
//Скрип открытие/закрытие бургер-меню
const burger = document.querySelector('.nav__burger')
      menu = document.querySelector('.menu')
      closeMenu = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
  menu.classList.add('active');
});
closeMenu.addEventListener('click', ()=> {
  menu.classList.remove('active')
});