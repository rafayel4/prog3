// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);

// var messages = [];

// app.use(express.static("."));

// app.get('/', function (req, res) {
//    res.redirect('index.html');
// });

// server.listen(3000);
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);




matrix = []
// function genereateMatrix(matLen) {
//    for (let i = 0; i < matLen; i++) {
//        matrix[i] = []
//        for (let j = 0; j < matLen; j++) {
//            matrix[i][j] = 0
//        }
//    }
// }


// function generate(matLen, gr, grEat, kr, rb) {
//    for (let i = 0; i < gr; i++) {
//       let x = Math.floor(Math.random() * matLen)
//       let y = Math.floor(Math.random() * matLen)
//       if (matrix[y][x] == 0) {
//          matrix[y][x] = 1
//       }
//    }
//    for (let i = 0; i < grEat; i++) {
//       let x = Math.floor(Math.random() * matLen)
//       let y = Math.floor(Math.random() * matLen)
//       // console.log(x, y);
//       if (matrix[y][x] == 0) {
//          matrix[y][x] = 2
//       }
//    }
//    for (let i = 0; i < kr; i++) {
//       let x = Math.floor(Math.random() * matLen)
//       let y = Math.floor(Math.random() * matLen)
//       // console.log(x, y);
//       if (matrix[y][x] == 0) {
//          matrix[y][x] = 3
//       }
//    }

//    for (let i = 0; i < rb; i++) {
//       let x = Math.floor(Math.random() * matLen)
//       let y = Math.floor(Math.random() * matLen)
//       // console.log(x, y);
//       if (matrix[y][x] == 0) {
//          matrix[y][x] = 5
//          let directions = [
//             [x - 1, y - 1],
//             [x, y - 1],
//             [x + 1, y - 1],
//             [x - 1, y],
//             [x + 1, y],
//             [x - 1, y + 1],
//             [x, y + 1],
//             [x + 1, y + 1]
//          ];
//          for (let j in directions) {
//             let a = directions[j][0]
//             let b = directions[j][1]
//             matrix[b][a] = 5;
//          }
//       }
//    }
//    matrix[0][0] = 4
// }
// matrix = generate(25, 45, 9, 7, 1, 8)

// return matrix
matrix = [[2, 2, 1, 2, 1, 0, 1],
[1, 2, 1, 0, 1, 1, 1],
[1, 0, 2, 0, 1, 0, 1],
[0, 1, 0, 1, 0, 0, 1],
[1, 2, 1, 0, 1, 1, 1],
[1, 0, 2, 0, 1, 0, 1],
[0, 1, 0, 1, 0, 1, 1],
[1, 2, 1, 0, 1, 1, 1],
[1, 0, 2, 0, 1, 0, 1],
[0, 1, 0, 1, 0, 0, 1],
[1, 2, 1, 0, 1, 1, 1],
[1, 0, 2, 0, 1, 0, 1],
[0, 1, 0, 1, 0, 0, 1]]
io.sockets.emit('send matrix', matrix)
console.log(matrix);

Grass = require("./class")
GrassEater = require("./Graseater")
Karmir = require("./karmir")
rumb = require("./rumb")
ligthing = require("./ligthing")


grassArr = [];
grassEaterArr = [];
karmirArr = [];
rumbArr = [];
ligthingArr = [];
function createObject(matrix) {


   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

         if (matrix[y][x] == 1) {
            let gr = new Grass(x, y)
            grassArr.push(gr);
         } else if (matrix[y][x] == 2) {
            let gr = new GrassEater(x, y)
            grassEaterArr.push(gr);
         } else if (matrix[y][x] == 3) {
            let gr = new Karmir(x, y)
            karmirArr.push(gr);
         } else if (matrix[y][x] == 4) {
            let gr = new Ligthing(x, y)
            ligthingArr.push(gr);
         } else if (matrix[y][x] == 5) {
            let gr = new Rumb(x, y)
            rumbArr.push(gr);
         }
      }
   }
}

function game() {
   for (var i in grassArr) {
      grassArr[i].mul()
   }

   for (let i in grassEaterArr) {
      grassEaterArr[i].eat()
   }
   for (let i in karmirArr) {
      karmirArr[i].eat()
   }
   for (let i in ligthingArr) {
      ligthingArr[i].eat()
   }
   for (let i in rumbArr) {
      rumbArr[i].eat()
   }
}
setInterval(game, 1000)

io.on('connection', function (socket) {
   createObject()
})










