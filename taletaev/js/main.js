// Rgister plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)
//

// Preloader
document.body.classList.add('scroll-disabled')

window.addEventListener('load', () => {
	function number_to(id, from, to, duration) {
		var element = document.getElementById(id)
		var start = new Date().getTime()
		setTimeout(function () {
			var now = new Date().getTime() - start
			var progress = now / duration
			var result = Math.floor((to - from) * progress + from)
			element.innerHTML = progress < 1 ? result : to
			if (progress < 1) setTimeout(arguments.callee, 10)
		}, 20)
	}
	number_to('prelodaer-count', 0, 100, 1000)

	gsap.to('.preloader__counter', {
		duration: 1,
		opacity: 0,
		delay: 1.2,
		ease: 'power4.in',
	})

	gsap.to('.preloader', {
		duration: 1,
		yPercent: -100,
		delay: 2,
		ease: 'power4.in',
	})

	setTimeout(() => {
		document.body.classList.remove('scroll-disabled')
	}, 3000)
})
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

gsap.to('.main__title-inner', {
	duration: 1.5,
	yPercent: -100,
	delay: 3,
	ease: 'power4.out',
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
		gsap.to(window, { duration: 1, scrollTo: `#${section}` })
	})
})
//

// Fancybox
const showModal = document.querySelectorAll('.show-modal')

if (showModal.length) {
	showModal.forEach((btn) => {
		btn.addEventListener('click', () => {
			Fancybox.show([
				{
					src: '#modal',
					type: 'inline',
				},
			])
		})
	})
}
//

// Form
const forms = document.querySelectorAll('.feedback__form')

forms.forEach((form) => {
	form.addEventListener('submit', async (e) => {
		e.preventDefault()

		let targetForm = e.currentTarget
		let url = 'mail.php'

		try {
			let formFields = new FormData(targetForm)
			let responseData = await postFormFieldsAsJson({ url, formFields })
		} catch (error) {
			console.error(`An has occured ${error}`)
		}
	})
})

async function postFormFieldsAsJson({ url, formData }) {
	let formDataObject = Object.fromEntries(formData.entries())
	let formDataJsonString = JSON.stringify(formDataObject)

	let fetchOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: formDataJsonString,
	}

	let res = await fetch(url, fetchOptions)

	if (res.ok) {
		let error = await res.text()
		throw new Error(error)
	} else {
		Fancybox.show([
			{
				src: '#modal-thx',
				type: 'inline',
			},
		])
	}
}
//
