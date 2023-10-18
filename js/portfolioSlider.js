const portfolioSlider = () => {

  const swiperPortfolioInfo = new Swiper(".swiper__portfolio-info", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 5, // Расстояние между слайдами
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
        //autoHeight: false,
      },
    },
  });

  const swiperPortfolioImages = new Swiper(".swiper__portfolio-images", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 0, // Расстояние между слайдами
    loop: true,
    navigation: {
      nextEl: ".portfolio__button-next",
      prevEl: ".portfolio__button-prev",
    },
    allowTouchMove: false,
  });

}
portfolioSlider()