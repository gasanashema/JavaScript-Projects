/**
###Task:

You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

Examples:
pattern(5):

    1    
   121   
  12321  
 1234321 
123454321


Hint: Use \n in string to jump to next line
 */

const pattern = (n) => {
  if (n <= 0) return "";

  const result = [];

  for (let i = 1; i <= n; i++) {
      const spaces = " ".repeat(n - i); 
      const leftPart = Array.from({ length: i }, (_, index) => (index + 1) % 10).join("");
      const rightPart = leftPart.slice(0, -1).split("").reverse().join("");

      const row = spaces + leftPart + rightPart;
      
      const trailingSpaces = " ".repeat(n * 2 - 1 - row.length);
      result.push(row + trailingSpaces);
  }

  return result.join("\n"); 
};

console.log(pattern(7));
