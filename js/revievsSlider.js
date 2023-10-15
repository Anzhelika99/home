const reviewsSlider = () => {
  const swiperReviews = new Swiper(".swiper__reviews", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
    },
    loop: true,
    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },
      760: {
        slidesPerView: "auto",
        spaceBetween: 53,
        loop: false,
      },
      1900: {
        slidesPerView: "auto",
        spaceBetween: 53,
        loop: false,
        allowTouchMove: false,
      },
    },
  });
}
reviewsSlider()