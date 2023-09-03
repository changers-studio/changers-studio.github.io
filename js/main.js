// Rgister plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin)
//

// Smooth scroll
const smoother = ScrollSmoother.create({
	smooth: 4,
	speed: 0.7,
	smoothTouch: 0.5,
	effects: true,
})
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

	gsap.to('.preloader__content', {
		duration: 1,
		opacity: 0,
		delay: 0.3,
		ease: 'power4.in',
	})

	gsap.to('.preloader', {
		duration: 1,
		yPercent: -100,
		delay: 1,
		ease: 'power4.in',
	})

	setTimeout(() => {
		document.body.classList.remove('scroll-disabled')
	}, 3000)
})
//

// Main screen anime
const textRevealMain = document.querySelectorAll('.text-reveal-main')

textRevealMain.forEach((text) => {
	let textRevealSplitMain = new SplitText(text, { type: 'words, chars' })
	let textRevealCharsMain = textRevealSplitMain.chars

	gsap.set(textRevealCharsMain, {
		'will-change': 'opacity, transform',
		opacity: 0,
		rotationX: -90,
		yPercent: 50,
	})
	gsap.to(textRevealCharsMain, {
		ease: 'power1.inOut',
		opacity: 1,
		rotationX: 0,
		yPercent: 0,
		delay: 2.2,
		stagger: {
			each: 0.03,
			from: 0,
		},
	})
})
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
			end: 'bottom 65%',
			scrub: 0.9,
		},
	})
})
//

// Header
const menuDropdown = $('.header__menu-dropdownHeading')
const langDropdown = $('.header__lang-heading')

function headerDropdown(target) {
	target.on('click', function () {
		$(this).toggleClass('active').next().slideToggle()
	})

	$(document).on('click', (e) => {
		const dropdownHead = target
		const dropdownBody = target.next()

		if (
			!dropdownHead.is(e.target) &&
			dropdownHead.has(e.target).length === 0 &&
			!dropdownBody.is(e.target) &&
			dropdownBody.has(e.target).length === 0
		) {
			dropdownBody.hide().prev().removeClass('active')
		}
	})
}

headerDropdown(menuDropdown)
headerDropdown(langDropdown)

gsap.to('.header__container, .header__lang-dropdown, .header__menu-dropdownBody', {
	ease: 'power4.out',
	backgroundColor: '#4FA778',
	scrollTrigger: {
		trigger: '.main-screen',
		start: '75% 25%',
		end: 'bottom 25%',
		scrub: 1,
	},
})
//

// Hamburger menu
const hamburgerOpen = document.querySelector('.header__hamburger')
const hamburgerSidebar = document.querySelector('.header__sidebar')
const hamburgerSidebarItems = document.querySelectorAll('.header__menu-item')
const hamburgerClose = document.querySelector('.header__sidebar-close')

if (window.innerWidth <= 960) {
	hamburgerOpen.addEventListener('click', () => {
		document.body.classList.toggle('scroll-disabled')
		hamburgerSidebar.classList.toggle('active')
	})

	hamburgerClose.addEventListener('click', () => {
		document.body.classList.remove('scroll-disabled')
		hamburgerSidebar.classList.remove('active')
	})

	hamburgerSidebarItems.forEach((item) => {
		item.addEventListener('click', () => {
			document.body.classList.remove('scroll-disabled')
			hamburgerSidebar.classList.remove('active')
		})
	})
}
//

// Main screen
new SplitText(document.querySelector('.main-screen__bottom-text'), {
	type: 'words, chars',
	wordsClass: 'word',
})

$('.main-screen__slider').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
	fade: true,
	prevArrow: $('.main-screen__slider-prev'),
	nextArrow: $('.main-screen__slider-next'),
})

$('.main-screen__slider').on('afterChange', function (event, slick) {
	$('.main-screen__slider-counter').html(
		`0${slick.slickCurrentSlide() + 1}/<span class="_opacity">0${slick.slideCount}</span>`
	)
})
//

// Calculation
$('.calc-container__options-item').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})

$('.range-input').ionRangeSlider({
	skin: 'round',
	min: 50,
	max: 1000000,
	from: 100000,
	postfix: ' $',
})
//

// About us
new SplitText(document.querySelector('.about__bottom-text'), {
	type: 'words, chars',
	wordsClass: 'word',
})

// Horizontal scroll
const xScroll = document.querySelector('.x-scroll')
let xScrollMedia = gsap.matchMedia()

if ($(window).width() > 960) {
	xScrollMedia.add('(min-width: 961px)', () => {
		gsap.to('.x-scroll__container', {
			xPercent: -100,
			x: () => innerWidth,
			ease: 'none',
			scrollTrigger: {
				trigger: xScroll,
				start: 'bottom bottom',
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
				trigger: xScroll,
				start: 'bottom bottom',
				end: () => innerWidth * 3,
				scrub: true,
			},
		})
	})
} else {
	$('.about__container').slick({
		infinite: false,
		speed: 500,
		prevArrow: $('.about__arrow-prev'),
		nextArrow: $('.about__arrow-next'),
	})
}

$(window).on('resize', function () {
	if ($(window).width() > 960) {
		$('.about__container').slick('destroy')
	}
})
//

// Bonus
new SplitText(document.querySelector('.bonus__bottom-text'), {
	type: 'words, chars',
	wordsClass: 'word',
})
//

// Documents
$('.docs__slider').slick({
	slidesToShow: 4,
	infinite: false,
	speed: 500,
	variableWidth: true,
	prevArrow: $('.docs__slider-prev'),
	nextArrow: $('.docs__slider-next'),
	responsive: [
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
			},
		},
	],
})

$('.docs__slider').on('afterChange', function (event, slick) {
	$('.docs__counter').html(`0${slick.slickCurrentSlide() + 1}/0${slick.slideCount}`)
})
//

// Scroll to
const toTop = document.querySelector('.footer__btn')

toTop.addEventListener('click', () => {
	gsap.to(window, { duration: 2, scrollTo: 0 })
})
//
