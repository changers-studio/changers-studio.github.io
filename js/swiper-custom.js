jQuery(function () {
	if ($(window).width() < 992) {
		$('.captions__container').addClass('swiper-container')
		$('.captions_flex').addClass('swiper-wrapper')
		$('.captions__inner').addClass('swiper-slide')

		const swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: '10',
			cssMode: true
		})
	}
})
