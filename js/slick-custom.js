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

	function slickInit() {
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

			$('.captions_flex').slick('refresh')
		})
	}
	$(window).on('resize', function () {
		if ($(window).width() < 992 && $(window).width() > 900) {
			slickInit()
		}
	})
})
