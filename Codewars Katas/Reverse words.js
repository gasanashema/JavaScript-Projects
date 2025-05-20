/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/
/**
1.receive a string
2.store it in a new variable
3.

 */
function reverseWords(str) {
    // Go for it
    let newStr = [];
    let strArr =str.split(" ");
    for (let i=0;i<strArr.length;i++){
        
            let rev = strArr[i].split("").reverse().join("");
            newStr.push(rev);
            // strArr.splice(0,i); 
      
    } 
    return newStr.join(" ");
  }

  console.log(reverseWords("This is an example!"));