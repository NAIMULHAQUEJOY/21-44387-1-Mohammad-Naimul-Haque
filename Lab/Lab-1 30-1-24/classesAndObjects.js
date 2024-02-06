class Person{
    
    constructor(name, age){
    this.name = name;
    this.age = age;
    
    }
    speak(){
        console.log(`Hello!My name is ${this.name}`);
    }
}

const john= new Person(`John`,20);
john.speak();

// Class Inheritance
class Student extends Person {
    constructor(name, age, grade) {
    super (name, age);
    this.grade=grade;
    }
    study() {
         console.log(`${this.name}` `s grade is ${this.grade}.`);
    }
    }
    const alice = new Student('Alice', 22, 95);
    alice.speak(); 
    alice.study(); // Hello! My name is Alice. alice.study(); // Alice 's grade is 95.

    //Object Methods: Object.keys, Object.values, Object.entries - these methods allow you to work with object keys, values, and entries.


    console.log( Object.keys(alice)); // ['name', 'age', 'grade']
    console.log( Object.values(alice)); // ['Alice', 22, 95]
    console.log( Object.entries(alice)); // [['name', 'Alice'], ['age', 22], ['grade', 95]]