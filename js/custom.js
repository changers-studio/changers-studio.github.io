$(function () {
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

	if ($(window).width() < 992) {
		$(window).on('resize load', function () {
			$('.products__slider-main')
				.removeClass('get-animation')
				.attr('data-aos', 'fade-right')

			AOS.refreshHard()
		})
	}

	$(window).on('scroll load', function () {
		$('.get-animation').each(function () {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animation')
			}
		})

		$('.fly-in').each(function () {
			if (isScrolledIntoView(this) === true) {
				$(this).removeClass('hidden')
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
				lockAnchors: true,
				scrollingSpeed: 1500,
				responsiveWidth: 992,
				css3: true,
				onLeave: function (origin, destination, direction) {
					if (
						(origin.index == 1 && direction == 'up') ||
						(origin.index == 6 && direction == 'down')
					) {
						$('.fullpage-menu').fadeOut()
						$('.section-hamburger').fadeOut()
					}
				},
				afterLoad: function (origin, destination, direction) {
					if (
						(origin.index == 0 && direction == 'down') ||
						(origin.index == 7 && direction == 'up')
					) {
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

					$('.fly-in').each(function () {
						if (isScrolledIntoView(this) === true) {
							$(this).removeClass('hidden')
						}
					})

					if ($('.footer').hasClass('active')) {
						$('.fullpage-menu').hide()
						$('.section-hamburger').hide()
					}

					if ($('.main').hasClass('active')) {
						$('.fullpage-menu').hide()
						$('.section-hamburger').hide()
					}

					AOS.refreshHard()
				},
			})
			fullpageActive = true
		} else if ($(window).width() < 992 && fullpageActive) {
			$.fn.fullpage.destroy('all')
			fullpageActive = false
		}
	}

	$(window).on('load resize', windowSize)

	// new fullpage('#fullpage', {
	// 	navigation: false,
	// 	menu: '#fullpageMenu',
	// 	lockAnchors: true,
	// 	scrollingSpeed: 1500,
	// 	css3: true,
	// 	onLeave: function (origin, destination, direction) {
	// 		if (
	// 			(origin.index == 1 && direction == 'up') ||
	// 			(origin.index == 6 && direction == 'down')
	// 		) {
	// 			$('.fullpage-menu').fadeOut()
	// 			$('.section-hamburger').fadeOut()
	// 		}
	// 	},
	// 	afterLoad: function (origin, destination, direction) {
	// 		if (
	// 			(origin.index == 0 && direction == 'down') ||
	// 			(origin.index == 7 && direction == 'up')
	// 		) {
	// 			$('.fullpage-menu').hide().fadeIn()
	// 			$('.section-hamburger').hide().fadeIn()
	// 		}

	// 		$('.get-animation').each(function () {
	// 			if (isScrolledIntoView(this) === true) {
	// 				$(this).addClass('animation')
	// 			}
	// 		})

	// 		$('[data-aos]').each(function () {
	// 			if (isScrolledIntoView(this) === true) {
	// 				$(this).addClass('aos-animate')
	// 			}
	// 		})

	// 		$('.fly-in').each(function () {
	// 			if (isScrolledIntoView(this) === true) {
	// 				$(this).removeClass('hidden')
	// 			}
	// 		})

	// 		if ($('.footer').hasClass('active')) {
	// 			$('.fullpage-menu').hide()
	// 			$('.section-hamburger').hide()
	// 		}

	// 		if ($('.main').hasClass('active')) {
	// 			$('.fullpage-menu').hide()
	// 			$('.section-hamburger').hide()
	// 		}

	// 		AOS.refreshHard()
	// 	},
	// })

	$('.main-screen__scroll-down').on('click', function () {
		fullpage_api.moveTo('about')
	})

	if ($('body').hasClass('ishome') && $(window).width() > 992) {
		$('.footer__scroll-up').on('click', function () {
			fullpage_api.moveTo('main')
		})
	} else if ($(window).width() < 992 || $('body').hasClass('isnohome')) {
		$('.footer__scroll-up').on('click', function () {
			$('body, html').animate({ scrollTop: 0 }, 1500)
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

	// Dropdown
	let dropdown = $('.header__langs-heading')

	dropdown.on('click', function () {
		$(this).toggleClass('active').next().slideToggle()
	})
	// eof

	// Header search
	$('.header__search-switch').on('click', function () {
		let headerSearch = $('.header__search')

		headerSearch.toggleClass('active')

		// if (headerSearch.hasClass('active')) {
		// 	fullpage_api.setAllowScrolling(false)
		// } else {
		// 	fullpage_api.setAllowScrolling(true)
		// }
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

	if ($('*').is('.reviews__slider-main')) {
		let reviewsMain = $('.reviews__slider-main')
		let reviewsNav = $('.reviews__slider-nav')

		reviewsMain.slick({
			infinite: false,
			touchMove: false,
			speed: 1000,
			arrows: false,
			fade: true,
			asNavFor: '.reviews__slider-nav',
			swipe: false,
		})

		reviewsNav.slick({
			infinite: false,
			touchMove: false,
			speed: 1000,
			slidesToShow: 1,
			variableWidth: true,
			arrows: true,
			asNavFor: '.reviews__slider-main',
			focusOnSelect: true,
		})
	}

	if ($('*').is('.products__slider-main')) {
		$('.products__slider-nav').slick({
			touchMove: false,
			speed: 700,
			arrows: true,
			variableWidth: true,
			infinite: false,
			focusOnSelect: true,
			asNavFor: '.products__slider-main',
		})

		$('.products__slider-main').slick({
			infinite: true,
			touchMove: false,
			speed: 700,
			arrows: false,
			fade: true,
			asNavFor: '.products__slider-nav',
		})
	}
	// eof

	// Map animation
	$('.contacts__map').on('mouseover mouseout', function () {
		$(this).toggleClass('googleMapsVisible')
	})
	// eof

	// Marquee
	if ($('*').is('marquee')) {
		let windowCalc = $(window).width() / 2

		$('marquee').marquee({
			direction: 'left',
			duration: 40000,
			gap: windowCalc,
			delayBeforeStart: 0,
			duplicated: true,
			startVisible: true,
		})
	}
	// eof

	// Tabs
	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active')
			.siblings()
			.removeClass('active')
			.closest('div.tabs')
			.find('div.tabs__content')
			.hide()
			.eq($(this).index())
			.fadeIn(1000)
	})
	// eof

	// Team slider
	let teamCarousel = $('.team-info__slider')

	if ($('*').is('.team-info__slider')) {
		teamCarousel.slick({
			touchMove: false,
			fade: true,
			arrows: false,
			adaptiveHeight: true,
		})
	}

	$('.team__item').on('click', function () {
		teamCarousel.slick('slickGoTo', $(this).index())
	})

	$('.team-info__nav-button.prev').on('click', function () {
		teamCarousel.slick('slickPrev')
	})

	$('.team-info__nav-button.next').on('click', function () {
		teamCarousel.slick('slickNext')
	})
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

					if ($('*').is('.team-info__slider')) {
						teamCarousel.slick('refresh')
					}

					fullpage_api.setAllowScrolling(false)
				},
				close: function () {
					$('body').removeClass('scroll_disable')

					fullpage_api.setAllowScrolling(true)
				},
			},
		})
	}
	// eof

	// Sidebar link on mobile
	$('body').on('click', '.link_move', function (event) {
		event.preventDefault()
		var id = $(this).attr('href'),
			top = $(id).offset().top - 40
		$('body,html').animate({ scrollTop: top }, 2000)
	})
	// eof

	// Not current elem click
	$(document).on('mouseup', function (e) {
		var langs = $('.header__langs')

		if (!langs.is(e.target) && langs.has(e.target).length === 0) {
			$('.header__langs-heading').removeClass('active').next().slideUp()
		}
	})
	// eof

	// Custom scrollbar
	if ($('*').is('.custom-scroll')) {
		$('.custom-scroll').mCustomScrollbar({
			theme: 'light-thick',
			axis: 'y',
		})

		if ($(window).width() < 992) {
			$('.custom-scroll').mCustomScrollbar('destroy')
		}
	}
	// eof
})
