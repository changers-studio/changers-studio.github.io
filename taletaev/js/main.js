// Lang dropdown
const langHeading = document.querySelector('.header__lang-heading')
const langDropdown = document.querySelector('.header__lang-dropdown')

langHeading.addEventListener('click', () => {
	langHeading.classList.toggle('active')
	langDropdown.classList.toggle('_hidden')
})
//

// Hamburger
const hamburgerBtn = document.querySelector('.header__hamburger')
const hamburgerMenu = document.querySelector('.header__hamburger-menu')
const hamburgerMenuItems = document.querySelectorAll('.header__menu-item')

hamburgerBtn.addEventListener('click', () => {
	hamburgerBtn.classList.toggle('active')
	hamburgerMenu.classList.toggle('active')

	if (window.innerWidth < 1025) {
		hamburgerMenuItems.forEach((menuItem) => {
			menuItem.addEventListener('click', () => {
				hamburgerBtn.classList.remove('active')
				hamburgerMenu.classList.remove('active')
			})
		})
	}
})
//

// Clients slider
if (window.innerWidth > 1024) {
	const clientsSlider = new Swiper('.clients__slider', {
		slidesPerView: 'auto',
		wrapperClass: 'clients__slider-wrapper',
		speed: 1000,
		navigation: {
			nextEl: '.clients__slider-next',
			prevEl: '.clients__slider-prev',
		},
		autoplay: {
			delay: 5000,
		},
	})
} else {
	const showMore = document.querySelector('.clients__show')
	const clients = document.querySelectorAll('.clients__slider-item._mobile-hidden')

	showMore.addEventListener('click', () => {
		showMore.classList.add('_hidden')

		clients.forEach((client) => {
			client.classList.remove('_mobile-hidden')
		})
	})
}
//

// Feedback form
const inputs = document.querySelectorAll('.feedback__input-field')

inputs.forEach((input) => {
	input.addEventListener('focus', function () {
		this.parentElement.classList.add('focus')
	})

	input.addEventListener('blur', function () {
		this.value.length === 0
			? this.parentElement.classList.remove('focus')
			: this.parentElement.classList.add('focus')
	})
})
//

// Phone mask
Inputmask({
	mask: '(999) 999-9999',
	showMaskOnHover: false,
}).mask('.input-phone')
//
