let left = document.querySelector(".left-arrow");
let right = document.querySelector(".right-arrow");
let news = document.querySelector(".news");

function scrollRightward() {
  news.scrollLeft += 300;
}

function scrollLeftward() {
  news.scrollLeft -= 300;
}

left.addEventListener("click", scrollLeftward);
right.addEventListener("click", scrollRightward);
