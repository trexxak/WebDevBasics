// TO-DO: KOMMENTIEREN UND ORDNEN!!!

const a = 2;
const b = 1;
let c = a * b;

const my_object = {
    id:0,
    name:"Der Erste",
    content:"Nicht viel."
}

const my_object_2 = {
    id:1,
    name:"Der Zweite",
    content:"Etwas mehr."
}

let my_objects = [my_object,my_object_2]


function my_function(param1,param2){
    return `first Parameter: ${param1}, Second Parameter: ${param2}`;
}

function object_loops(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            alert(element)
        }
    }
}

function array_loops(array){
    array.forEach(element => 
        object_loops(element)
    )
}

// array_loops(my_objects)


class MyClass {
    counter = 0
    constructor(param1,param2){
        this.private_field = "Irgendwas."
        this.param1 = param1;
        this.param2 = param2;
    }

    static static_method(){
        counter++;
        return 'counter increased by one: ' +counter;
    }

    my_method(){
        return `first Parameter: ${param1}, Second Parameter: ${param2}`;
    }

    get public_field(){
        return private_field;
    }
    
    set public_field(x){
        private_field = x;
    }
}

class MyChild extends MyClass(){
    constructor(param1, param2, param3){
        super(param1,param2);
        this.param3 = param3;
    }
}