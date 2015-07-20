$( document ).ready(function() {
    var firstLi = $(".navbar-nav").children().first();
    console.dir(firstLi);

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
        autoPlay:true,
        stopOnHover:true,
        paginationSpeed : 2000,
        rewindSpeed : 1000,
        responsive:{
            0:{
                items:1
            }
        }
    });
});
