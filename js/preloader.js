jQuery(function () {
	var preloader = $('.preloader')
	var loader = $('.loader')
	var wHeight = $(window).height()
	var wWidth = $(window).width()
	var line = 0
	loader.css({
		top: wHeight / 2 - 2.5,
		left: wWidth / 2 - 200,
	})

	do {
		loader.animate(
			{
				width: line,
			},
			1
		)
		line += 5
	} while (line <= 400)

	if (line === 405) {
		loader.animate({
			left: 0,
			width: '100%',
		})
		loader.animate({
			top: '0',
			height: '100vh',
		})

		loader.fadeOut('fast')
	}

	setTimeout(() => {
		preloader.fadeOut('slow')
	}, 1800)
})
