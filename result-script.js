
//take variables form question script
const totalScore = localStorage.getItem('totalScore')
const questions = localStorage.getItem('questionLength')





//------------------Funciton create chart with totalScore imput and total question imput--------------

const resultChart = function(correctAnswers,totQuestion){
   
  
    //take number of correct and wrong answers
    let wrongAnswers = totQuestion - correctAnswers
    let nCorrect = correctAnswers
    let nWrong = wrongAnswers

    //percentage calculation
    wrongAnswers = Math.floor((wrongAnswers/totQuestion)*100)
    let wrongAnswersString = wrongAnswers.toString() + "%"  //wrong percentage in string
    correctAnswers = Math.floor((correctAnswers/totQuestion)*100)
    let correctAnswersString = correctAnswers.toString() + "%" //correct percentage in string
    
    //take div container from html
    let correctAnswersContainer = document.getElementById("correct-answers")
    let wrongAnswersContainer = document.getElementById("wrong-answers")


    //create new h1 with percentage 
    let correctPercentageH1 = document.createElement("h1")
    correctPercentageH1.innerText = correctAnswersString
    let wrongPercentageH1 = document.createElement("h1")
    wrongPercentageH1.innerText = wrongAnswersString 

    //create new p with question number answered
    let correctAnswersP = document.createElement("p")
    let wrongAnswersP = document.createElement("p")
    //insert number question to p
    correctAnswersP.innerText = `${nCorrect}/${totQuestion} questions`
    wrongAnswersP.innerText = `${nWrong}/${totQuestion} questions`

    //append h1 and p
    correctAnswersContainer.appendChild(correctPercentageH1)
    correctAnswersContainer.appendChild(correctAnswersP)
    wrongAnswersContainer.appendChild(wrongPercentageH1)
    wrongAnswersContainer.appendChild(wrongAnswersP)




    
//--------------------Chart-----------------------
// setup
const data = {
  datasets: [
    {
      label: "Answers",
      data: [correctAnswers, wrongAnswers],
      backgroundColor: ["#00FFFF","#D20094"],
      borderColor: ["#00FFFF","#D20094"],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "doughnut",
  data,
  options: {
    plugins: {
      tooltip: {
        // enabled: false, // Disabilita i tooltip per evitare sovrapposizioni
      },
      legend: {
        display: false, // Nascondi la legenda per evitare sovrapposizioni
      },
      labels: {
        color: "white", // Imposta il colore dei label della legenda
      },
    },
  },
  elements: {
    arc: {
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Imposta il colore di sfondo degli archi
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

}

resultChart(totalScore,questions)