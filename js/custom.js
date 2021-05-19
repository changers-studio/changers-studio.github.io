jQuery(function () {
	$('.dropdown__heading').on('click', function () {
		$(this).toggleClass('_active').next().slideToggle()
		$('.dropdown__heading').not(this).removeClass('_active').next().slideUp()
	})

	$('.instruction__button').on('click', function () {
		$(this).toggleClass('_active').prev().toggleClass('_visible')
	})
})

var body = $('body')
var sidebar = $('.header__sidebar')
var sidebarClose = $('.sidebar__close')
var plug = $('.sidebar__plug')
var toggleSidebar = $('.header__hamburger, .sidebar__plug, .sidebar__close')

toggleSidebar.on('click', function () {
	sidebarClose.toggleClass('_rotate')
	sidebar.toggleClass('_visible')
	plug.toggleClass('_visible')
	body.toggleClass('scroll_disable')
})

$('.toggle-password').on('click', function () {
	$(this).toggleClass('_hide')
	var input = $(this).prev()
	if (input.attr('type') == 'password') {
		input.attr('type', 'text')
	} else {
		input.attr('type', 'password')
	}
})

// Form success
$('.main__form').on('submit', function () {
	var th = $(this)
	$.ajax({
		type: 'POST',
		data: th.serialize(),
	}).done(function () {
		th.trigger('reset')
	})
	return false
})

$('.main__form').on('submit', function () {
	$('.success__link').trigger('click')
})
