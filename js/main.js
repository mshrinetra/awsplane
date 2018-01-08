$(function () {
    $(".section-img").on("click", function () {
        $(".section-img").animate({
            width: "30%"
        }, 1000).animate({
            width: "70%"
        }, 1000)
    })
});