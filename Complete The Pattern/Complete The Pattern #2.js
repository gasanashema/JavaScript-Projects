/**
 * pattern(11):

1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11
Hint: Use \n in string to jump to next line
 */

function pattern(n){
    var output="";
      if (n<1){
        return output;
      }

      for (let i = 1; i <= n; i++) {
        let temp = '';
        for (let j = n; j >=i; j--) {
            temp += j;  
        }
        output = n == i? output+=temp:output+=temp+'\n';
      }

    return output;
   }

   console.log(pattern(5));