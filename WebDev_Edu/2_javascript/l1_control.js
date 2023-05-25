/*
        Funktionen
*/

function demoFunction(parameter1="default",parameter2=1){
    let result = parameter1+parameter2;
    return result;
    console.log("this will never be executed");
}
// console.log(demoFunction); // Referenz: Die Funktion als solche wird ausgegeben.
// console.log(demoFunction()); // Aufruf: Die Funktion wird aufgerufen, der Rückgabewert ausgegeben.

let demoArrowFunction = (param1="default",param2=1) => param1+param2; // funktionsgleich demoFunction()
// console.log(demoArrowFunction())


/* 
        Konditionen
*/

function demoIf(){

    let arr = [0,1,2]
    
    if (arr[0]>arr[1]){
        console.log("do something")
    }
    else if(arr[2]>arr[0]){
        console.log("do something else")
    }
    else{
        console.log("relax, don't do it")
    }
}

function demoSwitch(){

    let num = 3;

    switch (num) {
        case 3:
            console.log("do something")
            break;
        case 4:
        case 5:
            console.log("do something else")
            break;
        default:
            console.log("relax, don't do it")
            break;
    }
}


/*
        Schleifen
*/

function demoWhile(){
    counter = 0;
    while (counter < 10) {
        console.log("A!");
        counter ++;
    }
}

function demoFor(){

    for (let i = 0; i < 30; i++) {
        console.log(i)
    }

}

function demoForEach(){

    [1,2,4,6,8].forEach(el => {
        console.log(el)
    });

}

function demoForIn(){

    const object = {id:0,name:"object_0",description:"dummy object"}
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            console.log(object[key])
        }
    }

}

function demoForOf(){
    // For Each, quasi
    object = "Lorem Ipsum"
    for (const iterator of object) {
        console.log(iterator)
    }

}

/*
        Error Handling
*/

function demoErrorHandling(){
    let x = -4;
    let y = 0;

    try {
        console.log(x/y)
    } catch (error) {
        throw("\n\nFolgender Fehler ist aufgetreten:\n\n" + error)
    } finally{
        console.log("ends.")
    }

}

// function simpleCesar(stringToEncode="Bello bellt!",shift=1){
//     let new_string = ""
//     for (const iterator of string) {
//         new_string += String.fromCharCode(iterator.charCodeAt(0)+shift);
//     }
//     console.log(new_string)
// }