import $ from 'jquery';

$(function () {
  $("video").prop("volume", 0.01);
  $('.header__video-sound-wrapper').on('click', function () {    
    if ($('.header__video').prop('muted')) {
      $('.header__video').prop('muted', false);
      $(this).addClass('active');
    }
    else {
      $('.header__video').prop('muted', true);
      $(this).removeClass('active');
    }
  })
})