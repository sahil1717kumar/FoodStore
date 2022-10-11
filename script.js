const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const body = document.querySelector("body");

const video_button = document.querySelector(".video-button")
const content = document.querySelector(".content");
var flag = 1;

const bbody = document.querySelector("body")
const modalBack = document.querySelector(".modal-back")
const menuBtn = document.querySelector(".back-to-menu-btn")
const searchContainer = document.querySelector(".order-modal")
const cartContainer = document.querySelector(".cart-container")
const cart = document.querySelector(".cart-btn")
const search = document.querySelector(".search-btn")
const cancelBtn = document.querySelector(".cancel-order")
menuBtn.addEventListener("click",function(){
  bbody.style.overflow = "auto"
  cartContainer.style.display = "none"
  modalBack.style.display = "none"
})
cart.addEventListener("click",function(){
  bbody.style.overflow = "hidden"
  modalBack.style.display = "block"
  cartContainer.style.display = "flex"
})
cancelBtn.addEventListener("click",function(){
  bbody.style.overflow = "auto"
  searchContainer.style.display = "none"
  modalBack.style.display = "none"
})
search.addEventListener("click",function(){
  bbody.style.overflow = "hidden"
  modalBack.style.display = "block"
  searchContainer.style.display = "block"
})
video_button.addEventListener("click",function(){
  if(flag){
    content.play()
    flag = 0;
  }
  else{
    content.pause()
    flag = 1;
  }
  
})
const toggleNavbar = () => {
  
  nav_header.classList.toggle("active");
  body.classList.toggle("body-mobilenav");
};

mobile_nav.addEventListener("click", () => toggleNavbar());