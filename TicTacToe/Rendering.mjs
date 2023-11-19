function printField(arr) {
    let newArr = arr.map((el, index)=>{
        return el.map(val=>{
            if (index<2 && val==='') {
                return '_';
            }
            else if (val==='') {
                return ' ';
            }
            else {
                return val;
            }
        })
    })

    let field = `    _${newArr[0][0]}_|_${newArr[0][1]}_|_${newArr[0][2]}_
    _${newArr[1][0]}_|_${newArr[1][1]}_|_${newArr[1][2]}_
     ${newArr[2][0]} | ${newArr[2][1]} | ${newArr[2][2]} `;

    console.log(field)
}

//let arrs = [['X', '', 'X'], ['X', '', ''], ['', 'X', '']]

//printField(arrs);


export default printField;