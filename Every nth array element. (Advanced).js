/**
 * 
 This is an extention to the basic version (http://www.codewars.com/kata/every-nth-array-element-basic) of this problem, you might like to try that one first.

Create a method every which returns every nth element of an array.

Usage
With no arguments, array.every it returns every element of the array.
With one argument, array.every(interval) it returns every intervalth element.
With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index

Examples
[0,1,2,3,4].every      # [0,1,2,3,4]
[0,1,2,3,4].every(1)   # [0,1,2,3,4]
[0,1,2,3,4].every(2)   # [0,2,4]
[0,1,2,3,4].every(3)   # [0,3]
[0,1,2,3,4].every(1,3) # [3,4]
[0,1,2,3,4].every(3,1) # [1,4]
[0,1,2,3,4].every(3,4) # [4]
Advanced features
Negative values

When interval is negative, you return every nth element, but count down instead of up. The start index is still relevant and still defaults to zero.

Example:

[0,1,2,3,4].every(-1,4)   # [4,3,2,1,0]
But no wrapping

When counting down from a positive index, stop when you are below zero. (This is different from Ruby's array indexing)

Example:

[0,1,2,3,4].every(-2,2)   # [2, 0]
[0,1,2,3,4].every(-2,3)   # [3, 1]
But when start_index is negative, it counts backwards from the end of the array. (This is the same behaviour as Ruby's array indexing)

Example:

[0,1,2,3,4].every(-1,-1)   # [4,3,2,1,0]
[0,1,2,3,4].every(-2,-5)   # [0]
[0,1,2,3,4].every( 1,-3)   # [2,3,4]
Error detection

Every makes no sense when interval is zero, so interval may NOT be zero, in this case return an ArgumentError with the message interval can't be 0

Out of bounds indexes

If start_index is out of bounds return an empty array.

Notes
In test cases:
interval may be any integer.
start_index may be any integer.
 */

Array.prototype.every = function (interval = 1, start_index = 0) {
  // Handle interval = 0 case
  if (interval === 0) {
    throw new Error("interval can't be 0");
  }

  const result = [];
  const length = this.length;

  // Normalize negative start_index to count from the end
  if (start_index < 0) {
    start_index = length + start_index;
  }

  // Return an empty array if start_index is out of bounds
  if (start_index < 0 || start_index >= length) {
    return result;
  }

  // If interval is positive, iterate forward
  if (interval > 0) {
    for (let i = start_index; i < length; i += interval) {
      result.push(this[i]);
    }
  }
  // If interval is negative, iterate backward
  else {
    for (let i = start_index; i >= 0; i += interval) {
      result.push(this[i]);
    }
  }

  return result;
};

// Test cases
console.log([0, 1, 2, 3, 4].every()); // [0, 1, 2, 3, 4]
console.log([0, 1, 2, 3, 4].every(1)); // [0, 1, 2, 3, 4]
console.log([0, 1, 2, 3, 4].every(2)); // [0, 2, 4]
console.log([0, 1, 2, 3, 4].every(3)); // [0, 3]
console.log([0, 1, 2, 3, 4].every(1, 3)); // [3, 4]
console.log([0, 1, 2, 3, 4].every(3, 1)); // [1, 4]
console.log([0, 1, 2, 3, 4].every(3, 4)); // [4]
console.log([0, 1, 2, 3, 4].every(-1, 4)); // [4, 3, 2, 1, 0]
console.log([0, 1, 2, 3, 4].every(-2, 2)); // [2, 0]
console.log([0, 1, 2, 3, 4].every(-2, 3)); // [3, 1]
console.log([0, 1, 2, 3, 4].every(-1, -1)); // [4, 3, 2, 1, 0]
console.log([0, 1, 2, 3, 4].every(-2, -5)); // [0]
console.log([0, 1, 2, 3, 4].every(1, -3)); // [2, 3, 4]

// Edge cases
console.log([0, 1, 2, 3, 4].every(0)); // Throws error: interval can't be 0
console.log([0, 1, 2, 3, 4].every(1, 10)); // []
console.log([0, 1, 2, 3, 4].every(1, -10)); // []
