$(document).ready(function(){
 if(window.matchMedia('(min-width: 500px)').matches) {
   $('.slider-slick').slick({
     slidesToShow: 3,
     dots: false,
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: true,
   });
 }
 else {
  $('.slider-slick').slick({
   slidesToShow: 1,
   dots: false,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows: true,
 });
}
return false;
});

