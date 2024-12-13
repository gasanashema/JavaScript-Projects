/**
 * 
 * Description:
Task
Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples
1- Add (5,19) ==> return (24) 

2- Add (-27,18) ==> return (-9)

3- Add (-14,-16) ==> return (-30)
 */
var add = function (number1, number2) {
  if (number2 === 0) {
    return number1;
  } else {
    let partialSum = number1 ^ number2;
    let carry = (number1 & number2) << 1;
    return add(partialSum, carry);
  }
};


console.log(add(-4,-10));