$( document ).ready(function() {
    var firstLi = $(".navbar-nav").children().first();
    console.dir(firstLi);

    var page = $("a[rel='m_PageScroll2id']");
        page.mPageScroll2id({
            offset:140
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
        rewindSpeed : 1000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            }
        }
    });
    $(".form").submit(function(){
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            alert("Thanks!");
        });
        return false;
        });
    $(".item-library").magnificPopup({
       type: "image",
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });
});
