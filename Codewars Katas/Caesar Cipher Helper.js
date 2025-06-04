/**
 * Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
 */
class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encode(str) {
    return this.transform(str, this.shift);
  }

  decode(str) {
    return this.transform(str, -this.shift);
  }

  transform(str, shift) {
    return str
      .toUpperCase()
      .split("")
      .map((char) => {
        let index = this.alphabet.indexOf(char);
        if (index === -1) return char;
        return this.alphabet[(index + shift + 26) % 26];
      })
      .join("");
  }
}