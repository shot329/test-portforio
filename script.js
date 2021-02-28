$(function() {

  // パララックス
  var rellax = new Rellax('.rellax-target');

  // スマホ版メニュー
  $('#menulist').click(function() {
    if ($('.overlay').hasClass('show')) {
      $('.overlay').removeClass('show');
    } else {
      $('.overlay').addClass('show');
    }
  });

  // ワークアウト
  $('.indi-work').hover(
    function() {
      // $(this).findは指定した子要素から見つける。
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

});