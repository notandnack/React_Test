<script src="/template/js/zeynep.js"></script>

    $(window).scroll(function () {
        if ($(this).scrollTop() > 35) {
            $('.wrap_menu').addClass("sticky");
        } else {
            $('.wrap_menu').removeClass("sticky");
        }
    });

    $(function () {
        // init zeynepjs side menu
        var zeynep = $('.zeynep').zeynep({
            opened: function () {
                // log
                console.log('the side menu opened')
            },
            closed: function () {
                // log
                console.log('the side menu closed')
            }
        });

        // dynamically bind 'closing' event
        zeynep.on('closing', function () {
            // log
            console.log('this event is dynamically binded')
        });

        // handle zeynepjs overlay click
        $('.zeynep-overlay').on('click', function () {
            zeynep.close()
        });

        // open zeynepjs side menu
        $('.btn-open').on('click', function () {
            zeynep.open()
        });
    });
