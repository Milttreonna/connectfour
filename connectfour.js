// onclick: if all spaces are taken: do nothing. else: drop to lowest position,
// change player. if click creates 4 in a row, player wins
// if whole game is filled, game over

var game = {
  whose_turn: P1;
  columns: [[null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]];

  drop: function (column_i) {
    // what is the lowest empty row in columns[column_i]
    // update columns[column_i][lowest] to be filled
    // find the td/tr that corresponds to columns[column_i][lowest]
    // update it to be filled
     // column_i = "blue";
    var td_to_change = document.getElementsByTagName('tr')[???].getElementsByTagName("td")[column_i];
    if (whose_turn = P1) {
      td_to_change.src = "img/red.png";
      whose_turn = P2;
    } else {
      td_to_change.src = "img/blue.png";
      whose_turn = P1;
    }
  }
}

game.dropP1(2) // 2 is the third column
