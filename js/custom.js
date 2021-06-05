jQuery(function () {
	// Code
})

$('.dropdown__heading').on('click', function () {
	$(this).toggleClass('_active').next().slideToggle()
	$('.dropdown__heading').not(this).removeClass('_active').next().slideUp()
})

var body = $('body')
var hamburger = $('.header__hamburger')
var sidebar = $('.header__sidebar')

hamburger.on('click', function () {
	body.toggleClass('scroll_disable')
	hamburger.toggleClass('is-active')
	sidebar.slideToggle()
})

var tabs = $('section.tabs')
var tabsCaptions = $('.tabs .captions')
var tabsContent = $('.tabs .tabs__content')

if ($(window).width() > 992) {
	tabsCaptions.on('click', '.captions__inner:not(._active)', function () {
		$(this)
			.addClass('_active')
			.siblings()
			.removeClass('_active')
			.closest(tabs)
			.find(tabsContent)
			.hide()
			.removeClass('_active')
			.eq($(this).index())
			.addClass('_active')
			.hide()
			.fadeIn(600)
	})
}

if ($(window).width() < 992) {
	tabsCaptions.on('click', '.captions__inner:not(._active)', function () {
		$(this)
			.addClass('_active')
			.closest('.slick-slide')
			.siblings()
			.find('.captions__inner')
			.removeClass('_active')
			.closest(tabs)
			.find(tabsContent)
			.hide()
			.removeClass('_active')
			.eq($(this).closest('.slick-slide').index())
			.addClass('_active')
			.hide()
			.fadeIn(600)
	})
}

$('body').on('click', '.captions__inner', function (event) {
	event.preventDefault()
	var id = $(this).attr('data-scroll-to'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1000)
})
