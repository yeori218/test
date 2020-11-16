$(document).ready(function () {

       $(".dp2").hide();

        $(".gnb>li").mouseover(function(){
            $(this).children(".dp2").stop().slideDown();
        });
        $(".gnb>li").mouseout(function(){
            $(this).children(".dp2").stop().slideUp();
        });
    $('.visual').bxSlider({
         auto: true
     });
    
    $('.content1_hover').hide();
     $('.content_1').mouseover(function () {
         $('.content_1 .content1_hover').stop().fadeIn();


     });
     $('.content_1').mouseout(function () {
         $('.content1_hover').stop().fadeOut();
     });
    
     $('.content2_hover').hide();
     $('.content_2').mouseover(function () {
         $('.content_2 .content2_hover').stop().fadeIn();


     });
     $('.content_2').mouseout(function () {
         $('.content2_hover').stop().fadeOut();
     });
    
     $('.content3_hover').hide();
     $('.content_3').mouseover(function () {
         $('.content_3 .content3_hover').stop().fadeIn();


     });
     $('.content_3').mouseout(function () {
         $('.content3_hover').stop().fadeOut();
     });
    $('.view_slide').bxSlider({
         auto: true,
         maxSlides: 5,
         moveSlides: 1,
         slideWidth: 240,
         pager: false
     });
    $('#all_box').hide();
     $('.all_menu').click(function () {
         $('#all_box').fadeIn();

     });

     $('.close').click(function () {
         $('#all_box').fadeOut();
     });
});
