let objects = require ("./objectExamples")
let lvl3 = require("./objectsWith3Levels")


function compareObjects(o1, o2) {
    let keys1 = Object.keys(o1).sort()
    let keys2 = Object.keys(o2).sort()
    console.log('keys1 and 2 ', keys1, keys2)

    if (JSON.stringify(keys1)!==JSON.stringify(keys2)) {
        console.log('Keys are not equal')
        return false
    }

    // const o1 = { myDate: new Date('2016-06-01'), otherProperty: undefined };
    // for(let i=0; i<Object.values(o1).length; i++) {
    //     console.log('for')
    //     if(typeof(Object.values(o1)[i])=='undefined') {
    //         console.log('Hi ', Object.values(o1)[i])
    //                     o1.otherProperty=1
    //     }
    // }
    
    let vals1 = Object.values(o1).sort()
    let vals2 = Object.values(o2).sort()
    
    if (vals1.some(el=> typeof(el)==='undefined' || String(el)=== 'NaN')) {
        console.log('some ')

            vals1 = falseValuesToStr(vals1)
            vals2 = falseValuesToStr(vals2)
    }

    console.log('vals1 ', vals1)
    console.log('vals2 ', vals2)

    let values1_str = JSON.stringify(vals1)
    let values2_str = JSON.stringify(vals2)

    console.log('vals1 and 2', vals1, vals2)
    console.log('values1_str and 2', values1_str, values2_str)

    if (values1_str!==values2_str) {
        console.log('main else if')
        return false
    }

    if (vals1.some(val=>typeof(val)==='object' && val !== null && !Array.isArray(val))) {

        console.log('main if')

        for (let i=0; i<vals1.length; i++) {
            console.log('for ', vals1[i])

            if (typeof(vals1[i])=='object' && vals1[i] !== null && !Array.isArray(vals1[i])) {

                console.log('if el==object ', vals1[i])

                let related_value_key = keys1.find(key=> {
                    console.log('find ', key, JSON.stringify(o1[key]), JSON.stringify(vals1[i]))
                    if(JSON.stringify(o1[key])==JSON.stringify(vals1[i])) {
                        console.log('find key ', key)
                        return key
                    }
                })
                let related_value = o2[related_value_key]
                console.log('el ', related_value, related_value_key)

                let check = compareObjects(vals1[i], related_value)
                if (check==false) {
                    return false
                }
            }
        }
    }

    return true
}


//To resolve the result of the JSON.stringify([undefined, NaN])
function falseValuesToStr(vals) {
    let strVals = []
    for (val of vals) {
        if(!val) {
            if (typeof(val)==='undefined') {
                strVals.push(String(val))
            }
            //?
            else if (String(val)==='NaN') {
                strVals.push(val.toString()+'number')
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

//console.log(falseValuesToStr([1, undefined, 3, NaN]))


let obj1 = {
    one: 1,
    two: NaN,
    three: true,
    seven: [1, 2, 3],
    four: 4,
    five: {Hi: 3, },
    six: undefined
}

let obj2 = {
    one: 1,
    two: NaN,
    three: true,
    four: 4,
    five: {Hi: 3},
    six: 'undefined',
    seven: [1, 2, 3]
}

let obj5 = {
    one: 'NaN'
}

let obj6 = {
    one: NaN
}

// obj3 = lvl3.obj1
// obj4 = lvl3.obj2


console.log(compareObjects(obj5, obj6))

//console.log(compareObjects(objects.user1, objects.user2))