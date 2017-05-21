$(document).ready(function () {
  var playerSymbol = null;

  var board = Array(9).fill(null);

  var xSymbol = '<i class="material-icons">close</i>';
  var oSymbol = '<i class="material-icons">panorama_fish_eye</i>';

  var optionsBar = $('#options');

  var cells = $('.cell');

  $('#btnX').on('click', function (e) {
    $('.grid-container').toggleClass('blocked');
    cells.html(xSymbol);
    playerSymbol = 1;
    optionsBar.fadeOut(1000);
  });

  $('#btnO').on('click', function (e) {
    $('.grid-container').toggleClass('blocked');
    cells.html(oSymbol);
    playerSymbol = 0;
    optionsBar.fadeOut(1000);
  });

  cells.on('click', function (e) {
    var index = $(this).data('index');
    if(board[index] === null && playerSymbol !== null){
      board[index] = playerSymbol;
      $(this).toggleClass('hover');
    }
  });

});
