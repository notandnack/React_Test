$(function () {
    var getPage = '<?php echo($pageName); ?>';
    $(".mainmember li").each(function () {
        var getMenu = $(this).attr("data-page");
        if (getPage == getMenu) {
            $(this).addClass('active');
        }
    });
});