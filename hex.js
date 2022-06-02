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
    draw(stroke) {
        ctx.beginPath();
        ctx.strokeStyle = stroke;
        for (var i = 0; i < 6; i++) {
            ctx.lineTo(this.x + radius * Math.cos(a * i) + canvas.width / 2, this.y + radius * Math.sin(a * i) + canvas.height / 2);
        }
        ctx.closePath();
        ctx.stroke();
    }
    highlight(bool = true) {
        this.highlighted = bool;
    }
    redraw(x, y) {
        this.x = x || this.x;
        this.y = y || this.y;

        var strokeToDraw = this.stroke;

        if (this.highlighted) strokeToDraw = "orange";

        this.draw(strokeToDraw);
    }
    isPointInside(x, y) {
        return (x >= this.x - this.radius
            && x <= this.x + this.radius
            && y >= this.y - this.radius
            && y <= this.y + this.radius);
    }
}