/**
 * 
 * 
 * 
 * You have managed to intercept an important message and you are trying to read it.

You realise that the message has been encoded and can be decoded by switching each letter with a corresponding letter.

You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.

For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

You read the first sentence:

"r slkv mlylwb wvxlwvh gsrh nvhhztv"
After a few minutes you manage to decode it:

"i hope nobody decodes this message"
Create a function that will instantly decode any of these messages

You can assume no punctuation or capitals, only lower case letters, but remember spaces!
 */
function decode(message) {
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].reverse();
    let arr2 = message.split('').map((el,ind)=>{
        if(el === ' '){
            return ' ';
        }
        let index = arr.indexOf(el);
        return arr.reverse()[index];
    });
    return arr2.join('');
}
console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"));