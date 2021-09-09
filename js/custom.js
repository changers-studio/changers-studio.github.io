jQuery(function () {
	if ($('*').is('.advisors__slider')) {
		$('.advisors__slider').slick({
			touchMove: false,
			speed: 800,
			dots: true,
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						fade: true,
					},
				},
			],
		})
	}

	// Select2
	if ($('*').is('.filter__item-select')) {
		$('.filter__item-select').select2({
			minimumResultsForSearch: -1,
			width: '100%',
			selectionCssClass: 'filter-select__heading',
			dropdownCssClass: 'filter-select__dropdown',
		})
	}

	$('b[role="presentation"]').hide()
	$('.select2-selection__arrow').append('<i class="fas fa-chevron-down"></i>')

	// Dropdown
	if ($('*').is('.player__dropdown-heading')) {
		$('.player__dropdown-heading').on('click', function () {
			$(this)
				.toggleClass('active')
				.closest('.player')
				.find('.player__dropdown-body')
				.slideToggle()
		})
	}

	// Filter dropup
	if ($('*').is('.filter__button-mobile')) {
		$('.filter__button-mobile, .filter__close').on('click', function () {
			$('.filter').toggleClass('active')
		})
	}

	// Range
	if ($('*').is('.range-input')) {
		$('.range-input').ionRangeSlider({
			skin: 'round',
			min: 0,
			max: 100000,
		})
	}
})

$('.dropdown').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown').not(this).removeClass('active').next().slideUp()
})

// Main hamburger
let body = $('body')
let sidebar = $('.header__sidebar')
let plug = $('.header__sidebar-plug')
let toggleSidebar = $(
	'.header__hamburger, .header__sidebar-plug, .header__sidebar-close'
)

toggleSidebar.on('click', function () {
	sidebar.toggleClass('active')
	plug.toggleClass('active')
	body.toggleClass('scroll_disable')
})

// Dashboard hamburger
let bodyDashboard = $('.p-dashboard')
let sidebarDashboard = $('.p-dashboard .sidebar-menu')
let toggleSidebarDashboard = $(
	'.dashboard .top-line__hamburger, .sidebar-menu__close'
)

toggleSidebarDashboard.on('click', function () {
	sidebarDashboard.toggleClass('active')
	bodyDashboard.toggleClass('scroll_disable')
})

// Tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active')
		.siblings()
		.removeClass('active')
		.closest('div.tabs')
		.find('div.tabs__content')
		.removeClass('active')
		.eq($(this).index())
		.addClass('active')
})
