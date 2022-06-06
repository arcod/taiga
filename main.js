var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//anim stuff
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms)) //https://thewebdev.info/2022/02/09/how-to-create-pause-or-delay-in-a-javascript-for-loop

const createAnimDuration = 500;

function sinLerp(a,b,t) {
	return Math.sin(t*Math.PI*0.5)*(b-a)+a
}

//calculations for hex drawing and size
const a = 2 * Math.PI / 6;
const sqrt3 = Math.sqrt(3);
const radius = 50;
const buffer = 1;

function qrs2xy(q,r,s) { //https://www.reddit.com/r/askmath/comments/s6u33s/converting_cube_coordinates_to_cartesian/
	return [
		(r+s)*sqrt3/2,
		r/2 - s/2
	]
}

//debug
var debug = true;

//mouse positions
var mouseX = 5000;
var mouseY = 5000;
var mouseDown = false;

var board = new hexBoard();


function handleMouseMove(e) {
	mouseX = parseInt(e.clientX - canvas.offsetLeft) - canvas.width / 2;
	mouseY = parseInt(e.clientY - canvas.offsetTop) - canvas.height / 2;
}


canvas.addEventListener("mousemove", e => {
	handleMouseMove(e);
});

document.addEventListener("mousedown", e => {
	mouseDown = true;
})

document.addEventListener("mouseup", e => {
	mouseDown = false;
})


board.createTiles(2);

console.log(board.hexTiles);

var bgColor = "black";

function update() {
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
  	board.draw();

  	window.requestAnimationFrame(update)
}

update();