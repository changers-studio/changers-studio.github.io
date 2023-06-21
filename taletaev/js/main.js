// Rgister plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)
//

// Smooth scroll
const smoother = ScrollSmoother.create({
	smooth: 3,
	effects: true,
})
//

// Text reveal
const elemsReveal = document.querySelectorAll('.reveal-anime')
elemsReveal.forEach((elem) => {
	let htmlElem = elem.innerHTML
	let newHtmlElem = `<div class='reveal-anime__container'>${htmlElem}</div>`
	elem.innerHTML = newHtmlElem
})

const elemsRevealWrap = document.querySelectorAll('.reveal-anime__container')
elemsRevealWrap.forEach((target) => {
	gsap
		.timeline({
			paused: true,
			scrollTrigger: { trigger: target },
		})
		.to(target, {
			duration: 1.5,
			yPercent: -100,
			delay: 0.2,
			ease: 'power4.out',
		})
})
//

// Image reveal
gsap
	.timeline({
		paused: true,
		scrollTrigger: {
			trigger: '.about__image',
			start: 'center, 80%',
		},
	})
	.to('.about__image-inner', {
		duration: 2.5,
		xPercent: -100,
		ease: 'power3.out',
		stagger: 0.1,
	})
//

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
	document.body.classList.toggle('scroll-disabled')
	hamburgerBtn.classList.toggle('active')
	hamburgerMenu.classList.toggle('active')

	if (window.innerWidth < 1025) {
		hamburgerMenuItems.forEach((menuItem) => {
			menuItem.addEventListener('click', () => {
				document.body.classList.remove('scroll-disabled')
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
		slidesPerGroup: 5,
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

// Scroll to
const toTop = document.querySelector('.footer__btn')
const scrollElem = document.querySelectorAll('.scroll-to')

toTop.addEventListener('click', () => {
	gsap.to(window, { duration: 2, scrollTo: 0 })
})

scrollElem.forEach((elem) => {
	elem.addEventListener('click', () => {
		let section = elem.dataset.scrollTo
		console.log(section)
		gsap.to(window, { duration: 1, scrollTo: `#${section}` })
	})
})
//
