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
  var output=[];
      if (n<1){
        return output.join();
      }
      let x = n;
      let arr = Array(x).fill(' ');

      for (let i = 0; i <= (n*2)-1; i++) {
        k=1
        while(k<=i){
          if(k==n){
            arr.push(0);
            break;
          }
          arr.push(k++);
        }
        k--;
        while(k>=1){
          if(k==1){
            arr.push(0);
            break;
          }
          arr.push(k--);
        }
       output.push(arr.join(''));
        
      }
        
        
     

    return output.join('\n');
}

   console.log(pattern(7));