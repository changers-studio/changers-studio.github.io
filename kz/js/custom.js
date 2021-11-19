$(function () {
	// Слайдер на главном экране
	if ($('*').is('.main__slider')) {
		$('.main__slider').slick({
			speed: 700,
			arrows: false,
			dots: true,
			focusOnSelect: true,
			asNavFor: '.main__images',
			touchMove: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: false,
					},
				},
			],
		})

		$('.main__images').slick({
			speed: 700,
			arrows: false,
			fade: true,
			asNavFor: '.main__slider',
		})
	}
	// eof

	// Слайдер кадровая политика
	if ($('*').is('.politics__slider')) {
		$('.politics__slider').slick({
			infinite: false,
			slidesToShow: 3,
			touchMove: false,
			speed: 700,
			prevArrow: $('.politics__slider-prev'),
			nextArrow: $('.politics__slider-next'),
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		})
	}
	// eof

	// Табы
	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active')
			.siblings()
			.removeClass('active')
			.closest('.tabs')
			.find('.tabs__content')
			.removeClass('active')
			.eq($(this).index())
			.addClass('active')
	})
	// eof

	// Дропдауны канцелярия
	$('.chancery__dropdown-button').on('click', function () {
		$(this)
			.toggleClass('active')
			.closest('.chancery__dropdown')
			.find('.chancery__dropdown-body')
			.slideToggle(700)

		$('.chancery__dropdown-button')
			.not(this)
			.removeClass('active')
			.closest('.chancery__dropdown')
			.find('.chancery__dropdown-body')
			.slideUp(700)
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

	$('b[role="presentation"]').hide()
	$('.select2-selection__arrow').append('<i class="fas fa-chevron-down"></i>')
	// eof
})

// Гамбргер меню
let body = $('body')
let hamburger = $('.header__hamburger')
let hamburgerMenu = $('.header__hamburger-menu')

hamburger.on('click', function () {
	hamburger.toggleClass('active')
	hamburgerMenu.slideToggle()
	body.toggleClass('scroll_disabled')
})
// eof

// Выпадающие списки в гамбургер меню
$('.header__menu-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.header__menu-heading').not(this).removeClass('active').next().slideUp()
})
// eof

$('.about__show-more').on('click', function () {
	$(this).addClass('active').closest('.about-section__wrapper').addClass('active')
})
