document.addEventListener('DOMContentLoaded', function () {
	// AOS
	AOS.init({
		once: true,
		duration: 1000,
	})

	window.addEventListener('scroll', function () {
		AOS.refresh()
	})

	if ($(window).width() <= 992) {
		$('*').removeAttr('data-aos-delay')
	}
	// eof
})

// Гамбургер меню
let body = $('body')
let header = $('.header')
let hamburger = $('.header__hamburger')
let sidebar = $('.header__container')
let plug = $('.header__container-plug')
let toggleSidebar = $('.header__hamburger, .header__container-plug')

toggleSidebar.on('click', function () {
	hamburger.toggleClass('active')
	sidebar.toggleClass('visible')
	plug.fadeToggle(800)
	header.toggleClass('bottom-line')
	body.toggleClass('scroll_disabled')
})
// eof

// Выбор страны в тарифах
$('.heading__captions-item').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})
// eof

// Выпадающие блоки FAQ
$('.faq__item-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.faq__item-heading').not(this).removeClass('active').next().slideUp()
})
// eof

// Подмегю "Услуги"
$('.header__dropdown-heading, .footer__dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
})
// eof

// Выпадающий блок языка и валюты
$('.header__currency-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
})
// eof
