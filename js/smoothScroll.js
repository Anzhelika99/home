const smoothScroll = () => {
  const hamburger = document.getElementById("hamb"); // Для закрытия меню в мобильной версии
  const popup = document.getElementById("popup-menu"); // Для закрытия меню в мобильной версии

  const scrollTop = document.querySelectorAll(".scroll-top");
  const scrollServices = document.querySelectorAll(".scroll-services");
  const scrollAbout = document.querySelectorAll(".scroll-about");
  const scrollReview = document.querySelectorAll(".scroll-reviews");
  const scrollContacts = document.querySelectorAll(".scroll-contacts");
  const scrollForm = document.querySelectorAll(".scroll-form");

  scrollTop.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".header"), {
        behavior: "smooth",
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

  scrollReview.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".reviews"), {
        behavior: "smooth",
        block: "center",
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

  scrollContacts.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".contacts"), {
        behavior: "smooth",
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

  scrollForm.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      seamless.scrollIntoView(document.querySelector(".form"), {
        behavior: "smooth",
        inline: "center",
      });
    });
  });


};

smoothScroll();
