$(window).on('load', function () {
	// AOS init
	AOS.init({
		duration: 800,
		once: true,
	})
	// ----------
})

// Hamburger menu
$('.toggleMenu').on('click', function () {
	$('.header__container').toggleClass('visible')
	$('body').toggleClass('scroll_disabled')
})
// ----------

// Swiper
const dealsSlider = new Swiper('.deals__slider', {
	slidesPerView: 'auto',
	spaceBetween: 12,
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
})
// ----------

// Tariffs tabs
$('.tariffs__tabs-choose').on('click', 'button:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('.tariffs__tabs')
		.find('.tariffs__tabs-content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})
// ----------

// Dropdown
$('.dropdown-toggle').on('click', function () {
	$(this)
		.parent()
		.toggleClass('active')
		.find('.faq__item-dropdown')
		.slideToggle()

	$('.dropdown-toggle')
		.not(this)
		.parent()
		.removeClass('active')
		.find('.faq__item-dropdown')
		.slideUp()
})
// ----------

// Show all reviews
$('.reviews__btn').on('click', function () {
	$(this).hide()
	$('.review._hidden').removeClass('_hidden')
})
// ----------

// Menu move links
$('body').on('click', '.trigger-move', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})

// ----------
