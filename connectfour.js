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
    count === 0
    for (var i = 0; i < this.columns.length; i++) {
      for (var j = 0; j < this.columns[i].length; j++) {
        if (this.columns[i][j] !== null) {
          count += 1
        }
      }
    } if (count === 42) {
      document.getElementById('name').innerText = "Game Over";
    }
    // what is the lowest empty row in columns[column_i]
    // update columns[column_i][lowest] to be filled
    // find the td/tr that corresponds to columns[column_i][lowest]
    // update it to be filled
    if (whose_turn = P1) {
      columns[column_i] = "red";
    } else {
      columns[column_i] = "blue";
    }
    var td_to_change = document.getElementsByTagName('tr')[???].getElementsByTagName("td")[column_i];
    if (whose_turn = P1) {
      td_to_change.getElementsByTagName('img').src = "img/red.png";
      whose_turn = P2;
    } else {
      td_to_change.getElementsByTagName('img').src = "img/blue.png";
      whose_turn = P1;
    }
  }
}

game.dropP1(2) // 2 is the third column
