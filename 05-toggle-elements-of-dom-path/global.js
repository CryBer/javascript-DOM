window.addEventListener('load', function(){
    const toggle = document.querySelectorAll('.second_five li')
    const button = document.getElementById("toggle_button");

    button.addEventListener('click', function(){
        toggle.forEach((e) => {
            if(e.style.display == 'block') {
                e.style.display = 'none';
            } else {
                e.style.display = 'block';
            }
        });
    });
}); 
