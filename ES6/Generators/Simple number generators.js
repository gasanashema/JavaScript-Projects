/**
 * yield can only be used inside generator functions (function*). It is a special keyword designed exclusively for generators in JavaScript.

If you try to use yield outside of a generator function, you'll get a SyntaxError.
 */

function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 5

