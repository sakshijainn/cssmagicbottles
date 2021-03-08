var modal = document.querySelector('.modal');
var button = document.querySelector('.btn');
var cross = document.querySelector('.close');


    

button.addEventListener('click', function(){
    modal.style.display = "block";
  
})

cross.addEventListener('click', function(){
    modal.style.display = "none";
  
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log('got modal');
    }
  }


