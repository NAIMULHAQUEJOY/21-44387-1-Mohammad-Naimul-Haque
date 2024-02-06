//oop in type script
var employee = /** @class */ (function () {
    function employee(id, name) {
        this.id = id;
        this.name = name;
    }
    employee.prototype.display = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return employee;
}());
var emp1 = new employee(1, "Steve"); //Creating an object
emp1.display(); //Id: 1, Name:Steve
//Access modifiers in type script
//there are 3 access modifiers, private, public, protected
var Employee1 = /** @class */ (function () {
    function Employee1(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee1.prototype.display = function () {
        console.log("Id= ".concat(this.id, ", Name: ").concat(this.name, ", Age: ").concat(this.age, ", IsOkay: ").concat(this.isOkay));
    };
    return Employee1;
}());
var emp2 = new Employee1(1, "JOY", 21, true);
emp2.display(); // ID=1 NAME JOY, AGE=21, ISOKAY=true
