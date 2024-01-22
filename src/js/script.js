const promoSwiper = new Swiper('.promo__slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    speed: 1000,
    effect: 'coverflow',
  
    // If we need pagination
    pagination: {
      el: '.promo__pagination',
    },
  
  });

const lightbox = GLightbox({ loop: true, });

const buttonGrid = document.querySelector('.photo__button')
  	  firstSlide = document.querySelector('.photo__grid-first')
	  secondSlide = document.querySelector('.photo__grid-second');

      buttonGrid.addEventListener('click', () => {
		firstSlide.classList.toggle('photo__grid-first-show')
		secondSlide.classList.toggle('photo__grid-second-hidden')
	  });

const productSwiper = new Swiper(".partners__slider", {
  slidesPerView: 5,
  grid: {
    rows: 3,
  },
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const howSwiper = new Swiper('.how__slider', {
  // Optional parameters
  direction: 'vertical',
  speed: 1000,
  effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
