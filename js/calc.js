jQuery(function () {
	var totalValue = 0
	$('.calc ._default :checked, .calc ._enable :checked').each(function () {
		totalValue += parseInt($(this).val())
	})

	$('.calc__result').text(totalValue)
})

$('.calc input:checkbox').on('change', function () {
	var totalValue = 0
	$('.calc ._default :checked, .calc ._enable :checked').each(function () {
		totalValue += parseInt($(this).val())
	})

	$('.calc__result').text(totalValue)
})
