function printField(arrs) {
    arrs=arrs.map((arr, index1) =>arr.map(el=> {
        if(!el && index1<arrs.length-1) { return '_' }
        else if (!el) { return ' '}
        else { return el }
    }))

    let newArr = arrs.map((arr, index1)=>{
        return arr.map((val, index2)=>{

            if (index1<arrs.length-1) {
                if (index2===0) {
                        return `_${val}_|`;
                }
                else if (index2===arr.length-1) {
                        return `_${val}_`;
                }
                else {
                        return `_${val}_|`;
                    }
                }
            else {
                if (index2===0) {
                    return ` ${val} |`;
                    }
                else if (index2===arr.length-1) {
                        return ` ${val} `;
                }
                else {
                        return ` ${val} |`;
                    }
                }
        })
    })

    newArr.forEach(element => {
        console.log(element.join(''))
    });

}

// let arrays = [['X', '', 'X', '', 'O'],
//               ['X', '', '', 'X', ''],
//               ['', 'X', '', 'O', ''],
//               ['O', '', '', 'X', 'X'],
//               ['', 'O', '', '', 'O']];

// printField(arrays)


export default printField;

