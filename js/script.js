const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('mobile_active');
    overlay.classList.add('overlay_active');
    hamburger.style.opacity = '0';
})

close.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile_active');
    overlay.classList.remove('overlay_active');
    hamburger.style.opacity = '1';
})