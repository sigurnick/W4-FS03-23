const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    // correct_answer: "Central Processing Unit",
    answers: [
      "Central Processing Unit",
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    // correct_answer: "Final",
    answers: ["Final","Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    // correct_answer: "False",
    answers: ["False","True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    // correct_answer: "False",
    answers: ["False","True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    // correct_answer: ".svg",
    answers: [".svg",".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    // correct_answer: "Cascading Style Sheet",
    answers: [
      "Cascading Style Sheet",
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    // correct_answer: "Nougat",
    answers: ["Nougat","Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    // correct_answer: "140",
    answers: ["140","120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    // correct_answer: "False",
    answers: ["False","True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    // correct_answer: "Java",
   answers: ["Java","Python", "C", "Jakarta"],
  },
];

//global variable
let score = 0;
let questionDiv = document.getElementById("question");
let answerDiv = document.getElementById("answers"); 
// variable for correct answers only
const correct_answer = ["Central Processing Unit", "Final", "False", "False",".svg","Cascading Style Sheet","Nougat","140","False","Java",]
console.log(correct_answer)

// making a function for picking the questions and putting them into the array
const questionPicker = function () {
  let question = [];
  questions.forEach((element) => {
    question.push(element.question);
  });
  return question;
};
// making a function for picking the answers (both wrong and right), and putting them into the array
const answers = function () {
  let answer = [];
  questions.forEach((element) => {
    answer.push(element.answers);
   
  });
  return answer;
};

const questionArray = questionPicker();
const answerArray = answers();
console.log(questionArray)
console.log (answerArray)


// making a for cicle for the question and adding them into a div and then into an h1

for (let i = 0; i < questionArray.length; i++) {
  let questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  let questionElement = document.createElement("h1");
  questionElement.innerText = questionArray[i];

  let answerElement = document.createElement("div");
  answerElement.classList.add("answer-list");
// making a for.each cicle for the answers and adding them into a p
  answerArray[i].forEach((answer) => {
    let answerItem = document.createElement("p");
    answerItem.innerText = answer;
// adding an eventlistener for the click on a p 
    answerItem.addEventListener("click",  function () {
      checkAnswer(answerItem.innerText, i);
    });
    answerElement.appendChild(answerItem);
  });

  questionContainer.appendChild(questionElement);
  questionContainer.appendChild(answerElement);

  questionDiv.appendChild(questionContainer);
}
// creating a function to check if the clicked answer is correct or not
function checkAnswer(selectedAnswer, questionIndex) {
  if (selectedAnswer === correct_answer[questionIndex]) {
    score++;
    
    console.log("Correct answer!");
  } else {
    console.log("Wrong answer!");
  }
}
