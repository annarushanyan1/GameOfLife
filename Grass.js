class Grass extends LivingCreture{
    constructor(x, y) {
        super(x,y);
        this.multiply = 0;

    }

    mul() {

        this.multiply += 1;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}

