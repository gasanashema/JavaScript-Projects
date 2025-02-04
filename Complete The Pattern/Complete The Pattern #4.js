/**
 pattern(6):

123456
23456
3456
456
56
6

Hint: Use \n in string to jump to next line
 */

function pattern(n){
    var output="";
      if (n<1){
        return output;
      }

      for (let i = 1; i <= n; i++) {
        let temp = '';
        for (let j = i; j <=n; j++) {
            temp += j;  
        }
        output = i == n? output+=temp:output+=temp+'\n';
      }

    return output;
   }

   console.log(pattern(6));