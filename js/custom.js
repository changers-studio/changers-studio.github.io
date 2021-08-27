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

	$('b[role="presentation"]').hide()
	$('.select2-selection__arrow').append('<i class="fas fa-chevron-down"></i>')

	// Dropdowns
	$('.lang__heading').on('click', function () {
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
})

// $(document).on('mouseup', function (e) {
// 	let lang = $('header__tel')

// 	if (!lang.is(e.target) && lang.has(e.target).length === 0) {
// 		$('.lang__heading').removeClass('_active')
// 		$('.lang__dropdown').slideUp()
// 	}
// })

let body = $('body')
let hamburger = $('.header__hamburger')
let dropdownMenu = $('.header._mobile .dropdown')

hamburger.on('click', function () {
	hamburger.toggleClass('active')
	dropdownMenu.slideToggle()
	body.toggleClass('scroll_disable')
})

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
})

$('ul.categories__age').on('click', 'li:not(.active)', function () {
	$(this).addClass('active').siblings().removeClass('active')
})

$('.toggle-password').on('click', function () {
	$(this).toggleClass('_show')
	var input = $(this).prev()
	if (input.attr('type') == 'password') {
		input.attr('type', 'text')
	} else {
		input.attr('type', 'password')
	}
})

$('.favorites__item-delete').on('click', function () {
	$(this).closest('div.favorites__item').hide()
})
