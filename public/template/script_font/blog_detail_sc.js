$(function () {
    var numItems = $('.photo-container').length;
    console.log(numItems);
    $(".gallery").slice(0, 3).show();
    $(".loadMore").on('click', function (e) {
        e.preventDefault();
        $(".gallery:hidden").slice(0, 3).slideDown();
        if ($(".gallery:hidden").length == 0) {
            $(".load").fadeOut('slow');
        }
    });
});