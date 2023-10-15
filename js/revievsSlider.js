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
      760: {
        slidesPerView: "auto",
        spaceBetween: 53,
        loop: false,
      },
    },
  });
}
reviewsSlider()