$(function () {
	let body = $('body')
	let sidebar = $('.sidebar')
	let plug = $('.sidebar-plug')
	let toggleSidebar = $(
		'.header__hamburger,  .sidebar-plug,  .sidebar__close, .sidebar__menu-item, .sidebar__button'
	)

	toggleSidebar.on('click', function () {
		sidebar.toggleClass('_visible')
		plug.fadeToggle()
		body.toggleClass('scroll_disable')
	})

	if ($('*').is('input[type="tel"]')) {
		$('input[type=tel]').inputmask({
			mask: '+7 999 999 99 99',
			showMaskOnHover: false,
		})
	}

	$('.program__dropdown').on('click', function () {
		$(this).toggleClass('active').find('.program__dropdown-body').slideToggle()
		$('.program__dropdown')
			.not(this)
			.removeClass('active')
			.find('.program__dropdown-body')
			.slideUp()
	})

	$('.faq__dropdown').on('click', function () {
		$(this).toggleClass('active').find('.faq__dropdown-body').slideToggle()
		$('.faq__dropdown')
			.not(this)
			.removeClass('active')
			.find('.faq__dropdown-body')
			.slideUp()
	})

	$('input').each(function () {
		$(this).on('focus', function () {
			$(this).parent('.css').addClass('active')
		})

		$(this).on('blur', function () {
			if ($(this).val().length == 0) {
				$(this).parent('.css').removeClass('active')
			}
		})

		if ($(this).val() != '') $(this).parent('.css').addClass('active')
	})

	if ($('*').is('.reviews__slider')) {
		$('.reviews__slider').slick({
			infinite: true,
			slidesToShow: 3,
			touchMove: false,
			arrows: true,
			speed: 1000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						infinite: true,
					},
				},
			],
		})
	}

	if ($('*').is('.works__slider')) {
		$('.works__slider').slick({
			infinite: true,
			slidesToShow: 2,
			touchMove: false,
			arrows: true,
			speed: 1000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						infinite: true,
					},
				},
			],
		})
	}

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

	$('body').on('click', '.link_move', function (event) {
		event.preventDefault()
		var id = $(this).attr('href'),
			top = $(id).offset().top
		$('body,html').animate({ scrollTop: top }, 1500)
	})
})
