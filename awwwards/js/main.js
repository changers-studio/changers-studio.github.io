// Fullpage
const myFullpage = new fullpage('#fullpage', {
	licenseKey: 'gplv3-license',
	scrollingSpeed: 1000,
	scrollBar: false,
	easing: 'ease',
	easingcss3: 'ease',

	sectionSelector: '.section',
	scrollOverflow: true,

	onLeave: function (origin, destination, direction, trigger) {
		// if (origin.index == 1 && direction == 'up') {}
		// if (origin.index == 0 && direction == 'down') {}
	},

	afterLoad: function (origin, destination, direction, trigger) {
		// if (origin.index == 1 && direction == 'up') {}
		// if (origin.index == 0 && direction == 'down') {}
	},
})
//

// Main slider
const mainSlider = new Swiper('.main__slider', {
	direction: 'vertical',
	speed: 600,
	arrows: true,
	pagination: {
		el: '.main__slider-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.main__slider-next',
		prevEl: '.main__slider-prev',
	},
})
//

// Blog slider
const blogSlider = new Swiper('.blog__slider', {
	speed: 600,
	slidesPerView: 'auto',
	freeMode: true,
})
//
