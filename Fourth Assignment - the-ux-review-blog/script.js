const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".mobile-nav-btn");
const btnClose = document.querySelector(".mobile-nav__close-btn");
const links = document.querySelectorAll(".mobile-nav__link");

btnOpen.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  overlay.classList.toggle("open");
});

function closeMobileNav() {
  mobileNav.classList.remove("open");
  overlay.classList.remove("open");
}

btnClose.addEventListener("click", closeMobileNav);

links.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

console.log("hello");
console.log(mobileNav);
console.log(overlay);
console.log(btnOpen);
