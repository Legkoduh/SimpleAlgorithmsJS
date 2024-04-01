function falseToStringTest(obj) {
    let vals = Object.values(obj)
    console.log(vals)
    for (let i=0; i<vals.length; i++) {
        console.log('for ', vals[i])
        if (!vals[i]) {
            console.log('! if ', vals)
            if (typeof(vals[i])==='undefined') {
                console.log('if undefined ', vals[i], String(vals[i]))
            }
            else if (typeof(vals[i])==='number' && vals[i]!=0) {
                console.log('if NaN ', vals[i], String(vals[i]))
            }
        }
    }
    console.log('stringify ', JSON.stringify(obj))
}


//console.log(falseToStringTest({one: null, three: undefined, four: false, eight: '', nine: NaN, ten: 10}))


function falseValuesToStr(vals) {
    let strVals = []
    for (val of vals) {
        if(!val) {
            if (typeof(val)==='undefined') {
                strVals.push(String(val))
            }
            //?
            else if (String(val)==='NaN') {
                strVals.push(val.toString())
            }
            else {
                strVals.push(val)
            }
        }
        else {
            strVals.push(val)
        }
    }

    return strVals
}

//console.log(falseValuesToStr([null, undefined, false, '', NaN, 10]))

//And if the vals is empty ?
function falseValsToStr(vals1) {
    let strVals = []
    for (let i=0; i<vals1.length; i++) {
        if (!vals1[i]) {
            if (typeof(vals1[i])==='undefined') {
                strVals.push(String(vals1[i]))
            }

            else if (String(vals1[i])==='NaN') {
                strVals.push(String(vals1[i])+'number')
            }
        }
        else {
            strVals.push(vals1[i])
        }
    }

    return strVals
}

console.log(falseValsToStr([1, undefined, 3, NaN, 'NaN']))


