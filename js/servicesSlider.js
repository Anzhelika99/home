const servicesSlider = () => {
  const swiperImg = new Swiper(".services__slider-img", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 0, // Расстояние между слайдами
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination-pc",
      type: "bullets", // Использовать точки для пагинации
      clickable: true, // Разрешить клик на пагинации для переключения слайдов
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры
      },
    },
  });

  const swiperText = new Swiper(".services__slider-text", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 0, // Расстояние между слайдами
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
      el: ".swiper-pagination-pc",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры
      },
    },
    allowTouchMove: false,
  });
};

servicesSlider();
