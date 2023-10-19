const servicesSliderMobile = () => {
  const swiperImgMobile = new Swiper(".swiper__image", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 1, // Расстояние между слайдами
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", 
      clickable: true, 
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры
      },
    },
  });

  const swiperMobile = new Swiper(".slider__links", {
    slidesPerView: 1, 
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    //navigation: {
    //  nextEl: ".swiper-button-next",
    //  prevEl: ".swiper-button-prev",
    //},
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры пагинации
      },
    },
    autoHeight: true,
    allowTouchMove: false,
  });

  swiperMobile.navigation = swiperImgMobile.navigation;


  //swiperImgMobile.on("slideChange", function () {
  //  swiperMobile.slideTo(swiperImgMobile.activeIndex);
  //});

  //swiperMobile.on("slideChange", function () {
  //  swiperImgMobile.slideTo(swiperMobile.activeIndex);
  //});

  swiperImgMobile.on("slideNextTransitionStart", function () {
    swiperMobile.slideNext();
  });

  swiperImgMobile.on("slidePrevTransitionStart", function () {
    swiperMobile.slidePrev();
  });

  
}
servicesSliderMobile()