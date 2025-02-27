/**
 * Write a function that takes an array of objects, where each object has a name (string) and an age (number) property. The function should return a new array containing the names of all people older than 18, transformed to uppercase.
 */
let filterAndMap = (arr) =>{
    let result = [];
    for (const {name,age} of arr) {
        if(age>18)
            result.push(name.toUpperCase())
        
    }
    return result;
}
const people = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 17 },
  { name: "David", age: 25 },
];

const adults = filterAndMap(people);
console.log(adults); // Output: ['BOB', 'DAVID']