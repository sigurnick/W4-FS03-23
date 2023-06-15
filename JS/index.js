let form=document.getElementById('form')
form.addEventListener('submit',function(e){
e.preventDefault()


})


let input=document.getElementById('checkbox')
let button=document.getElementById('button')
button.addEventListener('click',function (e){
   if(input.checked===false ){
    alert('non hai spuntato la checkbox')

    }else{
        window.location.href = '/scelta.html';
    }
})