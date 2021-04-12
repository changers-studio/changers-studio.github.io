jQuery(function () {
	const parallax = document.querySelector('#parallax')
	onmousemove = (e) => {
		const x = innerWidth / 2 - e.x
		const y = innerHeight / 2 - e.y
		parallax.style.transform = `translate(${x / 20}px, ${y / 20}px)`
	}
})
