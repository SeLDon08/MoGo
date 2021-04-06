$(function () {
    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    /* FIXED HEADER */
    checkScroll(scrollOffset);
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    /* SMOOTH SCROLL */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    /* MENU NAV TOGGLE */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    /* COLLAPSE */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass("active");

    });
    /* SLIDER */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});