// $(document).ready(function(){
//    var turnCount=0;
//     $('#board').find('td').on('click', function(){
//         if (turnCount % 2 === 0){
//           $(this).text('X');
//           checkVictory('X');
//         } else {
//        //player 2's turn (O)
//           $(this).text('O');
//           checkVictory('O');
//         }
//       turnCount++;

//     });


    //initiate player
    function Player (playerX, playerO) {
      this.playerX = playerX;
      this.playerO = playerO;
    }

    Player.prototype.markX = function() {
        return "X";
    }

    Player.prototype.markO = function() {
        return "O";
    }

    //set gameboard with 9 index positions
    function GameBoard() {
      this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    };

    //specify a position and replace with a mark
    GameBoard.prototype.mark = function(xo, position) {
      this.spaces.splice(position, 1, xo);
      return this.spaces;
    };

    //winning scenario
    GameBoard.prototype.win = function() {
        if (
                ((this.spaces[0] == "X") && (this.spaces[1] == "X") && (this.spaces[2] == "X")) ||
                ((this.spaces[3] == "X") && (this.spaces[4] == "X") && (this.spaces[5] == "X")) ||
                ((this.spaces[6] == "X") && (this.spaces[7] == "X") && (this.spaces[8] == "X")) ||
                ((this.spaces[0] == "X") && (this.spaces[3] == "X") && (this.spaces[6] == "X")) ||
                ((this.spaces[1] == "X") && (this.spaces[4] == "X") && (this.spaces[7] == "X")) ||
                ((this.spaces[2] == "X") && (this.spaces[5] == "X") && (this.spaces[8] == "X")) ||
                ((this.spaces[0] == "X") && (this.spaces[4] == "X") && (this.spaces[8] == "X")) ||
                ((this.spaces[2] == "X") && (this.spaces[4] == "X") && (this.spaces[6] == "X"))
           ) {
             return "Player X wins!"
             } else if (
                ((this.spaces[0] == "O") && (this.spaces[1] == "O") && (this.spaces[2] == "O")) ||
                ((this.spaces[3] == "O") && (this.spaces[4] == "O") && (this.spaces[5] == "O")) ||
                ((this.spaces[6] == "O") && (this.spaces[7] == "O") && (this.spaces[8] == "O")) ||
                ((this.spaces[0] == "O") && (this.spaces[3] == "O") && (this.spaces[6] == "O")) ||
                ((this.spaces[1] == "O") && (this.spaces[4] == "O") && (this.spaces[7] == "O")) ||
                ((this.spaces[2] == "O") && (this.spaces[5] == "O") && (this.spaces[8] == "O")) ||
                ((this.spaces[0] == "O") && (this.spaces[4] == "O") && (this.spaces[8] == "O")) ||
                ((this.spaces[2] == "O") && (this.spaces[4] == "O") && (this.spaces[6] == "O"))
           ) {
           return "Player O wins!"
           }
    };


//});




// $(document).ready(function(){
//     var turnCount=0;

//       $('#board').find('td').on('click', function(){
//             if (turnCount % 2 === 0){
//               $(this).text('X');
//               checkVictory('X');
//             } else {
//            //player 2's turn (O)
//               $(this).text('O');
//               checkVictory('O');
//             }
//           turnCount++;

//       });



//     function checkVictory(player){
//        //top row check
//         if ($('#board').find('#1').text() !== ''){
//             if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
//                 if ($('#board').find('#1').text() == $('#3').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         //left column check
//             if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
//                 if ($('#board').find('#1').text() == $('#7').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         //left diagonal check
//             if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
//                 if ($('#board').find('#1').text() == $('#9').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         }

//        //middle column check
//         if ($('#board').find('#2').text() !== ''){
//             if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
//                 if ($('#board').find('#2').text() == $('#8').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         }

//         //right column check
//         if ($('#board').find('#3').text() !== '') {
//             if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
//                 if ($('#board').find('#3').text() == $('#9').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//             //right diag check
//             if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
//                 if ($('#board').find('#3').text() == $('#7').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         }

//         //middle row check

//         if ($('#board').find('#4').text() !== '') {
//             if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
//                 if ($('#board').find('#4').text() == $('#6').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         }

//         //bottom row check
//         if ($('#board').find('#7').text() !== '') {
//             if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
//                 if ($('#board').find('#7').text() == $('#9').text()) {
//                     alert('Game over! '+player+' is the winner!');
//                     $('#newGame').removeClass('invisible');
//                 }
//             }
//         }

//     }
//     $('#newGame').on('click',function() {
//         $('.square').text('');
//     });

// });