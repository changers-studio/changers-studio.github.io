const desktop = window.innerWidth > 960

// AOS
AOS.init({
	duration: 800,
	once: true,
})

$(window).on('scroll', function () {
	AOS.refresh()
})
//

// Menu
$('body').on('click', '.header__menu-item', function (event) {
	event.preventDefault()
	var id = $(this).attr('href'),
		top = $(id).offset().top
	$('body,html').animate({ scrollTop: top }, 1500)
})
//

// Hamburger
if (!desktop) {
	$('.toggleSidebar').on('click', function () {
		$('.header__hamburger').toggleClass('active')
		$('.header__menu').toggleClass('active')
	})
}
//

// Calculation deposit
var $range = $('.range-deposit')
var $depositVal = $('.calc__data-deposit')
var min = 50
var to = 5000
var instance

$range.ionRangeSlider({
	skin: 'round',
	min: min,
	max: to,
	from: 3000,
	onStart: updateInputs,
	onChange: updateInputs,
	onFinish: updateVal,
})
instance = $range.data('ionRangeSlider')

function updateInputs(data) {
	$depositVal.val(data.from)
}
//

// Calculation days
var $range2 = $('.range-days')
var $daysVal = $('.calc__data-days')
var min2 = 1
var to2 = 10
var instance2

$range2.ionRangeSlider({
	skin: 'round',
	min: min2,
	max: to2,
	from: 3,
	onStart: updateInputs2,
	onChange: updateInputs2,
	onFinish: updateVal,
})
instance2 = $range2.data('ionRangeSlider')

function updateInputs2(data) {
	$daysVal.val(data.from)
}
//

// Calculation result
function updateVal() {
	var val = $depositVal.val()
	var val2 = $daysVal.val()

	instance.update({
		from: val,
	})

	instance2.update({
		from: val2,
	})

	$depositVal.val(val)
	$daysVal.val(val2)

	if (50 <= val && val <= 5000) {
		$('.calc__result-val').html(Math.floor(val * val2))
	}
}

$depositVal.on('input', function () {
	updateVal()
})
//

// Reviews
$('.reviews__slider').slick({
	speed: 1000,
	variableWidth: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	prevArrow: $('.reviews__slider-prev'),
	nextArrow: $('.reviews__slider-next'),
})
//

// Faq
$('.faq__item-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.faq__item-heading').not(this).removeClass('active').next().slideUp()
})
//
