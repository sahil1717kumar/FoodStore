const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const body = document.querySelector("body");

const video_button = document.querySelector(".video-button")
const content = document.querySelector(".content");
var flag = 1;
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