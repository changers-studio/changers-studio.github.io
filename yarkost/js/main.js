// Slider
if ($('*').is('.gallery__slider')) {
	$('.gallery__slider').slick({
		slidesToShow: 3,
		speed: 800,
		touchMove: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
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
}
//
