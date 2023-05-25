/* ------------------------------------------------------------------- 
  
Einführung Webentwicklung III: JavaScript Debugging und DOM-Methoden

...oder: JS - Das Hirn der Webseite

 -------------------------------------------------------------------  */

/* 
JavaScript ist, anders als eben HTML und CSS, eine Programmiersprache, und enthält also
auch die Komplexität, die man daher gewohnt ist. Der Sprache 
selbst ist deswegen auch ein ganzes Kapitel gewidmet. In dieser Lektion soll viel eher die
Besonderheit an JavaScript herausgestellt werden: 

- JavaScript wird vom Browser interpretiert.
- Resultierend: Eine Interaktion mit dem HTML-Dokument 
anhand der sogenannten DOM-Manipulationen ist möglich!

*/ 

//ALLGEMEINES:

    // Globale Variablendeklaration
var my_var = "Hello!";



    // Funktiondeklaration
function alert_function(param){
    alert(param);
}
    // alert() veranlasst den Browser den angegebenen Parameter in einem Meldungs-Popupfenster 
    // mit entsprechendem Inhalt zu öffnen.


function log_function(param){
    console.log(param);
}
    // console.log() druckt den angegebenen Parameter in der Web-Konsole.


// ZUGRIFF AUF DOM-ELEMENTE:

    // window-Objekt:
    // Bezieht sich auf das Browserfenster, und ist das Wurzelelement der DOM-Hierarchie.
window.document.getElementById("para").outerHTML="<h1>abc</h1>";

    // document-Objekt:
    // Bezieht sich auf das HTML-Dokument selbst. In den meisten Anwendungsfällen reicht es
    // dieses Element anzusteuern. Es ist Kind des window-Objekts.
    // window.document und document liefern so dasselbe Ergebnis.

document.getElementById("para2").innerHTML="abc"; 
    // die "getElementById"-Methode, gibt das erste DOM-Element mit der als String-Parameter 
    // angegebenen "id"-property zurück. Respektiv liefert "getElementByName" das erste 
    // DOM-Element mit dem angegebenen "name"-property zurück.

document.querySelector("#para3").textContent=my_var;
    // die "querySelector"-Methode, gibt das erste DOM-Element mit dem als String-Parameter 
    // angegebenen css-Selektor zurück. Um alle gültigen DOM-Elemente zurückzugeben muss 
    // die "querySelectorAll"-Methode gewählt werden.

document.querySelector("#para3").style="color:white;background-color:purple";
document.querySelector("#para3").id="id_set_by_javascript";
    // die Eigenschaften des selektierten DOM-Elements entsprechen denen des
    // HTML-Elements, und können somit per JavaScript neu definiert werden.

let btns = document.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].style="width:256px;height:256px;";    
}

let blue_btns = document.getElementsByClassName("blue");
for (let i = 0; i < blue_btns.length; i++) {
    blue_btns[i].style.backgroundColor="lightblue";
}
    // die Methoden "getElementsByTagName" und "getElementsByClassName" geben alle DOM-Elemente
    // des angegebenen Element-Typs respektiv der angegeben Klasse zurück.


// EVENTS UND EVENT-LISTENER

document.getElementById("button4").addEventListener("mouseleave", e => alert_function(e));
    // Ein Event ist ein durch den Benutzer hervorgerufenes Ereignis. Durch Event-Listener
    // können solche Ereignisse abgefangen werden.

    // Ein Event-Listener liefert ein Event-Objekt zurück. Dieses Objekt und seine Eigenschaften,
    // können dann folgend weiterverwertet werden. In diesem Beispiel verwenden wir eine 
    // Arrow-Funktion, um das Rückgabe-Objekt in ein Meldungsfenster zu schreiben.

document.getElementById("button4").addEventListener("mouseenter", e => log_function(e));
    // Loggen wir das Event, so können wir uns das Event und seine Eigenschaften im Einzelnen 
    // durch Einsatz der Entwicklertools (F12) genauer anschauen.

document.getElementById("button1").addEventListener("mousemove", function(e) {
    document.getElementById("button1").innerHTML = `${e.x}, ${e.y}`;
});
    // Um einen String interpolierbar zu machen, muss streng darauf geachtet werden
    // den gewünschten String mit "Backticks" zu markieren. Auf einer deutschen Tastatur:
    // Umschalt + Accent.

    // In diesem Beispiel soll die X und Y-Koordinate der Maus bei Mausbewegung innerhalb der
    // Element-Tags des Buttons geschrieben werden.

document.getElementById("button1").addEventListener("click", function(e) {
    let new_li = document.createElement("li");
    new_li.innerHTML = `${e.x}, ${e.y}`;
    document.getElementById("list").appendChild(new_li);
});

    // In diesem Beispiel initiieren wir ein neues "li"-Element, weisen ihm die Mauskoordinaten
    // zu und fügen es als Kindelement schlussendlich dem Listen-Element hinzu.

    // WICHTIG: Elternlose Elemente werden im HTML-Dokument nicht angezeigt! Die Assoziation
    // mit einem Elternelement via "appendChild" ist also essentiell!

/* JavaScript-Frameworks:
        JQUERY - Schnellzugriff auf DOM-Funktionen:
        
            jquery benutzt CSS-Selektoren, um durch die einprägsame CSS-Syntax durch das Dokument zu
            navigieren.

                Dokumentation:

                    https://api.jquery.com/category/manipulation/

                Content Delivery Network - Links:

                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
*/