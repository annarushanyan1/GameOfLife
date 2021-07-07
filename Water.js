class Water extends LivingCreture{
    constructor(x, y) {
        super(x,y);
        this.multiply = 0;

    }

    mul() {

        this.multiply += 1;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 20) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newWater = new Water(newX, newY);
            waterArr.push(newWater);
            this.multiply = 0;
        }
    }





}