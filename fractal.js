
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    
    const PI = Math.PI;
    let result = "0";

    for (let i = 0; i < 7; i++) {
        let product = "";
        for (let c of result) {
            if (c == "1") {
                product += "11";
            } else if (c == "0") {
                product += "1[0]0";
            } else {
                product += c;
            }
        }
        result = product;
    }

    let stack = [];

    let x = 1440/4;
    let y = 500;

    ctx.moveTo(x, y);

    let rotation = PI/2;

    for (let c of result) {
        if (c == "0" || c == "1") {
            let l = 4;
            if (c == "0") {
                l /= 2;
            }
            y -= Math.sin(rotation) * l;
            x += Math.cos(rotation) * l;

            ctx.lineTo(x, y);
        } else if (c == "[") {
            stack.push({ rotation, pos: { x, y } })
            rotation += PI/4;	
        } else if (c == "]") {
            let data = stack.pop()
            rotation = data.rotation;
            rotation -= PI/4;
            x = data.pos.x;
            y = data.pos.y;
            ctx.moveTo(x, y)
        } 
    }

    ctx.stroke(); 

