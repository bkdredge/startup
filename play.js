function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	//function to make the text alignment center using DOM method
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	//function to make the text alignment right using DOM method
	document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
	//function to make the text in Uppercase using DOM method
	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
	//function to make the text in Lowercase using DOM method
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
	//function to make the text capitalize using DOM method
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}

const el = document.querySelector('.injected');
el.innerHTML = '<p class="injected"><b>Instructions: </b><ol><li>Choose your options.</li><li>Write according to your prompt</li><li>Submit! And repeat!</li> </p>';

const submitDataEl = document.querySelector('.options');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

// remove white space
function removeTextAreaWhiteSpace() {
var textarea1 = document.getElementById('textarea1');
textarea1.value = textarea1.value.replace(/^\s*|\s*$/g,'');
}

function increaseScore() {
  var score = document.getElementById('score');
  var textarea1 = document.getElementById('textarea1');
  score = 0;
}

function generate(){
  document.getElementById("prompt").innerHTML = '<h2>Prompt:</h2><br> <p>Describe your plans for the future in your target language.</p>';
}

function submit() {
  document.getElementById("submit").innerHTML = '<center>Do bettah.</center>';
}
