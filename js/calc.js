jQuery(function () {
	var totalValue = 0
	$('.calc ._default :checked, .calc ._enable :checked').each(function () {
		totalValue += parseInt($(this).val())
	})

	$('.calc__result').text(totalValue)
})

$('.calc__inner .price__list option').on('click', function () {
	$(this).addClass('_active')
})

$('.price__list-heading').on('click', function () {
	$(this).toggleClass('active').next().delay(300).slideToggle(300)
	$('.price__list-heading').not(this).removeClass('active').next().slideUp(300)
})

$('.price__list-dropdown p').on('click', function () {
	var currentText = $(this).text()
	var currentValue = $(this).data('value')

	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.parent()
		.slideUp(300)
		.prev()
		.removeClass('active')
		.text(currentText)

	$(this)
		.closest('.calc__row')
		.find('.product-name input')
		.val(currentValue)
		.trigger('click')
		.trigger('click')

	if (
		$(this).closest('.calc__row').find('.product-name input').is(':disabled')
	) {
		$(this)
			.closest('.calc__row')
			.find('.product-name input')
			.val(currentValue)
			.removeAttr('disabled')
			.trigger('click')
			.trigger('click')
			.attr('disabled')
	}
})

$('.calc input:checkbox').on('change', function () {
	var totalValue = 0
	$('.calc ._default :checked, .calc ._enable :checked').each(function () {
		totalValue += parseInt($(this).val())
	})

	$()

	$('.calc__result').text(totalValue)
})
