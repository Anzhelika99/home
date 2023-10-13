const popupOpen = () => {
  const popupLinks = document.querySelectorAll(".popup-link");

  const body = document.querySelector("body");
  const popupCloseImg = document.querySelectorAll(".close-popup");

  let unlock = true;

  const timeout = 400;

  popupLinks.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const popupName = elem.getAttribute("href").replace("#", "");
      const currPopup = document.getElementById(popupName);
      popupOpen(currPopup);
      e.preventDefault();
    });
  });

  popupCloseImg.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      popupClose(elem.closest(".popup"));

      e.preventDefault();
    });
  });

  const popupOpen = (currPopup) => {
    if (currPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");

      if (popupActive) {
        popupClose(popupActive);
      } else {
        bodyLock();
      }

      currPopup.classList.add("open");
      currPopup.addEventListener("click", (event) => {
        if (!event.target.closest(".popup__content")) {
          popupClose(event.target.closest(".popup"));
        }
      });
    }
  };

  const popupClose = (popupActive, doUnlock = true) => {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
  };

  const bodyLock = () => {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  };

  const bodyUnlock = () => {
    setTimeout(() => {
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  };
  //Полифил
  (function () {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
        var node = this;

        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  })();
  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
  })();
};
popupOpen();
