(function($){
  'use strict';
    $(window).on('load', function () {
    setTimeout(function(){
        $('.preloader').fadeOut("slow");
        //console.log($('.preloader').position())
        $("#logo").fadeOut("slow");
        setTimeout(function(){
          animation1.play();
          animation2.play();
          animation3.play();
          avatarAnimation.play();
        }, 1000)
        
        }, 6000);
    });
})(jQuery)
