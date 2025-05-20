function solution(string) {
    
    if(string==undefined || string=='' || string==null){
        return '';
    }
    var newString = string.split('');
    return newString.map((a)=>{
        if(/[A-Z]/.test(a)){return " "+a}else{return a}
    }).join("");
  }
  console.log(solution("camelCasing"))