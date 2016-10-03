// if click creates 4 in a row, player wins

var game = {
  whose_turn: "P1",
  columns: [[null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]],

  drop: function (column_i) {
    var lowest = this.columns[column_i].indexOf(null);
    if (this.whose_turn === "P1") {
      this.columns[column_i][lowest] = "red";
    } else {
      this.columns[column_i][lowest] = "blue";
    }
    var td_to_change = document.getElementsByClassName('connect4_row')[this.columns[column_i].length -1 - lowest].getElementsByTagName("img")[column_i];
    if (this.whose_turn === "P1") {
      td_to_change.src = "img/red.png";
      this.whose_turn = "P2";
    } else {
      td_to_change.src = "img/blue.png";
      this.whose_turn = "P1";
    }
    var count = 0;
    for (var i = 0; i < this.columns.length; i++) {
      for (var j = 0; j < this.columns[i].length; j++) {
        if (this.columns[i][j] !== null) {
          count += 1;
        }
      }
    }
    console.log(count);
    if (count === 42) {
      document.getElementById('name').innerText = "Game Over";
      return 0;
    }
  }
}
// make player icon hidden when turn is over

