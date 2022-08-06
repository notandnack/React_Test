$(document).ready(function () {
    $('.blogslide').owlCarousel({
        loop: true,
        margin: 15,
        lazyLoad: true,
        autoplay: false,
        nav: true,
        navText: ['<img src="/template/images/arrow_left.png" />', '<img src="/template/images/arrow_right.png" />'],
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3
            },

        }
    })
    $('.like-button').click(function(){
        $(this).toggleClass('is-active');
    })


});