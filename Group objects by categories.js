/**
 * Write a function that takes an array of objects, where each object has a category property and a value property (which is a number). The function should return a new object where the keys are the categories and the values are the sum of the value properties for that category.
 */
const sumByCategory = (arrOfObj) =>{
    let result = {};
    for (const {category,value} of arrOfObj) {
        result[category] = (result[category] || 0) + value;
    }
    return result;
}
const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 15 },
  { category: 'C', value: 5 },
  { category: 'B', value: 25 },
];

console.log(sumByCategory(data));