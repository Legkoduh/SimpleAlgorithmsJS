import printField from "./RenderingFlex.mjs";

function findBestNextPoint(field, symbol) {
    let middle=false;
    if (field.length%2!==0) {
        middle = Math.floor(field.length/2);
    }

    let diagonal1Coordinates = [];
    let diagonal2Coordinates = [];
    let move = [];
    let count = field.length;

    while(count) {
        diagonal1Coordinates.push([field.length-count, field.length-count]);
        count--;
        diagonal2Coordinates.push([count, field.length-count-1]);
    }

    let available = field.some(arr=>arr.some(el=>el==symbol))
    if (available==false) {
        if (!field[middle][middle]) {
            move = [middle, middle]
        }
        else {
            move = randomMove([0], [[0, 0, 2, 2, 0, 2, 2, 0]]);
        }
    }
    else {
    field.some((arr, index1)=>{
        return arr.some((el, index2)=>{
            if (el===symbol) {
                let [lineway, columnway, diagonal1way, diagonal2way] = [[], [], [], []];
                let coordinates = [lineway, columnway, diagonal1way, diagonal2way];
                let [line, column, diagonal1, diagonal2] = [false, false, 3, 3];
                let o = 0;
                while (o<arr.length) {

                    //line
                    if (field[index1][o] && field[index1][o]!=symbol) {
                        line = true;
                    }
                    else if (!field[index1][o]) {
                        lineway.push(index1, o)
                    }

                    //column
                    if (field[o][index2] && field[o][index2]!=symbol) {
                        column=true;
                    }
                    else if (!field[o][index2]) {
                        columnway.push(o, index2)
                    }

                    //center with 2 diagonals
                    //Need additional check to cover the case when middle is false
                    if (index1===middle && index2===middle) {
                            //diagonal1
                            if (field[o][o] && field[o][o]==symbol) {
                                diagonal1--;
                            }
                            else if (!field[o][o]) {
                                diagonal1--;
                                diagonal1way.push(o, o)
                            }

                            //diagonal2
                            //2-o = arr.length-o
                            if (field[o][2-o] && field[o][2-o]==symbol) {
                                diagonal2--;
                            }
                            else if (!field[o][2-o]) {
                                diagonal2--;
                                diagonal2way.push(o, 2-o)
                            }
                        }

                    //corners (diagonal1 or diagonal2)
                    //%2=arr.length
                    if (index1%2===0 && index2%2===0) {
                        if (index1===index2) {
                            if (field[o][o] && field[o][o]==symbol) {
                                diagonal1--;
                            }
                            else if (!field[o][o]) {
                                diagonal1--;
                                diagonal1way.push(o, o)
                            }
                        }
                        else {
                            if (field[o][2-o] && field[o][2-o]==symbol) {
                                diagonal2--;
                            }
                            else if (!field[o][2-o]) {
                                diagonal2--;
                                diagonal2way.push(o, 2-o);
                            }
                        }
                    }

                    o++;
                }

                let ways = [line, column, diagonal1, diagonal2];
                if ([line, column, diagonal1, diagonal2].some(el=>!el)) {
                    if (!field[middle][middle] && middle/2!=0 && (!diagonal1 || !diagonal2)) {
                        move = [middle, middle];
                        return move;
                        }
                    else {
                        move = randomMove(ways, coordinates);
                        return move;
                    }
                }
            }
    })
})
if (move.length==0) {
    field.some((arr, ind1)=>arr.some((el, ind2)=>{
        if(!el) {
            move = [ind1, ind2];
            return move; }
        }
    ))
}
    }
    field[move[0]][move[1]] = symbol;
    printField(field);
}



function randomMove(paths, points) {
    let validPaths = paths.reduce((acc, el, index) => {
        if (!el) {
            if (points[index].length==2) {
            acc.push(points[index]);
            return acc;
            }
            else if (points[index].length>2) {
                for (let i=2; i<=points[index].length; i+=2) {
                    acc.push(points[index].slice(i-2, i));
                }
                return acc;
            }
        }
        else {
            return acc; }
    
    }, []);
    let rnd = Math.floor(Math.random()*validPaths.length);
        let move = validPaths[rnd];
        return move;
}

// let arr = [['', '', ''],
//            ['', '', ''],
//            ['O', '', 'X']]

//findBestNextPoint(arr, 'X');

export default findBestNextPoint;
