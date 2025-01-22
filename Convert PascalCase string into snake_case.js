/**
 * Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
 */

function toUnderscore(string) {
    let newStr = (string+'').split('').map((el,ind)=>{
        if(ind === 0){
             return el.toLowerCase();
        }else if(el.match(/[A-Z]/) && ind != 0){
            return el='_'+el.toLowerCase();
        }else{
            return el;
        }
    }).join('').trim();
    return newStr;
}
console.log(toUnderscore('TestController'))