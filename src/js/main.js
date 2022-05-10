const burgerBtn = document.querySelector('.burger-btn');
const infoBtn = document.querySelector('.info-btn');
const mobileNav = document.querySelector('.nav__mobile-menu');
const infoNav = document.querySelector('.nav__mobile-info');

burgerBtn.addEventListener('click', () => {
    if(infoNav.classList.contains('nav__mobile-info--active')){
        infoNav.classList.remove('nav__mobile-info--active')
    }
    mobileNav.classList.toggle('nav__mobile-menu--active')
})

infoBtn.addEventListener('click', () => {
    if(mobileNav.classList.contains('nav__mobile-menu--active')) {
        mobileNav.classList.remove('nav__mobile-menu--active')
    }
    infoNav.classList.toggle('nav__mobile-info--active')
})