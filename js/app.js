(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
            offset:120
        });
    });
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        nav:true,
        animateOut: 'fadeInRight',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            1200:{
                items:1
            }
        }
    })
})(jQuery);
