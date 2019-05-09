$(function(){
    $(window).scroll(function(){
        var x = $(this).scrollTop();
        if ( x > 80){
            $('.scroll_nav').show();
        }
        else{
            $('.scroll_nav').hide();
        }
    });
    
    $('.header li a').click(function(){
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        },1000)
    });
});