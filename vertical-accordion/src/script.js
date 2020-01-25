$('.js-accordion__item').on('click', function () {
  // set active class
  $(this).parent().find('.state-active').removeClass('state-active');
  
  $(this).removeClass('state-collapsed').addClass('state-active');
  
  //collapse other items
  $('.js-accordion__item').not(this).addClass('state-collapsed');
  
  
});