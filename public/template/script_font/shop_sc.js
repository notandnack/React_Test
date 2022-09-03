$(document).ready(function () {

    $('.flashsale_slide').owlCarousel({
        loop: false,
        item: 1,
        slideBy: 1,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: false,
        nav: true,
        navText: ['<img src="/template/images/arrow_left.png" />', '<img src="/template/images/arrow_right.png" />'],
        navClass: ['owl-prev', 'owl-next'],
        responsive: {
            0: {
                items: 2,


            },
            600: {
                items: 3,
                slideBy: 1,
                nav: false,

            },
            1024: {
                items: 5,
                slideBy: 1
            },
            1200: {
                items: 6,
                slideBy: 1
            }
        }
    })


});