
$(document).ready(function(){
	jReady();
	jResize();
});

$(window).resize(function(){
	jResize();
});

function jReady()
{

	$("body, html").scrollTop(0);
}
function jResize()
{
	WinWidth = $(window).innerWidth();
	WinHeight = $(window).innerHeight();


	// $("#home-cover").css({"height": WinHeight});
}

