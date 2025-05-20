/**
 * Your task will be to implement an object (class) that mimics the array object, but should not actually be an Array. You are otherwise free to choose your own implementation.

The object shall be named List and shall have the methods push, pop, shift, unshift and filter defined on its prototype. Each of these methods should behave exactly as their Array counterpart does. (It is acceptable for filter to return a List or an Array.)
The List constructor must take an arbitrary number of arguments as initial values for your list.
Furthermore, your list should have a length property that dynamically changes as your list changes.

Here are some helpful resources: push, pop, shift, unshift, filter.
 */
class List {
    constructor(...args) {
        this.length = 0;
      for (let i = 0; i < args.length; i++) {
        this[i] =args[i];
        this.length++;
      }
    }
    
    push(...values) {
        if (values.length === 0) return undefined;
      for (let el of values) {
          this[this.length] = el;
          this.length++;    
      }
      return this.length;
    }
    
    pop() {
      if(this.length === 0) return undefined;
      const lastItem = this[this.length-1];
      delete this[this.length-1];
      this.length--;
      return lastItem;
    }
    
    shift() {
        if (this.length === 0) return undefined;
        const firstItem = this[0];
    
        // Shift elements left
        for (let i = 1; i < this.length; i++) {
          this[i - 1] = this[i];
        }
    
        delete this[this.length - 1];
        this.length--;
        return firstItem;
    }
    
    unshift(...values) {
        const valuesLength = values.length;

        // Shift elements right
        for (let i = this.length - 1; i >= 0; i--) {
          this[i + valuesLength] = this[i];
        }
    
        // Add new values at the beginning
        for (let i = 0; i < valuesLength; i++) {
          this[i] = values[i];
        }
    
        this.length += valuesLength;
        return this.length;
    }
    
    filter(callback) {
        const filteredList = new List();

        for (let i = 0; i < this.length; i++) {
          if (callback(this[i], i)) {
            filteredList.push(this[i]);
          }
        }
    
        return filteredList;
    }
  }


const list = new List(14, 2, 13, 4);
console.log(list[0]); // 1 ✅
console.log(list[1]); // 2 ✅
console.log(list[2]); // 3 ✅
console.log(list[3]); // 4 ✅
console.log(list.length); // 4 ✅

console.log(list.push(10)); // 5 ✅
console.log(list[4]); // 10 ✅
console.log(list.length); // 5 ✅

console.log(list.push(11, 12, 13)); // 8 ✅
console.log(list[6]); // 12 ✅
console.log(list.length); // 8 ✅

console.log(list.pop()); // 13 ✅
console.log(list.length); // 7 ✅

console.log(list.shift()); // 1 ✅
console.log(list.length); // 6 ✅

console.log(list.unshift(-1, 0, 1)); // 9 ✅
console.log(list[1]); // 0 ✅
console.log(list.length); // 9 ✅

const filtered = list.filter(x => x < 10);
console.log(filtered.length); // 6 ✅
console.log(list.length); // 9 ✅ 
