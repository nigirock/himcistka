$( document ).ready(function() {
    var firstLi = $(".navbar-nav").children().first();
    console.dir(firstLi);

    var page = $("a[rel='m_PageScroll2id']");
        page.mPageScroll2id({
            offset:150
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
});
