let printField = await import ('./RenderingFlex.mjs')
function checkWinline(field, findSymbol, replaceSymbol) {

    return field.some((arr, index1)=>{
        return arr.some((el, index2)=>{
            let o = 0;
            let [line, column, diagonal1, diagonal2] = [0, 0, 0, 0]
            let [lineway, columnway, diagonal1way, diagonal2way] = [[], [], [], []]
            let ways = [lineway, columnway, diagonal1way, diagonal2way]
            if (el===findSymbol) {
                console.log('if', index1, index2)

                while(o<3) {
                    //line
                    if(field[index1][o]===findSymbol) {
                        line++;
                    }
                    else if (!field[index1][o]) {
                        lineway.push(index1, o)
                    }
                    else {
                        line--;
                    }

                    //column
                    if (field[o][index2]===findSymbol) {
                        column++;
                    }
                    else if (!field[o][index2]) {
                        columnway.push(o, index2)
                    }
                    else {
                        column--;
                    }
                    
                    //diagonal1
                    if (index1===index2 && index1!=1) {
                            if (field[o][o]===findSymbol) {
                                diagonal1++;
                            }
                            else if (!field[o][o]) {
                                diagonal1way.push(o, o)
                            }
                            else {
                                diagonal1--;
                            }
                        }

                    //diagonal2
                    if (index1+index2===2 && index1!=1) {
                            if (field[o][2-o]===findSymbol) {
                                diagonal2++;
                            }
                            else if (!field[o][2-o]) {
                                diagonal2way.push(o, 2-o)
                            }
                            else {
                                diagonal2--;
                            }
                        }
                    
                    //center with 2 diagonals
                    if (index1===1 && index2===1) {
                        if (field[o][o]===findSymbol) {
                            diagonal1++;
                        }
                        else if (!field[o][o]) {
                            diagonal1way.push(o, o)
                        }
                        else {
                            diagonal1--;
                        }

                        if (field[o][2-o]===findSymbol) {
                            diagonal2++;
                        }
                        else if (!field[o][2-o]) {
                            diagonal2way.push(o, 2-o)
                        }
                        else {
                            diagonal2--;
                        }
                    }

                o++;
                }
                console.log(ways, [lineway, columnway, diagonal1way, diagonal2way])
                console.log([line, column, diagonal1, diagonal2])

                return [line, column, diagonal1, diagonal2].some((el, index)=>{
                    if (el===2) {
                        field[ways[index][0]][ways[index][1]] = replaceSymbol;
                        printField.default(field)
                        //Doen't work in main :c
                        /*
                        import('./2.0Rendering.mjs')
                        .then(func=>{
                            func.default(field)
                        })
                        .catch(er=>console.log(er));
                        */
                        return true
                    }
                })
        }
        })
    })
}

// let arr = [['X', '', 'X'],
//            ['', 'O', ''],
//            ['O', 'X', 'X']]

// let userSymbol = 'X';

// let machineSymbol = 'O'

//console.log(checkWinline(arr, userSymbol, machineSymbol))


export default checkWinline;