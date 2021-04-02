let btn = document.querySelector(".menu-btn"),
  burger = document.querySelector(".menu-btn_burger"),
  aside = document.querySelector(".sidebar"),
  nav = document.querySelector(".nav-link"),
  navlink = document.querySelectorAll(".nav-link");

let executed = false;
function togglebtn() {
  if (!executed) {
    burger.classList.add("open");
    aside.classList.add("open");
    nav.classList.add("open");
    executed = true;
  } else {
    burger.classList.remove("open");
    aside.classList.remove("open");
    nav.classList.remove("open");
    executed = false;
  }
}

navlink.forEach(function (link) {
  link.addEventListener("click", function () {
    burger.classList.remove("open");
    aside.classList.remove("open");
    nav.classList.remove("open");
  });
});

/*Burger*/
btn.addEventListener("click", togglebtn);
