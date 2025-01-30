function* fibonaciGenerator(){
    let num1 = 0;
    let num2 = 1;
    let sum;

    yield 0;
    yield 1;

    while (true) {
        sum = num1+num2;
        num1 = num2;
        num2 = sum;
        yield sum;
        
    }
    
   
}
const gen = fibonaciGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

