const burgerBtn = document.querySelector('.burger-btn');
const barsIcon = document.querySelector('.fa-bars')
const arrowIcon = document.querySelector('.fa-arrow-left')
const infoBtn = document.querySelector('.info-btn');
const mobileNav = document.querySelector('.nav__mobile-menu');
const infoNav = document.querySelector('.nav__mobile-info');

burgerBtn.addEventListener('click', () => {
    barsIcon.classList.toggle('hide');
    arrowIcon.classList.toggle('hide');
    if(infoNav.classList.contains('nav__mobile-info--active')){
        infoNav.classList.remove('nav__mobile-info--active')
    }
    mobileNav.classList.toggle('nav__mobile-menu--active');
})

infoBtn.addEventListener('click', () => {
    if(mobileNav.classList.contains('nav__mobile-menu--active')) {
        mobileNav.classList.remove('nav__mobile-menu--active');
        barsIcon.classList.toggle('hide');
        arrowIcon.classList.toggle('hide');
    }
    infoNav.classList.toggle('nav__mobile-info--active')
})