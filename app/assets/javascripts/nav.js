(function($) {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor;
    $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 100
  });
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });
  $('#mainNav').affix({
    offset: {
      top: 50
    }
  });
});