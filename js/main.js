document.addEventListener('DOMContentLoaded', () => {
	// Reviews slider
	if ($('*').is('.reviews__slider')) {
		$('.reviews__slider').slick({
			slidesToShow: 3,
			speed: 800,
			infinite: true,
			rtl: true,
			touchMove: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						arrows: false,
					},
				},
			],
		})
	}
	// ----------

	// Gallery slider
	if ($('*').is('.gallery__slider')) {
		$('.gallery__slider').slick({
			speed: 800,
			infinite: true,
			rtl: true,
			touchMove: false,
			dots: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows: false,
					},
				},
			],
		})
	}
	// ----------
})

window.addEventListener('load', () => {
	// AOS init
	AOS.init({
		duration: 1000,
		once: true,
	})
	// ----------
})
