


$(document).ready(function(){

    $(window).scroll(function (){
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky_top');

        if (scrolling >= 100) {
            sticky.addClass('bg_nav');
        } else {
            sticky.removeClass('bg_nav');
        }
    });







  });









