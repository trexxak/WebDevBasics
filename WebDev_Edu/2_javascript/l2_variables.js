/* 
        Variabeln 
*/

const myConstant = "const"; // "const"-Variable muss initiiert werden!

// "const"-Variablen sind nicht echte Konstanten,
// viel eher ist ihre Verwendung der von Konstanten ähnlich. Anders als Konstanten jedoch,
// lässt ein mit "const" bestimmtes Objekt oder Array aber die Veränderung der Eigenschaften
// respektiv Elemente zu. Nur moderne Browser.

let myNewVariable = "new";

// "let"-Variabeln sind anders als die älteren "var"-Variabeln nicht redeklarierbar, und 
// erlauben neben globaler- und Funktions-Ebene anders als "var" auch Block-Ebenen.
// Nur moderne Browser.


var myOldVariable = "old";

// "var"-Variabeln waren bis 2015 die einzige Form der Variabeln in JavaScript. 
// Falls für ältere Browser entwickelt wird, sollte mit "var" gearbeitet werden.
// In allen anderen Fällen, sollte die neueren "let"-Variabeln verwendet werden.

function demoRedeclaration(){

    var x = 0;
    var x = 1;
    x = 2;

    let y = 0;
    y = 1;
    // let y = 2;   // produziert Fehler! "let"-Variable kann NICHT redeklariert werden!

    const z = 0;
    // z = 1;       // produziert Fehler! "const"-Variable kann NICHT neu belegt werden!
    // const z= 2;  // produziert Fehler! "const"-Variable kann NICHT redeklariert werden!

    console.log(x,y,z)
}

function demoBlockScope(){

    {
        const blockScopeConst = 1;
        let blockScopeLet = 2;
        var blockScopeVar = 3;
    }

    console.log(blockScopeConst); // produziert Fehler: "const"-Variable nur im zugehörigen Block verwendbar!
    // console.log(blockScopeLet); // produziert Fehler: "let"-Variable nur im zugehörigen Block verwendbar!
    console.log(blockScopeVar);

}

function demoHoisting(){

    // hoistConst = "='("; // Produziert Fehler!
    // const hoistConst;

    // hoistLet = "=("; // Produziert Fehler!
    // let hoistLet;

    hoistVar = "=)";
    var hoistVar;

    console.log(hoistVar)
}
