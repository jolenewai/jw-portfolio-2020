(function($){
  'use strict';
    $(window).on('load', function () {
    setTimeout(function(){
      $('.preloader').fadeOut("slow");
      //console.log($('.preloader').position())
      $("#logo").fadeOut("slow");
      setTimeout(function(){
          avatarAnimation.play();
          setTimeout(function(){
            animation1.play();
            animation2.play();
            animation3.play();
          }, 1000)
        },500)
        }, 7000);
    });
})(jQuery)


var mySwiper = new Swiper('.swiper-container', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-new',
    prevEl: '.swiper-button-prev-new',
  },

})