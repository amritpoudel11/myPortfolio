//variables
const navIcon = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navImage = document.querySelector(".nav__img");
const navBar = document.querySelector(".nav__left");
const navHeader = document.querySelector(".nav__header");

const aboutMe = document.querySelector(".aboutMe");
const certificateBox = document.querySelector(".certificate-box");
const footer = document.querySelector(".footer");
const portfolio = document.querySelector(".portfolio");
const home = document.querySelector("#Home");

const homeLink = document.querySelector(".nav__list--home");
const portfolioLink = document.querySelector(".nav__list--portfolio");
const aboutLink = document.querySelector(".nav__list--about");
const certificateLink = document.querySelector(".nav__list--certificate");

const contactClick = document.querySelector(".click-contact");
const popupClose = document.querySelectorAll(".popUp__close");
const popUp = document.querySelector(".popUp");
const popupForm = document.querySelector(".popUp__form");
const navContact = document.querySelector(".nav__list--contact");

const sendBtn = document.querySelector(".btn-message");
const thankyou = document.querySelector(".thankyou");
const btnReturn = document.querySelector(".btn-return");

const inputEmail= document.querySelector('#email');
const inputMessage= document.querySelector('#message');


//**** */navBar**
navIcon.addEventListener("click", ()=>{
    navList.classList.toggle("toggle");
});

window.onscroll =function(e){
const scrolled = window.scrollY;

if(scrolled > 100){
    navHeader.style.color = "transparent";
}else{
    navHeader.style.color = "#7E31ED";
}
}

//** Hero Scroll About Button */
const btnHeader = document.querySelector(".btn-header");
btnHeader.addEventListener("click", function(){
    aboutMe.scrollIntoView();
});

// ** navbar navigation link Area **

homeLink.addEventListener("click", function(){
    home.scrollIntoView();
    navList.classList.toggle("toggle");
});
portfolioLink.addEventListener("click", function(){
    portfolio.scrollIntoView();
    navList.classList.toggle("toggle");
});
aboutLink.addEventListener("click", function(){
    aboutMe.scrollIntoView();
    navList.classList.toggle("toggle");
});
certificateLink.addEventListener("click", function(){
    certificateBox.scrollIntoView();
    navList.classList.toggle("toggle");
});

//*** Certificates****

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("certificate");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block";
}

//***popup message box */
contactClick.addEventListener("click", function(){
    popUp.style.display = "block";
});
navContact.addEventListener("click", function(){
    popUp.style.display = "block";
    navList.classList.toggle("toggle");
});
popupClose.forEach(function(e){
    e.addEventListener("click", function(){
        popUp.style.display = "none";   
    })
})

//form handling
sendBtn.addEventListener("click", function(){
    if(inputEmail.validity.valid && inputMessage.validity.valid){
    popupForm.style.display = "none";
    thankyou.style.display = "flex";
    }
})
btnReturn.addEventListener("click", function(){
    popUp.style.display = "none";
})
