// ------------------------------------------------------------------- 
//    
// Einführung Webentwicklung III: JavaScript Debugging und DOM-Methoden
//
// ...oder: JS - Das Hirn der Webseite
//
// -------------------------------------------------------------------  

var my_var = "Hello!"

document.getElementById("para").outerHTML="<h1>abc</h1>";
document.getElementById("para2").innerHTML="abc";
document.querySelector("#para3").textContent=my_var;
document.querySelector("#para3").style="color:white;background-color:purple";

document.getElementById("button1").style="width:512px;height:512px;"
document.getElementById("button1").addEventListener("mousemove", function(e) {
    document.getElementById("button1").innerHTML = `${e.x}, ${e.y}`
})

document.getElementById("button1").addEventListener("click", function(e) {
    console.log(e)
    var new_li = document.createElement("li")
    new_li.innerHTML = `${e.x}, ${e.y}`
    document.getElementById("list").appendChild(new_li)
})



