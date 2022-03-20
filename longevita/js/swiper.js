
var swiper = new Swiper(".main .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: ".main .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main .swiper-button-next",
    prevEl: ".main .swiper-button-prev",
  },
});

var swiper = new Swiper(".sale .mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   loop: true,
   speed: 600,
   autoplay: {
    delay: 1500,
  },
   breakpoints: {
      480: {
         slidesPerView: 2,
         spaceBetween: 18
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 10
      }
   },
   pagination: {
     el: ".sale .swiper-pagination",
     clickable: true,
   },
 });