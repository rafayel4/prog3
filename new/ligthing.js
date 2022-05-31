class Ligthing {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 100
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
           // [this.x - 1, this.y - 1],
            // [this.x, this.y - 1],
           // [this.x + 1, this.y - 1],
            // [this.x - 1, this.y],
            // [this.x + 1, this.y],
            // [this.x - 1, this.y + 1],
            // [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            var newGrassEater = new Ligthing(newX, newY);
            ligthingArr.push(newGrassEater);
            this.energy = 8;
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } 
        else {
            this.die()
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(2);
        var newCell1 = random(emptyCells1);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }

            }

            if (this.energy >= 1) {
                this.mul()
            }
            // else if (newGrassEater) {
            //     this.eatGrassEater()
            // }
            // else if (newKarmir) {
            //     this.eatKarmir()
            // }
        }
        else if (newCell1) {
            this.eatGrass()
        } else {
            this.move()
        }
    }
    eatGrass() {

        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }

            }
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in ligthingArr) {
            if (this.x == ligthingArr[i].x && this.y == ligthingArr[i].y) {
                ligthingArr.splice(i, 1);
                break;
            }
        }
    }
}