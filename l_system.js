function draw(axiom, x, y, line_length ,rules, draw_rules, angle, start_angle, repeats) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    console.log("DRAWING")


    const PI = Math.PI;
    let result = axiom;

    for (let i = 0; i < repeats; i++) {
        let product = "";
        for (let c of result) {        
            product += rules[c] ? rules[c] : c;
        }
        result = product;
    }

    let delta = angle * PI/180;

    ctx.moveTo(x, y);

    let stack = [];
    let rotation = start_angle * PI/180;
    let l = line_length;
    let i = 0;

    for (let c of result) { 
        let rule = draw_rules[c];
        if (!rule) {
            continue;
        }
        for (let i = 0; i < rule.length; i++) {
            let r = rule[i];
            switch(r) {
                case "draw":
                    y -= Math.sin(rotation) * l;
                    x += Math.cos(rotation) * l;
                    ctx.lineTo(x, y);
                    break;
                case "draw_half":
                    y -= Math.sin(rotation) * l/2;
                    x += Math.cos(rotation) * l/2;
                    ctx.lineTo(x, y);
                    break;
                case "rotate_L":
                    rotation += delta;
                    break;
                case "rotate_R":
                    rotation -= delta;
                    break;
                case "push":
                    stack.push({rotation, x, y});
                    break;
                case "pop":
                    ({rotation, x, y} = stack.pop());
                    ctx.moveTo(x, y)
            }
        }
    }

    ctx.stroke();
}