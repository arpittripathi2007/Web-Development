var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalGame = document.getElementById("playgame");
var img = document.getElementById('img_snake');

img.onclick = function(){
    init();
    
    modal.style.display = "block";
    modalGame.src = this.src;
    

    
}

  
  // add listener to disable scroll
  
  
  // Remove listener to disable scroll
 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
    
    //to reinitialize the js file 
}