jQuery(document).ready(function($) {
    $('.open-filters').click(function(event) {
        $('.filters__close-wrapper').toggleClass('show');
        $('.filters').toggleClass('active');
    });
});
