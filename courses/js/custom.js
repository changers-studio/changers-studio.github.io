$(function () {
	//
})

// Magnific popup
$('.magnific-popup').magnificPopup()
// eof

// Json animation
lottie.loadAnimation({
	container: document.getElementById('hello-anime'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/main-girl.json',
})

lottie.loadAnimation({
	container: document.getElementById('sun-anime'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/sun-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('sky-anime'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/sky-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('sky-anime-1'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/sky-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('sky-anime-2'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/sky-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('sky-anime-3'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/sky-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('courses-1'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/courses__anime-1.json',
})

lottie.loadAnimation({
	container: document.getElementById('courses-2'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/courses__anime-2.json',
})

lottie.loadAnimation({
	container: document.getElementById('courses-3'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/courses__anime-3.json',
})

lottie.loadAnimation({
	container: document.getElementById('about-anime'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/about-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('plus-anime'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/plus-anime.json',
})

lottie.loadAnimation({
	container: document.getElementById('3d-education'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'animation/3d-education.json',
})
// eof

// Гамбургер меню
$('.header__hamburger').on('click', function () {
	$(this).toggleClass('is-active')
	$('.header__container').fadeToggle()
})
// eof

// Слайдер отзывов
$('.reviews__slider').slick({
	Infinite: true,
	dots: true,
	speed: 800,
	slidesToShow: 2,
	arrows: true,
	touchMove: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
// eof

// Фильтер
$('.catalog__filter-heading').on('click', function () {
	$(this).toggleClass('active')
	$('.catalog__filter-dropdown').slideToggle()
})
// eof

// Выпадающие блоки дополнения на странице курса
$('.addition__dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.addition__dropdown-heading').not(this).removeClass('active').next().slideUp()
})
// eof

// Слайдер партнеров
$('.partners__slider').slick({
	Infinite: true,
	speed: 800,
	slidesToShow: 3,
	arrows: true,
	touchMove: false,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 1340,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
// eof
