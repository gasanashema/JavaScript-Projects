/**
 * 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */
// function moveZeros(arr) {
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             delete arr[i];
//             arr.push(0);
//         }
//     }
//   return arr;
// }
// console.log(
//   moveZeros([8, [], "0",0,0,0,0, true, [], [], 8, "0", "1", [], +0, false, "3", +0, +0])
// );
function moveZeros(arr){
  let zeroCount = 0;
  for(let j=0;j<arr.length;j++){
    if(arr[j]===0){
      zeroCount+=1;
    }
  }
  let noZeros = arr.filter(ele=>ele!==0);
  for(let i = 1;i<=zeroCount;i++){
    noZeros.push(0);
  }

  return noZeros;
}

console.log(
  moveZeros([8, [], "0",0,0, true, [], [], 8, "0", "1", [], +0, false, "3", +0, +0])
);