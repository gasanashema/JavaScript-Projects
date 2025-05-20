function validatePIN(pin) {
    // Check if the length is 4 or 6
    if (pin.toString().length === 4 || pin.toString().length === 6) {
        // Check if it contains only digits
        if (/^\d+$/.test(pin)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Test cases
console.log(validatePIN('1234'));    // true (valid 4-digit PIN)
console.log(validatePIN('123456'));  // true (valid 6-digit PIN)
console.log(validatePIN('1.34'));    // false (contains special character)
console.log(validatePIN('123a'));    // false (contains a letter)
console.log(validatePIN('123'));     // false (length not 4 or 6)
console.log(validatePIN('12345@'));  // false (contains special character)
