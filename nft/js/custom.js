document.addEventListener('DOMContentLoaded', () => {
	// Полноэкранный скролл
	$('#fullpage').fullpage({
		menu: '#menu',
		anchors: [
			'main',
			'shelters',
			'security',
			'collection',
			'info',
			'team',
			'buy',
			'faq',
			'contact',
		],
		scrollingSpeed: 800,
		responsiveWidth: 990,
		responsiveHeight: 700,
	})
	// eof

	// Очистка бесполезной инфы от fullpage
	console.clear()
	// eof
})

// Бургер-меню
$(
	'.header__hamburger, .header__hamburger-plug, .header__menu-item, .header__hamburger-plug'
).on('click', () => {
	$('.header__menu').toggleClass('visible')
	$('.header__hamburger-plug').fadeToggle()
})
// eof

// Слайдер приютов
const sheltersSlider = new Swiper('.shelters__slider', {
	spaceBetween: 30,
	slidesPerView: 'auto',
	breakpointsBase: 'container',
	speed: 800,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.shelters__pagination',
		clickable: true,
	},
})
// eof

// Слайдер коллекции
const collectionSlider = new Swiper('.collection__slider', {
	spaceBetween: 15,
	loop: true,
	slidesPerView: 'auto',
	speed: 1000,
	autoplay: {
		delay: 3000,
	},
})
// eof

// Слайдер коллекции моб версия
$('.collection__slider-mobile').slick({
	infinite: true,
	arrows: false,
	centerMode: true,
	cssEase: 'linear',
	speed: 10000,
	autoplay: true,
	autoplaySpeed: 0,
	variableWidth: true,
	swipe: false,
})
// eof

// Слайдер faq
$('.faq__slider').slick({
	arrows: false,
	dots: true,
	speed: 0,
	touchMove: false,
	swipe: false,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				swipe: true,
				speed: 500,
			},
		},
	],
})

$('.faq__captions-item').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})

$('.faq__captions-item-1').on('click', () => {
	$('.faq__slider').slick('slickGoTo', 0)
})

$('.faq__captions-item-2').on('click', () => {
	$('.faq__slider').slick('slickGoTo', 1)
})

$('.faq__captions-item-3').on('click', () => {
	$('.faq__slider').slick('slickGoTo', 2)
})

$('.faq__captions-item-4').on('click', () => {
	$('.faq__slider').slick('slickGoTo', 3)
})

$('.faq__captions-item-5').on('click', () => {
	$('.faq__slider').slick('slickGoTo', 4)
})
// eof

// Калькулятор стоимости
let calcVal = 1
let calcTotal = 8
let calcAdd = $('.buy__calc-add')
let calcSub = $('.buy__calc-sub')

calcAdd.on('click', () => {
	if (calcVal < 10) {
		calcTotal += 8
		calcVal += 1

		$('.buy__calc-total').val(calcTotal / 100)
		$('.buy__calc-val').val(calcVal)
	}
})

calcSub.on('click', () => {
	if (calcVal > 1) {
		calcTotal -= 8
		calcVal -= 1

		$('.buy__calc-total').val(calcTotal / 100)
		$('.buy__calc-val').val(calcVal)
	}
})
// eof
