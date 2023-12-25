function sudokuSolver(multiarr) {
    let possiblevalues = [1, 2, 3, 4, 5, 6, 7, 8, 9];    
    multiarr=multiarr.map(arr=>{

      let zerosinds = {}

      arr.forEach((el, index)=>{
          if(el==0) {
              zerosinds[index]=multiarr.indexOf(arr);
          }
      })

      for (let o in zerosinds) {
          let existvalues = arr.filter(val=>val)

          multiarr.forEach(array => {
              array[o] ? existvalues.push(array[o]) : null
          })

          //square 1
          if (zerosinds[o]<3 && o<3) {
              let count1 = 2;
              while(count1>=0) {
                  let count2 = 2
                  while(count2>=0) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 2
          else if (zerosinds[o]<3 && o<6) {
              let count1=2;
              while(count1>=0) {
                  let count2=5;
                  while(count2>=3) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 3
          else if (zerosinds[o]<3 && o<9) {
              let count1=2;
              while(count1>=0) {
                  let count2=8;
                  while(count2>=6) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 4
          else if (zerosinds[o]<6 && o<3) {
              let count1 = 5;
              while(count1>=3) {
                  let count2 = 2
                  while(count2>=0) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 5
          else if (zerosinds[o]<6 && o<6) {
              let count1 = 5;
              while(count1>=3) {
                  let count2=5;
                  while(count2>=3) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 6
          else if (zerosinds[o]<6 && o<9) {
              let count1 = 5;
              while(count1>=3) {
                  let count2=8;
                  while(count2>=6) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 7
          else if (zerosinds[o]<9 && o<3) {
              let count1 = 8;
              while(count1>=6) {
                  let count2 = 2
                  while(count2>=0) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 8
          else if (zerosinds[o]<9 && o<6) {
              let count1 = 8;
              while(count1>=6) {
                  let count2=5;
                  while(count2>=3) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          //square 9
          else if (zerosinds[o]<9 && o<9) {
              let count1 = 8;
              while(count1>=6) {
                  let count2=8;
                  while(count2>=6) {
                      multiarr[count1][count2] ? existvalues.push(multiarr[count1][count2]) : null
                      count2--;
                  }
                  count1--;
              }
          }

          let vars = possiblevalues.filter(el=>{
              return existvalues.indexOf(el)==-1
          })

          if(vars.length==1) {
              arr[o]=vars[0]
          }
      }
      return arr
    })
    
    multiarr.forEach(arr=>{
            arr.forEach(num=>{
              if (!num) {
                sudokuSolver(multiarr)
              }
            })
          })
          
    /*
    if (check==true) {
        sudokuSolver(multiarr)
    }
    Why a multiarr is undefined in else ?
    else{ return multiarr }
    */
    return multiarr 
}

var arrs1 = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

var arrs2 = [
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],
  
  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
]

var arrs3 = [
        [0, 0, 6, 0, 2, 0, 0, 5, 0],
        [0, 0, 2, 0, 0, 0, 1, 9, 4],
        [0, 0, 0, 1, 0, 0, 2, 0, 7],
        [6, 0, 7, 0, 8, 2, 0, 1, 9],
        [0, 8, 5, 0, 7, 0, 0, 3, 0],
        [0, 0, 0, 6, 0, 5, 4, 0, 0],
        [0, 9, 0, 0, 1, 3, 0, 4, 0],
        [0, 0, 1, 0, 0, 9, 0, 0, 0],
        [7, 3, 0, 0, 0, 8, 9, 0, 0]
      ]

var arrs4 = [
        [0, 0, 8, 0, 3, 0, 5, 4, 0],
        [3, 0, 0, 4, 0, 7, 9, 0, 0],
        [4, 1, 0, 0, 0, 8, 0, 0, 2],
        [0, 4, 3, 5, 0, 2, 0, 6, 0],
        [5, 0, 0, 0, 0, 0, 0, 0, 8],
        [0, 6, 0, 3, 0, 9, 4, 1, 0],
        [1, 0, 0, 8, 0,0, 0, 2, 7],
        [0, 0, 5, 6, 0, 3, 0, 0, 4],
        [0, 2, 9, 0, 7, 0, 8, 0, 0]
      ]
      
var arrs5 = [
        [0, 1, 9, 0, 6,0, 5, 4, 0],
        [0, 0, 0, 0, 0,0, 0, 0, 0],
        [8, 2, 0, 9, 7,4, 0, 3, 6],
        [0, 0, 1, 5, 0,3, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 7, 0,1, 6, 0, 0],
        [7, 5, 0, 1, 3,8, 0, 9, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 3, 0, 4, 0, 7, 1, 0]
      ]

console.log(sudokuSolver(arrs2))

  var solution1 = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]];