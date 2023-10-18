const animationFadeInUp = () => {
  const animTitle = document.querySelectorAll(".stage__title");
  const animText = document.querySelectorAll(".stage__text");

  const animOnScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px 0px -20px 0px",
    threshold: 1,
  };

  const observer = new IntersectionObserver(animOnScroll, options);
  animTitle.forEach((title) => observer.observe(title));
  animText.forEach((text) => observer.observe(text));
};
animationFadeInUp();
