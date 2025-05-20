// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable (seconds) {
  let hours = (seconds/3600)<10?"0"+(parseInt(seconds/3600)):parseInt(seconds/3600);
  let remainingSecs = seconds%3600;
  let minutes = (remainingSecs/60)<10?"0"+(parseInt(remainingSecs/60)):parseInt(remainingSecs/60);
  remainingSecs=(remainingSecs%60)<10?"0"+(parseInt(remainingSecs%60)):parseInt(remainingSecs%60);
  return hours+':'+minutes+':'+remainingSecs;
}