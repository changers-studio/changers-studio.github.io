// Rgister plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)
//

// Preloader
if (document.querySelector('.preloader')) {
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
}
//

// Smooth scroll
const smoother = ScrollSmoother.create({
	smooth: 3,
	effects: true,
})
//

// Text reveal
const elemsReveal = document.querySelectorAll('.reveal-text')
elemsReveal.forEach((elem) => {
	let htmlElem = elem.innerHTML
	let newHtmlElem = `<span class='reveal-text__container'>${htmlElem}</span>`
	elem.innerHTML = newHtmlElem
})

const elemsRevealWrap = document.querySelectorAll('.reveal-text__container')
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

// Text reveal
const titleReveal = document.querySelectorAll('.reveal-title')
titleReveal.forEach((elem) => {
	let htmlTitle = elem.innerHTML
	let newHtmlTitle = `<span class='reveal-title__container'>${htmlTitle}</span>`
	elem.innerHTML = newHtmlTitle
})

const titleRevealWrap = document.querySelectorAll('.reveal-title__container')
titleRevealWrap.forEach((target) => {
	gsap
		.timeline({
			paused: true,
			scrollTrigger: { trigger: target },
		})
		.to(target, {
			duration: 1.5,
			yPercent: -125,
			delay: 0.2,
			ease: 'power4.out',
		})
})
//

// Text change
if (document.querySelector('.values__title')) {
	window.addEventListener('load', () => {
		const valuesTitle = document.querySelector('.values__title')
		let valuesTitleHtml = valuesTitle.innerHTML
		let newvaluesTitleHtml = `<span class='values__title-container'>${valuesTitleHtml}</span>`
		valuesTitle.innerHTML = newvaluesTitleHtml

		const valuesTitleWrap = document.querySelector('.values__title-container')
		gsap
			.timeline({
				paused: true,
				scrollTrigger: { trigger: valuesTitle },
			})
			.to(valuesTitleWrap, {
				duration: 1.5,
				yPercent: -100,
				delay: 0.2,
				ease: 'power4.out',
			})

		let targets = gsap.utils.toArray('.values__title-items .change')
		let dur = 0.5
		let hold = 3

		targets.forEach((obj, i) => {
			let tl = gsap.timeline({
				delay: dur * i + hold * i - 0.5,
				repeat: -1,
				repeatDelay: (targets.length - 1) * (dur + hold) - dur + 0.5,
				defaults: {
					ease: 'none',
					duration: dur,
					opacity: 1,
				},
				paused: true,
				scrollTrigger: { trigger: obj },
			})

			tl.from(obj, { yPercent: 30, opacity: 0 })
			tl.to(obj, { yPercent: -30, opacity: 0 }, '+=' + (hold - 0.5))
		})
	})
}
//

// Image reveal
const revealImage = document.querySelectorAll('.reveal-image')
revealImage.forEach((target) => {
	gsap
		.timeline({
			paused: true,
			scrollTrigger: {
				trigger: target,
				start: '-50%, bottom',
			},
		})
		.from(target, {
			duration: 1.5,
			yPercent: 100,
			ease: 'power3.out',
		})
})
//

// Hamburger
const hamburgerBtn = document.querySelector('.header__menu-btn')
const hamburgerMenu = document.querySelector('.header__menu-wrap')
let done = true

function setOpacity(opacity) {
	hamburgerMenu.style.opacity = opacity / 100
	hamburgerMenu.style.filter = 'alpha(opacity=' + opacity + ')'
}

function fadeOut(opacity) {
	setOpacity(opacity)
	if (opacity == 1) {
		hamburgerMenu.style.display = 'none'
		done = true
	}
}

function fadeIn(opacity) {
	setOpacity(opacity)
	if (opacity == 1) {
		hamburgerMenu.style.display = 'flex'
	}
	if (opacity == 100) {
		done = true
	}
}

hamburgerBtn.addEventListener('click', () => {
	const logo = document.querySelector('.header__logo-img')

	gsap.to(window, { duration: 1, scrollTo: 0 })

	document.body.classList.toggle('scroll-disabled')
	hamburgerBtn.classList.toggle('active')
	hamburgerMenu.classList.toggle('active')

	if (hamburgerBtn.classList.contains('active')) {
		hamburgerBtn.innerHTML = 'Back'

		if (document.body.classList.contains('isnohome')) {
			logo.src = '../img/logo.svg'
		}

		for (i = 1; i <= 100; i++) {
			setTimeout('fadeIn(' + (0 + i) + ')', i * 5)
		}
	} else {
		hamburgerBtn.innerHTML = 'Menu'

		for (i = 1; i <= 100; i++) {
			setTimeout('fadeOut(' + (100 - i) + ')', i * 5)
		}

		if (document.body.classList.contains('isnohome')) {
			logo.src = '../img/logo-black.svg'
		}
	}
})
//

// Main screen slider
const mainSlider = new Swiper('.main__slider', {
	speed: 500,
	effect: 'fade',
	autoplay: {
		delay: 6000,
	},
})
//

// Phone mask
Inputmask({
	mask: '+ 9 999-999-9999',
	showMaskOnHover: false,
}).mask('.input-phone')
//

// Scroll to
const toTop = document.querySelector('.footer__scroll-top')

toTop.addEventListener('click', () => {
	gsap.to(window, { duration: 2, scrollTo: 0 })
})
//

// Fancybox
Fancybox.bind('[data-fancybox]')
//
