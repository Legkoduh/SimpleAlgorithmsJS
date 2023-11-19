import findNextPoint from './FindBestNextPoint.mjs';
import checkWinner from './CheckWinner.mjs';
import checkWinline from './CheckWinline.mjs';
import {machinesMove} from './SayPhrases.mjs'
import ask from './AskUserAboutNextMove.mjs'
import {questionAboutFirstMove, questionAboutSymbol} from './AskUserStartQuestion.mjs';

async function playTicTacToe(fieldarrs) {
   let symbols = ['X', 'O'];
   let userSymbol = (await questionAboutSymbol()).toUpperCase();
   let programmSymbol = symbols.filter(el=>el!==userSymbol.toUpperCase())[0];
   let noOnesWon = [true];
   let result = false;
   
   if (await questionAboutFirstMove()==1) {
      while(noOnesWon[0] && !result) {

         result = await userMove(fieldarrs, userSymbol, noOnesWon);

         if (noOnesWon[0] && !result) {
            result = programmMove(fieldarrs, programmSymbol, userSymbol, noOnesWon);
         }
      }
   }

   else {
      while(noOnesWon[0] && !result) {

         result = programmMove(fieldarrs, programmSymbol, userSymbol, noOnesWon);

         if (noOnesWon[0] && !result) {
               result = await userMove(fieldarrs, userSymbol, noOnesWon);
            }
         }
   }
   result ? console.log(result) : console.log('No ones won')
}


let arr = [['', '', ''],
           ['', '', ''],
           ['O', '', 'X']]

playTicTacToe(arr);

function programmMove (fieldarrs, programmSymbol, userSymbol, checkFiled) {
   let winner = 'Machine wins';
   console.log(machinesMove());
         if (!checkWinline(fieldarrs, programmSymbol, programmSymbol)) {
            if (!checkWinline(fieldarrs, userSymbol, programmSymbol)) {
                  findNextPoint(fieldarrs, programmSymbol);
            }
         }
         else {
            return winner;
         }
   checkFiled[0] = fieldarrs.some(arr=>arr.some(el=>!el));
}

async function userMove(fieldarrs, userSymbol, checkFiled) {
   console.log('Please enter the coordinates of your next step consisting of 2 numbers.\nWhere the first is a row and the second is a column');
   await ask(fieldarrs, userSymbol);
      if (checkWinner(fieldarrs, userSymbol)) {
         return 'User wins';
      }
   checkFiled[0] = fieldarrs.some(arr=>arr.some(el=>!el));
}