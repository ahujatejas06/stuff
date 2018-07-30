
// function loading_anim() {
//   // alert("hello");
//   var p  = 0;
//   for (p=0;p<101;p++){
    
//     document.getElementById("counter").innerHTML = p + "%";
//     delay(100);
//   }
// }
// window.document.onload = function () {
// 	var visible = document.getElementById("visible");
// 	var notvisible = document.getElementById("loader");
  
	
// }

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = $(document).height() - 66;


function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("background");
    
        
  } else if (window.pageYOffset <= sticky){
  	
    navbar.classList.remove("sticky");
     navbar.classList.add("background");


    
  } 
}


