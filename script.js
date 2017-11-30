/*var textBoxes = document.getElementsByClassName("text-box")
console.log("hello");
console.log(textBoxes);
for(var i = 0; i < textBoxes.length; i++) {
	var textBox = textBoxes[i];
	textBox.oninput = function() {
		textBox.style.height = "";
		textBox.style.height = Math.min(textBox.scrollHeight, 300) + "px";
	};	
}*/
/*var ta = document.querySelectorAll('textarea');
autosize(ta);*/
var ta = document.querySelectorAll('textarea');
//ta.style.display = 'none';
autosize(ta);
