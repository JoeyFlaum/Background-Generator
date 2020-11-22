var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var backgroundCSS = window.getComputedStyle(body).getPropertyValue("background-image");
var btRandom = document.getElementById("randomGenerator");

function setPageLoadPickers(){
	color1.value = "#ff0000";
	color2.value = "#ffff00";
}

function initialBackgroundReadout(){
	css.textContent = backgroundCSS + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// 1. Write code so that the colour inputs 
// 	  match the background generated on the first page load. 
setPageLoadPickers();

// 2. Display the initial CSS linear gradient property on page load.
initialBackgroundReadout();

// 3. BONUS: Add a random button which generates 
//    two random numbers for the colour inputs.
btRandom.addEventListener("click",changeColorRandom);

function changeColorRandom(){
	color1.value=randomColorCode();
	color2.value=randomColorCode();
	setGradient();

}

function randomColorCode(){
  var letters = '000111222333444555666777888999AAABBBCCCDDDEEEFFF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 48)];
  }
 return color;
}
