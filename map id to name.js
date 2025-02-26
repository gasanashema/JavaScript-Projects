/**
 * Write a function that takes an array of objects, where each object has an id and a name property. The function should return a new object where the keys are the id values and the values are the corresponding name values.
 */
const mapIdToName = (obj)=>{
    const result = {};

    for (const {id,name} of obj) {
        result[id] = name;   
    }

    return result;
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(mapIdToName(users));