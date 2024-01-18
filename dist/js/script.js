const swiper = new Swiper('.swiper', {
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
      el: '.swiper-pagination',
    },
  
  });