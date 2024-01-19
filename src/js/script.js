const swiper = new Swiper('.promo__slider', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
  
    // If we need pagination
    pagination: {
      el: '.promo__pagination',
    },
  
  });

const lightbox = GLightbox({ loop: true, });

const buttonGrid = document.querySelector('.arrow__right')
  	  firstSlide = document.querySelector('.photo__grid-first')
	  secondSlide = document.querySelector('.photo__grid-second');

      buttonGrid.addEventListener('click', () => {
		firstSlide.classList.toggle('photo__grid-first-show')
		secondSlide.classList.toggle('photo__grid-second-hidden')
	  })
