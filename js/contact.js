let kontakta = document.getElementById('kontakta');
let oss = document.getElementById('oss');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    kontakta.style.left = value * 1.5 + 'px';
    oss.style.left = value * -1.5 + 'px';
});

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail () {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email:${email.value}<br> 
    Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

    Email.send({
        SecureToken : "",
        Host : "s1.maildns.net", // Replace with your SMTP server
        Username : "peakfysik.pf@gmail.com",
        Password : "password",
        To : 'peakfysik.pf@gmail.com',
        From : "peakfysik.pf@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Ditt meddelande har skickats!",
                    text: "Vi kommer att kontakta dig så snart som möjligt.",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs(){
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value == '') {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }
        if (items[1].value !== '') {
            checkEmail();
        }
        items[1].addEventListener('keyup', () => {
            checkEmail();
        });
        item.addEventListener('keyup', () => {
            if (item.value !== '') {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }
            else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    }    
}

function checkEmail () {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector('.error-txt.email');

    if (!email.value.match(emailRegex)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email.value !== '') {
            errorTxtEmail.innerText = 'Ogiltig e-postadress';
        }
        else {
            errorTxtEmail.innerText = 'E-post kan inte vara blank';
        }
    }
    else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains('error')&& 
    !email.classList.contains('error')&& 
    !phone.classList.contains('error')&& 
    !subject.classList.contains('error')&& 
    !mess.classList.contains('error')) {
        sendEmail();

        form.reset();
        return false;
    } 
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