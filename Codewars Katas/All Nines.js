const allNines = (x)=>{
    if(BigInt(x)%2n==0){
        return -1n;
    }else{
       let m=1n;
        while(true){
            let ans = (BigInt(m)*BigInt(x)).toString().split('').filter(l=>l!=9);
            if(ans.length===0){
                return m    ;
            }else{
                m+=1n;
            }
        }
    }
  }

  console.log(allNines(13));