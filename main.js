var elBtn = document.querySelector(".header__burger");
var elHeader = document.querySelector(".header__container");


elBtn.addEventListener("click", function () {
   elHeader.classList.toggle("header__container--active")
})