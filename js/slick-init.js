jQuery(function () {
	$('.slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		touchMove: false
	})

	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-main',
		focusOnSelect: true,
		touchMove: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}
		]
	})

	$('.together__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 800
	})

	$('.main__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 800,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
					variableWidth: true,
					centerMode: true
				}
			}
		]
	})

	$('.news__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		touchMove: false,
		arrows: false,
		variableWidth: true,
		infinite: false
	})
})
