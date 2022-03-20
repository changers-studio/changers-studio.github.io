// Search form
let headerSearchForm = document.querySelector('.header .search__form')
let headerSearchOpen = document.querySelector('.header .search__icon')
let headerSearchClose = document.querySelector('.header .search__close')
headerSearchOpen.onclick = function () {
	headerSearchForm.classList.add('active')
}
headerSearchClose.onclick = function () {
	headerSearchForm.classList.remove('active')
}

// Hamburger
let body = document.querySelector('body')
let headerHamburger = document.querySelector('.header__hamburger')
let headerHamburgerClose = document.querySelector('.header__hamburger.open')
let sidebar = document.querySelector('.sidebar')

// headerHamburger.onclick = function () {
// 	this.classList.toggle('open')
// 	sidebar.classList.toggle('active')
// 	body.classList.toggle('scroll_disable')
// }

// Sidebar catalog dropdown
let sidebarCatalogHeading = document.querySelector(
	'.sidebar__catalog .catalog__heading'
)
let sidebarCatalogDropdown = document.querySelector(
	'.sidebar__catalog .catalog__list'
)

// sidebarCatalogHeading.onclick = function () {
// 	this.classList.toggle('active')
// 	sidebarCatalogDropdown.classList.toggle('active')
// }

// Header fixed
let header = document.querySelector('.header')
// let headerHeight = document.querySelector('.header').clientHeight
let sticky = header.offsetTop
let margin = 60
window.onscroll = function () {
	headerFixed()
}
function headerFixed() {
	if (window.pageYOffset > sticky) {
		header.classList.add('fixed')
		//body.style.marginTop = headerHeight + 'px'
		body.style.marginTop = margin + 'px'
	} else {
		header.classList.remove('fixed')
		body.style.marginTop = 0

	}
}



$(function(){

	
	$('.magnific-popup').magnificPopup()



	var header = $('.header__catalog_mobile'),
	scrollPrev = 0;
	$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

	if ( scrolled > 0 && scrolled > scrollPrev ) {
	header.addClass('out');
	} else {
	header.removeClass('out');
	}
	scrollPrev = scrolled;
	});



	if ($('*').is('.select2')) {
		$('.select2').select2({
		  minimumResultsForSearch: -1,
		  width: '100%',
		  
		  dropdownCssClass: 'select__dropdown',
		  selectionCssClass: 'select__heading',
		})
	 };
	 if ($('*').is('.sort-select')) {
		$('.sort-select').select2({
		  minimumResultsForSearch: -1,
		  width: '100%',
		  
		  dropdownCssClass: 'select__dropdown',
		  selectionCssClass: 'select__heading',
		})
	 };

	







/////скролл к якорю//////
	document.querySelectorAll('a[href^="#"').forEach(link => {
	link.addEventListener('click', function(e) {
		 e.preventDefault();
		 let href = this.getAttribute('href').substring(1);
		 const scrollTarget = document.getElementById(href);
		 const topOffset = 100
		 const elementPosition = scrollTarget.getBoundingClientRect().top;
		 const offsetPosition = elementPosition - topOffset;
		 window.scrollBy({
			  top: offsetPosition,
			  behavior: 'smooth'
		 	});
		});
	});



	
/////табы тонометры//////////	
	$('.tonometers-tabs__wrapper').each(function() {
		let ths = $(this);
		ths.find('.tonometers-tabs__item').click(function() {
			ths.find('.tonometers-tabs__item').removeClass('_active').eq($(this).index()).addClass('_active');
		})
	});	



////////ховер тонометров//////////	
		$(".tonometers-item__box").hover(function(

		){
		   $(this).css('height', 'auto')
		},              
		  function(){
		   $(this).css('height', '100%')
		});
		
	
		



/////показать больше////////
	$('.blog-main .more__btn').click(function(){
   $('.blog-article_hidden').slideToggle(300, function(){
      if ($(this).is(':hidden')) {
         $('.blog-main .more__btn').html('Показати більше');
      } else {
         $('.blog-main .more__btn').html('Показати більше');
      }							
   });
   return false;
   	});

	$('.tonometers .more__btn').click(function(){
			$('.tonometers-item_hidden').slideToggle();
			$('.tonometers-item_hidden').css('display', 'flex')
			return false;
		});

	$('.blog-content .more__btn').click(function(){
			$('.sales-article_hidden').slideToggle();
			$('.tonometers-item_hidden').css('display', 'flex')
			return false;
		});

	

//slick//////
	$('.tonometers-slider__wrapper').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		variableWidth: false,
		fade: false,
		infinite: true,
		speed: 300,
		responsive: [
			{
			  breakpoint: 576,
			  settings: {
				variableWidth: true,
				swipeToSlide: true,
				TouchMove: false,
			  }
			}
		 ]
	  });

	  $('.tonometers-slider__btn_prev').on('click', function() {
		$('.tonometers-slider__wrapper').slick('slickPrev');
		});
		$('.tonometers-slider__btn_next').on('click', function() {
		$('.tonometers-slider__wrapper').slick('slickNext');
		});

	  $('.contacts-partners__wrapper').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		variableWidth: false,
		fade: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
			  }
			}
		 ]
	  });





	//   $('.basket-popup__slider').slick({
	// 	arrows: false,
	// 	dots: false,
	// 	slidesToShow: 4,
	// 	autoplay: true,
	// 	autoplaySpeed: 1000,
	// 	infinite: true,
	// 	speed: 300
	// })

	// $('.magnific-popup').magnificPopup({
	// 	callbacks: {
	// 		open: function() {
	// 			$('.basket-popup__slider').slick('reinit')
	// 		},
	// 	 }
	// });

	// $('.basket-popup__slider-btn_prev').on('click', function() {
	// 	$('.basket-popup__slider').slick('slickPrev');
	// 	});
	// $('.basket-popup__slider-btn_next').on('click', function() {
	// 	$('.basket-popup__slider').slick('slickNext');
	// 	});



 $('.photogallery__slider').slick({	
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 5,
	arrows: false,
	infinite: true,
	 focusOnSelect: true,
	 dots: true,
	 autoplay: true,
	 autoplaySpeed: 1500,
	 responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
			breakpoint: 576,
			settings: {
			 slidesToShow: 1,
			 centerMode: false,
			 adaptiveHeight: true
			}
		 }
	 ]
	 
	  

 })

	

//сайдбар фильтры/////
	  $('.tonometers-sort__btn').click(function(){
		  $('.tonometers-dropdown').addClass('_activated')
		  body.classList.toggle('scroll_disable')
	  });
	  $('.tonometers-dropdown__close').click(function(){
		$('.tonometers-dropdown').removeClass('_activated')
		body.classList.toggle('scroll_disable')
	});
	

 $('.selection-main__link').click(function(){

	$('.selection-main__hidden').slideToggle(300)
 })

 $('.selection-main__btn').click(function(e){
	e.preventDefault();
	$('.tonometers_hidden').slideToggle(300);
	$('.article-new_hidden').slideToggle(300);
 })


 $('.card__slider').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 infinite: false,
	 arrows: false,
	 dots: true,
	 asNavFor: '.card__subslider',
	 focusOnSelect: true,
	 
 })
 $('.card__subslider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: false,
	arrows: false,
	dots: false,
	asNavFor: '.card__slider',
	focusOnSelect: true,
})






	$('.tonometers-item__btns .compare').click(function(){
		$(this).toggleClass('compare_added')
	})
	$('.card__buy-compare').click(function(){
		$(this).toggleClass('compare_added')
	})


//aos///////////
AOS.init({
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
   
 
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 800, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
 
 });




});


