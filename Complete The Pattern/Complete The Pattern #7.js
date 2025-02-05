/**
###Task:

You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

###Examples:

pattern(9):

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678


Hint: Use \n in string to jump to next line
 */

const pattern = (n) => {
  var output=[];
      if (n<1){
        return output.join();
      }
      let arr = Array.from({ length: n}, (_, i) => 1 + i);
      
      for (let i = 1; i <= n; i++) {
        output.push(arr.join(''));
        let removed = arr.shift();
        let add = arr.push(removed);
        
      }

    return output.join('\n');
}

   console.log(pattern(7));