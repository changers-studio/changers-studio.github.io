jQuery(function () {
	// Select2
	if ($('*').is('.select2')) {
		$('.select2').select2({
			minimumResultsForSearch: -1,
			width: '100%',
			selectionCssClass: 'select__heading',
			dropdownCssClass: 'select__dropdown',
		})
	}

	if ($('*').is('.favorites-select')) {
		$('.favorites-select').select2({
			minimumResultsForSearch: -1,
			width: 'auto',
			selectionCssClass: 'favorites-select__heading',
			dropdownCssClass: 'favorites-select__dropdown',
		})
	}

	if ($('*').is('.sort-select')) {
		$('.sort-select').select2({
			minimumResultsForSearch: -1,
			width: 'auto',
			selectionCssClass: 'sort-select__heading',
			dropdownCssClass: 'sort-select__dropdown',
		})
	}

	if ($('*').is('.size-select')) {
		$('.size-select').select2({
			minimumResultsForSearch: -1,
			width: '100%',
			selectionCssClass: 'size-select__heading',
			dropdownCssClass: 'size-select__dropdown',
		})
	}

	$('b[role="presentation"]').hide()
	$('.select2-selection__arrow').append('<i class="fas fa-chevron-down"></i>')

	// Dropdowns
	$(
		'.lang__heading, .filter__item-heading, .filter__heading_mobile, .catalog__sort-heading, .product__dropdown-heading'
	).on('click', function () {
		$(this).toggleClass('active').next().slideToggle(300)
	})

	$('.tel .dropdown__heading i').on('click', function () {
		$(this).parent().toggleClass('active').next().slideToggle()
	})

	// Input tel mask
	if ($('*').is('input[type="tel"]')) {
		$('input[type=tel]').inputmask({
			mask: '+99 (999) 999 99 99',
			showMaskOnHover: false,
		})
	}

	// Magnific popup
	$('.magnific-popup').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade',
		fixedContentPos: false,
		callbacks: {
			open: function () {
				$('body').addClass('scroll_disable')
			},
			close: function () {
				$('body').removeClass('scroll_disable')
			},
		},
	})

	// Slick sliders
	if ($('*').is('.main__slider')) {
		$('.main__slider').slick({
			fade: true,
			arrows: false,
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 500,
			autoplaySpeed: 3000,
			touchMove: false,
		})
	}

	if ($('*').is('.product__slider')) {
		$('.product__slider').slick({
			dots: true,
			infinite: true,
			speed: 800,
			touchMove: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows: false,
					},
				},
			],
		})
	}

	if ($('*').is('.categories__slider')) {
		$('.categories__slider').slick({
			dots: true,
			infinite: true,
			speed: 800,
			touchMove: false,
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						variableWidth: true,
						dots: false,
						arrows: false,
					},
				},
			],
		})
	}

	if ($('*').is('.recently-viewed__slider')) {
		$('.recently-viewed__slider').slick({
			dots: true,
			infinite: true,
			touchMove: false,
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 1520,
					settings: {
						slidesToShow: 1,
						variableWidth: true,
					},
				},
				{
					breakpoint: 992,
					settings: {
						arrows: false,
						slidesToShow: 1,
						variableWidth: true,
					},
				},
			],
		})
	}

	if ($('*').is('.product__slider-main')) {
		$('.product__slider-main').slick({
			arrows: false,
			fade: true,
			asNavFor: '.product__slider-nav',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
					},
				},
			],
		})

		$('.product__slider-nav').slick({
			slidesToShow: 5,
			asNavFor: '.product__slider-main',
			focusOnSelect: true,
			vertical: true,
		})
	}

	// Range
	if ($('*').is('.range')) {
		let $range = $('.range__slider'),
			$inputFrom = $('.range__from'),
			$inputTo = $('.range__to'),
			instance,
			min = 100,
			max = 100000,
			from = 0,
			to = 0

		$range.ionRangeSlider({
			skin: 'round',
			type: 'double',
			min: min,
			max: max,
			from: 199,
			to: 3000,
			onStart: updateInputs,
			onChange: updateInputs,
		})
		instance = $range.data('ionRangeSlider')

		function updateInputs(data) {
			from = data.from
			to = data.to

			$inputFrom.prop('value', from)
			$inputTo.prop('value', to)
		}

		$inputFrom.on('input', function () {
			var val = $(this).prop('value')

			// validate
			if (val < min) {
				val = min
			} else if (val > to) {
				val = to
			}

			instance.update({
				from: val,
			})
		})

		$inputTo.on('input', function () {
			var val = $(this).prop('value')

			// validate
			if (val < from) {
				val = from
			} else if (val > max) {
				val = max
			}

			instance.update({
				to: val,
			})
		})
	}
})

// $(document).on('mouseup', function (e) {
// 	let lang = $('header__tel')

// 	if (!lang.is(e.target) && lang.has(e.target).length === 0) {
// 		$('.lang__heading').removeClass('_active')
// 		$('.lang__dropdown').slideUp()
// 	}
// })

// Hamburger
let body = $('body')
let hamburger = $('.header__hamburger')
let dropdownMenu = $('.header._mobile .dropdown')

hamburger.on('click', function () {
	hamburger.toggleClass('active')
	dropdownMenu.slideToggle()
	body.toggleClass('scroll_disable')
})

// Tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
		.hide()
		.fadeIn(500)

	$('.categories__slider').slick('refresh')
	$('.product__slider-nav, .product__slider-main').slick('reinit')
})

$('ul.categories__age').on('click', 'li:not(.active)', function () {
	$(this).addClass('active').siblings().removeClass('active')
})

// Toggle password
$('.toggle-password').on('click', function () {
	$(this).toggleClass('_show')
	var input = $(this).prev()
	if (input.attr('type') == 'password') {
		input.attr('type', 'text')
	} else {
		input.attr('type', 'password')
	}
})

// Delete functions
$('.favorites__item-delete').on('click', function () {
	$(this).closest('div.favorites__item').hide()
})

$('.basket__item-delete').on('click', function () {
	$(this).closest('div.basket__item').hide()
})

// Basket items amount
let amountBasketItems = 1

$('.basket__item-add').on('click', function () {
	$(this)
		.closest('.basket__item-amount')
		.find('.basket__item-number')
		.attr('value', (amountBasketItems += 1))

	if (amountBasketItems === 1) {
		$(this)
			.closest('.basket__item-amount')
			.find('.basket__item-remove')
			.addClass('_disable')
	} else {
		$(this)
			.closest('.basket__item-amount')
			.find('.basket__item-remove')
			.removeClass('_disable')
	}
})

$('.basket__item-remove').on('click', function () {
	if (amountBasketItems !== 1) {
		$(this)
			.closest('.basket__item-amount')
			.find('.basket__item-number')
			.attr('value', (amountBasketItems -= 1))
	}

	if (amountBasketItems === 1) {
		$(this)
			.closest('.basket__item-amount')
			.find('.basket__item-remove')
			.addClass('_disable')
	} else {
		$(this)
			.closest('.basket__item-amount')
			.find('.basket__item-remove')
			.removeClass('_disable')
	}
})

// Product items amount
let amountProductItems = 1

$('.product__amount-add').on('click', function () {
	$(this)
		.closest('.product__amount')
		.find('.product__amount-number')
		.attr('value', (amountProductItems += 1))

	if (amountProductItems === 1) {
		$(this)
			.closest('.product__amount')
			.find('.product__amount-remove')
			.addClass('_disable')
	} else {
		$(this)
			.closest('.product__amount')
			.find('.product__amount-remove')
			.removeClass('_disable')
	}
})

$('.product__amount-remove').on('click', function () {
	if (amountProductItems !== 1) {
		$(this)
			.closest('.product__amount')
			.find('.product__amount-number')
			.attr('value', (amountProductItems -= 1))
	}

	if (amountProductItems === 1) {
		$(this)
			.closest('.product__amount')
			.find('.product__amount-remove')
			.addClass('_disable')
	} else {
		$(this)
			.closest('.product__amount-amount')
			.find('.product__amount-remove')
			.removeClass('_disable')
	}
})
