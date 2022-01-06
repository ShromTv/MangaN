

function canvas(){
    var canvas=document.getElementById("canvas1");
    if(canvas && canvas.getContext("2d")){
        var ctx = canvas.getContext("2d");

        ctx.lineWidth=6;
        ctx.beginPath();
        ctx.bezierCurveTo(0, 200, 200, 50, 150, 200);
        ctx.bezierCurveTo(200, 200, 200,200,250,200);
        ctx.bezierCurveTo(250, 200, 150, 50, 400, 200);
        ctx.stroke();
        ctx.closePath();
    }
}

