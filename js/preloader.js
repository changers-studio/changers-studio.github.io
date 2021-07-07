$(window).on('load', function () {
	$('.preloader').addClass('transparent')

	setTimeout(() => {
		$('.preloader').addClass('zoom-in').delay(1000).fadeOut()
	}, 1000)
})
