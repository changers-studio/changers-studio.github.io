// Rgister plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin)
//

// Smooth scroll
const smoother = ScrollSmoother.create({
	smooth: 4,
	speed: 0.7,
	effects: true,
})
//

// Reviews
const reviews = document.querySelectorAll('.reviews__item')

for (let i = 0; i < reviews.length; i++) {
	reviews[i].addEventListener('click', () => {
		let c = 0
		while (c < reviews.length) {
			reviews[c++].classList.remove('active')
		}

		reviews[i].classList.add('active')
	})
}
//

// Scroll to
const toTop = document.querySelector('.footer__btn')
const toSecondSection = document.querySelector('.main__btn')

toTop.addEventListener('click', () => {
	gsap.to(window, { duration: 2, scrollTo: 0 })
})

toSecondSection.addEventListener('click', () => {
	gsap.to(window, { duration: 1, scrollTo: '#second-section' })
})
//

// Phone mask
Inputmask({
	mask: '+9 999-999-9999',
	showMaskOnHover: false,
}).mask('.input-phone')
//

// Hamburger
const hamburgerOpen = document.querySelector('.header__hamburger')
const hamburgerMenu = document.querySelector('.header__menu')
const hamburgerClose = document.querySelector('.header__menu-close')

if (window.innerWidth <= 960) {
	hamburgerOpen.addEventListener('click', () => {
		document.body.classList.toggle('scroll-disabled')
		hamburgerMenu.classList.toggle('active')
	})

	hamburgerClose.addEventListener('click', () => {
		document.body.classList.remove('scroll-disabled')
		hamburgerMenu.classList.remove('active')
	})
}
//

// Main screen anime
const imageRevealMain = document.querySelector('.image-reveal-main')
const titleRevealMain = document.querySelector('.title-reveal-main')

let titleRevealSplitMain = new SplitText(titleRevealMain, { type: 'words, chars' })
let titleRevealCharsMain = titleRevealSplitMain.chars

gsap.set(titleRevealCharsMain, {
	'will-change': 'opacity, transform',
	opacity: 0,
	rotationX: -90,
	yPercent: 50,
})
gsap.to(titleRevealCharsMain, {
	ease: 'power1.inOut',
	opacity: 1,
	rotationX: 0,
	yPercent: 0,
	stagger: {
		each: 0.03,
		from: 0,
	},
})

gsap.set(imageRevealMain, {
	opacity: 0,
	xPercent: 40,
})
gsap.to(imageRevealMain, {
	ease: 'power4.out',
	duration: 2,
	opacity: 1,
	xPercent: 0,
})
//

// Header anime
// const header = document.querySelector('.header')

// gsap.set(header, {
// 	opacity: 0,
// 	yPercent: -100,
// })
// gsap.to(header, {
// 	duration: 2,
// 	ease: 'power4.out',
// 	opacity: 1,
// 	yPercent: 0,
// })
//

// Text anime
const textReveal = document.querySelectorAll('.text-reveal')

textReveal.forEach((text) => {
	let textRevealSplit = new SplitText(text, { type: 'words, chars' })
	let textRevealChars = textRevealSplit.chars

	gsap.set(textRevealChars, {
		'will-change': 'opacity, transform',
		opacity: 0,
		rotationX: -90,
		yPercent: 50,
	})
	gsap.to(textRevealChars, {
		ease: 'power1.inOut',
		opacity: 1,
		rotationX: 0,
		yPercent: 0,
		stagger: {
			each: 0.03,
			from: 0,
		},
		scrollTrigger: {
			trigger: text,
			start: 'top bottom',
			end: 'bottom center',
			scrub: 0.9,
		},
	})
})
//

// Circles size change
const circles = document.querySelectorAll('.about__data-circle')

circles.forEach((circle) => {
	gsap.set(circle, {
		scale: 0.7,
	})

	gsap.to(circle, {
		ease: 'power4.out',
		scale: 1,
		scrollTrigger: {
			trigger: circle,
			start: 'top bottom',
			end: 'bottom 25%',
			scrub: 1,
		},
	})
})
//

// Horizontal scroll
let xScrollMedia = gsap.matchMedia()

xScrollMedia.add('(min-width: 961px)', () => {
	gsap.to('.x-scroll__container', {
		xPercent: -100,
		x: () => innerWidth,
		ease: 'none',
		scrollTrigger: {
			trigger: '.x-scroll',
			start: 'top top',
			end: () => innerWidth * 3,
			scrub: true,
			pin: true,
			invalidateOnRefresh: true,
			anticipatePin: 1,
		},
	})

	gsap.to('.x-scroll__pagination', {
		width: '100%',
		scrollTrigger: {
			trigger: '.x-scroll',
			start: 'top top',
			end: () => innerWidth * 3,
			scrub: true,
		},
	})
})

//

// const cards = document.querySelectorAll('.card')

// cards.forEach((card) => {
// 	gsap.to(card, {
// 		scrollTrigger: {
// 			trigger: card,
// 			markers: true,
// 			start: 'top bottom',
// 			end: 'bottom center',
// 			scrub: 1,
// 		},
// 	})
// })

// for (let i = 0; i < cards.length; i++) {
// 	cards[i].style.zIndex = i + 2
// }
