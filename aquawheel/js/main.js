// AOS
AOS.init({
	duration: 1000,
	once: true,
})

$(window).on('load scroll', function () {
	AOS.refresh()
})
//

// Dropdown
$('.dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown-heading').not(this).removeClass('active').next().slideUp()
})

$(document).on('click', (e) => {
	const dropdownHead = $('.dropdown-heading')
	const dropdownBody = $('.dropdown-heading').next()

	if (
		!dropdownHead.is(e.target) &&
		dropdownHead.has(e.target).length === 0 &&
		!dropdownBody.is(e.target) &&
		dropdownBody.has(e.target).length === 0
	) {
		dropdownBody.slideUp().prev().removeClass('active')
	}
})
//

// Main slider
$('.main__slider').slick({
	infinite: false,
	speed: 1000,
	fade: true,
	autoplay: true,
	autoplaySpeed: 3000,
	prevArrow: $('.main__nav-prev'),
	nextArrow: $('.main__nav-next'),
	responsive: [
		{
			breakpoint: 960,
			settings: {
				infinite: true,
				dots: true,
			},
		},
	],
})
//

// Ticker slider
new Swiper('.ticker', {
	slidesPerView: 'auto',
	loop: !0,
	autoplay: {
		delay: 0,
		stopOnLastSlide: !1,
		disableOnInteraction: !0,
	},
	speed: 3200,
})

new Swiper('.ticker-rtl', {
	slidesPerView: 'auto',
	loop: !0,
	dir: 'rtl',
	autoplay: {
		delay: 0,
		stopOnLastSlide: !1,
		disableOnInteraction: !0,
	},
	speed: 3200,
}).changeLanguageDirection('rtl')
//

// Modal
$('.mfp').on('click', function () {
	let modal = $(this).attr('href')
	$(modal).addClass('active')
	$('body').addClass('scroll-disabled')
})

$('.modal__close').click(function () {
	$('.modal').removeClass('active')
	$('body').removeClass('scroll-disabled')
})
//

// Hamburger
$('.toggleSidebar').on('click', function () {
	$('.header__hamburger').fadeToggle()
	$('body').toggleClass('scroll-disabled')
})
//

// Fancybox
$('[data-fancybox]').fancybox({
	infobar: false,
	buttons: ['close'],
	animationEffect: false,
	btnTpl: {
		close:
			'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
			'<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.69" d="M1 1.41089L44.3973 44.8081" stroke="white" stroke-width="2.63014"/><path opacity="0.69" d="M44.3972 1.41089L0.999958 44.8081" stroke="white" stroke-width="2.63014"/></svg>' +
			'</button>',

		arrowLeft:
			'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
			'<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.189 11.0274L1.8876 11.0274M1.8876 11.0274L11.7506 20.8904M1.8876 11.0274L11.7506 1.16435" stroke="#43ACDF" stroke-width="2.63014"/></svg>' +
			'</button>',

		arrowRight:
			'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
			'<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.714355 11.0273H27.0157M27.0157 11.0273L17.1527 1.16431M27.0157 11.0273L17.1527 20.8903" stroke="#43ACDF" stroke-width="2.63014"/></svg>' +
			'</button>',
	},
})
//

// Tabs
$('.tabs__caption').on('click', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.tabs')
		.find('.tabs__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})
//
