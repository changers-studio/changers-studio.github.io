jQuery(function () {
	AOS.init({
		duration: 1000,
		once: true,
	})

	$(window).on('scroll', function () {
		AOS.refresh()
	})

	$(window).on('load', function () {
		AOS.refresh()
	})
})
