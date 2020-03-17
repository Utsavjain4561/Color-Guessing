//alert("Connected");
var colors=generateRandomColors(6);
var bgColor = "#232323";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = colors[3];
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
message.style.color = "white";
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = pickColor();

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor+" "+pickedColor);
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			message.textContent = "Try Again!!";
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
	var coloridx = Math.floor(Math.random()*squares.length+1);
	console.log(coloridx);
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
