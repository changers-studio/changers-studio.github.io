jQuery(function () {
	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop()
		var docViewBottom = docViewTop + $(window).height()

		var elemTop = $(elem).offset().top
		var elemBottom = elemTop + $(elem).height()

		return elemBottom <= docViewBottom && elemTop >= docViewTop
	}

	// AOS
	AOS.init({
		once: true,
		duration: 1000,
		offset: 0,
	})

	$(window).on('scroll load', function () {
		$('.get-animation').each(function () {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animation')
			}
		})

		AOS.refresh()
	})
	// eof

	// fullpage
	var fullpageActive = false
	function windowSize() {
		if ($(window).width() > 992 && !fullpageActive) {
			new fullpage('#fullpage', {
				navigation: false,
				menu: '#fullpageMenu',
				lockAnchors: false,
				scrollingSpeed: 1500,
				responsiveWidth: 992,
				css3: true,
				onLeave: function (origin, destination, direction) {
					if (origin.index == 1 && direction == 'up') {
						$('.fullpage-menu').fadeOut()
						$('.section-hamburger').fadeOut()
					}
				},
				afterLoad: function (origin, destination, direction) {
					if (origin.index == 0 && direction == 'down') {
						$('.fullpage-menu').hide().fadeIn()
						$('.section-hamburger').hide().fadeIn()
					}

					$('.get-animation').each(function () {
						if (isScrolledIntoView(this) === true) {
							$(this).addClass('animation')
						}
					})

					$('[data-aos]').each(function () {
						if (isScrolledIntoView(this) === true) {
							$(this).addClass('aos-animate')
						}
					})
				},
			})
			fullpageActive = true
		} else if ($(window).width() < 992 && fullpageActive) {
			$.fn.fullpage.destroy('all')
			fullpageActive = false
		}
	}

	$(window).on('load resize', windowSize)

	$('.main-screen__scroll-down').on('click', function () {
		fullpage_api.moveTo('about')
	})

	$('.footer__scroll-up').on('click', function () {
		fullpage_api.moveTo('main')
		$('.fullpage-menu').fadeOut()
		$('.section-hamburger').fadeOut()
	})

	if ($('body').hasClass('isnohome')) {
		$('.footer__scroll-up').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 'slow')
		})
	}
	// eof

	// Inputmask
	if ($('*').is('input[type="tel"]')) {
		$('input[type=tel]').inputmask({
			mask: '+380 99 999 9999',
			showMaskOnHover: false,
			placeholder: '+380 XX XXX XXXX',
		})
	}
	// eof

	// Magnific popup
	if ($('*').is('.magnific-popup')) {
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
	}
	// eof

	// Dropdown
	let dropdown = $('.header__langs-heading')

	dropdown.on('click', function () {
		$(this).toggleClass('active').next().slideToggle()
	})
	// eof

	// Header search
	$('.header__search-switch').on('click', function () {
		$('.header__search').toggleClass('active')
	})
	//eof

	// Header hamburger
	let body = $('body')
	let hamburger = $('.header__hamburger')
	let sidebar = $('.header .sidebar')
	let toggleSidebar = $('.header__hamburger, .sidebar__menu-item')

	toggleSidebar.on('click', function () {
		hamburger.toggleClass('is-active')
		sidebar.toggleClass('visible')
		body.toggleClass('scroll_disable')
	})
	// eof

	// Sections hamburger
	let hamburgerMain = $('.section-hamburger .hamburger')
	let sidebarMain = $('.section-menu')
	let toggleSidebarMain = $('.section-hamburger, .section-menu__list-item')

	toggleSidebarMain.on('click', function () {
		hamburgerMain.toggleClass('is-active')
		sidebarMain.toggleClass('visible')
		body.toggleClass('scroll_disable')
	})
	// eof

	// Slick sliders
	if ($('*').is('.projects__slider')) {
		$('.projects__slider').slick({
			touchMove: false,
			speed: 1000,
			slidesToShow: 2,
			arrows: true,
			prevArrow: $('.projects__arrow.prev'),
			nextArrow: $('.projects__arrow.next'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		})
	}

	if ($('*').is('.blog__slider')) {
		$('.blog__slider').slick({
			touchMove: false,
			speed: 1000,
			slidesToShow: 3,
			arrows: true,
			prevArrow: $('.blog__arrow.prev'),
			nextArrow: $('.blog__arrow.next'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		})
	}
	// eof
})
