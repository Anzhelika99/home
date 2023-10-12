const menuOpen = () => {
  const popup = document.getElementById("popup-menu");
  const hamburger = document.getElementById("hamb");

  hamburger.addEventListener("click", () => {
    popup.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
}
menuOpen();