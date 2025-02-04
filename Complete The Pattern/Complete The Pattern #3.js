/**
 * pattern(6):

4
43
432
4321
Hint: Use \n in string to jump to next line
 */

function pattern(n){
    var output="";
      if (n<1){
        return output;
      }

      for (let i = n; i >= 1; i--) {
        let temp = '';
        for (let j = n; j >=i; j--) {
            temp += j;  
        }
        output = i == 1? output+=temp:output+=temp+'\n';
      }

    return output;
   }

   console.log(pattern(6));