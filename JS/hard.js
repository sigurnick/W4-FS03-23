
const questions =[{
    "category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"The Harvard architecture for micro-controllers added which additional bus?",
    // "correct_answer":"Instruction",
    "answers":["Instruction","Address","Data","Control"]},
    
    {"category":"Science: Computers", 
    "type":"multiple",
    "difficulty":"hard",
    "question":"Which data structure does FILO apply to?",
    // "correct_answer":"Stack",
    "answers":["Stack","Queue","Heap","Tree"]},
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"Released in 2001,the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
    // "correct_answer":"Cheetah",
    "answers":["Cheetah","Puma","Tiger","Leopard"]},
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
    
    // "correct_answer":"A' + B'",
    "answers":["A' + B'","A'B + B'A","A'B'","AB' + AB"]},
    
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"What major programming language does Unreal Engine 4 use?",
    // "correct_answer":"C++",
    "answers":["C++","Assembly","C#","ECMAScript"]},
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"The acronym &quot; RIP&quot; stands for which of these?",
    // "correct_answer":"Routing",
    "answers":["Routing","Runtime Instance Processes","Regular Interval Processes","Routine Inspection Protocol"]},
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"Which of these is not a layer in the OSI model for data communications?",
    // "correct_answer":"Connection Layer",
    "answers":[ "Connection Layer","Application Layer","Transport Layer","Physical Layer"]},
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"Which of the following computer components can be built using only NAND gates?",
    // "correct_answer":"ALU",
    "answers":["ALU","CPU","RAM","Register"]},
    
    {"category":"Science: Computers",
    "type":"boolean",
    "difficulty":"hard",
    "question":"The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    // "correct_answer":"True",
    "answers":["True","False"]},
    
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"hard",
    "question":"Who is the founder of Palantir?",
    // "correct_answer":"Peter Thiel",
    "answers":["Peter Thiel","Mark Zuckerberg","Marc Benioff","Jack Dorsey"]}]
    
    
  
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
  
  
  // function for resetting the circle animation with the next question
  function resetCircleAnimation() {
    const circle = document.querySelector("#countdown svg circle");
    circle.style.animation = "none"
    circle.getBoundingClientRect()
    circle.style.strokeDashoffset = "0px"
    circle.style.animation = "countdown 60s linear infinite forwards";
  }
  
  
  
  // Variable for correct answers only
  const correct_answer = ["Instruction","Stack", "Cheetah","A' + B'","C++","Routing","Connection Layer","ALU","True","Peter Thiel",];
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
  
    // called the resetCircleAnimation function for resetting the animation when the next qustion shows
    resetCircleAnimation()
  
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
    questionNumberElement.appendChild(slashElement);
    questionNumberElement.appendChild(totalQuestionsElement);
  
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
  
  
  
  
  