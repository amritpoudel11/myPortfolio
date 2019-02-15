
const navIcon = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navImage = document.querySelector(".nav__img");
const navBar = document.querySelector(".nav__left");

const aboutMe = document.querySelector(".aboutMe");
const certificateBox = document.querySelector(".certificate-box");
const footer = document.querySelector(".footer");
const portfolio = document.querySelector(".portfolio");

//**** */navBar**
navIcon.addEventListener("click", ()=>{
    navList.classList.toggle("toggle");
});

//navbar scroll Event
window.onscroll =function(e){
const scrolled = window.scrollY;
const scrollAboutMe = document.documentElement.scrollHeight - (aboutMe.clientHeight + window.innerHeight + 70);
const scrollAfter = document.documentElement.scrollHeight - (certificateBox.clientHeight + footer.clientHeight + 75);

 if(scrolled >= scrollAboutMe && scrolled < scrollAfter){
     navIcon.style.color = "#b1b1b1";
     navImage.setAttribute('src', 'resources/logosilver.png');
 }
 else{
    navIcon.style.color = "#7E31ED";
    navImage.setAttribute('src', 'resources/logopurple.png');
 }
}

//** Hero Scroll About Button */
const btnHeader = document.querySelector(".btn-header");
btnHeader.addEventListener("click", function(){
    aboutMe.scrollIntoView();
});

// ** navigation link Area **
const portfolioLink = document.querySelector(".nav__list--portfolio");
const aboutLink = document.querySelector(".nav__list--about");
const certificateLink = document.querySelector(".nav__list--certificate");

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
