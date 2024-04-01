let obj1 = {
    lvl1: {
        first: 1,
        second: 2,
        third: 3,
        lvl2: {
            one: 11,
            two: 22,
            three: 33,
            lvl3: {
                one1: 111,
                two2: 222,
                three3: 333
            }
        }
    }
}

let obj2 = {
    lvl1: {
        first: 1,
        second: 2,
        third: 3,
        lvl2: {
            one: 11,
            two: 22,
            three: 33,
            lvl3: {
                one1: 111,
                two2: 222,
                three3: 333
            }
        }
    }
}

//console.log(JSON.stringify(Object.values(obj1)) == JSON.stringify(Object.values(obj2)))

module.exports = {obj1, obj2}