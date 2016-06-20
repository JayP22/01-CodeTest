// Make the first word of each sentence bold //
$.fn.firstWord = function() {
  var text = this.text().trim().split(" ");
  var first = text.shift();
  this.html((text.length > 0 ? "<span class='firstWord'>"+ first + "</span> " : first) + text.join(" "));
};


$("#firstWord").firstWord();


// Slide and hide each heading when clicked //
$('h2,h3,h4').dblclick(function() {
	$(this).slideUp(500)
});


// Get background to change when clicked on button //
$('#button').click(function() {
	$('#backgroundColor').css("background-color", "green");
});


$('#myElement').click(function(){
	$(this).fadeTo( 1000, 0, function() {	
	});
});