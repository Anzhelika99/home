const menu = () => {
  const popap = document.getElementById("popap");
  const hamburger = document.getElementById("hamb");

  hamburger.addEventListener("click", () => {
    popap.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
}

menu()