/**
###Task:

You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

###Examples:

pattern(9):

1
333
55555
7777777
999999999

Hint: Use \n in string to jump to next line
 */

function pattern(n){
    var output="";
      if (n<1){
        return output;
      }
      if (n%2!=1) {
        n-=1;
      }

      for (let i = 1; i <= n; i+=2) {
        let temp = '';
        for (let j = 1; j <=i; j++) {
            temp += i;  
        }
        output = i == n? output+=temp:output+=temp+'\n';
      }

    return output;
   }

   console.log(pattern(8));