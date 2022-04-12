$(function(){

    $('#active_menu_btn').on('click' , function(){
        $('#main_menu ul , #nav .navbar-brand').toggleClass('active')
    })

    //banner slider start

    $('.banner-slider').slick({
        prevArrow: '<div class="banner_arrow"><li><a href="#"><i class="fa-solid fa-angle-left"></i></a></li></div>',
        nextArrow: '<div class="banner_arrow arrow_right"><li><a href="#"><i class="fa-solid fa-angle-right"></i></a></li></div>'
    })
    //banner slider end

    //counter up start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //counter up end

    //blog slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        prevArrow:$('.blog_slider_arrow_left'),
        nextArrow:$('.blog_slider_arrow_right'),
    })

    //testimonial slider
    $('.testimonal_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
    })
    
})