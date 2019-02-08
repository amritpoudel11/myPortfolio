
const navIcon = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navImage = document.querySelector(".nav__img");
const navBar = document.querySelector(".nav__left");

const aboutMe = document.querySelector(".aboutMe");
const certificateBox = document.querySelector(".certificate-box");
const footer = document.querySelector(".footer");

//navBar
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

