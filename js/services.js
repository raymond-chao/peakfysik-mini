const nextBtn=document.querySelector('.next-btn');const prevBtn=document.querySelector('.prev-btn');const slides=document.querySelectorAll('.slide');const numberOfSlides=slides.length;let slideNumber=0;nextBtn.onclick=()=>{slides.forEach((slide)=>{slide.classList.remove('active')});slideNumber++;if(slideNumber>(numberOfSlides-1)){slideNumber=0}
slides[slideNumber].classList.add('active')}
prevBtn.onclick=()=>{slides.forEach((slide)=>{slide.classList.remove('active')});slideNumber--;if(slideNumber<0){slideNumber=numberOfSlides-1}
slides[slideNumber].classList.add('active')}
const navMenu=document.getElementById('nav-menu'),navToggle=document.getElementById('nav-toggle'),navClose=document.getElementById('nav-close')
if(navToggle){navToggle.addEventListener('click',()=>{navMenu.classList.add('show-menu')})}
if(navClose){navClose.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})}