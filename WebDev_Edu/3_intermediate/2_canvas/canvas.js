// Auswählen des Canvas Elements aus dem HTML
const canvas = document.querySelector("canvas");

// Anpassen der Größe des Canvas an die Größe des Fensters
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

// Erhalt des 2D-Zeichenkontexts für das Canvas
const c = canvas.getContext("2d");

// Eine Funktion, die eine Reihe von Linien zeichnet
function drawLines(){
    // Setzen der Farbe der Linien auf Weiß
    c.strokeStyle = "white";
    c.beginPath(); // Beginn eines neuen Pfades
    c.moveTo(100,400); // Versetzen des Stifts ohne zu zeichnen
    c.lineTo(500,400); // Zeichnen einer Linie zur angegebenen Koordinate
    c.lineTo(500,500);
    c.lineTo(100,400);
    c.stroke(); // Zeichnen des Pfads
}

// Eine Funktion, die eine Kurve zeichnet und füllt
function drawCurves(){
    // Setzen der Füllfarbe auf Weiß
    c.fillStyle = "white";
    c.beginPath();
    c.moveTo(100,400);
    c.bezierCurveTo(500,400,500,500,100,400); // Zeichnen einer Bézier-Kurve
    c.fill(); // Füllen des Pfads
}

// Eine Funktion, die die Kontur eines Rechtecks zeichnet
function drawBoxOutline(x,y){
    c.beginPath();
    c.strokeStyle = "white";
    c.rect(x,y,128,256); // Zeichnen eines Rechtecks
    c.stroke();
}

// Eine Funktion, die einen gefüllten Kreisbogen zeichnet
function drawArcFilled(x,y){
    c.beginPath();
    c.fillStyle = "white";
    c.arc(x,y,100,0,Math.PI); // Zeichnen eines Kreisbogens
    c.fill();
}

// Eine Funktion, die einen Text zeichnet
function drawTextOutlineFilled(x,y){
    c.beginPath();
    c.strokeStyle = "red";
    c.fillStyle = "yellow";
    c.font = "300px Comic Sans MS"; // Setzen der Schriftart und -größe
    c.fillText("Bello",x,y,window.width); // Zeichnen eines gefüllten Texts
    c.strokeText("Bello", x,y,window.innerWidth); // Zeichnen eines konturierten Texts
}

// Eine Funktion, die Farbverläufe zeichnet
function drawGradients(){
    // Erstellen eines linearen Farbverlaufs
    let lin = c.createLinearGradient(0,200,0,0);
    lin.addColorStop(0,"black");
    lin.addColorStop(1,"blue");

    // Anwenden des Farbverlaufs und Zeichnen eines gefüllten Rechtecks
    c.fillStyle = lin;
    c.fillRect(100,100,100,100);

    // Erstellen eines radialen Farbverlaufs
    let rad = c.createRadialGradient(250,150,5,250,150,50);
    rad.addColorStop(0,"yellow");
    rad.addColorStop(1,"black");

    // Anwenden des Farbverlaufs und Zeichnen eines gefüllten Rechtecks
    c.fillStyle = rad;
    c.fillRect(200,100,100,100);
}

// Eine Funktion, die alle Zeichenoperationen zusammenfasst
function drawEverything(){
    drawLines();
    drawCurves();
    drawBoxOutline(600, 300);
    drawArcFilled(800, 300);
    drawTextOutlineFilled(1000, 500);
    drawGradients();
}

// Aufrufen der Zeichenfunktion
drawEverything();
