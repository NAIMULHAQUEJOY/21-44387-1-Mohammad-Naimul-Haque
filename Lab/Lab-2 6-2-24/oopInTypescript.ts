//oop in type script

class employee {
    id: number;
    name: string;
    constructor (id: number, name: string){
        this.id=id;
        this.name= name;
    }

    display(): void{
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

let emp1= new employee (1,"Steve"); //Creating an object
emp1.display(); //Id: 1, Name:Steve

//Access modifiers in type script
//there are 3 access modifiers, private, public, protected

class Employee1 {
    private id: number;
    private name: string;
    protected age: number;
    public isOkay: boolean;
    constructor(id: number, name: string, age: number, isOkay: boolean){
        this.id=id;
        this.name=name;
        this.age=age;
        this.isOkay=isOkay;
    }
    display(): void {
        console.log(`Id= ${this.id}, Name: ${this.name}, Age: ${this.age}, IsOkay: ${this.isOkay}`);
    }
}

let emp2= new Employee1(1,"JOY",21, true);
emp2.display(); // ID=1 NAME JOY, AGE=21, ISOKAY=true