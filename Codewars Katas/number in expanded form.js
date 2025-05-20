/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 2"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/


function expandedForm(num) {
    // Your code here
    let strNum = num.toString();
    let numArr = strNum.split("");
    let newStr = [];
    if(num<0){
        return "";
    }
    for (let i=0;i<numArr.length;i++){
      if(numArr[i] * Math.pow(10,(numArr.length - (i+1)))>0){
        newStr.push(numArr[i] * Math.pow(10,(numArr.length - (i+1))));
      }else{
        continue;
      }
    }
    return newStr.join(" + ");
  }

  console.log(expandedForm(70034));



  /* 
  another approach from codewars

  const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
  */