(function($){
  'use strict';
    $(window).on('load', function () {
    setTimeout(function(){
        $('.preloader').fadeOut("slow");
        //console.log($('.preloader').position())
        $("#logo").fadeOut("slow");
        }, 8000);
    });
})(jQuery)
