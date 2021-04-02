var btn = document.querySelector(".menu-btn");
let burger = document.querySelector(".menu-btn_burger");
let aside = document.querySelector(".sidebar");
let nav = document.querySelector(".nav-link");
let content = document.querySelectorAll(".dropdown-content");
let dropbtn = document.querySelectorAll(".dropbtn");
let dropdwn = document.querySelectorAll(".dropdown");
let left = document.querySelector(".left-arrow");
let right = document.querySelector(".right-arrow");
let news = document.querySelector(".news");
let navlink = document.querySelectorAll(".nav-link");

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

function scrollRightward() {
  news.scrollLeft += 300;
}

function scrollLeftward() {
  news.scrollLeft -= 300;
}

/*Burger*/
btn.addEventListener("click", togglebtn);
left.addEventListener("click", scrollLeftward);
right.addEventListener("click", scrollRightward);
