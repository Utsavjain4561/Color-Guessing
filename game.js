//alert("Connected");
var mode = 6;
var colors=generateRandomColors(mode);
var bgColor = "#232323";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easybtn");
var hardBtn = document.getElementById("hardbtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
	h1.style.removeProperty("background");
	mode=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(mode);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display = "none";
	}
})
hardBtn.addEventListener("click",function(){
	h1.style.removeProperty("background");
	mode = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(mode);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display = "block";
	}
})
reset.addEventListener("click",function(){
	h1.style.removeProperty("background");
	mode=6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(mode);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	
	message.textContent="";
})


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor+" "+pickedColor);
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			message.textContent = "Play Again!!";
			this.style.backgroundColor = bgColor;
		}
	})
}
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){

	var coloridx = Math.floor(Math.random()*colors.length);
	return colors[coloridx];
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function generateRandomColors(num){
	arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
