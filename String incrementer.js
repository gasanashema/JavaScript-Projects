/**
 * Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
 */

const incrementString = (strng) => {
    if ( /^[A-Za-z]+$/.test(strng)) {
        return strng+'1'
    }
    let nbrPart = strng.split('').filter(x=>/\d/.test(x)).join('');
    let strPart = strng.split('').filter(x=>/^[A-Za-z]$/.test(x)).join('');
    let result = [...strPart,...new Array(nbrPart.length - (+nbrPart+1).toString().length).fill(0),(+nbrPart+1)].join('');
    return result;
  }

  console.log(incrementString('fo99obar99'));