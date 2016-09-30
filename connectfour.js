// onclick: if all spaces are taken: do nothing. else: drop to lowest position,
// change player. if click creates 4 in a row, player wins

// if whole game is filled, game over

// var game = {
//   whose_turn: P1;
//   columns: [["red", null, null, null, null, null],
//             [null, null, null, null, null, null],
//             [null, null, null, null, null, null],
//             [null, null, null, null, null, null],
//             [null, null, null, null, null, null],
//             [null, null, null, null, null, null],
//             [null, null, null, null, null, null]];
//
//   drop: function (column_i) {
//     // drop a chip in the col column_i
//     // next turn
//     // hide full column
//     // ??
//   }
// }
//
// game.drop(2) // 2 is the third column

function changeImage() {

       if (document.getElementById("imgClickAndChange1").src.endsWith("img/empty.png"))
       {
           document.getElementById("imgClickAndChange1").src = "img/red.png";
       }

   };

// x.src.endsWith("img/empty.png")



// {
//      $('#btn').click(function() {
//          // change the state of the "#idd"
//        $('#idd').toggle(800, function() {
//          // change the button text according to the state of the "#idd"
//          if ($('#idd').is(':visible')) {
//            $('#btn').attr('img/red.png', this.href);  // Show Less.. button
//                  } else {
//            $('#btn').attr('img/red.png', this.href);  //Learn More.. button
//
//          }
//        });
//      });
//    });
