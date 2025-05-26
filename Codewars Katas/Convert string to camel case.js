/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

const toCamelCase = str => {
    if(str.trim()=='') return ''
  const splited = str
    .split("_")
    .map((x) => x.split("-"))
    .flat();
  return splited[0][0] === splited[0][0].toUpperCase()
    ? splited.map((x) => x[0].toUpperCase() + x.slice(1, x.length)).join("")
    : splited
        .map((x, i) =>
          i == 0
            ? x[0].toLowerCase() + x.slice(1, x.length)
            : x[0].toUpperCase() + x.slice(1, x.length)
        )
        .join("");
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
