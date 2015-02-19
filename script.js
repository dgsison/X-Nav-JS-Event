
var formElement = document.getElementById('box');
formElement.addEventListener("input", function(){
	var body = document.getElementById("#body");
   document.body.style.background = formElement.value;
});