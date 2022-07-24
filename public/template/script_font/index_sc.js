
        $(document).ready(function () {
            $('.banner_top').owlCarousel({
                loop: false,
                item: 1,
                slideBy: 1,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 800,
                dots: false,
                nav: true,
                navText: ['<img src="/template/images/arrow_left.png">', '<img src="/template/images/arrow_right.png">'],
                navClass: ['owl-prev', 'owl-next'],
                responsive: {
                    0: {
                        items: 1,


                    },
                    600: {
                        items: 1,
                        slideBy: 1,
                        nav: false,

                    },
                    1024: {
                        items: 1,
                        slideBy: 1
                    },
                    1200: {
                        items: 1,
                        slideBy: 1
                    }
                }
            })
            $('.flashsale_slide').owlCarousel({
                loop: false,
                item: 1,
                slideBy: 1,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 800,
                dots: false,
                nav: true,
                navText: ['<img src="/template/images/arrow_left.png">', '<img src="/template/images/arrow_right.png">'],
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
            $('.category_slide').owlCarousel({
                loop: false,
                item: 1,
                slideBy: 1,
                autoplay: true,
                autoplayHoverPause: true,
                smartSpeed: 800,
                dots: false,
                nav: true,
                navText: ['<img src="/template/images/arrow_left.png">', '<img src="/template/images/arrow_right.png">'],
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
            $('.categoryTop').owlCarousel({
                loop: true,
                margin: 15,
                lazyLoad: true,
                autoplay: false,
                nav: true,
                navText: ['<img src="/template/images/arrow_left.png">', '<img src="/template/images/arrow_right.png">'],
                dots: false,
                responsive: {
                    0: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 3
                    },

                }
            })

        });

        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        let countDown = new Date('July 30, 2022 00:00:00').getTime(),
            x = setInterval(function () {
                let now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById('days').innerHTML = Math.floor(distance / (day)), document.getElementById(
                    'hours').innerHTML = Math.floor((distance % (day)) / (hour)), document.getElementById(
                    'minutes').innerHTML = Math.floor((distance % (hour)) / (minute)), document.getElementById(
                    'seconds').innerHTML = Math.floor((distance % (minute)) / second);
                //do something later when date is reached
                //if (distance < 0) {
                //  clearInterval(x);
                //  'IT'S MY BIRTHDAY!;
                //}
            }, second)
