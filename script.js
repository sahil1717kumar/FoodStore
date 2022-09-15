const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const body = document.querySelector("body");

const toggleNavbar = () => {
  
  nav_header.classList.toggle("active");
  body.classList.toggle("body-mobilenav");
};

mobile_nav.addEventListener("click", () => toggleNavbar());