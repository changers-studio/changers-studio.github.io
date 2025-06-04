import gsap from 'gsap'

const dropdowns = document.querySelectorAll('.faq__dropdown')
const dur = 0.5

const closeAllDropdowns = () => {
	dropdowns.forEach((dropdown) => {
		const dropdownContent = dropdown.querySelector('.faq__dropdown-content')
		dropdown.classList.remove('active')

		gsap.to(dropdownContent, {
			duration: dur,
			height: 0,
		})
	})
}

dropdowns.forEach((dropdown) => {
	dropdown.addEventListener('click', () => {
		const hasActiveClass = dropdown.classList.contains('active')
		const dropdownContent = dropdown.querySelector('.faq__dropdown-content')

		if (hasActiveClass) {
			closeAllDropdowns()
		} else {
			closeAllDropdowns()

			dropdown.classList.add('active')

			gsap.to(dropdownContent, {
				duration: dur,
				height: 'auto',
			})
		}
	})
})
