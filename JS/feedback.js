let bottone=document.getElementById('bottone')
bottone.addEventListener('click',function(e){
  window.location.href='/index.html'
})



//take all i
const allStars = document.querySelectorAll("i");

//cicle array of stars (i) and add event on click
allStars.forEach((e, index) => {
  e.addEventListener("click", function () {
    selectionStars(index);
  });
});

//function star selected colored
const selectionStars = (index) => {
  for (let i = index; i < 10; i++) {
    allStars[i].style.color = "#02174e";
  }

  for (let i = 0; i < index + 1; i++) {
    allStars[i].style.color = "#00ffff";
  }
};
