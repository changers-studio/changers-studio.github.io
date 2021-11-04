$(function () {
	// Слайдер на главном экране
	if ($('*').is('.main__slider')) {
		$('.main__slider').slick({
			infinite: true,
			touchMove: false,
			speed: 800,
			fade: true,
			autoplay: true,
			autoplaySpeed: 8000,
			prevArrow: $('.main__slider-prev'),
			nextArrow: $('.main__slider-next'),
		})
	}
	// eof

	// Слайдер новостей на главном экране
	if ($('*').is('.blog__slider')) {
		let blogSlider = $('.blog__slider')

		blogSlider
			.on('init', function (event, slick) {
				$('.blog__counter-current').html(slick.slickCurrentSlide() + 1)
				$('.blog__counter-all').html(slick.slideCount)
			})
			.slick({
				infinite: true,
				touchMove: false,
				variableWidth: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 8000,
				prevArrow: $('.blog__slider-prev'),
				nextArrow: $('.blog__slider-next'),
			})

		blogSlider.on('afterChange', function (event, slick) {
			$('.blog__counter-current').html(slick.slickCurrentSlide() + 1)
			$('.blog__counter-all').html(slick.slideCount)
		})
	}
	// eof
})

// Табы
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.hide()
		.eq($(this).index())
		.fadeIn(1000)
})

// eof
