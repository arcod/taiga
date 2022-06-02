var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//calculations for hex drawing and size
const a = 2 * Math.PI / 6;
const sqrt3 = Math.sqrt(3);
const radius = 50;

function qrs2xy(q,r,s) { //https://www.reddit.com/r/askmath/comments/s6u33s/converting_cube_coordinates_to_cartesian/
	return [
		(r/2 - s/2)*radius*2,
		((r+s)*sqrt3/2)*radius*2
	]
}

//debug
var debug = true;

//mouse positions
var mouseX = 0;
var mouseY = 0;

var board = new hexBoard();


function handleMouseMove(e) {
	mouseX = parseInt(e.clientX - canvas.offsetLeft) - canvas.width / 2;
	mouseY = parseInt(e.clientY - canvas.offsetTop) - canvas.height / 2;
}


canvas.addEventListener("mousemove", e => {
	handleMouseMove(e);
});



board.createTiles(2);

console.log(board.hexTiles);



function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	board.draw();
  	window.requestAnimationFrame(update)
}

update();