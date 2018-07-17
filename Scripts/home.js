
$(document).ready(function(){
	$("body, html").scrollTop(0);
	$("a").on('click', function(event) {

    if (this.hash !== "") {
    	//this part of the code is not working....

    	
    // 	if(this.hash == "unactive") {
    // 	$(this).addClass("active");

    // }

      var scroll = this.hash;
      $('html, body').animate({
        scrollTop: $(scroll).offset().top
      }, 800, function(){
        window.location.hash = scroll;
      });
    } 
  });
});
