const galerySlider = () => {
  const swiper = new Swiper(".swiper__galery", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
    breakpoints: {
      940: {
        slidesPerView: 2,
        spaceBetween: 44,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 44,
      },
    },
  });

}
galerySlider()