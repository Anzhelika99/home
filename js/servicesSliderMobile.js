const servicesSliderMobile = () => {
  const swiperImgMobile = new Swiper(".swiper__image", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 1, // Расстояние между слайдами
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
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
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
}
servicesSliderMobile()