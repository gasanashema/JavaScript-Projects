/**
 * Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

More examples in the test cases.

Good luck!

If you like this Kata, please try
 */
function solve(x, y) {
    let count = 0;
    while(x<=y){
        if(!/^[01689]+$/.test(x.toString())){
            x+=1;
            continue;
        }
            
        let rot = x.toString().split('').map(d => d === '6' ? '9' : d === '9' ? '6' : d).reverse().join('');
        if(Number(rot)==x)
            count+=1;
        x+=1;
    }
    return count;
   };

   console.log(solve(10,100));