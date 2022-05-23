/* 
        Datentypen 
*/

// Datentyp kontrollieren
function demoCheckTypes(){
    console.log("String:")
    console.log(typeof(""))

    console.log("Zahl:")
    console.log(typeof(0))

    console.log("Array:")
    console.log(typeof([]))

    console.log("Objekt:")
    console.log(typeof({}))
}





// Strings
function demoStrings(){
    let stringVorname = "Arthas";
    let stringNachname = 'Menethil';
    let stringName = `His name was ${stringVorname} ${stringNachname}.`;
    return stringName;
}

// String-Methoden
function demoStringMethods(){
    let text = "  Lorem Ipsum dolor sit amet  ";

    let length = text.length; 
    // gibt die Länge eines Strings zurück

    let indexed = text[4];
    // liefert das Zeichen an Index 4 zurück. Read-Only!

    let indexedAlt = text.charAt(4);
    // dasselbe wie text[4].

    let utf8Num = text.charCodeAt(4);
    // gibt den Unicode des indizierten Zeichens zurück.

    let substringed = text.substring(8,13); 
    // liefert neuen String beginnend mit dem angegebenen Index im ersten Parameter und
    // endend mit dem zweiten Parameter. negative Indizes werden wie 0 behandelt.

    let sliced = text.slice(8,13); 
    // wie substring(), erlaubt aber negative Indexangabe, um rückwärts zu zählen.

    let splitted = text.split(" ");
    // liefert einen ARRAY der am Parameter geteilten Substrings zurück.
    // Wird kein Parameter angegeben, wird ein 1-langer Array bestehend aus dem String zurückgeliefert.
    // Wird als Parameter "" angegeben, wird jedes Zeichen im String zu einem Element des neuen Arrays.

    let replaced = text.replace("Lorem","Bello"); 
    // liefert neuen String mit verändertem Substring. 
    // 1. Parameter: zu ersetzender Substring oder Regular Expression
    // 2. Parameter: neuer Substring
    // Achtung: Nur das erste Ergebnis ist betroffen.

    let lower = text.toLowerCase();
    // liefert neuen String in Kleinschrift.

    let upper = text.toUpperCase();
    // liefert neuen String in Großschrift.

    let concat = text.concat("----ENDE----");
    // liefert neuen String aus Verkettung des angegeben String und des ersten Parameters.
    // Funktionsgleich wie der "+"-Verkettungsoperator

    let trim = text.trim();
    // liefert neuen String, bei dem vorangehende und abgehende Whitespaces entfernt werden.

    console.log(
        `${length}\n${indexed}\n${indexedAlt}\n${utf8Num}`+
        `\n${substringed}\n${sliced}\n${splitted}\n${replaced}\n${lower}\n${upper}`+
        `\n${concat}\n${trim}\n${text}`
    )
}

// Regular Expressions
function demoRegularExpressions(){
    let pattern = /e/;

    let mods = /e/gim; 
    // g = global search:       Mehr als ein Ergebnis.
    // i = case insensitive:    ungeachtet Groß- und Kleinschreibung.
    // m = multiline:           Beachtet nicht nur die erste Zeile.

    let range = /([0-9]|[abc])/;
    // (a|b) = Entweder a oder b kommt vor
    // [0-9] = Suche eine Zahl innerhalb 0 - 9
    // [abc] = Suche nach a, b oder c

    let quantity = /h?a+l*o/;
    // + = mindestens ein Vorkommen
    // ? = kein oder genau ein Vorkommen
    // * = kein oder mehr Vorkommen

    let special = /\d\s/;
    // \d = suche nach beliebiger Ziffer
    // \s = suche nach Leerzeichen
}

// String-Suche
function demoStringSearch(){
    let text = "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet";
    
    // String-Parameter:
    let start = text.startsWith("Lo",0);
    let ends = text.endsWith("rem",5);
    let findex = text.indexOf("dolor",0); 
    let lindex = text.lastIndexOf("dolor",100);
    let includes = text.includes("do"); // gibt Bool zurück.
    
    // RegEx-Parameter:
    let search = text.search(/ol/);
    let match = text.match(/ol/); // gibt Array mit Resultat zurück.
    let replace = text.replace(/o/,"ä");

    console.log(start,ends,findex,lindex,includes,search,match,replace)

}




// Numbers
function demoNumbers(){
    let discreteNumber = 42;
    let continuousNumber = 3.14159;
    return(discreteNumber,continuousNumber)
}

// Number-Methoden
function demoNumberMethods(){
    let stringed = (5).toString();
    let exponentiate = (5).toExponential();
    let precise = (5).toPrecision(4);
    let fixed = (4.9998).toFixed(0);

    let falseNum = Number(false);
    let correctNum = Number(true);

    let FloatParse = parseFloat("2.31498")
    let IntParse = parseInt("2.31498")

    console.log(stringed,exponentiate,precise,fixed,falseNum,correctNum,FloatParse,IntParse)
}

// Math-Objekt
function demoMathObject(){
    console.log(Math.PI,Math.E) // Weitere Konstanten: SQRT2, SQRT1_2, LN2, LN10, LOG2E, LOG10E
    
    let myNumber = 5.5;

    console.log("Gerundet: " + Math.round(myNumber));
    console.log("Aufgerundet zu Ganzzahl: " + Math.ceil(myNumber));
    console.log("Abgerundet zu Ganzzahl: " + Math.floor(myNumber));
    console.log("Nur Ganzzahlanteil: " + Math.trunc(myNumber));
    
    console.log("Vorzeichen: " + Math.sign(myNumber));
    console.log("Absoluter Wert: " + Math.abs(myNumber));

    console.log("mit 2 exponiert: " + Math.pow(myNumber,2));
    console.log("Wurzel von 2: " + Math.sqrt(myNumber));

    console.log("Kleinste Zahl aus 1 - 8: " + Math.min(1,2,3,4,5,6,7,8));
    console.log("Größte Zahl aus 1 - 8: " + Math.max(1,2,3,4,5,6,7,8));

    console.log("Pseudozufallszahl 0-1: " + Math.random())


}

// Date-Objekt
function demoDateObject(){
    let zero = new Date(0); // 0 Millisekunden ab 1. Januar 1970, 00:00 UTC
    let today_time = Date.now();
    let today = new Date(); // Browserdatum und Uhrzeit
    let someday = new Date("1990-03-07T03:34:00Z"); // Kurzform für bestimmtes Datum
    console.log(zero, today_time, today, someday);
    

    // get-Methoden (analog dazu: set-Methoden)

    let t = someday.getTime(); // gibt die vergangenen Millisekunden seit Date(0) zurück
    let h = someday.getHours(); // gibt die Stunde der Uhrzeit zurück
    let m = someday.getMinutes(); 
    let s = someday.getSeconds();
    let ms = someday.getMilliseconds();

    console.log(t,h,m,s,ms)

    let dt = someday.getDate(); // gibt den Tag im Monat zurück
    let day = someday.getDay(); // gibt Wochentag als Ziffer 1-7 zurück
    let mon = someday.getMonth(); // gibt Index des Monats zurück (März -> 2)
    let yea = someday.getFullYear(); // gibt das Jahr zurück

    console.log(dt,day,mon,yea)

}




// Boolean
function demoBool(){
    let correct = true;
    let wrong = false;
}

// null, undefined und Not a Number
function demoOther(){
    let none = null; // Rückgabe, wenn Wert nicht existent.
    let what = undefined; // Rückgabe, wenn Wert noch nicht deklariert.
    let nan = NaN; // Rückgabe, wenn Wert keine Zahl darstellt.
}




// Arrays
function demoArrays(){

    let oneD = [1,2,3,"a","b","c"]; // nur eindimensioneller Array von JavaScript supportet.
    let twoD = [[1,2,3],["a,b,c"]]; // "Workaround" - Nested Arrays...
    console.log(oneD,twoD);
}

// Array-Methoden
function demoArrayMethods(){

    let myArr = ["Eins", "Zwei", "Drei", "Vier", "Fuenf", "Sechs"];

    myArr[3] = "Zweiundvierzig";
    let length = myArr.length;

    let stringed = myArr.toString();
    let joined = myArr.join("*_*");

    let popped = myArr.pop();
    let shifted = myArr.shift();

    let pushed = myArr.push("SIEBEN");
    let unshifted = myArr.unshift("NULL");

    let spliced = myArr.splice(1,3,"A","B","C");
    let sliced = myArr.slice(4,5);

    console.log(length,stringed,joined,popped,shifted,pushed,unshifted,spliced,sliced);
    
    console.log(myArr);
}




// Objects
function demoObject(){

    let someObject = {
        id:0,
        name:"something",
        method:function(){
            console.log(this.name);
        }
    };
    
    someObject.method()
}

