
// function myFunction() {


    var socket = io();




let matrix = []
function genereateMatrix(matLen) {
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }
}

genereateMatrix(25)

function generate(matLen, gr, grEat, kr, rb) {
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        // console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < kr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        // console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }

    for (let i = 0; i < rb; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        // console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            let directions = [
                [x - 1, y - 1],
                [x, y - 1],
                [x + 1, y - 1],
                [x - 1, y],
                [x + 1, y],
                [x - 1, y + 1],
                [x, y + 1],
                [x + 1, y + 1]
            ];
            for (let j in directions) {
                let a = directions[j][0]
                let b = directions[j][1]
                matrix[b][a] = 5;
            }
        }
    }
    matrix[0][0] = 4
    return matrix
}
function myFunction() {
    // const myInterval = setInterval(myTimer, 1000);

    // function myTimer() {
    //   const date = new Date();
    //   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    // }

    // function myStopFunction() {
    //     socket.emit("stop")
    //   clearInterval(myInterval);
    // }






    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    //    <script>
    // anime.timeline({loop: true})
    //   .add({
    //     targets: '.ml2 .letter',
    //     scale: [4,1],
    //     opacity: [0,1],
    //     translateZ: 0,
    //     easing: "easeOutExpo",
    //     duration: 950,
    //     delay: (el, i) => 70*i
    //   }).add({
    //     targets: '.ml2',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    //   });
    // </script>



    // var a = Math.floor(random(0,40));
    // console.log(a);
    // if ( a<30){
    //     class = "dexin";
    // }else if (a>30){
    //     class = "rozvi";
    // }
    document.body.style.backgroundColor = "red";






    //     matrix = generate(25,45, 7, 7, 2,2)

    //     matrix = generate(25, 45, 9, 7, 1, 8)
    //     for (var y = 0; y < matrix.length; y++) {
    //         for (var x = 0; x < matrix[y].length; x++) {

    //             if (matrix[y][x] == 1) {
    //                 let gr = new Grass(x, y)
    //                 grassArr.push(gr);
    //             } else if (matrix[y][x] == 2) {
    //                 let gr = new GrassEater(x, y)
    //                 grassEaterArr.push(gr);
    //             } else if (matrix[y][x] == 3) {
    //                 let gr = new Karmir(x, y)
    //                 karmirArr.push(gr);
    //             } else if (matrix[y][x] == 4) {
    //                 let gr = new Ligthing(x, y)
    //                 ligthingArr.push(gr);
    //             } else if (matrix[y][x] == 5) {
    //                 let gr = new Rumb(x, y)
    //                 RumbArr.push(gr);
    //             }
    //         }
    //     }
    // }





    var side = 15;
    let grassArr = []
    let grassEaterArr = []
    let karmirArr = []
    let ligthingArr = []
    let RumbArr = []
    function setup() {
        frameRate(5);
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');
    }

    function nkarel(matrix) {
        console.log(matrix);

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("green");
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }
                else if (matrix[y][x] == 4) {
                    fill("blue");
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                }

                rect(x * side, y * side, side, side);


            }
            

        }
    }
    
    // for (var i in grassArr) {
    //     grassArr[i].mul()
    // }

    // for (let i in grassEaterArr) {
    //     grassEaterArr[i].eat()
    // }
    // for (let i in karmirArr) {
    //     karmirArr[i].eat()
    // }
    // for (let i in ligthingArr) {
    //     ligthingArr[i].eat()
    // }
    // for (let i in RumbArr) {
    //     RumbArr[i].eat()
    // }

    grassArr = [];
    grassEaterArr = [];
    karmirArr = [];
    rumbArr = [];
    ligthingArr = [];

    setInterval(
        function () {
            socket.on('send matrix', nkarel)
        }, 1000
    )
}

// }



