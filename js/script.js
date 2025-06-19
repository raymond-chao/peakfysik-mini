const scroll = document.getElementById('scrolls');

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    // Move it
    scroll.style.transform = `translate(-50%, ${value * 0.5}px)`;

    // Hide it after scrolling past 100vh (adjust as needed)
    if (value > window.innerHeight * 1) {
        scroll.style.opacity = '0';
        scroll.style.pointerEvents = 'none';
    } else {
        scroll.style.opacity = '1';
        scroll.style.pointerEvents = 'auto';
    }
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".peak-main-logo", { x:900, duration: 1.5,
  });
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}