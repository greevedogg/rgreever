$(document).ready(function(){
    $('.menu-icon').on('click',function(){
        $('.nav ul').toggleClass('show');
    });
});
            
function checkScroll(){
    var startY = $('.header').height() * 1; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.header').addClass("scrolled");
        $('.link').addClass("scrolled");
    }else{
        $('.header').removeClass("scrolled");
        $('.link').removeClass("scrolled");
    }
}

if($('.header').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

if($('.link').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
 