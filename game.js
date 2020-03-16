//alert("Connected");
var colors=[
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
"rgb(255, 255, 0)",
"rgb(0, 255, 255)"
]
var bgColor = "#232323";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = colors[3];
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
message.style.color = "white";
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = pickColor();

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColor(pickedColor);
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
	return colors[coloridx];
}