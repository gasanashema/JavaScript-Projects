let counter = document.getElementById("counter");
counter.textContent = 10;

// let timer = setInterval(() => {
//   let intCounter = parseInt(counter.textContent); 
//   counter.textContent = intCounter - 1;

  
//   if (intCounter - 1 === 0) {
//     clearInterval(timer);
//     window.alert("Time's up!");
//   }
// }, 1000);

let addFive = document.getElementById("addFive");
let addTen = document.getElementById("addTen");
let addFifteen = document.getElementById("addFifteen");

addFive.addEventListener("click", () => {
  let intCounter = parseInt(counter.textContent);
  counter.textContent = intCounter + 5;
});

addTen.addEventListener("click", () => {
  let intCounter = parseInt(counter.textContent);
  counter.textContent = intCounter + 10;
});

addFifteen.addEventListener("click", () => {
  let intCounter = parseInt(counter.textContent);
  counter.textContent = intCounter + 15;
});
