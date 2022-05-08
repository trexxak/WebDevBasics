// callbacks: Als Argument übergebene Funktionen in Funktionen:

function callerFunction(callback){
    setInterval(callback,1000)
    setInterval(function (){document.getElementById("ausgabe").innerHTML="Es beginnt...";},2000)
}

function callbackFunction(){
    document.getElementById("ausgabe").innerHTML="...und schon vorbei.";
}

// callerFunction(callbackFunction);


//Promise: Ein Objekt, dass sowohl Caller als auch Callback beinhaltet:

function promise(){
    const Versprechen = new Promise(function(resolve,reject){
        setTimeout(function() {resolve("Hi!");reject("Bye!")},4000);
    });
    
    Versprechen.then(function(wert){
        document.getElementById("ausgabe").innerHTML = wert;
    });
}

// promise()


// Async und Await:

// async Funktionen sind nichts weiter als Funktionen, die eine promise zurückgeben:

async function asyncFunction_1() {
    return "Hi";
}

//dasselbe:

function asyncFunction_2(){
    return Promise.resolve("Hi");
}


// Das await-Schlüsselwort kann nur innerhalb asynchroner Funktionen angewandt werden.
// Es führt dazu, dass auf eine bestimmte promise gewartet wird:


async function await_promise() {
    let Versprechen = new Promise(function(resolve) {
      setTimeout(function() {resolve("Hi!");},4000);
    });
    
    document.getElementById("ausgabe").innerHTML = await Versprechen;
}
  
await_promise()



// Zum Vergleich die Syntax unserer ursprünglichen promise:

// function promise(){
//     const Versprechen = new Promise(function(resolve,reject){
//         setTimeout(function() {resolve("Hi!");reject("Bye!")},4000);
//     });
    
//     Versprechen.then(function(wert){
//         document.getElementById("ausgabe").innerHTML = wert;
//     });
// }