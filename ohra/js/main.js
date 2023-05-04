// Add classes to footer dropdown heading
function footerDropdown() {
	$(this).toggleClass('active').next().slideToggle()
	$('.footer__heading').not(this).removeClass('active').next().slideUp()
}

$(window).on('load', function () {
	if ($(window).width() <= 1000) {
		$('.footer__heading').on('click', function () {
			$(this).toggleClass('active').next().slideToggle()
			$('.footer__heading').not(this).removeClass('active').next().slideUp()
		})
	}
})

let resizeId
window.addEventListener('resize', function () {
	clearTimeout(resizeId)
	resizeId = setTimeout(doneResizing, 500)
})

function doneResizing() {
	if ($(window).width() > 1000) {
		$('.footer__heading')
			.off('click', footerDropdown)
			.removeClass('active')
			.next()
			.slideDown()
	}
}

// Hamburger
$('.header__hamburger').on('click', function () {
	$('.header-desktop').toggleClass('active')
	$('body').toggleClass('scroll-disabled')
	$('.catalog__filter, .catalog__filter-dropdown').removeClass('active')
})
//

// Dropdown
$('.dropdown-heading').on('click', function () {
	$(this).toggleClass('active').next().slideToggle()
	$('.dropdown-heading').not(this).removeClass('active').next().slideUp()
})

$(document).on('click', (e) => {
	const dropdownHead = $('.dropdown-heading')
	const dropdownBody = $('.dropdown-heading').next()

	if (
		!dropdownHead.is(e.target) &&
		dropdownHead.has(e.target).length === 0 &&
		!dropdownBody.is(e.target) &&
		dropdownBody.has(e.target).length === 0
	) {
		dropdownBody.slideUp().prev().removeClass('active')
	}
})
//

// Tabs
$('ul.tabs__captions').on('click', 'li:not(.active)', function () {
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
//

// Categpries slider
$('.categories__slider').slick({
	infinite: true,
	touchMove: false,
	slidesToShow: 6,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1480,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1001,
			settings: {
				slidesToShow: 3,
				arrows: false,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})
//

// Add to favorites
$('.fav-toggle').on('click', function () {
	$(this).toggleClass('active')
})
//

// Product preview slider
if ($('*').is('.product__slider')) {
	const productSlider = $('.product__slider')

	productSlider.slick({
		infinite: true,
		touchMove: false,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 1000,
		dots: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					dots: false,
				},
			},
		],
	})

	productSlider.mouseover(function () {
		$(this).slick('play')
	})

	productSlider.mouseout(function () {
		$(this).slick('pause')
	})
}
//

// Product buttons
$('.product__btn').on('click', function () {
	$(this).toggleClass('active')
})
//

// Catalog filter
$('.catalog__filter-heading').on('click', function () {
	$(this).toggleClass('active').next().toggleClass('active')
	$('.catalog__filter-heading')
		.not(this)
		.removeClass('active')
		.next()
		.removeClass('active')
})

if ($(window).width() > 1000) {
	$(document).on('click', (e) => {
		const filterHead = $('.catalog__filter-heading')
		const filterBody = $('.catalog__filter-heading').next()

		if (
			!filterHead.is(e.target) &&
			filterHead.has(e.target).length === 0 &&
			!filterBody.is(e.target) &&
			filterBody.has(e.target).length === 0
		) {
			filterBody.removeClass('active').prev().removeClass('active')
		}
	})
}

$('.catalog__mobile-filter').on('click', function () {
	$('.catalog__filter').addClass('active')
})

$('.catalog__mobile-sort').on('click', function () {
	$('.catalog__filter, .filter-sort__dropdown').addClass('active')
})

$('.arrow-append').on('click', function () {
	$('.catalog__filter-top').addClass('active')
})

$('.catalog__filter-close').on('click', function () {
	$('.catalog__filter, .catalog__filter-dropdown, .catalog__filter-top').removeClass(
		'active'
	)
})
//

// Show more products
$('.catalog__show-more').on('click', function () {
	$('.product.hidden').removeClass('hidden').find('.product__slider').slick('refresh')
})
//

// Product touch event
$('.product').on('touchstart', function () {
	$(this).css('box-shadow', '0px 10px 50px rgba(0, 0, 0, 0.4)')
})

if ($(window).width() <= 768) {
	$('.product').on('touchend', function () {
		$(this).css('box-shadow', '0px 0px 11px rgba(0, 0, 0, 0.15)')
	})
} else {
	$('.product').on('touchend', function () {
		$(this).css('box-shadow', '0px 0px 11px rgba(0, 0, 0, 0)')
	})
}

//
