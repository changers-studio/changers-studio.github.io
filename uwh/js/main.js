const hamburgerBtn = document.querySelector('.header-hamburger__btn')
const hamburgerMenu = document.querySelector('.header-hamburger__menu')

hamburgerBtn.addEventListener('click', () => {
	document.body.classList.toggle('scroll-disabled')
	hamburgerMenu.classList.toggle('active')
})
