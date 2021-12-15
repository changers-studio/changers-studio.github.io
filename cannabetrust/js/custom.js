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

// Смена иконок при фокусе на поле
$('._user-icon input, ._key-icon input').on('focus', function () {
	$(this).parent().addClass('_focus')
})

$('._user-icon input, ._key-icon input').on('focusout', function () {
	$(this).parent().removeClass('_focus')
})
// eof
