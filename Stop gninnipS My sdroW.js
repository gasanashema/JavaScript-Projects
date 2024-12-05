/**
 * Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

 */
function spinWords(string) {
  const arrStr = string.split(' ');

  const transformed = arrStr.map((a)=>{
    if(a.length>=5){
      let newString = '';
      for (let i = a.length-1;i>=0;i--){
        newString += a[i];
      }
      return newString;
    }
    return a;
  })

  return transformed.join(' ');
}
console.log(spinWords("This is another test"));