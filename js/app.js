$( document ).ready(function() {
    var widthScreen = $(window).width();
    console.log(widthScreen);
    var page = $("a[rel='m_PageScroll2id']");
    if(widthScreen <= 680){
        page.mPageScroll2id({
            offset:150
        });
    }else{
        page.mPageScroll2id({
            offset:135
        });
    }

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
var model = {
    /*=================== ДИВАНЫ ====================*/
    tableDivans:[{
            name:"Диван двухместный",
            price:"150 000",
            photo:"img/2divan.jpg"
        },
        {
            name:"Диван трехместный",
            price:"250 000",
            photo:"img/3divan.jpg"
        },
        {
            name:"Диван четырехместный угловой",
            price:"350 000",
            photo:"img/4uglovoj.jpg"
        },
        {
            name:"Диван пятиместный угловой",
            price:"430 000",
            photo:"img/5uglovoj.jpg"
        }
    ],
    /*=================== МЕБЕЛЬ ====================*/
        tableFurniture:[{
                name:"Кресло",
                price:"80 000",
                photo:"img/kreslo-dom.jpg"
            },
            {
                name:"Кресло-кровать",
                price:"100 000",
                photo:"img/kreslo_krovat.jpg"
            },
            {
                name:"Пуф,банкетка",
                price:"40 000",
                photo:"img/puf.jpg"
            },
            {
                name:"Стул,табурет",
                price:"60 000",
                photo:"img/stul.jpg"
            },
            {
                name:"Стул компьютерный",
                price:"80 000",
                photo:"img/stul-computer.jpg"
            },
            {
                name:"Офисное кресло",
                price:"100 000",
                photo:"img/stul-office.jpg"
            },
            {
                name:"Подушка",
                price:"20 000 - 30 000",
                photo:"img/Podushka.jpg"
            },
            {
                name:"Кухонный уголок",
                price:"150 000",
                photo:"img/ugolok-kuhnja.jpg"
            }

        ],
    /*=================== ОТЗЫВЫ ====================*/
        otzyvy:[
        {
            name:"Татьяна Лазарева",
            date:"8 мая 2015 в 12.58",
            text:"Спасибо за новый диван!!!"
        },
        {
            name:"Ленка Титова",
            date:"17 мая 2015 в 21:10",
            text:"Отличная работа!!! Очень довольны. Мама думала диван перетягивать придется (после маленького ребенка). Теперь как новый!) СПАСИБО!!!"
        },
        {
            name:"Ирина Горбачева",
            date:"23 июня 2015 в 21:40",
            text:"Огромное спасибо, за чистку дивана и ковров, мы даже и не думали, что после маленького ребенка можно вернуть прежнюю чистоту, т. е. состояние нового.Мастера очень добросовестные и приятные в общении,даже проконсультировали.Работа выполнена на 100 баллов.Мы остались в восторге, всем рекомендуем.Еще раз огромное спасибо!!!!!!!!!!!!!!!!!!!!!"
        },
        {
            name:"Галина Малаш",
            date:"12 июля 2015 в 21:03",
            text:"Все очень здорово! Спасибо огромное, очень хорошо работают ваши мастера. СПАСИБО. В будущем планируют и дальше воспользоваться вашими услугами. Я даже перестановку сделала. Здорово что есть интернет и здорово, что вы нашлись мне"
        },
        {
            name:"Инна Трофимович",
            date:"16 июля 2015 в 15:21",
            text:"Хочу выразить огромную благодарность за химчистку дивана! мы выиграли в конкурсе,с нами быстро связались и приехали в удобное для нас время! Даже не ожидала,но после химчистки не осталось никаких запахов ! Все профессионально,быстро и качественно! Спасибо огромное!!!!Советую!"
        }
    ]
};
var mainBlock = angular.module("App",[]);
mainBlock.controller("mainBlockCtrl",function($scope){
    $scope.list = model;
});
