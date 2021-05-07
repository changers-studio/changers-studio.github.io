jQuery(function () {
	if ($(window).width() < 992) {
		$('.captions_flex').slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			prevArrow: $('.caption-prev'),
			nextArrow: $('.caption-next')
		})

		$('.captions_flex').on('afterChange', function (event, slick) {
			$('.captions__counter .counter__current').html(
				(slick.slickCurrentSlide() + 2) / 2
			)
			$('.captions__counter .counter__all').html(slick.slideCount / 2)
		})
	}

	$(window).on('resize', function () {
		$('.captions_flex').slick('refresh')
	})
})
