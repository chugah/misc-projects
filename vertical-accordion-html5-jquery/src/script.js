$(function() {
$('section').click(function(){
  $(this).siblings('section').addClass( "closediv", 1000, "easeOutSine" );
  $(this).removeClass( "closediv opendiv", 1000, "easeOutSine" );
  $(this).addClass( "opendiv", 1000, "easeOutSine" );
});    

$('header').click(function(){
  $('section').removeClass("opendiv closediv", 400, "easeOutSine");
   });
});