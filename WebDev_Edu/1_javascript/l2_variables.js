/* 
        Variabeln 
*/

const myConstant = ""; // "const"-Variable muss initiiert werden!

let myNewVariable = "new";
var myOldVariable = "old";

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


function demoConstObjects(){
    
    const monster = {
        number:248,
        name:"Tyranitar",
        type_0:"Rock",
        type_1:"Dark"}

    monster.name="Despotar"
    
    // monster = {number:246, name:"Larvitar", type_0:"Rock", type_1:"Ground"} 
    // Produziert Fehler!

    console.log(monster)

}

function demoConstArrays(){

    const team = ["Tyranitar", "Ferrothorn", "Darmanitan"];
    team[0] = "Despotar";
    team.pop(1);

    // team = ["Larvitar", "Ferroseed", "Darumaka"]
    // Produziert Fehler!

    console.log(team)

}
