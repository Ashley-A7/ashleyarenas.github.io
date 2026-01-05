AOS.init();

// popup window for video 
$('.play-btn').on("click", function(e) {
    e.preventDefault();
    $('.popup-overlay').fadeIn();
    $('body').addClass('popup-is-open');
});

//close popup window anywhere in overlay except content (video)
$('.popup-overlay').on("click", function(e) {
    if(!$(e.target).closest('.popup-content').length) {
        $(this).fadeOut();
        $('body').removeClass('popup-is-open');
    }
});

// popup window for learn more
$('.learn-click').on("click", function(e) {
    e.preventDefault();
    $('.popup-overlay-learn').fadeIn();
    $('body').addClass('popup-is-open');
});

//close popup window anywhere in overlay except content (leanr more)
$('.popup-overlay-learn').on("click", function(e) {
    if(!$(e.target).closest('.popup-content-learn').length) {
        $(this).fadeOut();
        $('body').removeClass('popup-is-open');
    }
});

// responsive navigation menu
$('.burger').on("click", function() {
    $('.menu-holder').fadeToggle();
})

