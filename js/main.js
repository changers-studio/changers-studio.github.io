document.addEventListener('DOMContentLoaded', function () {
	// Preloader
	$('.header__menu-item').removeClass('text-anime-apply')
	setTimeout(() => {
		$('.header__menu-item').addClass('text-anime-apply')
	}, 2200)

	$('body').addClass('scroll_disabled')
	setTimeout(() => {
		$('.preloader').fadeOut()
		$('body').removeClass('scroll_disabled')
	}, 2000)

	const rect = document.querySelector('.get-position')
	const logo = document.querySelector('.preloader-logo')

	let bodyRect = document.body.getBoundingClientRect(),
		elemRect = rect.getBoundingClientRect(),
		offsetTop = elemRect.top - bodyRect.top,
		offsetLeft = elemRect.left - bodyRect.left

	gsap.to(logo, {
		duration: 1,
		delay: 1,
		scale: 1,
		transform: 'none',
		left: offsetLeft,
		top: offsetTop,
	})
	// end

	// AOS init
	AOS.init({
		once: true,
		duration: 700,
	})
	// end

	// Input mask
	$('input[type=tel]').inputmask({
		mask: '+99 (999) 999 99 99',
		showMaskOnHover: false,
	})
	// end
})

// AOS refresh
$(window).on('scroll', () => AOS.refresh())
// end

// GSAP START
// Text transform
const textReveal = document.querySelectorAll('.text-anime')
const lines = document.querySelectorAll('.feedback__line')
Splitting({ target: textReveal, by: 'chars' })

gsap.registerPlugin(ScrollTrigger)

textReveal.forEach((item) => {
	gsap.from(item, {
		scrollTrigger: {
			start: 'bottom bottom',
			trigger: item,
			onEnter: () => {
				item.classList.add('text-anime-apply')
			},
		},
	})
})

// Feedback lines
let animateIn = gsap.timeline({
	scrollTrigger: {
		trigger: document.querySelector('.feedback__form'),
		start: 'top bottom',
		end: 'bottom center',
		scrub: true,
	},
})

animateIn.to(lines, {
	width: '100%',
	background: '#E6E6E6',
	ease: 'power4',
})

// Footer line
gsap.from($('.footer'), {
	scrollTrigger: {
		trigger: $('.footer'),
		start: 'top bottom',
		onEnter: () => {
			$('.footer__animated-line').addClass('animated')
		},
	},
})

// GSAP END

// Offices slider
$('.offset__slider').slick({
	infinite: false,
	slidesToShow: 4,
	arrows: false,
	speed: 1000,
	touchMove: false,
	responsive: [
		{
			breakpoint: 992,
			settings: 'unslick',
		},
	],
})
// end

// Reviews slider
$('.reviews__slider').slick({
	infinite: false,
	slidesToShow: 3,
	arrows: false,
	speed: 1000,
	touchMove: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				dots: true,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
// end

// Main slider
$('.main__slider').on('init', function () {
	$('.main__title-part').removeClass('text-anime-apply')

	setTimeout(() => {
		$('.main__title-part').addClass('text-anime-apply')
	}, 2200)
})

$('.main__slider').slick({
	speed: 1000,
	touchMove: false,
	fade: true,
	arrows: false,
	arrowPrev: $('.main__slider-prev'),
	arrowNext: $('.main__slider-next'),
	responsive: [
		{
			breakpoint: 992,
			settings: {
				autoplay: true,
				autoplaySpeed: 8000,
			},
		},
	],
})

$('.main__slider-prev').on('click', function () {
	$('.main__slider').slick('slickPrev')
})

$('.main__slider-next').on('click', function () {
	$('.main__slider').slick('slickNext')
})

$('.main__slider').on('beforeChange', function () {
	$('.main__title-part').removeClass('text-anime-apply')
})

$('.main__slider').on('afterChange', function () {
	$('.main__title-part').addClass('text-anime-apply')
})
// end

// Header langs
$('.dropdown-toggle').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown-toggle').not(this).removeClass('active').next().slideUp()
})

$(document).on('mouseup', (e) => {
	const t = $('.header__langs')

	if (!t.is(e.target) && t.has(e.target).length === 0) {
		$('.header__langs-dropdown').slideUp()
	}
})
// end

// Scroll to top
$('.footer__btn').on('click', () => {
	$('html, body').animate({ scrollTop: 0 }, 1500)
})
// end

// Move links
$(
	'.header__menu-item, .header__sidebar-menu-item, .header__btn, .header__sidebar-btn'
).on('click', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})
// end

// Hamburger
const body = $('body')
const hamburger = $('.header__hamburger')
const sidebar = $('.header__sidebar')
const sidebarPlug = $('.header__sidebar-plug')
const toggleSidebar = $(
	'.header__hamburger, .header__sidebar-close, .header__sidebar-menu-item, .header__sidebar-btn'
)

toggleSidebar.on('click', function () {
	sidebar.toggleClass('visible')
	sidebarPlug.fadeToggle()
	body.toggleClass('scroll_disabled')
})
// end
