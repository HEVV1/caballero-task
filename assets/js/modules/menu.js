import $ from 'jquery';

const MENU_BUTTON = '.button-menu';
const MENU = '.layout-menu';
let isMenuOpened = false;
$(function () {
  $(MENU_BUTTON).on('click', function () {
    if (!isMenuOpened) {
      $(this).addClass('active');
      $(MENU).addClass('active');
      overflowDisable();
      isMenuOpened = true;
    }
    else {
      $(this).removeClass('active');
      $(MENU).removeClass('active');
      overflowDisable();
      isMenuOpened = false;
    }
  })
})

$(function () {
  $(window).on('init resize change', function () {
    if ($(this).width() >= 768) {
      $(MENU_BUTTON).removeClass('active');
      $(MENU).removeClass('active');
      $('html').removeClass('overflow-disable');
      isMenuOpened = false;
    }
  })
})

function overflowDisable() {
  if (!isMenuOpened) {
    window.scrollTo(0, 0);
    $('html').addClass('overflow-disable');
  }
  else {
    $('html').removeClass('overflow-disable');
  }
}