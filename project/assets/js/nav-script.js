// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('.top-nav').outerHeight();

jQuery(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        jQuery('.top-nav').removeClass('nav-down').addClass('nav-up');
        // jQuery('.menu-item').removeClass('nav-down').addClass('nav-up');
        // jQuery('#top-nav-button').removeClass('nav-down').addClass('nav-up');
        jQuery('.search').removeClass('nav-down').addClass('nav-up');
        jQuery('.site-logo').removeClass('nav-down').addClass('nav-up');
        jQuery('.title-menu').removeClass('nav-down').addClass('nav-up');
        // jQuery('.awaken-search-box-container').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('.top-nav').removeClass('nav-up').addClass('nav-down');
            // jQuery('.menu-item').removeClass('nav-up').addClass('nav-down');
            // jQuery('#top-nav-button').removeClass('nav-up').addClass('nav-down');
            jQuery('.search').removeClass('nav-up').addClass('nav-down');
            jQuery('.site-logo').removeClass('nav-up').addClass('nav-down');
            jQuery('.title-menu').removeClass('nav-up').addClass('nav-down');

            // jQuery('.awaken-search-box-container').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}