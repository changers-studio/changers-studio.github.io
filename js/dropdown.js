$('.faq__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle()
	$('.faq__heading').not(this).removeClass('_active').next().slideUp()
})
