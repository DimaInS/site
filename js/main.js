$(function () {
    let header = $('#header');
    let headerH;
    let intro = $('#home');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        headerH = header.innerHeight();
        if ( scrollPos > headerH) {
            header.addClass('background');
        } else {
            header.removeClass('background'); 
        }
    });
    $ ('[data-scroll]').on('click',function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html,body').animate( {
            scrollTop: elementOffset - 64
        } ,700 );
    }); 
	$('.testimonials__box').slick({
    adaptiveHeight: true,
    prevArrow: false,
        slidesToShow:3,
        slidesToScroll: 1,
         infinite: true,
        variableWidth: false,
      
        responsive:[
             {
           breakpoint: 1240,
           settings: {
               slidesToShow: 2
               
                }
               
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                    
                     } 
            }
            
         ]
    });
    $('.header__burger').click(function(event) {
        $('.header__menu').toggleClass('header__menu--active')
    });
});