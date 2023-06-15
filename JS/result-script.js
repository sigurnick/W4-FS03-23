//take variables form question script
const totalScore = localStorage.getItem("totalScore");
const questions = localStorage.getItem("questionLength");

//------------------Funciton create chart with totalScore imput and total question imput--------------

const resultChart = function (correctAnswers, totQuestion) {
  //take number of correct and wrong answers
  let wrongAnswers = totQuestion - correctAnswers;
  let nCorrect = correctAnswers;
  let nWrong = wrongAnswers;

  //percentage calculation
  wrongAnswers = Math.floor((wrongAnswers / totQuestion) * 100);
  let wrongAnswersString = wrongAnswers.toString() + "%"; //wrong percentage in string
  correctAnswers = Math.floor((correctAnswers / totQuestion) * 100);
  let correctAnswersString = correctAnswers.toString() + "%"; //correct percentage in string

  //take div container from html
  let correctAnswersContainer = document.getElementById("correct-answers");
  let wrongAnswersContainer = document.getElementById("wrong-answers");

  //create new h1 with percentage
  let correctPercentageH1 = document.createElement("h1");
  correctPercentageH1.innerText = correctAnswersString;
  let wrongPercentageH1 = document.createElement("h1");
  wrongPercentageH1.innerText = wrongAnswersString;

  //create new p with question number answered
  let correctAnswersP = document.createElement("p");
  let wrongAnswersP = document.createElement("p");
  //insert number question to p
  correctAnswersP.innerText = `${nCorrect}/${totQuestion} questions`;
  wrongAnswersP.innerText = `${nWrong}/${totQuestion} questions`;

  //append h1 and p
  correctAnswersContainer.appendChild(correctPercentageH1);
  correctAnswersContainer.appendChild(correctAnswersP);
  wrongAnswersContainer.appendChild(wrongPercentageH1);
  wrongAnswersContainer.appendChild(wrongAnswersP);

  //overlay div
  if (correctAnswers > 60) {
    document.getElementById("chartOverlay").innerHTML = `
  <h4>Congratulations!</h4>
  <h4 id="exam-passed">You passed the exam.</h4>
  </br></br>
  <p>We'll send you the certificate in few minutes. </br> Check your email (including promotions / spam folder)</p>
  `;
  } else {
    document.getElementById("chartOverlay").innerHTML = `
  <h4>I'm sorry,</h4>
  <h4 id="exam-failed">You failed the exam.</h4>
  </br></br>
  <p>We'll send you the results in few minutes. </br> Check your email (including promotions / spam folder)</p>
 
  `;
  }

  //--------------------Chart-----------------------
  // setup

  const data = {
    datasets: [
      {
        label: "Answers",
        data: [wrongAnswers, correctAnswers],
        backgroundColor: ["#D20094", "#00FFFF"],
        borderColor: ["#D20094", "#00FFFF"],
        borderWidth: 1,
        cutout: "77%",
      },
    ],
  };

  // config
  const config = {
    type: "doughnut",
    data,
    options: {
      plugins: {},
      responsive: true,
    },

    elements: {
      arc: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
};

resultChart(totalScore, questions);
// resultChart(10, 13);

//button event
let button = document.getElementById("rate-us-button");
button.addEventListener("click", function (e) {
  window.location.href = "/feedback.html";
});
