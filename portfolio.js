//alert
Swal.fire(
    "This Portfolio is under Construction. This is just the initial layout. Thank You. Cheers!!"
  );
//navBar
const navIcon = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");

navIcon.addEventListener("click", ()=>{
    navList.classList.toggle("toggle");
});