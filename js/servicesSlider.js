const servicesSlider = () => {
  const swiperImg = new Swiper(".services__slider-img", {
    slidesPerView: 1, 
    spaceBetween: 5, 
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

  });

  const swiperText = new Swiper(".services__slider-text", {
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
      el: ".swiper-pagination-pc",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "0" + (index + 1) + "</span>"
        ); // Отображать цифры пагинации
      },
    },
    allowTouchMove: false,

  });

  // Находим все ссылки с классом "swiper-link"
  const links = document.querySelectorAll(".swiper-link");

  // Обработчик клика по ссылке
  function handleLinkClick(event) {

    links.forEach(function (link) {
      link.classList.remove("active");
    });

    event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
    const slideId = this.getAttribute("href").slice(1); // Получаем ID слайда из атрибута href ссылки

    this.classList.add('active')
    swiperImg.slideTo(slideId);
    swiperText.slideTo(slideId);
  }

  // Добавляем обработчик клика для каждой ссылки
  links.forEach(function (link) {
    link.addEventListener("click", handleLinkClick);
  });
};

servicesSlider();
