$(function () {
	//
})

// Показать или скрыть пароль
$('.sign__form-label-button').on('click', function () {
	$(this).toggleClass('_show-password')

	var input = $(this).prev()

	if (input.attr('type') == 'password') {
		input.attr('type', 'text')
	} else {
		input.attr('type', 'password')
	}
})
// eof
