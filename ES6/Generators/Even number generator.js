function* alphabetGenerator(){
    let num = 0;
    while (true) {
        yield num+=2;
    }
    
   
}
const gen = alphabetGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

