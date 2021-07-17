var socket = io();
let side = 40;

function setup() {
    frameRate(5);
    createCanvas(20 * 40,  20 * 40);
    background('#acacac');

    

}

function nkarel(matrix) {
   
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
            }    else if (matrix[y][x] == 6) {
                fill('blue');
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



}

setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)

setInterval(
    function () {
    socket.on('send arr',printt)
    },1000
)


function printt(grassEaterArr){
    console.log(grassEaterArr.length)
}





