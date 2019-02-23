var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


const PI = Math.PI;
let result = "F";

for (let i = 0; i < 5; i++) {
    let product = "";
    for (let c of result) {
        if (c == "F") {
            product += "F+F-F-F+F";
        } else {
            product += c;
        }
    }
    result = product;
}

console.log("result");
let x = 1;
let y = 650;

ctx.moveTo(x, y);

let rotation = 0;
let l = 5;

for (let c of result) {
    switch (c) {
        case "F":
            y -= Math.sin(rotation) * l;
            x += Math.cos(rotation) * l;
            ctx.lineTo(x, y);
            break;
        case "+":
            rotation += PI/2;
            break;
        case "-":
            rotation -= PI/2;
    }
}

ctx.stroke();