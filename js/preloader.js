jQuery(function () {
	$('body').addClass('scroll_disable')

	$('.preloader').delay(1500).fadeOut('slow')

	setTimeout(function () {
		$('body').removeClass('scroll_disable')
	}, 1500)
})
