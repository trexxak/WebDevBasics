/* 
        Async & Await
*/


// Callbacks

/* 
    Javascript selbst ist single-threaded, das bedeutet kann nicht asynchron Code ausführen.
    Aufgrunddessen wurde vor Einführung von Promises und später des async/ await Keywords 
    mit callbacks gearbeitet. 
    
    So ist es möglich auf die Ausführung einer Funktion zu warten bis der Rest des Codes
    ausgeführt wird. Noch nicht möglich ist jedoch das simultane Ausführen von Code.

    Ein Callback stellt nichts weiter dar als eine als Argument 
    übergebene Funktion innerhalb einer anderen Funktion. 
*/

function demoCallback(){
    for (let i = 1; i < 10001; i++) {
        console.log("Tick "+i)
    }
}

function demoCall(callback){
    callback(10001) // produzierender Code - kann länger andauern
    console.log("Callbackfunktion wurde ausgeführt!") // konsumierender Code - muss warten
}

// Promises

/*
    Mit ES6, wurde durch die Promise Browser-API das asynchrone Programmieren mit
    Javascript innerhalb moderner Browser ermöglicht. 

    Vereinfacht ausgedrückt ist eine Promise ein zurückgegebenes Objekt and das callbacks
    gekoppelt wird.

    Promises können in 3 Stadien sein:
        * unfulfilled   - Versuch in Ausführung
        * resolved      - Versuch geglückt, Die Promise konnte erfüllt werden
        * rejected      - Versuch gescheitert, Die Promise konnte nicht erfüllt werden

*/

function demoSimplePromise(){

    let promise = new Promise((resolve,reject) => {
        let chance = Math.random()
        if (chance >= 0.5){
            resolve("LUCKY!")
        }
        else{
            reject("Unlucky :(")
        }
    })

    promise.then(
        (value) => {console.log(value)},
        (reason) => {console.log(reason)})

}

function demoPromise(){
    let promise = new Promise((resolve,reject) => {
        let chance = Math.random()
        if (chance >= 0.5){
            resolve("LUCKY!")
        }
        else{
            reject("Unlucky :(")
        }
    })

    promise
    .then(
        (value) => {console.log(value)})
    .catch(
        (reason) => {console.log(reason)})
    .finally(
        () => {console.log("See you around!")})
}

// Async und Await:

/*
    Mit "async" gekennzeichnete Funktionen geben immer eine Promise zurück.
    
    Das await-Schlüsselwort kann nur innerhalb asynchroner Funktionen angewandt werden.
    Dies führt dazu, dass auf die Erfüllung einer promise gewartet wird.
*/

async function demoAsync() {
    return "Hi";
}

// ist dasselbe wie:

function demoAsyncCounter(){
    return Promise.resolve("Hi");
}

async function demoAsyncPromise() {
    let promise = new Promise(function(resolve) {
      setTimeout(() => {resolve("Hi!")},2500);
    });
    
    console.log(await promise);
}