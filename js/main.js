// Fullpage
var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'gplv3-license',
	scrollingSpeed: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',

	fixedElements: '#header',
	sectionSelector: '.section',
	scrollOverflow: true,
	onLeave: function (origin, destination, direction, trigger) {
		var numSections = document.querySelectorAll('.fp-section').length

		if (origin.index == 1 && direction == 'up') {
			$('.header').removeClass('_min-size')
		}

		if (origin.index == 0 && direction == 'down') {
			$('.header').addClass('_min-size')
		}

		if ($(window).width() > 1200) {
			if (destination.index === numSections - 1) {
				$('.header').addClass('_white-text')
			}

			if (destination.index === numSections - 2) {
				$('.header').removeClass('_white-text')
			}
		}
	},
})
//

// Hamburger
if ($(window).width() <= 1200)
	$('.toggleSidebar').on('click', function () {
		$('.header__menu').toggleClass('active')
		$('body').toggleClass('scroll-disabled')
	})
//

// Product slider
$('.product__slider').slick({
	slidesToShow: 3,
	centerMode: true,
	touchMove: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
//
