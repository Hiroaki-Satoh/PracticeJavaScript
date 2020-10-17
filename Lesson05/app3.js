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

// 1.要素を上から下へスライド。
// 2.赤色の正方形を青色の長方形(幅：200px, 高さ：100px)に変更。
// 3.下から上へスライドさせる。
