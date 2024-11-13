function humanReadable (seconds) {
  let hours = (seconds/3600)<10?"0"+(parseInt(seconds/3600)):parseInt(seconds/3600);
  let remainingSecs = seconds%3600;
  let minutes = (remainingSecs/60)<10?"0"+(parseInt(remainingSecs/60)):parseInt(remainingSecs/60);
  remainingSecs=(remainingSecs%60)<10?"0"+(parseInt(remainingSecs%60)):parseInt(remainingSecs%60);
  return hours+':'+minutes+':'+remainingSecs;
}