





window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop + 600;
var link = document.getElementByClassName("active")


function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("background");

        
  } else if (window.pageYOffset <= sticky){
  	
    navbar.classList.remove("sticky");
     navbar.classList.add("background");


    
  } 
}