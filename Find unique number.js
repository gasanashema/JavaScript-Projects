/**
 * 
 * When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Give you a array arr that contains some numebers. Numbers can be positive,negative,integer or float. Only one of these numbers is unique. Find and return it.

Some examples:
findUnique([1,2,3,5,7]) === 2
Because only 2 is an even number, the other numbers are odd.

findUnique([2,4,6,8,9]) === 9
Because only 9 is an odd number

findUnique([2,-4,6,8]) === -4
Because only -4 is a negative number

findUnique([-2,-4,-6,8]) === 8
Because only 8 is a positive number

findUnique([2,4.4,6,8]) === 4.4
Because only 4.4 is a float number

findUnique([2.2,4.4,6.6,8]) === 8
Because only 8 is a integer number

findUnique([2,2,2,4]) === 4
Because only 4 has a diffrent value
Priority level: float/integer > positive/negative > odd/even > diffrent value

Some edge case:

findUnique([-2,-4,-6.6,8]) === -6.6  //not 8
Because Priority level float/integer > positive/negative

findUnique([-2,-4,-7, 8]) === 8  //not -7
Because Priority level positive/negative > odd/even
Note: All inputs will be an array. The array contains at least 3 element. Only one unique number in it. 0 will not appear, do not worry about it ;-)
 */

const findUnique = arr =>{

    // float check
    let float = [...new Set(arr)].filter(y=>y.toString().split('').includes('.'));
    if (float.length===1) return +(float.join(''))
    // integer check
    let integer = [...new Set(arr)].filter(y=>!(y.toString().split('').includes('.')));
    if (integer.length===1) return +(integer.join(''))
    // positive check
    let positive = [...new Set(arr)].filter(y=>y>=0);
    if (positive.length===1) return +(positive.join(''))
    // negative check
    let negative = [...new Set(arr)].filter(y=>y<0);
    if (negative.length===1) return +(negative.join(''))
    // odd check
    let odd = arr.filter(y => y % 2 === 1 || y % 2 === -1);
    if (odd.length===1) return +(odd.join(''))
    // even check
    let even = arr.filter(y=>y%2==0);
    if (even.length===1) return +(even.join(''))
    // unique check
    let unique = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
    if (unique.length===1) return +(unique.join(''))
    
  }
  //console.log(findUnique([1,2,3,5,7])); //2 even
  //console.log(findUnique([2,4,6,8,9])); //9 odd
  //console.log(findUnique([2,-4,6,8])); //-4 negative
  //console.log(findUnique([-2,-4,-6,8])); //8 interger
  //console.log(findUnique([2,4.4,6,8])); //4.4 float
  //console.log(findUnique([2.2,4.4,6.6,8])); //8 integer
  //console.log(findUnique([2,2,2,4])); //4 unique
  //console.log(findUnique([-2,-4,-6.6,8])); //-6.6 not 8 edge cases
//   console.log(findUnique( [49,49,49,49,49,49,49,49,49,49,49,49,66,49,49])); //caused error
  console.log(findUnique( [-52,-72,-24,-98,-2,-82,-64,-64,-72,-50,-52,-62,-24,-6,-60,-45,-22,-54,-94,-50,-26,-94,-8,-14,-60,-56,-10,-68,-92])); //caused error