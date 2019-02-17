
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

//**** */navBar**
navIcon.addEventListener("click", ()=>{
    navList.classList.toggle("toggle");
});

//navbar scroll Event
window.onscroll =function(e){
const scrolled = window.scrollY;
const scrollAboutMe = document.documentElement.scrollHeight - (aboutMe.clientHeight + window.innerHeight + 40);
const scrollAfter = document.documentElement.scrollHeight - (certificateBox.clientHeight + footer.clientHeight + 40);
//const scrollNav = window.navBar.innerHeight;

 if(scrolled >= scrollAboutMe && scrolled < scrollAfter){
     navIcon.style.color = "#b1b1b1";
     navImage.setAttribute('src', 'resources/logosilver.png');
 }
 else{
    navIcon.style.color = "#7E31ED";
    navImage.setAttribute('src', 'resources/logopurple.png');
 }

 // hiding nav-header on scroll

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

// ** navigation link Area **
const homeLink = document.querySelector(".nav__list--home");
const portfolioLink = document.querySelector(".nav__list--portfolio");
const aboutLink = document.querySelector(".nav__list--about");
const certificateLink = document.querySelector(".nav__list--certificate");

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
// check if form is valid

sendBtn.addEventListener("click", function(){
    if(inputEmail.validity.valid && inputMessage.validity.valid){
    popupForm.style.display = "none";
    thankyou.style.display = "flex";
    }
})
btnReturn.addEventListener("click", function(){
    popUp.style.display = "none";
})
