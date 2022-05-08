const canvas = document.querySelector("canvas");
const content = canvas.getContext("2d");

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

// Boxen
// content.fillStyle = "#41054c";
// content.fillRect(200,300,128,64);

// content.fillRect(canvas.width/2,canvas.height/2,16,16);

// content.fillStyle = 'rgba(200, 2, 200, 0.1)';
// content.fillRect(canvas.width-200,300,64,128);

// Linien
// content.beginPath();
// content.moveTo(50, 50);
// content.lineTo(100, 100);
// content.lineTo(100, 50);

// content.moveTo(canvas.width-50, canvas.height-50);
// content.lineTo(400, 300);
// content.lineTo(50, 100);

// content.strokeStyle="#8a0ba1"
// content.stroke()

// Kurven

// content.beginPath();
// content.arc(800,300,30,0,Math.PI*2,false);
// content.stroke();

// Automatisiert

// for (let i = 1; i < 21; i++) {
//     content.fillStyle = "white";    
//     content.fillRect(canvas.width-20*i,canvas.height-30*i,16,16);
// }

// for (let i = 1; i < 300; i++) {
//     let x = Math.random()*canvas.height;
//     let y = Math.random()*canvas.width;
//     content.fillStyle = `rgba(200, 2, 200, ${Math.random()})`;  
//     content.fillRect(x,y,64,64);
// }

// Animation

// function animate(){
//     requestAnimationFrame(animate);
//     let x = Math.random()*canvas.height*2;
//     let y = Math.random()*canvas.width;
//     content.fillStyle = `rgba(200, 2, 200, ${Math.random()})`;
//     content.fillRect(x,y,128,64);
// }
// animate()


// function animation_0(){
    // requestAnimationFrame(animation_0);
    // c.clearRect(0,0,(canvas.width*1.1)-128,(canvas.height*1.2)-128)
    // let x = Math.random()*canvas.width*1.1-128;
    // let y = Math.random()*canvas.height*1.2-128;
    // c.fillRect(x,y,128,64);
// }

// function Drawing(x,y,s,dx,dy){
    // this.x = x-100;
    // this.y = y-100;
    // this.s = s;
    // this.dx = dx *this.s;
    // this.dy = dy *this.s;

    // this.draw = function(){

        // c.lineWidth="30";
        // c.strokeStyle="rgb(239, 228, 200,1)"
        // c.fillStyle = "rgba(196, 187, 164,1)";
        // c.strokeRect(this.x,this.y,200,200)
        // c.fillRect(this.x,this.y,200,200)
    // }
    // this.update = function(){
        // if (this.x +200 > window.innerWidth || this.x < 0){
            // this.dx = -this.dx
        // }
        // if (this.y +200 > window.innerHeight || this.y < 0){
            // this.dy = -this.dy
        // }
    
        // this.x+=this.dx;
        // this.y+=this.dy;

        // this.draw();
    // }
// }

// var drawings = []
// for (let i = 1; i < 101; i++) {
    // var drawing = new Drawing(
        // Math.random()*canvas.width,
        // Math.random()*canvas.height,
        // Math.random()* 4,
        // Math.random() -0.5,
        // Math.random() -0.5,
        // )    
    // drawings.push(drawing)
// }

// function animation_1(){
    // requestAnimationFrame(animation_1);
    // c.clearRect(0,0,(canvas.width),(canvas.height))
    // for (let i = 0; i < drawings.length; i++) {
        // drawings[i].update()        
    // }
// }    


