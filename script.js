$(function() {

  $('#menulist').click(function() {

    if ($('.overlay').hasClass('show')) {
      $('.overlay').removeClass('show');
    } else {
      $('.overlay').addClass('show');
    }
  });

});