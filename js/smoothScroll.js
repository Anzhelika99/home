const smoothScroll = () => {
  const hamburger = document.getElementById("hamb"); // Для закрытия меню в мобильной версии
  const popup = document.getElementById("popup-menu"); // Для закрытия меню в мобильной версии

  const scrollTop = document.querySelectorAll(".scroll-top");
  const scrollServices = document.querySelectorAll(".scroll-services");
  const scrollAbout = document.querySelectorAll(".scroll-about");

  scrollTop.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".header"), {
        behavior: "smooth",
        //block: "top",
        inline: "center",
      });

      if (
        hamburger.classList.value === "hamb__field active" &&
        popup.classList.value === "popup-menu open"
      ) {
        hamburger.classList.remove("active");
        popup.classList.remove("open");
      } // Проверяем, есть ли активный класс у меню и гамбургера для закрытия 
    });
  });

  scrollServices.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".services"), {
        behavior: "smooth",
        //block: "center",
        inline: "center",
      });
      if (
        hamburger.classList.value === "hamb__field active" &&
        popup.classList.value === "popup-menu open"
      ) {
        hamburger.classList.remove("active");
        popup.classList.remove("open");
      } // Проверяем, есть ли активный класс у меню и гамбургера для закрытия
    });
  });

  scrollAbout.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".about"), {
        behavior: "smooth",
        //block: "center",
        inline: "center",
      });
      if (
        hamburger.classList.value === "hamb__field active" &&
        popup.classList.value === "popup-menu open"
      ) {
        hamburger.classList.remove("active");
        popup.classList.remove("open");
      } // Проверяем, есть ли активный класс у меню и гамбургера для закрытия
    });
  });

};

smoothScroll();
