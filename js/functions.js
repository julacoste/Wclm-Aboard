// Scroll Opacity Effect
var divs = $('h1, .btn');

$(window).on('scroll', function(){
	var scrollDown = $(this).scrollTop();
	divs.css({ 'opacity' : (1 - scrollDown/400)});
});

//Scroll scrollTop
$("a.btn-home").click(function(){
	$('html, body').animate({
		scrollTop: $("#present").offset().top
	}, 'slow');
});