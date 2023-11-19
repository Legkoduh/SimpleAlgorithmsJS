function say(phrases) {
    let array = [...phrases]
    
    return function () {
        let random;
        let temp;
        if (array.length) {
            random = Math.floor(Math.random()*array.length)
            temp = array[random]
            array=array.filter((el, index)=>index!=random)
            return temp
        }
        else {
            array=[...phrases]
            random = Math.floor(Math.random()*array.length)
            temp = array[random]
            array=array.filter((el, index)=>index!=random)
            return temp
        }
        }
    }
    
    let machinesPhrases = ['My turn', 'Not bad, not bad. Now me', 'Guess who\'s back', 'See how it\'s done', 'Now watch the winner\'s move'];
    let usersPhrases = ['Your turn ', 'Make a move ', 'Show your best ', 'Think twice ', 'Now you '];
    
    let machinesMove = say(machinesPhrases);
    let usersMove = say(usersPhrases);
    
    
    export {machinesMove, usersMove};