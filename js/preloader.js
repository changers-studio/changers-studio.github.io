$(document).ready(function(){

	$(window).on('load', function() {
    AOS.refresh();
  });
	
	$('body').addClass('overflow-y');
	
	$('.preloader').delay(2500).fadeOut(1000);

	setTimeout(function() {
    $('body').removeClass('overflow-y');
  }, 2500);

  new Vivus('animated-logo', { type: 'sync', duration: 80 });

});