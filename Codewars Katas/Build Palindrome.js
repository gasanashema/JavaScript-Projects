/**
 * Task
Given a string str, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example
For str = "abcdc", the output should be "abcdcba".

Input/Output
[input] string str

A string consisting of lowercase latin letters.

Constraints: 3 ≤ str.length ≤ 10.

[output] a string
 */
const buildPalindrome = str =>{
    if (str === str.split("").reverse().join("")) {
        return str;
    }
    let revStr =str.split('').reverse().join('');
    for (let i = str.length-1; i > 0; i--) {
        let palindrome = str + revStr.slice(i, str.length);
        if (palindrome === palindrome.split('').reverse().join('')) {
             return palindrome;
        }
    }
}

console.log(buildPalindrome("bac"));