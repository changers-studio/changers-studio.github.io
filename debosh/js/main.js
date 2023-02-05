// AOS
AOS.init({
	once: true,
	duration: 800,
})

$(window).on('scroll', function () {
	AOS.refresh()
})
//

// Hamburger menu
if ($(window).width() <= 922) {
	$('.toggleSidebar').on('click', function () {
		$('.header__hamburger').toggleClass('active')
		$('.header__hamburger-menu').toggleClass('visible')
		$('body').toggleClass('scroll_disabled')
	})
}
//

// Input mask
if ($("*").is('.input-phone')) {
	$('.input-phone').inputmask({
		mask: '(999) 99 99 999',
		showMaskOnHover: false,
		placeholder: '',
	})
}
//


// Slider
if ($('*').is('.portfolio__slider')) {
	$('.portfolio__slider').slick({
		infinite: false,
		speed: 800,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: true
				}
			},
		]
	})
}

$('[data-fancybox]').fancybox({
	infobar: false,
	buttons: [
		"close"
	],
})
//
