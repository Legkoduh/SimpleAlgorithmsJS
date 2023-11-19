import * as readline from 'readline';
import {stdin as input, stdout as output} from 'process';
import {usersMove} from './SayPhrases.mjs';
import renderField from './RenderingFlex.mjs'


function ask(fieldarrs, userSymbol) {
    let move=true;
    const rl = readline.createInterface({input, output});
    return new Promise((resolve, reject) => {
        rl.question(usersMove(), (answer) => {
                    answer=answer.replace(/\D*/gi, '');
                    let check = answer.split('');
                    //console.log('check ', check)
                    if (check[0]>fieldarrs.length || check[1]>fieldarrs.length || check[0]<1 || check[1]<1) {
                        move=false;
                    }

                    //Make a dependence to a field area size
                    if (!answer || answer.length<2 || answer.length>2 || !move) {
                        console.log('The input is invalid. Repeat please')
                        rl.close();
                        resolve(ask(fieldarrs, userSymbol))
                    }
                    else if (fieldarrs[answer[0]-1][answer[1]-1]) {
                        console.log('This cell is already occupied. Please select empty')
                        rl.close();
                        resolve(ask(fieldarrs, userSymbol))
                    }
                    else {
                        //console.log('else', userSymbol)
                        fieldarrs[answer[0]-1][answer[1]-1] = userSymbol;
                        //console.log('ask ', fieldarrs)
                        renderField(fieldarrs);
                        resolve(answer, userSymbol)
                        rl.close()
                    }
            })
    })
}

// let arr = [['O', '', ''],
//            ['', '', ''],
//            ['', '', 'X']];

//await ask(arr, 'O')


export default ask;