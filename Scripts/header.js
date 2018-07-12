window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = 550;
var link = document.getElementByClassName("active");


function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("background");
    
        
  } else if (window.pageYOffset <= sticky){
  	
    navbar.classList.remove("sticky");
     navbar.classList.add("background");


    
  } 
}