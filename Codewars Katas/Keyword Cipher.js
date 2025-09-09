function keywordCipher(string,keyword){
 const nonDuplicated = [... new Set(keyword.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(''))].join('');
 const alphabet = 'abcdefghijklmnopqrstuvwxyz';
 const cipher = `${nonDuplicated}${alphabet.split('').filter(a=> !nonDuplicated.includes(a)).join('')}`;
 const resArr = string.split('').map(a=>alphabet.indexOf(a)).map(a=>cipher.charAt(a)).join('');
 return resArr;
}
console.log(keywordCipher('hello','weDnesd@1231@3!$ay'));