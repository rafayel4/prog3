class Rumb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0
        this.directions = [];
        this.energy = 20
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
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
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newRumb = new Rumb(newX, newY);
            RumbArr.push(newRumb);
            this.multiply = 1;
            this.energy = 10;
        }
    // }if(directions) {
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1]
    //     ];
     }

    move() {
        this.energy--;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]; ///kam 2 tiv@
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        else {
            this.die();
        }
        if(directions) {
            this.directions  [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
            
        }
    }

    eat() {
        var emptyCells = this.chooseCell(5);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]; ///kam 2 tiv@
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == RumbArr[i].x && newY == RumbArr[i].y) {
                    RumbArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 5) {
                this.mul()
            }
            }
        else {
            this.die()
        }
    }
    die() {
        
        matrix[this.y][this.x] = 0
        for (var i in RumbArr) {
            if (this.x == RumbArr[i].x && this.y == RumbArr[i].y) {
          
               RumbArr.splice(i, 1);
                break;
            }
        }
    }
}




