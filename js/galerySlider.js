const galerySlider = () => {
  const swiperGalery = new Swiper(".swiper__galery", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    navigation: {
      nextEl: ".galery__button-next",
      prevEl: ".galery__button-prev",
    },
    breakpoints: {
      940: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 44,
      },
    },
  });

}
galerySlider()