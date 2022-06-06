class hex {
    constructor(id, q, r, s, x, y) {
        this.id = id;

        //cube coordinates of tile
        this.q = q;
        this.r = r;
        this.s = s;

        //start coordinates of the hex for canvas location
        let xy = [x,y]

        xy = qrs2xy(q,r,s);

        this.x = xy[0]*radius*sqrt3;
        this.y = xy[1]*radius*sqrt3;

        this.highlightState = 0; //0=none, 1=hover, 2=active 

        this.stroke = "white";
        this.radius = radius;
    }
    drawHex(stroke, fill, offset = [0,0]) {
        var lineWidth = 3;

        ctx.beginPath();
        ctx.strokeStyle = stroke;
        ctx.lineWidth = lineWidth;
        ctx.fillStyle = fill;

        for (var i = 0; i < 6; i++) {
            ctx.lineTo(
                this.x + offset[0] + radius * buffer * Math.cos(a * i) + canvas.width / 2,
                this.y + offset[1] + radius * buffer * Math.sin(a * i) + canvas.height / 2
            );
        }
        ctx.closePath();
        if(stroke) ctx.stroke();
        if(fill) ctx.fill();
    }
    drawDebug(offset) {
        var fontSize = 12;

        ctx.textAlign = "center";
        ctx.font = fontSize+"px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("id="+this.id, this.x + offset[0] + canvas.width / 2, this.y+fontSize*0 + offset[1] + canvas.height / 2);
        //ctx.fillText("q="+this.q, this.x + offset[0] + canvas.width / 2, this.y+fontSize*1 + offset[1] + canvas.height / 2);
        //ctx.fillText("r="+this.r, this.x + offset[0] + canvas.width / 2, this.y+fontSize*2 + offset[1] + canvas.height / 2);
        //ctx.fillText("s="+this.s, this.x + offset[0] + canvas.width / 2, this.y+fontSize*3 + offset[1] + canvas.height / 2);
    }
    draw(x, y) {
        //if args exist, draw there
        this.x = x || this.x;
        this.y = y || this.y;

        var height = 10;

        var drawInfo = { //primary
            stroke: "rgb(255,255,255)",
            fill: "rgb(0,0,0)",
            shadow: "rgb(255,255,255)",
            offset: [0,0],
        }

        if (this.highlightState == 1) drawInfo = { //hover
            stroke: "rgb(255,255,255)",
            fill: "rgb(60,60,60)",
            shadow: "rgb(255,255,255)",
            offset: [0,7],
        };

        if (this.highlightState == 2) drawInfo = { //active
            stroke: "rgb(255,255,255)",
            fill: "rgb(60,60,60)",
            shadow: "rgb(255,255,255)",
            offset: [0,12],
        };

        //drawInfo.offset = [0,0];

        //this.drawHex(null, drawInfo.shadow, [0,14]); //shadow
        this.drawHex(drawInfo.stroke, drawInfo.fill, drawInfo.offset); //main
        if(debug) this.drawDebug(drawInfo.offset); //debug
    }
    /*
    isPointInside(x, y) {
        return (x >= this.x - this.radius
            && x <= this.x + this.radius
            && y >= this.y - this.radius
            && y <= this.y + this.radius);
    }
    */
    isPointInside(x,y) {
        return -sqrt3*Math.abs(x-this.x)-Math.abs(y-this.y) > -this.radius*sqrt3*1 && 
        Math.abs(y-this.y) < this.radius*sqrt3*0.5
    }
}