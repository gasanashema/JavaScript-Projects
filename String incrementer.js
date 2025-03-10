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
    let sasa = [];
    let nbrPart = strng.split('').reverse();
    for (const nbr in nbrPart) {
        if (/\d/.test(nbrPart[nbr])) {
            sasa.push(nbrPart[nbr]);
        }else{
            break;
        }
    }
    let data = sasa.reverse().join('')
    let strPart = strng.split('').slice(0,strng.length - sasa.length).join('');
    let size = (data.length - ((+data+1).toString()).length)<0?0:data.length - ((+data+1).toString()).length;
    let result = [...strPart,...new Array(size).fill(0),(+data+1)].join('');
    return result;
  }

  console.log(incrementString('fo99obar99'));
  console.log(incrementString('foo099'));
  console.log(incrementString('foo0042'));