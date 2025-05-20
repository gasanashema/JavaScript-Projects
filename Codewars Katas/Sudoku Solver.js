/**
 * Description:
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
 */

function sudoku(puzzle) {
  
    let correctArray = [[],[],[],[],[],[],[],[],[]];
    let mainTempArr = [];
    for (let i = 0; i < 9; i+=3) {
        for (let j = 0; j < 9; j+=3) {
            
            let tempArr = [];
            for (let k = i; k < i+3; k++) {
                for (let l = j; l < j+3; l++) {
                    tempArr.push(puzzle[k][l]);
                    
                }
                
            }
            for (let m = 1; m <= 9; m++) {
                if(tempArr.includes(m,0)){
                    continue;
                }else{
                    let indexToAdd = tempArr.indexOf(0,0);
                    tempArr.splice(indexToAdd,1,m);
                }
                
            }
                mainTempArr.push(tempArr);
            
            
        }
        
    }

    for (let i = 0; i < 9; i+=3) {
        for(let j=i;j<i+3;j++){

            correctArray[i].push(mainTempArr[j].slice(0,3));
            correctArray[i+1].push(mainTempArr[j].slice(3,6));
            correctArray[i+2].push(mainTempArr[j].slice(6,9));

        }
        
    }
    let finaly = correctArray.map(arr=>arr.flat())
    
    return finaly;

}

console.log(
  sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);
