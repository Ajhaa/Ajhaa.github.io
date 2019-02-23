var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


const PI = Math.PI;
let result = "X";

for (let i = 0; i < 6; i++) {
    let product = "";
    for (let c of result) {
        if (c == "F") {
            product += "FF";
        } else if (c == "X") {
            product += "F+[[X]-X]-F[-FX]+X";
        } else {
            product += c;
        }
    }
    result = product;
}

let x = 100;
let y = 600;

let delta = 25 * PI/180;

ctx.moveTo(x, y);

let stack = [];
let rotation = PI/2 - delta;
let l = 4;
let i = 0;

for (let c of result) { 
    switch (c) {
        case "F":
            y -= Math.sin(rotation) * l;
            x += Math.cos(rotation) * l;
            ctx.lineTo(x, y);
            break;
        case "+":
            rotation += delta;
            break;
        case "-":
            rotation -= delta;
            break;
        case "[":
            stack.push({rotation, x, y});
            break;
        case "]":
            ({rotation, x, y} = stack.pop());
            ctx.moveTo(x, y)
    }
}

ctx.stroke();