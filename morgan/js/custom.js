$(function () {
	// Json animation
	lottie.loadAnimation({
		container: document.getElementById('main-coin-1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/main__coins.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('main-coin-2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/main__coins.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('main-coin-3'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/main__coins.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('scroll-down'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/scroll-down.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('scroll-down-2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/scroll-down.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('scroll-down-3'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/scroll-down.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('scroll-down-4'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/scroll-down.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('stars-1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/stars.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('stars-2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/stars.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('stars-3'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/stars.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('stars-4'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/stars.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('stars-5'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/stars.json',
	})

	lottie.loadAnimation({
		container: document.getElementById('money-rain'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'animation/money-rain.json',
	})
	// eof
})

// Гамбургер меню
$('.header__hamburger').on('click', function () {
	$(this).toggleClass('is-active')
	$('.header__hamburger-inner').fadeToggle()
})
// eof

// Выпадающий блок FAQ
$('.faq__dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.faq__dropdown-heading').not(this).removeClass('active').next().slideUp()
})
// eof
