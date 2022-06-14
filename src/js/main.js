//nav
const desktopNav = document.querySelector('.nav__desktop-menu');
//about-us
const aboutUs = document.querySelector('.about-item--first');
const chooseUs = document.querySelector('.about-item--second');
const mission = document.querySelector('.about-item--third');
const firstInfo = document.querySelector('.about__info-content-text--first');
const secondInfo = document.querySelector('.about__info-content-text--second');
const thirdInfo = document.querySelector('.about__info-content-text--third');
//achievements
const counterItems = document.querySelectorAll(
	'.achievements__card-content-number'
);
const counterBox = document.querySelector('.achievements__cards');
// footer
const footerYear = document.querySelector('.footer__year');

//nav
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
		navInfo.classList.add('nav-info-animation');
	}

	burgerBtn.addEventListener('click', toggleNavMenu);
	navInfoBtn.addEventListener('click', toggleNavInfo);
}
handleNav();

const addNavPosition = () => {
	const navPosition = desktopNav.offsetTop;
	const currentPosition = window.scrollY;

	if (currentPosition >= navPosition + 10) {
		desktopNav.classList.add('nav-position');
	}
};

const removeNavPosition = () => {
	const navPosition = desktopNav.offsetTop;
	const currentPosition = window.scrollY;

	if (currentPosition < 61) {
		desktopNav.classList.remove('nav-position');
	}
};

const handleHomeBtn = () => {
	const homeBtn = document.querySelector('.home-btn');
	const allSections = document.querySelectorAll('.section');
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('section') &&
			section.offsetTop <= currentSection
		) {
			homeBtn.classList.add('home-btn--active');
		} else if (currentSection < 300) {
			homeBtn.classList.remove('home-btn--active');
		}
	});
};

window.addEventListener('scroll', handleHomeBtn);
window.addEventListener('scroll', addNavPosition);
window.addEventListener('scroll', removeNavPosition);

//footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

//about-us

aboutUs.addEventListener('click', () => {
	aboutUs.classList.add('about-item--first--active');
	chooseUs.classList.remove('about-item--second--active');
	mission.classList.remove('about-item--third--active');

	firstInfo.classList.add('about__info-content-text--first--active');
	secondInfo.classList.remove('about__info-content-text--second--active');
	thirdInfo.classList.remove('about__info-content-text--third--active');
});

chooseUs.addEventListener('click', () => {
	aboutUs.classList.remove('about-item--first--active');
	chooseUs.classList.add('about-item--second--active');
	mission.classList.remove('about-item--third--active');

	firstInfo.classList.remove('about__info-content-text--first--active');
	secondInfo.classList.add('about__info-content-text--second--active');
	thirdInfo.classList.remove('about__info-content-text--third--active');
});

mission.addEventListener('click', () => {
	aboutUs.classList.remove('about-item--first--active');
	chooseUs.classList.remove('about-item--second--active');
	mission.classList.add('about-item--third--active');

	firstInfo.classList.remove('about__info-content-text--first--active');
	secondInfo.classList.remove('about__info-content-text--second--active');
	thirdInfo.classList.add('about__info-content-text--third--active');
});

//achievements

const options = {
	rootMargin: '-150px',
};

const startCounter = (entry) => {
	if (entry[0].isIntersecting) {
		counterItems.forEach((item) => {
			const updateCounter = () => {
				const finalNumber = item.getAttribute('data-number');
				const value = parseInt(item.textContent);

				const counterSpeed = finalNumber / 20;

				if (value < finalNumber) {
					item.textContent = `${Math.floor(value + counterSpeed)}`;
					setTimeout(updateCounter, 50);
				} else {
					item.textContent = finalNumber;
				}
			};
			updateCounter();
		});
	}
};

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);

