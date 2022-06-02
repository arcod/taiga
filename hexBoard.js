class hexBoard {
    constructor() {
        this.hexTiles = [];

        //map that converts QRS -> ID of tile at that position
        this.qrs2id = new Map();
    }
    draw() {
        for (var i in this.hexTiles) {
            if (this.hexTiles[i].isPointInside(mouseX, mouseY)) {
                this.hexTiles[i].highlight(); //highlight the tile
            } else {
                this.hexTiles[i].highlight(false); //un-highlight the tile
            }
            this.hexTiles[i].draw();
        }
    }
    createTiles(layers) {
        //x and y are location of center, q r and s are cube coordinates for hex grid
        var x = 0;
        var y = 0;
        var id = 0;
        var q = 0;
        var r = 0;
        var s = 0;

        //create the center tile
        this.hexTiles.push(new hex(id, q, r, s, x, y));

        for (let j = 0; j < layers; j++) {
            id++;
            y += (radius + 5) * Math.sqrt(3);
            r += 1;
            q -= 1;
            this.hexTiles.push(new hex(id, q, r, s, x, y));

            for (let i = 0; i < j + 1; i++) {
                id++;
                y -= (radius + 5) * Math.sqrt(3) / 2;
                x += (radius + 5) * 1.5;
                s += 1;
                r -= 1;
                this.hexTiles.push(new hex(id, q, r, s, x, y));
            }
            for (let i = 0; i < j + 1; i++) {
                id++;
                y -= (radius + 5) * Math.sqrt(3);
                q += 1;
                r -= 1;
                this.hexTiles.push(new hex(id, q, r, s, x, y));
            }
            for (let i = 0; i < j + 1; i++) {
                id++;
                y -= (radius + 5) * Math.sqrt(3) / 2;
                x -= (radius + 5) * 1.5;
                q += 1;
                s -= 1;
                this.hexTiles.push(new hex(id, q, r, s, x, y));
            }
            for (let i = 0; i < j + 1; i++) {
                id++;
                y += (radius + 5) * Math.sqrt(3) / 2;
                x -= (radius + 5) * 1.5;
                r += 1;
                s -= 1;
                this.hexTiles.push(new hex(id, q, r, s, x, y));
            }
            for (let i = 0; i < j + 1; i++) {
                id++;
                y += (radius + 5) * Math.sqrt(3);
                r += 1;
                q -= 1;
                this.hexTiles.push(new hex(id, q, r, s, x, y));
            }
            for (let i = 1; i < j + 1; i++) {
                id++;
                y += (radius + 5) * Math.sqrt(3) / 2;
                x += (radius + 5) * 1.5;
                s += 1;
                q -= 1;
                this.hexTiles.push(new hex(id, q, r, s, x, y));
            }
            s += 1;
            q -= 1;
            y += (radius + 5) * Math.sqrt(3) / 2;
            x += (radius + 5) * 1.5;
        }
    }
}