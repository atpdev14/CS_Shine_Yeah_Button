var yeah = new Audio("./assets/Yeah.wav");

$("#yeahButton").on("click", function(){
	if (yeah.paused) {
        yeah.play();
    }else{
        yeah.currentTime = 0
    }
});  