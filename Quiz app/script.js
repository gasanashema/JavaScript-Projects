const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Whale", "Giraffe", "Shark"],
    correct: 1,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "India", "South Korea"],
    correct: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correct: 2,
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    correct: 1,
  },
  {
    question: "Which continent is the Sahara Desert located on?",
    answers: ["Asia", "Africa", "South America", "Australia"],
    correct: 1,
  },
  {
    question: "What is the currency of the United Kingdom?",
    answers: ["Euro", "Pound Sterling", "Dollar", "Yen"],
    correct: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct: 3,
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      "Abraham Lincoln",
      "Thomas Jefferson",
      "George Washington",
      "John Adams",
    ],
    correct: 2,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Osmium", "Ozone", "Opium"],
    correct: 0,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: ["Lion", "Tiger", "Elephant", "Bear"],
    correct: 0,
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: ["Mount Everest", "K2", "Mount Kilimanjaro", "Mount Fuji"],
    correct: 0,
  },
  {
    question: "What is the national flower of Japan?",
    answers: ["Rose", "Tulip", "Cherry Blossom", "Sunflower"],
    correct: 2,
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Marie Curie"],
    correct: 2,
  },
  {
    question: "In which year did the Titanic sink?",
    answers: ["1900", "1912", "1923", "1930"],
    correct: 1,
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Diamond", "Iron", "Platinum"],
    correct: 1,
  },
  {
    question: "Which country is the Great Barrier Reef located in?",
    answers: ["Australia", "New Zealand", "South Africa", "Canada"],
    correct: 0,
  },
  {
    question: "What is the primary ingredient in guacamole?",
    answers: ["Tomato", "Onion", "Avocado", "Lemon"],
    correct: 2,
  },
  {
    question: "Which country is known for inventing pizza?",
    answers: ["France", "Italy", "Greece", "Spain"],
    correct: 1,
  },
  {
    question: "Who is the author of the Harry Potter series?",
    answers: [
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "J.K. Rowling",
      "C.S. Lewis",
    ],
    correct: 2,
  },
  {
    question: "What does the acronym 'NASA' stand for?",
    answers: [
      "National Aeronautics and Space Administration",
      "National Airspace and Space Agency",
      "National Aeronautics and Science Association",
      "National Astronaut and Space Agency",
    ],
    correct: 0,
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correct: 1,
  },
  {
    question: "Which fruit is known as the 'king of fruits'?",
    answers: ["Durian", "Mango", "Papaya", "Banana"],
    correct: 0,
  },
  {
    question: "Which famous building is located in Paris?",
    answers: ["Colosseum", "Eiffel Tower", "Big Ben", "Statue of Liberty"],
    correct: 1,
  },
  {
    question: "Which is the longest-running television show in the US?",
    answers: ["The Simpsons", "Friends", "The Office", "Saturday Night Live"],
    correct: 3,
  },
  {
    question: "What is the main ingredient in hummus?",
    answers: ["Chickpeas", "Lentils", "Peas", "Potatoes"],
    correct: 0,
  },
  {
    question: "What is the largest continent by population?",
    answers: ["Asia", "Africa", "Europe", "North America"],
    correct: 0,
  },
  {
    question: "Which country invented the first modern Olympics?",
    answers: ["Germany", "France", "Greece", "United States"],
    correct: 2,
  },
  {
    question: "Which is the largest island in the world?",
    answers: ["Greenland", "New Guinea", "Borneo", "Australia"],
    correct: 0,
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    answers: ["Lungs", "Heart", "Brain", "Stomach"],
    correct: 1,
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2,
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 1,
  },
  {
    question: "Which country is the largest by area?",
    answers: ["United States", "Canada", "China", "Russia"],
    correct: 3,
  },
];
 
let currentQ = 0;
let question = document.getElementById('question');
let answers = document.getElementById('answers');


question.textContent = questions[currentQ].question;

const creatbtn = (i) => {
  let ansBtn = document.createElement("button");
  ansBtn.classList.add(
    "bg-gray-200",
    "p-2",
    "rounded",
    "w-full",
    "hover:bg-gray-300"
  );
  ansBtn.textContent = questions[currentQ].answers[i];
  ansBtn.value = i;
  ansBtn.addEventListener("click", (event) => {
    let selectedAnswer = event.target.value;
  });
  return ansBtn;
};

answers.innerHTML = "";

for (let i = 0; i < questions[currentQ].answers.length; i++) {
  let btn = creatbtn(i);
  answers.appendChild(btn);
}


