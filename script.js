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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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


// Global variable
let score = 0;
let questionDiv = document.getElementById("question");
let answerDiv = document.getElementById("answers"); 
let timeRemaining = 60; 

// created a function for the display of the time in the page
function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.innerText = timeRemaining ;
  
}



// Variable for correct answers only
const correct_answer = ["Central Processing Unit", "Final", "False", "False",".svg","Cascading Style Sheet","Nougat","140","False","Java"];
console.log(correct_answer);

// Function for picking the questions and putting them into the array
const questionPicker = function () {
  let question = [];
  questions.forEach((element) => {
    question.push(element.question);
  });
  return question;
}

// Function for picking the answers (both wrong and right) and putting them into the array
const answers = function () {
  let answer = [];
  questions.forEach((element) => {
    answer.push(element.answers);
  });
  return answer;
}

const questionArray = questionPicker();
const answerArray = answers();
console.log(questionArray);
console.log(answerArray);


let currentQuestionIndex = 0; // Track the current question index

// Loop through the questions and add them to the DOM
function showQuestion() {
  timeRemaining = 60;

  // added the updateTimerDisplay for resetting the timer and starting it from 60s again
  updateTimerDisplay()

  let questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  // question number displayed
  let questionNumberElement = document.createElement("p");
  questionNumberElement.innerText = "QUESTION " + (currentQuestionIndex + 1);
  
  const slashElement = document.createElement("span");
  slashElement.innerText = "/";
  
  const totalQuestionsElement = document.createElement("span");
  totalQuestionsElement.innerText = questionArray.length;
  
  // Apply CSS classes to the elements
  questionNumberElement.classList.add("question-number");
  slashElement.classList.add("slash");
  totalQuestionsElement.classList.add("total-questions");
  
  // Append the elements to the parent element
  questionNumberElement.appendChild(slashElement);
  questionNumberElement.appendChild(totalQuestionsElement);

  // setting a local storage, for taking the value to the next page
  localStorage.setItem('questionLength', questionArray.length);

// adding the questions 
  let questionElement = document.createElement("h1");
  questionElement.innerText = questionArray[currentQuestionIndex];
  questionElement.classList.add('question')
  
// adding all the answers
  let answerElement = document.createElement("div");
  answerElement.classList.add("answer-list");

// created a for each, that create a element p for every answer 
answerArray[currentQuestionIndex].forEach((answer) => {
  let answerItem = document.createElement("p");
  answerItem.classList.add('answer-item');

  //added a math random for randomize the order of the answers
  answerItem.style.order = Math.floor(Math.random()*100)
  answerItem.innerText = answer;

// add an eventlistener for selecting the answer 
    answerItem.addEventListener("click", function (event) {
      checkAnswer(answerItem.innerText);
      event.target.classList.add('selected');
      
    });
  
    answerElement.appendChild(answerItem);
  });

  // appended evrytingh so it shows in the page
  questionContainer.appendChild(questionElement);
  questionContainer.appendChild(answerElement);
  questionContainer.appendChild(questionNumberElement);

  // created a .innerHTML for resetting the question and pushing the next one
  questionDiv.innerHTML = ""; 
  questionDiv.appendChild(questionContainer);
      
}

// created a function to calculate the total score of the user
function calculateTotalScore() {
  let totalScore = 0;
  
  for (let i = 0; i < correct_answer.length; i++) {
    if (selectedAnswers[i] === correct_answer[i]) {
      totalScore++;
    }
  }
  
  return totalScore;
}

let selectedAnswers = new Array(questionArray.length).fill(null);

// created a function for checking if the selected answer is === correct answer
function checkAnswer(selectedAnswer) {
  if (selectedAnswers[currentQuestionIndex] === null) {
    if (selectedAnswer === correct_answer[currentQuestionIndex]) {
      score++;
      console.log("Correct answer!");
      console.log(score);
    } else {
      console.log("Wrong answer!");
      console.log(score);
    }
    selectedAnswers[currentQuestionIndex] = selectedAnswer;
    currentQuestionIndex++; // Move to the next question

    if (currentQuestionIndex < questionArray.length) {
      
      showQuestion(); // Show the next question
    } else {

      // cleared the interval for not letting the time run when the questions are finished
      clearInterval(timerId)

      window.location.href = '/result.html';

      // All questions answered, display total score
      const totalScore = calculateTotalScore();

      // setted a local storage for getting the score value and taking it into the next page 
      localStorage.setItem('totalScore', totalScore);
    }
  }
}

// created a function to change the question if the time is up
function timeUp() {
  currentQuestionIndex++;
  showQuestion();
}

// created a function for starting the timer and updating the timer display
function startTimer() {

  // recalled the function updateTimerDisplay so i can use it inside the startTimer
  updateTimerDisplay()

// setted an interval to reduce the time remaining
  timerId = setInterval(function () {
    timeRemaining--

    // called the function for updating the display
    updateTimerDisplay()
    
  
    if (timeRemaining <= 0) {
      
      // recalled timeUp so it goes to the next question
      timeUp();
    }
  }, 1000) 
}

startTimer()
showQuestion();




