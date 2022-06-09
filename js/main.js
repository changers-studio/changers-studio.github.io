document.addEventListener('DOMContentLoaded', function () {
	// Sync height image & sidebar
	$(window).on('resize load', function () {
		const sidebarHeight = $('.sidebar').outerHeight()
		$('.main__image').height(sidebarHeight)
	})
	// eof
})

// Dropdown
$('.dropdown-toggle').on('click', function () {
	$(this).toggleClass('active').next().slideToggle(200)
	$('.dropdown-toggle').not(this).removeClass('active').next().slideUp(200)
})
// eof

// Input animation
$('input').each(function () {
	$(this).on('focus', function () {
		$(this).parent('.input-wrapper').addClass('active focus')
	})

	$(this).on('focusout', function () {
		$(this).parent('.input-wrapper').removeClass('focus')
	})

	$(this).on('blur', function () {
		if ($(this).val().length == 0) {
			$(this).parent('.input-wrapper').removeClass('active')
		}
	})

	if ($(this).val() != '') $(this).parent('.input-wrapper').addClass('active')
})
// eof

// Otp code
if ($('*').is('.otp-form')) {
	// pincode
	let _pincode = []
	_req = null

	// main form
	let $form = $('.otp-form')

	// pincode group
	let $group = $form.find('.otp-form__inputs')

	// all input fields
	let $inputs = $group.find(':input')

	// input fields
	let $first = $form.find('[name=pincode-1]'),
		$second = $form.find('[name=pincode-2]'),
		$third = $form.find('[name=pincode-3]'),
		$fourth = $form.find('[name=pincode-4]'),
		$fifth = $form.find('[name=pincode-5]'),
		$sixth = $form.find('[name=pincode-6]')

	// submit button
	let $button = $form.find('.otp-form__submit')

	// all fields
	$inputs
		.on('keyup', function (event) {
			let code = event.keyCode || event.which

			if (code === 9 && !event.shiftKey) {
				// prevent default event
				event.preventDefault()

				// focus to submit button
				$('.otp-form__submit').focus()
			}
		})
		.inputmask({
			mask: '9',
			placeholder: '',
			showMaskOnHover: false,
			showMaskOnFocus: false,
			clearIncomplete: true,
			onincomplete: function () {
				!debug || console.log('inputmask incomplete')
			},
			oncleared: function () {
				let index = $inputs.index(this),
					prev = index - 1,
					next = index + 1

				if (prev >= 0) {
					// clear field
					$inputs.eq(prev).val('')

					// focus field
					$inputs.eq(prev).focus()

					// remove last nubmer
					_pincode.splice(-1, 1)
				} else {
					return false
				}

				!debug || console.log('[oncleared]', prev, index, next)
			},
			onKeyValidation: function (key, result) {
				let index = $inputs.index(this),
					prev = index - 1,
					next = index + 1

				// focus to next field
				if (prev < 6) {
					$inputs.eq(next).focus()
				}

				!debug || console.log('[onKeyValidation]', index, key, result, _pincode)
			},
			onBeforePaste: function (data, opts) {
				$.each(data.split(''), function (index, value) {
					// set value
					$inputs.eq(index).val(value)

					!debug || console.log('[onBeforePaste:each]', index, value)
				})

				return false
			},
		})

	// first field
	$('[name=pincode-1]')
		.on('focus', function (event) {
			!debug || console.log('[1:focus]', _pincode)
		})
		.inputmask({
			oncomplete: function () {
				// add first character
				_pincode.push($(this).val())

				// focus to second field
				$('[name=pincode-2]').focus()

				!debug || console.log('[1:oncomplete]', _pincode)
			},
		})

	// second field
	$('[name=pincode-2]')
		.on('focus', function (event) {
			if (!($first.val().trim() !== '')) {
				// prevent default
				event.preventDefault()

				// reset pincode
				_pincode = []

				// handle each field
				$inputs.each(function () {
					// clear each field
					$(this).val('')
				})

				// focus to first field
				$first.focus()
			}

			!debug || console.log('[2:focus]', _pincode)
		})
		.inputmask({
			oncomplete: function () {
				// add second character
				_pincode.push($(this).val())

				// focus to third field
				$('[name=pincode-3]').focus()

				!debug || console.log('[2:oncomplete]', _pincode)
			},
		})

	// third field
	$('[name=pincode-3]')
		.on('focus', function (event) {
			if (!($first.val().trim() !== '' && $second.val().trim() !== '')) {
				// prevent default
				event.preventDefault()

				// reset pincode
				_pincode = []

				// handle each field
				$inputs.each(function () {
					// clear each field
					$(this).val('')
				})

				// focus to first field
				$first.focus()
			}

			!debug || console.log('[3:focus]', _pincode)
		})
		.inputmask({
			oncomplete: function () {
				// add third character
				_pincode.push($(this).val())

				// focus to fourth field
				$('[name=pincode-4]').focus()

				!debug || console.log('[3:oncomplete]', _pincode)
			},
		})

	// fourth field
	$('[name=pincode-4]')
		.on('focus', function (event) {
			if (
				!(
					$first.val().trim() !== '' &&
					$second.val().trim() !== '' &&
					$third.val().trim() !== ''
				)
			) {
				// prevent default
				event.preventDefault()

				// reset pincode
				_pincode = []

				// handle each field
				$inputs.each(function () {
					// clear each field
					$(this).val('')
				})

				// focus to first field
				$first.focus()
			}

			!debug || console.log('[4:focus]', _pincode)
		})
		.inputmask({
			oncomplete: function () {
				// add fo fourth character
				_pincode.push($(this).val())

				// focus to fifth field
				$('[name=pincode-5]').focus()

				!debug || console.log('[4:oncomplete]', _pincode)
			},
		})

	// fifth field
	$('[name=pincode-5]')
		.on('focus', function (event) {
			if (
				!(
					$first.val().trim() !== '' &&
					$second.val().trim() !== '' &&
					$third.val().trim() !== '' &&
					$fourth.val().trim() !== ''
				)
			) {
				// prevent default
				event.preventDefault()

				// reset pincode
				_pincode = []

				// handle each field
				$inputs.each(function () {
					// clear each field
					$(this).val('')
				})

				// focus to first field
				$first.focus()
			}

			!debug || console.log('[5:focus]', _pincode)
		})
		.inputmask({
			oncomplete: function () {
				// add fifth character
				_pincode.push($(this).val())

				// focus to sixth field
				$('[name=pincode-6]').focus()

				!debug || console.log('[5:oncomplete]', _pincode)
			},
		})

	// sixth field
	$('[name=pincode-6]')
		.on('focus', function (event) {
			if (
				!(
					$first.val().trim() !== '' &&
					$second.val().trim() !== '' &&
					$third.val().trim() !== '' &&
					$fourth.val().trim() !== '' &&
					$fifth.val().trim() !== ''
				)
			) {
				// prevent default
				event.preventDefault()

				// reset pincode
				_pincode = []

				// handle each field
				$inputs.each(function () {
					// clear each field
					$(this).val('')
				})

				// focus to first field
				$first.focus()
			}

			!debug || console.log('[6:focus]', _pincode)
		})
		.inputmask({
			oncomplete: function () {
				// add sixth character
				_pincode.push($(this).val())

				!debug || console.log('[6:oncomplete]', _pincode)
			},
		})
}
// eof

// Remove product
$('.product__remove').on('click', function () {
	$(this).closest('.product').remove()
})
// eof

// Select2
if ($('*').is('.select2')) {
	$('.select2').select2({
		minimumResultsForSearch: -1,
		width: '100%',
		selectionCssClass: 'select__heading',
		dropdownCssClass: 'select__dropdown',
	})
}

if ($('*').is('.ship-select')) {
	$('.ship-select').select2({
		minimumResultsForSearch: -1,
		width: '100%',
		selectionCssClass: 'ship-select__heading select__heading',
		dropdownCssClass: 'ship-select__dropdown select__dropdown',
	})
}
// eof

// Telephone mask
if ($('*').is('input[type="tel"]')) {
	$('input[type=tel]').inputmask({
		mask: '+99 (999) 999 99 99',
		showMaskOnHover: false,
	})
}
// eof

// Gallery
$('ul.gallery__captions').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.gallery')
		.find('.gallery__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})
// eof

// Active color
$('.data__color-item').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})
// eof

// Active capacity
$('.data__capacity-box').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})
// eof

// Product info dropdown
$('.data__heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle(200)
})
// eof
