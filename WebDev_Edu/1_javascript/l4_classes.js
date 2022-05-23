/* 
        Klassen
*/

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