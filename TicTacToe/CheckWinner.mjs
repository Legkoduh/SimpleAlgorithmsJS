function checkWinner (field, symbol) {
    let winner;
    field.some((arr, index1)=>{
        return arr.some((el, index2)=>{
            let o = 0;
            let [line, column, diagonal1, diagonal2] = [0, 0, 0, 0]
            let [lineway, columnway, diagonal1way, diagonal2way] = [[], [], [], []]
            if (el===symbol) {

                while(o<3) {
                    if(field[index1][o]===symbol) {
                        line++;
                        lineway.push(index1, o)
                    }

                    if (field[o][index2]===symbol) {
                        column++;
                        columnway.push(o, index2)
                    }

                    //diagonal1
                    if (index1===index2 && index1!=1) {
                            if (field[o][o]===symbol) {
                                diagonal1++;
                                diagonal1way.push(o, o)

                            }
                        }

                    //diagonal2
                    if (index1+index2===2 && index1!=1) {
                            if (field[o][2-o]===symbol) {
                                diagonal2++;
                                diagonal2way.push(o, 2-o)
                            }
                        }
                    
                    //center with 2 diagonals
                    if (index1===1 && index2===1) {
                        if (field[o][o]===symbol) {
                            diagonal1++;
                            diagonal1way.push(o, o)
                        }

                        if (field[o][2-o]===symbol) {
                            diagonal2++;
                            diagonal2way.push(o, 2-o)
                        }
                    }
                o++;
                }
            }
            [line, column, diagonal1, diagonal2].forEach(el=>el===3 ? winner=symbol : null)
            return winner
        })
    })
    return winner ? winner : false;
}

let arr = [['X', '', 'O'],
           ['', 'O', ''],
           ['X', '', 'X']];

let symbol = 'O';

//console.log(checkWinner(arr, symbol))


export default checkWinner;