/**
 * Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
 */

Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.
    let result = true;
    function isTrue(a,b){
        if(typeof a === typeof b &&  !Array.isArray(a)){
            result = true
        }else{
            result = false
        }
       return  
    }
    if(!Array.isArray(other)||!this.every(d=>Array.isArray(d)|| !other.every(d=>Array.isArray(d)))|| (this.length != other.length)) return false;
    for(let i = 0; i<= this.length; i++){
        if(typeof this[i] === typeof other[i] &&  !Array.isArray(this[i])){
            continue;
        }else if(typeof this[i] === typeof other[i] && Array.isArray(this[i])){
            for (let j = 0; j < this[i].length; j++) {
                if(typeof this[i][j] === typeof other[i][j] &&  !Array.isArray(this[i][j])){
                    result = true
                }else{
                    result = false
                }
            }
        }else{
            result = false;
        }
    }
    return result;


};

console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));           // true
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  // true
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  // false
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));     // false
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); // true
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));     // false
