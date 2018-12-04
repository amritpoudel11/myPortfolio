const navIcon = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");

navIcon.addEventListener("click", ()=>{
 alert("ok");
    navList.classList.toggle("toggle");
});