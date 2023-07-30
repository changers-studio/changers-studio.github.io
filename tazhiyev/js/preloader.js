document.body.classList.add('scroll-disabled')

window.addEventListener('load', () => {
	function number_to(id, from, to, duration) {
		var element = document.getElementById(id)
		var start = new Date().getTime()
		setTimeout(function () {
			var now = new Date().getTime() - start
			var progress = now / duration
			var result = Math.floor((to - from) * progress + from)
			element.innerHTML = progress < 1 ? result : to
			if (progress < 1) setTimeout(arguments.callee, 10)
		}, 20)
	}
	number_to('prelodaer-count', 0, 100, 1000)

	gsap.to('.preloader__counter', {
		duration: 1,
		opacity: 0,
		delay: 1.2,
		ease: 'power4.in',
	})

	gsap.to('.preloader', {
		duration: 1,
		yPercent: -100,
		delay: 2,
		ease: 'power4.in',
	})

	setTimeout(() => {
		document.body.classList.remove('scroll-disabled')
	}, 3000)
})
