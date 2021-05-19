jQuery(function () {
	$('.invite__slider').slick({
		infinite: false,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		touchMove: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	})
})
