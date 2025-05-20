/**
 * Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ] 
 */
    function getMatrix(number) {
    const matrix = [];
    for (let i=0;i<number;i++){
    const appendArr = [];
    for (let j=0;j<number;j++){
        if(j===i){
            appendArr.push(1);
        }else{
            appendArr.push(0);
        }
    }
    matrix.push(appendArr);
    }
    return matrix;
    } 

    console.log(getMatrix(5));