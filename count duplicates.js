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

console.log(duplicateCount("Indivisibilities"));
