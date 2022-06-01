var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//calculations for hex drawing and size
const a = 2 * Math.PI / 6;
const radius = 50;


var hexTiles = [];


var hex = (function(){

  function hex(id, q, r, s, x, y){
    this.id = id;
    //cube coordinates of tile
    this.q = q;
    this.r = r;
    this.s = s;
    //start coordinates of the hex for canvas location
    this.x = x;
    this.y = y;

    this.stroke = "black";
    this.radius = radius;
    this.redraw(this.x, this.y);
    return(this);

  }

  hex.prototype.draw = function (stroke) {
    ctx.beginPath();
    ctx.strokeStyle = stroke;
    for (var i = 0; i < 6; i++) {
      ctx.lineTo(this.x + radius * Math.cos(a * i), this.y + radius * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
  }

  hex.prototype.redraw = function (x, y) {
      this.x = x || this.x;
      this.y = y || this.y;
      this.draw(this.stroke);
      return (this);
  }
  hex.prototype.highlight = function (x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.draw("orange");
    return (this);
 }

  hex.prototype.isPointInside = function(x,y){
      return( x>=this.x-this.radius
              && x<=this.x+this.radius
              && y>=this.y-this.radius
              && y<=this.y+this.radius);
  }
  return hex;
})();

function handleMouseMove(e) {
    mouseX = parseInt(e.clientX - canvas.offsetLeft);
    mouseY = parseInt(e.clientY - canvas.offsetTop);

    // Put your mousemove stuff here
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < hexTiles.length; i++) {
        if (hexTiles[i].isPointInside(mouseX, mouseY)) {
            hexTiles[i].highlight();
        } else {
            hexTiles[i].redraw();
        }
    }
}

canvas.addEventListener('mousemove', e => {
  handleMouseMove(e);
});


function createTiles(layers) {
  //x and y are location of center, q r and s are cube coordinates for hex grid
  var x = 400;
  var y = 400;
  var id = 1;
  var q = 0;
  var r = 0;
  var s = 0;

  hexTiles.push(new hex(id,q,r,s,x,y));
  for (let j=0; j < layers; j++){
    id++;
    y += (radius+5)*Math.sqrt(3);
    r += 1;
    q -= 1;
    hexTiles.push(new hex(id,q,r,s,x,y));

    for (let i=0; i<j+1; i++){
      id++;
      y -= (radius+5)*Math.sqrt(3)/2;
      x += (radius+5)*1.5;
      s += 1;
      r -= 1;
      hexTiles.push(new hex(id,q,r,s,x,y));
    }
    for (let i=0; i<j+1; i++){
      id++;
      y -= (radius+5)*Math.sqrt(3);
      q += 1;
      r -= 1;
      hexTiles.push(new hex(id,q,r,s,x,y));
    }
    for (let i=0; i<j+1; i++){
      id++;
      y -= (radius+5)*Math.sqrt(3)/2;
      x -= (radius+5)*1.5;
      q += 1;
      s -= 1;
      hexTiles.push(new hex(id,q,r,s,x,y));
    }
    for (let i=0; i<j+1; i++){
      id++;
      y += (radius+5)*Math.sqrt(3)/2;
      x -= (radius+5)*1.5;
      r += 1;
      s -= 1;
      hexTiles.push(new hex(id,q,r,s,x,y));
    }
    for (let i=0; i<j+1; i++){
      id++;
      y += (radius+5)*Math.sqrt(3);
      r += 1;
      q -= 1;
      hexTiles.push(new hex(id,q,r,s,x,y));
    }
    for (let i=1; i<j+1; i++){
      id++;
      y += (radius+5)*Math.sqrt(3)/2;
      x += (radius+5)*1.5;
      s += 1;
      q -= 1;
      hexTiles.push(new hex(id,q,r,s,x,y));
    }
    s += 1;
    q -= 1;
    y += (radius+5)*Math.sqrt(3)/2;
    x += (radius+5)*1.5;
  }
}
createTiles(1);



console.log(hexTiles);
