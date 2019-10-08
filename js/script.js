/*======================================
             Preloader
=======================================*/
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

/*======================================
             Team
=======================================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
});

/*======================================
             Progres bar
=======================================*/
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/*======================================
             Responsive tabs
=======================================*/

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*======================================
             Portofolio tabs
=======================================*/

$(window).on('load', function () {
    // Init Isotope

    $("#isotope-container").isotope({
    });

        //filter items button
        
        $("#isotope-filters").on('click', 'button', function() {

            var filterValue = $(this).attr('data-filter');

            $("#isotope-container").isotope({
                filter:filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});


/*======================================
             Mgnifire
=======================================*/

$(function (){

    $("#portofolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled:true
        }

      });
});


/*======================================
             Testemonial
=======================================*/

$(function () {
    $("#testemonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
});






