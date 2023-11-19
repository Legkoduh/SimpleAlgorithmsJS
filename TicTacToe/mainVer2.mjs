import findNextPoint from './FindBestNextPoint.mjs';
import checkWinner from './CheckWinner.mjs';
import checkWinline from './CheckWinline.mjs';
import {machinesMove} from './SayPhrases.mjs'
import ask from './AskUserAboutNextMove.mjs'
import {questionAboutFirstMove, questionAboutSymbol} from './AskUserStartQuestion.mjs';

async function playTicTacToe(fieldarrs) {
   let userSymbol = (await questionAboutSymbol()).toUpperCase();
   let noOnesWon = [true];
   let result = false;

   let moves = {};
   if (await questionAboutFirstMove()==1) {
        moves.first = userMove;
        moves.second = programmMove;
   }
   else {
        moves.first = programmMove;
        moves.second = userMove;
   }
   console.log('moves ', moves);

   while(noOnesWon[0] && !result) {
        result = await moves.first(fieldarrs, userSymbol, noOnesWon);
        if (noOnesWon[0] && !result) {
            result = await moves.second(fieldarrs, userSymbol, noOnesWon);
        }
    }

   result ? console.log(result) : console.log('No ones won')
}


let arr = [['X', '', ''],
           ['', '', ''],
           ['O', '', 'X']]

playTicTacToe(arr);

function programmMove (fieldarrs, userSymbol, checkFiled) {
   let programmSymbol = ['X', 'O'].filter(el=>el!==userSymbol.toUpperCase())[0];
   console.log(machinesMove());
         if (!checkWinline(fieldarrs, programmSymbol, programmSymbol)) {
            if (!checkWinline(fieldarrs, userSymbol, programmSymbol)) {
                  findNextPoint(fieldarrs, programmSymbol);
            }
         }
         else {
            return 'Machine wins';
         }
         checkFiled[0] = fieldarrs.some(arr=>arr.some(el=>!el));

}

async function userMove(fieldarrs, userSymbol, checkFiled) {
    console.log(fieldarrs)
    console.log('Please enter the coordinates of your next step consisting of 2 numbers.\nWhere the first is a row and the second is a column');
    await ask(fieldarrs, userSymbol);
      if (checkWinner(fieldarrs, userSymbol)) {
        return 'User wins';
    }
    checkFiled[0] = fieldarrs.some(arr=>arr.some(el=>!el));
}