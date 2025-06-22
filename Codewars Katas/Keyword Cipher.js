function keywordCipher(string,keyword){
//  const nonDuplicated = [...new Set(keyword.split(' ').map(a=>a.replace(/[^a-zA-Z ]/g, "")).join(' ').toLowerCase().split(''))].join('');
 const nonDuplicated = [...new Set(keyword.split(' ').map(a=>a.replace(/[^a-zA-Z ]/g, "")).join(' ').toLowerCase().split(''))].join('');
 const nonDuplicated = 
 const alphabet = 'abcdefghijklmnopqrstuvwxyz';
 const cipher = `${nonDuplicated}${alphabet.split('').filter(a=> !nonDuplicated.includes(a)).join('')}`;
 const resArr = string.split('').map(a=>alphabet.indexOf(a)).map(a=>cipher.charAt(a)).join('');
 return resArr;
}
// console.log(keywordCipher('Welcome home','secret'));
console.log(keywordCipher('hello','wednesday'));