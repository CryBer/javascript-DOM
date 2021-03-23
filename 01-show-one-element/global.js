window.addEventListener("load", function(){
  const button = document.querySelector("#more_text_link")
  const textToShow = document.querySelector("#more_text_content")
  textToShow.style.display = "none"


  button.addEventListener('click', function(e) {
      textToShow.style.display = "initial"
      button.style.display = "none"
    })
  });