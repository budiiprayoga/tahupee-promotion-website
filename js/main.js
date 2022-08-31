// =============== SHOW MENU ===============
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// --- MENU SHOW ---
// Validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// --- MENU HIDDEN ---
// Validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// =============== REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Ketika diklik pada nav__link, show-menu akan hilang
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// =============== GSAP ANIMATION ===============
// --- Beranda ---
TweenMax.from('.home__title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__desc', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button', 1, {delay: .7, opacity: 1, y: 10, ease: Expo.easeInOut})
TweenMax.from('.home__tahupee', 1, {delay: .9, opacity: 0, y: 300, ease: Expo.easeInOut})

// --- Produk ---
TweenMax.from('.produk__title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.produk__desc', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.produk__tahupee', 1, {delay: .9, opacity: 0, y: 20, ease: Expo.easeInOut})

// --- Produk ---
TweenMax.from('.about__title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.about__title2', 1, {delay: .4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.about__desc', 1, {delay: .5, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.about__peta', 1, {delay: .4, opacity: 0, y: 20, ease: Expo.easeInOut})