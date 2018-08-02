$(window).on(function(){
  
     
});
$(document).ready(function(){
  $("#scrbutton").on('click',function(event) {
    $("#unactive").next().removeClass("active");
    $("#unactive").next().addClass("unactive");
    $("#unactive").addClass("active");  
    $("#unactive").removeClass("unactive");  
  });
  $("#loader").fadeOut(10);
  $("#loader").css("display","none");
  $("#visible").css("display","block");

  
	$("body, html").scrollTop(0);
  
	$("a").on('click', function(event) {

    if (this.hash !== "") {
    	//this part of the code is not working....
    // 	if(this.className == "unactive" && count%2 == 1) {
    // 	$(this).toggleClass("active");
    // 	$(this).next().toggleClass("active", false);
    // 	$(this).next().toggleClass("unactive", true);
    // 	$ count++;
    // }else if(this.className == "unactive" && count%2 == 0) {
    // 	$(this).toggleClass("active");
    // 	$(this).prev().toggleClass("active", false);
    // 	$(this).prev().toggleClass("unactive", true);
    // 	$ count++;
    // };
      if(this.className == "unactive") {
        $(this).addClass("active");
     $(this).next().removeClass("active");
      $(this).next().addClass("unactive");
      $(this).prev().removeClass("active");
      $(this).prev().addClass("unactive");
      }
      var scroll = this.hash;
      $('html, body').animate({
        scrollTop: $(scroll).offset().top
      }, 1000, function(){
        window.location.hash = scroll;
      });
    };
  }
);

	});


// $('a[href*="#"]')
  
  
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 2000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });
//   });

