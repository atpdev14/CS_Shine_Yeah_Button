var yeah = new Audio("./assets/Yeah.wav");

$("#yeahButton").on("click", function(){
	console.log("clicked");
	yeah.play();
}); 