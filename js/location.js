document.addEventListener('DOMContentLoaded', function () {
	fileName = location.href.split('/').slice(-1)
	let langLink = document.querySelector('.lang__dropdown')

	langLink.href = '../' + fileName
})
