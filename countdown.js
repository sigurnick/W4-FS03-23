const getTime = date.getSeconds();
console.log(getTime);
let seconds = document.getElementById("seconds");
let ss = document.getElementById("ss");
let secondDot = document.querySelector(".dots sec-dot");

console.log(seconds);

let endDate = "15/6/2023 00:00:00";
let now = new Date(endDate).getTime();
let countDown = new Date().getTime();
let distance = now - countDown;

let s = Math.floor((distance % (1000 * 60)) / 1000);

seconds.innerHTML = s + "<br><span>Seconds</span>";

ss.style.strokeDashoffset = 440 - (440 * s) / 60;
secondDot.style.trasform = `rotateZ(${s * 6}deg`;

// if (distance < 0) {
// clearInterval(x);
// document.getElementById("time").style.display = "none";
// document.querySelector(".time-out").style.display = "block";
// }
// setInterval;
