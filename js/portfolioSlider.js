const portfolioSlider = () => {

  const swiperPortfolioInfo = new Swiper(".swiper__portfolio-info", {
    slidesPerView: 1, 
    spaceBetween: 5, 
    loop: true,
    navigation: {
      nextEl: ".portfolio__button-next",
      prevEl: ".portfolio__button-prev",
    },
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoHeight: true,
    breakpoints: {
      940: {
        autoHeight: false,
      },
    },
  });

  const swiperPortfolioImages = new Swiper(".swiper__portfolio-images", {
    slidesPerView: 1,
    spaceBetween: 0, 
    loop: true,
    navigation: {
      nextEl: ".portfolio__button-next",
      prevEl: ".portfolio__button-prev",
    },
    allowTouchMove: false,
  });

  const swiperPortfolioPrev = new Swiper(".swiper__portfolio-previous", {
    slidesPerView: 1, 
    spaceBetween: 1, 
    loop: true,
    navigation: {
      nextEl: ".portfolio__button-next",
      prevEl: ".portfolio__button-prev",
    },
    allowTouchMove: false,
  });

  const prevLinks = document.querySelectorAll(
    ".portfolio-previous__content-link"
  );

  prevLinks.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      swiperPortfolioInfo.slidePrev();
      swiperPortfolioImages.slidePrev();
      swiperPortfolioPrev.slidePrev();
    })
  })

}
portfolioSlider()