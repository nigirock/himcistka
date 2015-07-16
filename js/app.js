$( document ).ready(function() {

    var page = $("a[rel='m_PageScroll2id']");
        page.mPageScroll2id({
            offset:120
        });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        margin:10,
        loop:true,
        nav:true,
        animateOut: 'fadeInRight',
        animateIn: 'fadeIn',
        autoPlay:false,
        stopOnHover:true,
        paginationSpeed : 2000,
        rewindSpeed : 1000
    });
});
