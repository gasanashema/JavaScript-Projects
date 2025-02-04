/**
Task:
You have to write a function pattern which creates the following pattern up to n/2 number of lines.

If n <= 1 then it should return "" (i.e. empty string).
If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.
Examples:
n = 8:

22
4444
666666
88888888

Hint: Use \n in string to jump to next line
 */

function pattern(n){
    var output="";
      if (n<1){
        return output;
      }
      if (n%2!=0) {
        n-=1;
      }

      for (let i = 2; i <= n; i+=2) {
        let temp = '';
        for (let j = 1; j <=i; j++) {
            temp += i;  
        }
        output = i == n? output+=temp:output+=temp+'\n';
      }

    return output;
   }

   console.log(pattern(8));