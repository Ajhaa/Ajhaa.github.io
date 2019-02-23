var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


const PI = Math.PI;
let result = "FX";

for (let i = 0; i < 10; i++) {
    let product = "";
    for (let c of result) {
        if (c == "X") {
            product += "X+YF+";
        } else if (c == "Y"){
            product += "-FX-Y";        
        } else {
            product += c;
        }
    }
    result = product;
}

console.log("result");
let x = 200;
let y = 300;

ctx.moveTo(x, y);

let rotation = PI/2;
let l = 10;

for (let c of result) {
    switch (c) {
        case "F":
            y -= Math.sin(rotation) * l;
            x += Math.cos(rotation) * l;
            ctx.lineTo(x, y);
            break;
        case "-":
            rotation += PI/2;
            break;
        case "+":
            rotation -= PI/2;
    }
}

ctx.stroke();