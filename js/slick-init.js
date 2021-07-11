jQuery(function () {
	$('.slider__main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider__nav',
	})

	$('.slider__nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider__main',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	})

	$('.clients__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
})
