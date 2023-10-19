const portfolioSlider = () => {

  const swiperPortfolioInfo = new Swiper(".swiper__portfolio-info", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    //navigation: {
    //  nextEl: ".portfolio__button-next",
    //  prevEl: ".portfolio__button-prev",
    //},
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoHeight: true,
    breakpoints: {
      940: {
        autoHeight: false,
        allowTouchMove: false,
      },
    },
  });

  const swiperPortfolioImages = new Swiper(".swiper__portfolio-images", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: true,
    navigation: {
      nextEl: ".portfolio__button-next",
      prevEl: ".portfolio__button-prev",
    },
    allowTouchMove: true,
    breakpoints: {
      940: {
        allowTouchMove: false,
      },
    },
  });

  const swiperPortfolioPrev = new Swiper(".swiper__portfolio-previous", {
    slidesPerView: 1, 
    spaceBetween: 1, 
    loop: true,
    //navigation: {
    //  nextEl: ".portfolio__button-next",
    //  prevEl: ".portfolio__button-prev",
    //},
    allowTouchMove: false,
  });

  swiperPortfolioInfo.navigation = swiperPortfolioImages.navigation;
  swiperPortfolioPrev.navigation = swiperPortfolioImages.navigation;

  ////Изменение слайдов при свайпе на мобильной версии
  //swiperPortfolioInfo.on("slideChange", () => {
  //  swiperPortfolioImages.slideTo(swiperPortfolioInfo.activeIndex);
  //});

  //swiperPortfolioImages.on("slideChange", () => {
  //  swiperPortfolioInfo.slideTo(swiperPortfolioImages.activeIndex);
  //});

    swiperPortfolioImages.on("slideNextTransitionStart", function () {
      swiperPortfolioInfo.slideNext();
      swiperPortfolioPrev.slideNext();
    });

    swiperPortfolioImages.on("slidePrevTransitionStart", function () {
      swiperPortfolioInfo.slidePrev();
      swiperPortfolioPrev.slidePrev();
    });




  const prevLinks = document.querySelectorAll(
    ".portfolio-previous__content-link"
  );

  //Перелистывание слайдов ссылками 
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