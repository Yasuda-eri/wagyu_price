$(function() {
  $('#page-top').find('a').click(function() {
    $('body,html').animate({
      scrollTop: 0
     });
  })
});