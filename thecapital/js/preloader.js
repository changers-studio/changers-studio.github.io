$('body').addClass('scroll-disabled')

setTimeout(() => {
	$('.preloader').fadeOut()
	$('body').removeClass('scroll-disabled')
}, 2000)
