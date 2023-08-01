'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const forms = document.querySelectorAll('.feedback__form')

	forms.forEach((form) => {
		form.addEventListener('submit', formSend)

		async function formSend(e) {
			e.preventDefault()

			let formData = new FormData(form)

			let response = await fetch('mail.php', {
				method: 'POST',
				body: formData,
			})
			if (response.ok) {
				Fancybox.show([{ src: '#modal-thx', type: 'inline' }])
				setTimeout(() => {
					form.reset()
				}, 1000)
			} else {
				alert('Error! Please try again later.')
			}
		}
	})
})
