const burgerBtn = document.querySelector('.burger-btn');
const barsIcon = document.querySelector('.fa-bars');
const arrowIcon = document.querySelector('.fa-arrow-left');
const infoBtn = document.querySelector('.info-btn');
const mobileNav = document.querySelector('.nav__mobile-menu');
const infoNav = document.querySelector('.nav__mobile-info');
//about-us
const aboutUs = document.querySelector('.about-item--about');
const chooseUs = document.querySelector('.about-item--choose-us');
const mission = document.querySelector('.about-item--mission');
const firstInfo = document.querySelector('.about__info-content-text--first');
const secondInfo = document.querySelector('.about__info-content-text--second');
const thirdInfo = document.querySelector('.about__info-content-text--third')

burgerBtn.addEventListener('click', () => {
	barsIcon.classList.toggle('hide');
	arrowIcon.classList.toggle('hide');
	if (infoNav.classList.contains('nav__mobile-info--active')) {
		infoNav.classList.remove('nav__mobile-info--active');
	}
	mobileNav.classList.toggle('nav__mobile-menu--active');
});

infoBtn.addEventListener('click', () => {
	if (mobileNav.classList.contains('nav__mobile-menu--active')) {
		mobileNav.classList.remove('nav__mobile-menu--active');
		barsIcon.classList.toggle('hide');
		arrowIcon.classList.toggle('hide');
	}
	infoNav.classList.toggle('nav__mobile-info--active');
});

//about-us

aboutUs.addEventListener('click', () => {
	aboutUs.classList.add('about-item--about--active');
	chooseUs.classList.remove('about-item--choose-us--active');
	mission.classList.remove('about-item--mission--active');

    firstInfo.classList.add('about__info-content-text--first--active');
    secondInfo.classList.remove('about__info-content-text--second--active');
    thirdInfo.classList.remove('about__info-content-text--third--active');

});

chooseUs.addEventListener('click', () => {
	aboutUs.classList.remove('about-item--about--active');
	chooseUs.classList.add('about-item--choose-us--active');
	mission.classList.remove('about-item--mission--active');

    firstInfo.classList.remove('about__info-content-text--first--active');
    secondInfo.classList.add('about__info-content-text--second--active');
    thirdInfo.classList.remove('about__info-content-text--third--active');
});

mission.addEventListener('click', () => {
	aboutUs.classList.remove('about-item--about--active');
	chooseUs.classList.remove('about-item--choose-us--active');
	mission.classList.add('about-item--mission--active');
    
    firstInfo.classList.remove('about__info-content-text--first--active');
    secondInfo.classList.remove('about__info-content-text--second--active');
    thirdInfo.classList.add('about__info-content-text--third--active');
});

