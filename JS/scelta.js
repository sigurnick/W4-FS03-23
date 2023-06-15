let button=document.getElementById('button')
let easy=document.getElementById('easy')
let hard=document.getElementById('hard')

let form=document.getElementById('form')
form.addEventListener('submit',function(e){
e.preventDefault()


})

button.addEventListener('click',function (e){
      if(easy.checked===true){
        window.location.href='/question.html';
      }else if(hard.checked===true){
        window.location.href='/hard.html';
      }else{
        alert('non hai fatto nessuna scelta')
      }
       
     
 })