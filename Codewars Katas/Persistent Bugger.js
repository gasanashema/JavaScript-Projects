function persistence(num) {
    let count = 0;
    let  strNum = num.toString().split('').map(Number);
    let i = 0;
 
    while(strNum.length>1){
     let newVar = strNum.reduce((acc,val)=>acc*val).toString().split('').map(Number)
     strNum = newVar;
     count+=1;
    }
    return count;
    
    }
    console.log(persistence(39));//3
console.log(persistence(999));//4
console.log(persistence(4));//0