//Interface

interface IEmployee {
    id: number;
    name: string;
    display(): void;
}

class Employee6 implements IEmployee {
    id: number;
    name: string;

    constructor (id: number, name: string){
        this.id=id;
        this.name=name;
    }
    display():void {
        console.log(`Id= ${this.id}, Name= ${this.name}`);
    }
}
let emp6 = new Employee6(1, "Steve");
emp6.display(); // Id= 1, Name= Steve