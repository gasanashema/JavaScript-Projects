/**
 * The aim of the kata is to decompose n! (factorial n) into its prime factors.

Examples:

n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

Notes

the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

 */
const decomp = n => {

    //function to generate prime numbers
    const getPrimes = (max) => {
      let primes = [];
      let isPrime = new Array(max + 1).fill(true);
      isPrime[0] = isPrime[1] = false;

      for (let i = 2; i <= max; i++) {
        if (isPrime[i]) {
          primes.push(i);
          for (let j = i * i; j <= max; j += i) {
            isPrime[j] = false;
          }
        }
      }
      return primes;
    };



    let primeNumbers = getPrimes(n);
    let result = '';

    for (let i = 2; i <= n; i++) {
        if (primeNumbers.includes(i)) {
            let p = 1;
            let x = 0;
            while (Math.pow(i,p) <= n) {
                x += Math.floor(n / Math.pow(i, p));
                p += 1;
            }

            if (x==1) {
                result =
                  result != ""
                    ? result + " * " + i
                    : result + i;
            }else{
                result =
                  result != ""
                    ? result + " * " + i + "^" + x
                    : result + i + "^" + x;
            }

        }
    }
    return result;
}

console.log(decomp(12))//"2^10 * 3^5 * 5^2 * 7 * 11";
console.log(decomp(22))//"2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19";
console.log(decomp(25))//"2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23";
console.log(decomp(100))//"2^49 * 3^25 * 5^15 * 7^9 * 11^5 * 13^3 * 17^2 * 19 * 23 * 29 * 31 * 37 * 41 * 43 * 47 * 53 * 59 * 61 * 67 * 71 * 73 * 79 * 83 * 89 * 97";