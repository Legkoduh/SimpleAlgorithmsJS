function say(phrases) {
    let array = [...phrases]
    
    return function () {
        let temp;
        if (array.length) {
            [temp, array] = randomize(array);
        }
        else {
            array = [...phrases];
            [temp, array] = randomize(array)
        }
        return temp;
        }

        function randomize(arr) {
            let rnd = Math.floor(Math.random()*arr.length);
            let val = arr[rnd];
            arr = arr.filter((el, ind)=>ind!=rnd);
            return [val, arr];
        }
    }
    
    let machinesPhrases = ['My turn ', 'Not bad, not bad. Now me', 'Guess who\'s back', 'See how it\'s done', 'Now watch the winner\'s move'];
    let usersPhrases = ['Your turn ', 'Make a move ', 'Show your best ', 'Think twice', 'Now you'];
    
    let machinesMove = say(machinesPhrases);
    let usersMove = say(usersPhrases);
    

    export {machinesMove, usersMove};