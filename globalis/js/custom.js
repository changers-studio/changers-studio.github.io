$(function () {
	//
})

// Слайдер сервисов на главной странице
var servicesSlider = new Swiper('.services__slider', {
	spaceBetween: 30,
	slidesPerView: 'auto',
	speed: 1500,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
})
// eof

// Слайдер сервисов на главной странице
var blogSlider = new Swiper('.blog__slider', {
	speed: 1500,
	breakpointsBase: 'container',
	breakpoints: {
		992: {
			spaceBetween: 30,
			slidesPerView: 'auto',
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
	},
	autoplay: {
		delay: 8000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
})
// eof

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.tabs')
		.find('.tabs__content')
		.hide()
		.eq($(this).index())
		.fadeIn(1000)
})
