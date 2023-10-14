const servicesSlider = () => {
  const swiperImg = new Swiper(".services__slider-img", {
    slidesPerView: 1, // Определите, сколько слайдов будет видно одновременно
    spaceBetween: 5, // Расстояние между слайдами
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
    slideToClickedSlide: true,
    hashNavigation: true,
    replaceState: true,
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
    //hashNavigation: true,
    //replaceState: true,
  });


  // Находим все ссылки с классом "swiper-link"
  //const swiperLinks = document.querySelectorAll(".swiper-link");

  //swiperLinks.forEach(function (link) {
  //  link.addEventListener("click", function (e) {
  //    e.preventDefault(); // Отмена действия по умолчанию (переход по ссылке)

  //    var slideId = this.getAttribute("href"); // Получение ID слайда из атрибута href

  //    if (slideId) {
  //      //var swiper = document.querySelector(".swiper-container").swiper; // Получение экземпляра Swiper.js

  //      swiperImg.slideTo(slideId); // Переключение на слайд с указанным ID
  //      swiperText.slideTo(slideId); // Переключение на слайд с указанным ID
  //    }
  //  });
  //})



  // Находим все ссылки с классом "swiper-link"
  const links = document.querySelectorAll(".swiper-link");

  // Обработчик клика по ссылке
  function handleLinkClick(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
    const slideId = this.hash; // Получаем ID слайда из атрибута href ссылки

    swiperImg.slideTo(slideId);
    swiperText.slideTo(slideId);
  }

  // Добавляем обработчик клика для каждой ссылки
  links.forEach(function (link) {
    link.addEventListener("click", handleLinkClick);
  });
};

servicesSlider();
