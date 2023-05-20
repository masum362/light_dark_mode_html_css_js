const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.onclick = function() {
    // alert('clicked')
   document.body.classList.toggle('darkMode')
   if(document.body.classList.contains("darkMode")){
    toggleBtn.classList.replace("fa-moon" ,"fa-sun")
   }else{
    toggleBtn.classList.replace("fa-sun" ,"fa-moon")
   }

}

