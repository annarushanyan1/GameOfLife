function generator(matLen, gr, grEat,pr,c,toxic) {
    let matrix = [];

    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < c; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < toxic; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    
    return matrix;
}

let side = 55;

let matrix = generator(19, 30, 20,5,5,10);

//___________________________
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var coinArr = [];
var toxicArr = [];


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] == 1) {
                var gr = new Grass(j, i);
                grassArr.push(gr);

            }

            if (matrix[i][j] == 2) {
                var grEr = new GrassEater(j, i);
                grassEaterArr.push(grEr);

            }

            if (matrix[i][j] == 3) {
                var predator = new Predator(j, i);
                predatorArr.push(predator);

            }
            if (matrix[i][j] == 4) {
                var c = new Coin(j, i);
                coinArr.push(c);

            }
            if(matrix[i][j]== 5){
                var toxic = new Toxic(j, i);
                toxicArr.push(toxic);
            }

        }
    }






}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill('yellow');
            }
            else if (matrix[y][x] == 3) {
                fill('red');
            }

            rect(x * side, y * side, side, side);


        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                fill('orange');
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }

        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                fill('purple');
                ellipse(x * side + side / 2, y * side + side / 2, side, side);
            }

        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }


    for (var i in predatorArr) {
        predatorArr[i].eat();


    }



}






