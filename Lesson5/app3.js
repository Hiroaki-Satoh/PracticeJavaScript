// Lesson5-3 確認問題
$(function(){
  $('.box1').slideDown(function() {
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});
