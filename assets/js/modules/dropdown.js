import $ from 'jquery';

$(function() {
  $('.dropdown-text__main-wrapper').on('click', function(){
    $(this).toggleClass('active');
    $(this).next('.dropdown-text__hiddent-content').animate({
      height: 'toggle'
    })
  })
})
