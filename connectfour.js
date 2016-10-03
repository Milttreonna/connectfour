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

  dropP1: function (column_i) {
    for in
    document.getElementsByTagName('tr')
    column_i = "red";
    whose_turn = P2;
  }
  dropP2: function (column_i) {
    // what is the lowest empty row in columns[column_i]
    // update columns[column_i][lowest] to be filled
    // find the td/tr that corresponds to columns[column_i][lowest]
    // update it to be filled
    var td_to_change = document.getElementsByTagName('tr')[???].getElementsByTagName("td")[colu];
    // // column_i = "blue";
    // whose_turn = P1;
  }
}

game.dropP1(2) // 2 is the third column


// function changeImage() {
//
//        if (document.getElementById("imgClickAndChange1").src.endsWith("img/empty.png"))
//        {
//            document.getElementById("imgClickAndChange1").src = "img/red.png";
//        }
//
//    };
