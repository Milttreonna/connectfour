// onclick: if all spaces are taken: do nothing. else: drop to lowest position,
// change player. if click creates 4 in a row, player wins

// if whole game is filled, game over

var game = {
  whose_turn: P1;
  columns: [["red", null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]];

  drop: function (column_i) {
    // drop a chip in the col column_i
    // next turn
    // hide full column
    // ??
  }
}

game.drop(2) // 2 is the third column