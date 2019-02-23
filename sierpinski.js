var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


const PI = Math.PI;
let result = "F-G-G";

for (let i = 0; i < 6; i++) {
    let product = "";
    for (let c of result) {
        if (c == "F") {
            product += "F-G+F+G-F";
        } else if (c == "G") {
            product += "GG";
        } else {
            product += c;
        }
    }
    result = product;
}

let x = 700;
let y = 100;

let delta = 120 * PI/180;

ctx.moveTo(x, y);

let rotation = PI;
let l = 10;

for (let c of result) {
    switch (c) {
        case "G":
        case "F":
            y -= Math.sin(rotation) * l;
            x += Math.cos(rotation) * l;
            ctx.lineTo(x, y);
            break;
        case "+":
            rotation -= delta;
            break;
        case "-":
            rotation += delta;
    }
}

ctx.stroke();