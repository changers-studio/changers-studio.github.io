jQuery(function () {
	$('#slider-range').slider({
		range: true,
		min: 0,
		max: 10000,
		values: [0, 10000],
		slide: function (event, ui) {
			$('#amount-1').val(ui.values[0])
			$('#amount-2').val(ui.values[1])
		}
	})
	$('#amount-1').val($('#slider-range').slider('values', 0))

	$('#amount-2').val($('#slider-range').slider('values', 1))
})
