/* 
        Klassen
*/

// Klassen und Objekte

function demoClassObject(){
    

    // Objekt ohne Klasse
    let machine = {
        state: "running..."
    }

    machine.state = "shutting down."

    console.log(machine);


    
    // Objekt mit Klasse
    class Machine {
        state = "running...";
    }

    let machineFromClass = new Machine();
    machineFromClass.state = "shutting down.";

    console.log(machineFromClass);

}

// Konstruktor und Eigenschaften

function demoConstructor(){
    
    class Car {

        constructor(yr,br,mdl){
            this.year = yr;
            this.brand = br;
            this.model = mdl;
        }
    }

    let truck = new Car(2032,"Tesla","Cybertruck")
    console.log(truck)
}

// Private und Public

function demoAccess(){
    
    class Secret{
        constructor(){
            this.field = "private first."
        }
        get publicField(){return this.field}
        set publicField(x){this.field=x}
    }

    let mySecret = new Secret();

    console.log(mySecret.publicField) // get durch Aufruf
    mySecret.publicField = "public now." //set durch Zuweisung

    console.log(mySecret.publicField)
    console.log(mySecret)
}

// Methoden
function demoMethods(){
    
    class ArithmeticOperation{
        constructor(operand1,operand2){
            this.a = operand1;
            this.b = operand2;
        }
        add(){return this.a+this.b;}
        sub(){return this.a-this.b;}
        mul(){return this.a*this.b;}
        div(){return this.a/this.b;}
    }

    let operation = new ArithmeticOperation(1,8).div()

    console.log(operation)
}

// Statische Methoden und Eigenschaften

function demoStaticClass(){
    class Counter{
        static counter = 0;

        static toString(){return `Der Zähler steht auf: ${this.counter}`}
        static inc(){this.counter++}
        static dec(){this.counter--}
        static reset(){this.counter =0;}
    }

    Counter.inc()
    Counter.inc()
    Counter.inc()
    Counter.inc()
    console.log(Counter.toString())
}

// Vererbung

function demoInheritance(){

    class NPC{
        constructor(name,pos,hp,atk,def){
            this.name = name;
            this.position = pos;
            this.life = hp;
            this.attack = atk;
            this.defense = def;
        }

        defends(damage){
            let old_hp = this.life;
            let new_hp = this.life + this.defense - damage;
            this.life = this.life + this.defense - damage;
            return `${this.name} was attacked and took ${(new_hp-old_hp)*-1} damage!`
        }
    }

    let bunny = new NPC("Bunny",(5,0),20,0,1)
    console.log(bunny.defends(20));
    
    class Enemy extends NPC{
        constructor(lvl,name,pos,hp,atk,def){
            super(name,pos,hp,atk,def);
            this.level = lvl;
            this.name = `Level ${this.level} ${this.name}`;
        }
        attacks(){
            return `${this.name} attacks for ${(this.level*0.15)*this.attack} damage!`
        }
    }

    let zombie = new Enemy(5,"Zombie",(-23,0),25,20,10);
    console.log(zombie.defends(20));
    console.log(zombie.attacks())
}