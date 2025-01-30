function* alphabetGenerator(){
    let num = 1;
    while (true) {
        yield num++;
    }
    
   
}
const gen = alphabetGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

