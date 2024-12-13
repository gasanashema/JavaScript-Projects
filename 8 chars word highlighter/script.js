/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

let getParagraph = document.getElementById("paragraph");
let paragraph = getParagraph.innerText.replace(/[^a-zA-Z ]/g, "").split(" ");

let words = [];

paragraph.map(currentElement=>{
    if(currentElement.length>=8){
        words.push(currentElement);
    }
});

let newParagraph = getParagraph.innerHTML;

    for (let i = 0; i < words.length; i++) {

        let span = "<span class = 'highlighted'>" + words[i]+ "</span>";
        

        newParagraph = newParagraph.replace(words[i],span);
       
    }
getParagraph.innerHTML = newParagraph;

let highlighted = document.querySelectorAll(".highlighted").forEach(currentSpan=>currentSpan.style.backgroundColor = 'yellow');
console.log(highlighted);

// function(currentSpan){
//     return currentSpan.style.backgroundColor = 'yellow';
// }

