import * as readline from 'readline';
import {stdin as input, stdout as output} from 'process';


function questionAboutFirstMove() {
    const rl = readline.createInterface({input, output});
    return new Promise((resolve, reject)=>{
        rl.question(('Who goes first ? 1 - you, 2 - the programm '), (answer)=>{
            if (!answer || answer!=1 && answer !=2) {
                console.log('The input is invalid. Please repeat');
                rl.close();
                resolve(questionAboutFirstMove());
            }
            else {
                rl.close();
                resolve(answer);
            }

        })
    })
}


function questionAboutSymbol() {
    const rl = readline.createInterface({input, output});
    return new Promise((resolve, reject)=>{
        rl.question(('Choose your symbol: X or O '), (answer)=>{
            if (!answer || answer.toUpperCase()!=='X' && answer.toUpperCase() !=='O') {
                console.log('The input is invalid. Please repeat');
                rl.close();
                resolve(questionAboutSymbol());
            }
            else {
                rl.close();
                resolve(answer);
            }

        })
    })
}

//console.log(await questionAboutFirstMove());
//console.log(await questionAboutSymbol());

// let i = questionAboutFirstMove();
// let o = questionAboutSymbol();

// Promise.all([i, o]);


export {questionAboutFirstMove, questionAboutSymbol}