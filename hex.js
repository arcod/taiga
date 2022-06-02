class hex {
    constructor(id, q, r, s, x, y) {
        this.id = id;
        
        //cube coordinates of tile
        this.q = q;
        this.r = r;
        this.s = s;

        //start coordinates of the hex for canvas location
        this.x = x;
        this.y = y;

        this.highlighted = false;

        this.stroke = "black";
        this.radius = radius;
    }
    drawCanv(stroke) {
        ctx.beginPath();
        ctx.strokeStyle = stroke;
        for (var i = 0; i < 6; i++) {
            ctx.lineTo(this.x + radius * Math.cos(a * i) + canvas.width / 2, this.y + radius * Math.sin(a * i) + canvas.height / 2);
        }
        ctx.closePath();
        ctx.stroke();

        if(debug) {
            var fontSize = 12;

            ctx.textAlign = "center";
            ctx.font = fontSize+"px Arial";
            ctx.fillText("id="+this.id, this.x + canvas.width / 2, this.y+fontSize*0 + canvas.height / 2);
            ctx.fillText("q="+this.q, this.x + canvas.width / 2, this.y+fontSize*1 + canvas.height / 2);
            ctx.fillText("r="+this.r, this.x + canvas.width / 2, this.y+fontSize*2 + canvas.height / 2);
            ctx.fillText("s="+this.s, this.x + canvas.width / 2, this.y+fontSize*3 + canvas.height / 2);
        }
    }
    highlight(bool = true) {
        //without arg, it highlights it
        //with arg, it sets the highlight state to the arg

        this.highlighted = bool;
    }
    draw(x, y) {
        //if args exist, draw there
        this.x = x || this.x;
        this.y = y || this.y;

        var strokeToDraw = this.stroke;

        if (this.highlighted) strokeToDraw = "orange";

        this.drawCanv(strokeToDraw);
    }
    isPointInside(x, y) {
        return (x >= this.x - this.radius
            && x <= this.x + this.radius
            && y >= this.y - this.radius
            && y <= this.y + this.radius);
    }
}