const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})