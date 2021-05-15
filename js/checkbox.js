// Checkout stage-2
$('#c2-1').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c2-2, #c2-3')
			.prop('checked', false)
			.parent()
			.find('div.stage-delivery__dropdown')
			.slideUp(100)
	}

	$(this).parent().find('.stage-delivery__dropdown').slideToggle(100)
})

$('#c2-2').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c2-1, #c2-3')
			.prop('checked', false)
			.parent()
			.find('div.stage-delivery__dropdown')
			.slideUp(100)
	}
	$(this).parent().find('.stage-delivery__dropdown').slideToggle(100)
})

$('#c2-3').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c2-1, #c2-2')
			.prop('checked', false)
			.parent()
			.find('div.stage-delivery__dropdown')
			.slideUp(100)
	}

	$(this).parent().find('.stage-delivery__dropdown').slideToggle(100)
})
// END Checkout stage-2

// Checkout stage-3
$('#c3-1').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c3-2').prop('checked', false)
	}
})

$('#c3-2').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c3-1').prop('checked', false)
	}
})
// END Checkout stage-3

// Checkout stage-4
$('#c4-1').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c4-2').prop('checked', false)
	}
})

$('#c4-2').on('change', function () {
	if ($(this).is(':checked')) {
		$('#c4-1').prop('checked', false)
	}
})
// END Checkout stage-4
