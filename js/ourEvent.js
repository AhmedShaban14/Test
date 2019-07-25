$(document).ready(function(){

    /* shwo navbar when click icon*/
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    
    // when scroll body... sticky navbar
    var checkScroll = false;
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc>300){
            $('header').addClass('sticky');

        }
        
        else{
            $('header').removeClass('sticky');

        }
        // scroll top icon
        if(sc>500){
            $('.scrollTop').fadeIn();
        }
        else{
            $('.scrollTop').fadeOut();
        }
    })
     //scroll top icon
     $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },700);
    });

    //smoth scroll 
    $('.nav-list a').click(function(){
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().top -80
        })
    });
    
    // pop videos choose section
    $('.pop').magnificPopup({
        type: 'image'
        // other options
    });
});