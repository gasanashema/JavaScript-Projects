/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/



function duplicateCount(text) {
  let letterCheck = []; // To store characters that are already checked
  let result = []; // To store the final output

  let arr = text.toUpperCase().split(""); // Convert to uppercase for case-insensitive comparison

  for (let i = 0; i < arr.length; i++) {
    if (letterCheck.includes(arr[i])) {
      // Skip if the character is already processed
      continue;
    }

    let count = 0; // Reset count for each new character

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }

    if (count > 1) {
      letterCheck.push(arr[i]); // Mark the character as processed
      result.push(`${arr[i]} repeats ${count} times`);
    }
  }

  return result.join("\n");
}

console.log(duplicateCount(""));

/*

result from codewars
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/