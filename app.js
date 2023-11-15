const iconeResponsive = document.querySelector(".icone__responsive");
const navbarItems = document.querySelector(".navbar__items");
const arrItems = document.querySelectorAll(".navbar__item");

iconeResponsive.addEventListener("click", () => {
  if (navbarItems.className === "navbar__items") {
    navbarItems.className += " responsive";
    iconeResponsive.style.width = "30px";
    iconeResponsive.style.top = "5px";
    iconeResponsive.src = "assets/close.svg";
  } else {
    navbarItems.className = "navbar__items";
    iconeResponsive.style.width = "30px";
    iconeResponsive.style.top = "13px";
    iconeResponsive.src = "assets/menu.svg";
  }
});

arrItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbarItems.className = "navbar__items";
    iconeResponsive.src = "assets/menu.svg";
  });
});
