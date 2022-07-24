
$(document).ready(function() {
    $(".select-display-slide > li").click(function() {
        var rel = $(this).attr("rel");
        console.log(rel);
        $('.display-slide').hide();
        $('.display-slide[rel=' + rel + ']').fadeIn();
        $(".select-display-slide > li").removeClass("active");
        $(this).addClass("active");
    });
});
