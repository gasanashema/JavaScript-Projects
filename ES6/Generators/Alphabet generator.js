function* alphabetGenerator(){
    let char = 'a'.charCodeAt(0);
    while (true) {
        yield String.fromCharCode(char++);
    }
    
   
}
const gen = alphabetGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

