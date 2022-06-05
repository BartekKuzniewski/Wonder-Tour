const desktopNav = document.querySelector('.nav__desktop-menu');
//about-us
const aboutUs = document.querySelector('.about-item--about');
const chooseUs = document.querySelector('.about-item--choose-us');
const mission = document.querySelector('.about-item--mission');
const firstInfo = document.querySelector('.about__info-content-text--first');
const secondInfo = document.querySelector('.about__info-content-text--second');
const thirdInfo = document.querySelector('.about__info-content-text--third');
// footer
const footerYear = document.querySelector('.footer__year');

function handleNav() {
	const burgerBtn = document.querySelector('.burger-btn');
	const navIcon = document.getElementById('nav-btn');
	const navMobile = document.querySelector('.nav__mobile-menu');
	const navInfo = document.querySelector('.nav__mobile-info');
	const navInfoBtn = document.querySelector('.info-btn');
	const allNavItems = document.querySelectorAll('.nav__mobile-menu-items');

	function toggleIcons() {
		navIcon.classList.toggle('fa-bars');
		navIcon.classList.toggle('fa-arrow-left');
	}

	function burgerAnimation() {
		burgerBtn.classList.add('nav-btn-animation');
		setTimeout(() => {
			burgerBtn.classList.remove('nav-btn-animation');
		}, 400);
	}
	function toggleNavMenu() {

		toggleIcons();

		if (navInfo.classList.contains('nav__mobile-info--active')) {
			navInfo.classList.remove('nav__mobile-info--active');
		}

		navMobile.classList.toggle('nav__mobile-menu--active');

		burgerAnimation();

		allNavItems.forEach((item) => {
			item.addEventListener('click', () => {
				navMobile.classList.remove('nav__mobile-menu--active');
				navIcon.classList.remove('fa-arrow-left');
				navIcon.classList.add('fa-bars');
				burgerAnimation();
			});
		});
	}

	function toggleNavInfo() {
		if (navMobile.classList.contains('nav__mobile-menu--active')) {
			navMobile.classList.remove('nav__mobile-menu--active');
			toggleIcons();
		}
		navInfo.classList.toggle('nav__mobile-info--active');
		navInfo.classList.add('nav-info-animation')
	}

	burgerBtn.addEventListener('click', toggleNavMenu);
	navInfoBtn.addEventListener('click', toggleNavInfo);
}
handleNav();
///

const addNavPosition = () => {
	const navPosition = desktopNav.offsetTop;
	const currentPosition = window.scrollY;
	console.log(navPosition);
	console.log(currentPosition);

	if (currentPosition >= navPosition + 10) {
		desktopNav.classList.add('nav-position');
	}
};

const removeNavPosition = () => {
	const navPosition = desktopNav.offsetTop;
	const currentPosition = window.scrollY;
	console.log(navPosition);
	console.log(currentPosition);

	if (currentPosition < 61) {
		desktopNav.classList.remove('nav-position');
	}
};

window.addEventListener('scroll', addNavPosition);
window.addEventListener('scroll', removeNavPosition);
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

//footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
