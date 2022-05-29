const canvas = document.querySelector("canvas");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
const c = canvas.getContext("2d");

function drawLines(){
    c.strokeStyle = "white"
    c.beginPath()
    c.moveTo(100,400)
    c.lineTo(500,400)
    c.lineTo(500,500)
    c.lineTo(100,400)
    c.stroke()
}

function drawCurves(){
    c.fillStyle = "white"
    c.beginPath()
    c.moveTo(100,400)
    c.bezierCurveTo(500,400,500,500,100,400)
    c.fill()

}

function drawBoxOutline(x,y){
    c.beginPath()
    c.strokeStyle = "white";
    c.rect(x,y,128,256);
    c.stroke()
}

function drawArcFilled(x,y){
    c.beginPath()
    c.fillStyle = "white";
    c.arc(x,y,100,0,Math.PI);
    c.fill()
}

function drawTextOutlineFilled(x,y){
    c.beginPath()
    c.strokeStyle = "red";
    c.fillStyle = "yellow";

    c.font = "300px Comic Sans MS"
    c.fillText("Bello",x,y,window.width)
    c.strokeText("Bello", x,y,window.innerWidth)

}

function drawGradients(){
    let lin = c.createLinearGradient(0,200,0,0);
    lin.addColorStop(0,"black");
    lin.addColorStop(1,"blue");

    c.fillStyle = lin;
    c.fillRect(100,100,100,100);

    let rad = c.createRadialGradient(250,150,5,250,150,50);
    rad.addColorStop(0,"yellow");
    rad.addColorStop(1,"black");

    c.fillStyle = rad;
    c.fillRect(200,100,100,100);

}

function animate(){}
function automate(){}