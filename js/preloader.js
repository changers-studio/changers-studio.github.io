$(window).on('load', function () {
	$('.preloader').addClass('transparent')

	setTimeout(() => {
		$('.preloader').addClass('zoom-in').delay(1000).fadeOut()
	}, 1000)

	loadBar.trigger('hide')
})

loadBar.mainColor = '#fff'
loadBar.stripColor = '#D45B41'
loadBar.barHeight = 50
loadBar.trigger('show')
