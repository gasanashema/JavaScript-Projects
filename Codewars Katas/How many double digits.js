/**
 * 
 * For this Kata, you will write a function that accepts an integer 'ndigit' representing the number of digits in a barcode. The function should return the total number of n-digit integers which contain a 'double digit' (the same digit twice in a row)"

Barcodes are numeric only (containing 0 - 9), and will not have leading zeroes (IE, a six digit barcode will start as 100000).

For example:

If number of digits = 2, should return 9
11,22,33,44,55,66,77,88,99

If number of digits = 3, should return 171:
100,110,111,122,133... etc.
Expect large numbers with ndigits upwards of 10000, so execution time will be a factor. Dont bother trying to generate the entire list.
 */

const numberOfDuplicateDigits = (ndigit) => {
  // Total numbers with ndigit digits
  const totalNumbers = BigInt(9) * BigInt(10) ** BigInt(ndigit - 1);

  // Count numbers without any double digits
  const countNoDoubleDigits = (n) => {
    if (n === 1) return BigInt(9); // Single-digit numbers (1-9)

    let prev = BigInt(9); // First digit (1-9)
    let current = BigInt(9) * BigInt(9); // Second digit can be any but not equal to the first

    for (let i = 2; i < n; i++) {
      const next = current * BigInt(9); // Each subsequent digit can be any but not equal to the previous one
      prev = current;
      current = next;
    }

    return current;
  };

  const noDoubleDigits = countNoDoubleDigits(ndigit);

  // Numbers with double digits
  const doubleDigitsCount = totalNumbers - noDoubleDigits;

  return doubleDigitsCount;
};

console.log(numberOfDuplicateDigits(1000)); // Example usage
