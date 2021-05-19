function choosePhoto(target) {
	let input = document.createElement('input')
	input.setAttribute('type', 'file')

	input.addEventListener('change', (e) => {
		showPreview(e.target.files[0], target)
	})

	input.click()
}

function showPreview(file, target) {
	if (!file || !file.type || file.type.indexOf('image') !== 0) {
		return
	}

	if (file) {
		var reader = new FileReader()
		reader.onload = function (e) {
			$('.profile__avatar')
				.css('background', 'url(' + e.target.result + ')')
				.css('background-size', 'cover')
			$('.profile__avatar').hide()
			$('.profile__avatar').fadeIn(650)
		}
		reader.readAsDataURL(file)
	}
}

let avatar = document.getElementById('avatar')
avatar.addEventListener('click', () => choosePhoto(avatar))

$('.partnership__button').on('click', function () {
	var copyText = document.getElementById('copyInput')
	copyText.select()
	document.execCommand('copy')
})
